import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
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

    // If RESEND_API_KEY is configured, send email
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
          subject: `[Valitse] ${body.subject}: ${body.name}`,
          html: `
            <h2>Uusi yhteydenotto</h2>
            <p><strong>Nimi:</strong> ${escapeHtml(body.name)}</p>
            <p><strong>Sähköposti:</strong> ${escapeHtml(body.email)}</p>
            <p><strong>Aihe:</strong> ${escapeHtml(body.subject)}</p>
            <hr />
            <p>${escapeHtml(body.message).replace(/\n/g, '<br />')}</p>
          `,
        }),
      });

      if (!res.ok) {
        console.error('Resend API error:', await res.text());
        return NextResponse.json(
          { error: 'Viestin lähetys epäonnistui. Yritä myöhemmin uudelleen.' },
          { status: 500 }
        );
      }
    } else {
      // No email service configured — reject the submission
      return NextResponse.json(
        { success: false, error: 'Yhteydenottolomake ei ole tällä hetkellä käytössä.' },
        { status: 503 }
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
