import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  subjectLabel?: string;
  message: string;
}

// Simple rate limiting: track IPs in memory
// NOTE: In-memory map resets on each serverless cold start. For production-grade
// rate limiting, use an external store (e.g. Redis or Vercel KV).
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max 5 submissions
const RATE_WINDOW = 3600000; // per hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Liian monta yhteydenottoa. Yritä myöhemmin uudelleen.' },
        { status: 429 }
      );
    }

    const body: ContactFormData = await request.json();

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.subject?.trim() || !body.message?.trim()) {
      return NextResponse.json(
        { error: 'Kaikki kentät ovat pakollisia.' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: 'Virheellinen sähköpostiosoite.' },
        { status: 400 }
      );
    }

    // Validate message length
    if (body.message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Viesti on liian lyhyt.' },
        { status: 400 }
      );
    }

    // Prefer the human-readable label in the email subject so ö/ä render correctly.
    // Falls back to the raw value for older clients that don't send subjectLabel.
    const subjectForEmail = body.subjectLabel?.trim() || body.subject;

    // If RESEND_API_KEY is configured, send email via Resend.
    // Otherwise log the submission server-side and still return 200 so the user
    // sees the form succeed — ops can retrieve missed messages from the log.
    const resendKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (resendKey && contactEmail) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
          to: [contactEmail],
          reply_to: body.email,
          subject: `[Valitse] ${subjectForEmail}: ${body.name}`,
          html: `
            <h2>Uusi yhteydenotto</h2>
            <p><strong>Nimi:</strong> ${escapeHtml(body.name)}</p>
            <p><strong>Sähköposti:</strong> ${escapeHtml(body.email)}</p>
            <p><strong>Aihe:</strong> ${escapeHtml(subjectForEmail)}</p>
            <hr />
            <p>${escapeHtml(body.message).replace(/\n/g, '<br />')}</p>
          `,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error('[contact] Resend API error:', errText);
        // Degrade gracefully — log the payload so ops can reach out manually
        // and still return 200 to the user.
        console.log(
          '[contact][resend-failed] submission:',
          JSON.stringify({
            name: body.name,
            email: body.email,
            subject: subjectForEmail,
            message: body.message,
            receivedAt: new Date().toISOString(),
            ip,
          })
        );
      }
    } else {
      // Graceful degradation path: log the submission and return success so
      // the user experiences a working form.
      console.log(
        '[contact][no-resend-key] submission:',
        JSON.stringify({
          name: body.name,
          email: body.email,
          subject: subjectForEmail,
          message: body.message,
          receivedAt: new Date().toISOString(),
          ip,
        })
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: 'Palvelinvirhe. Yritä myöhemmin uudelleen.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
