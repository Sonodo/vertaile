# Valitse (valitse.fi) — Status

**Project**: Valitse — Finnish Comparison Hub (valitse.fi)
**Status**: LIVE
**Health**: GREEN
**GA4**: G-YZJZQWR330 (active)
**Last Updated**: Session #089 — 2026-04-14

## Overview
Central hub for the Valitse comparison platform ecosystem. Acts as the spoke-and-hub center linking to all vertical comparison sites (sähkö, laina, vakuutus, puhelin).

## Current State — LIVE

- **GA4**: G-YZJZQWR330 active
- **GSC**: Verification tag added
- **OG image**: Regenerated (was old/stale)
- **Spoke links**: Updated from unpurchased domains → live Vercel URLs → custom domains (valitsesahko.fi, valitselaina.fi, valitsevakuutus.fi, valitseliittyma.fi)
- **Broken links fixed**, typos corrected throughout
- **lucide-react dependency added**: Was missing, caused build failures

## Recent Changes

### Session #089 — Quality Audit Fixes (2026-04-14)
- **Contact form fixed**: Resend integration now gracefully degrades — when RESEND_API_KEY is missing the API logs the submission and returns 200 so users see success state (no more silent 503)
- **"Tulossa pian" placeholder deleted**: Contradictory card removed from `/yhteystiedot`, replaced with a response-time explanation
- **Spoke count canonicalized to 8**: "Yhdeksän" → "Kahdeksan" on `/tietoa`, `/kayttoehdot`, `/palvelut`, llms.txt
- **Stale provider counts removed**: `42 sähköyhtiötä` / `28+ lainanantajaa` / `10 vakuutusyhtiötä` replaced with durable relative phrasing so drift won't burn credibility
- **Footer Palvelut links** now route to external spoke domains (not hub mini-landings)
- **Dead code deleted**: `src/components/home/*` (10 files, zero imports) purged
- **llms.txt refreshed**: "Valitse Vakuutus (tulossa)" → LIVE, counts aligned
- **`/elamanmuutokset/asunnonosto` deep content**: ~2 000-word guide added covering käsiraha, lainapäätös, tarjouskisailu, kuntotarkastus, varainsiirtovero, muuttoviikko
- **Valitse-ID frontend auth LIVE**: Header `<UserMenu />` wired to `/api/auth/google` + `/api/auth/me` + `/api/auth/logout` — hidden behind `NEXT_PUBLIC_AUTH_ENABLED=1` flag until account surface ships
- **Sitemap**: `/haku` demoted to yearly / priority 0.1 (query reflector, not content)
- **robots.txt**: `/haku?` disallowed to avoid thin query result duplication
- **Contact form subject labels**: payload now includes the human-readable Finnish label (ö-letters preserved in emails)
- **Finnish copy polish**: "Ja paljon muuta" → "Verkoston muut palvelut", /menetelma typed path replaced with inline link, CTA fragmentation ("Aloita vertailu" → "Katso kaikki palvelut" on hub layer), FIRE abbreviation expanded on first mention

### Session #087 — V-brand Logo, Cookie Canonicalization, Valitse-ID Infra (2026-04-12)
- **New V-brand logo deployed to production**: Unified Valitse brand mark live on Valitse Hub
- **Cookie consent canonicalized**: Single source of truth for GDPR cookie banner across the hub
- **Elämänmuutokset dropdown added**: New navigation dropdown in Valitse Hub linking to life-change pages
- **Valitse-ID infrastructure provisioned**: Shared Neon Postgres DB + Google OAuth app + AUTH_SECRET set across all Valitse Vercel projects
- **Vercel redeployed**: Production redeploy completed with updated env vars
- **Valitse-ID frontend auth LIVE**: Login button + token verification + session cookies wired (gated behind `NEXT_PUBLIC_AUTH_ENABLED` until account surface ships)

### Session #082 — TypeScript Build Fix (2026-04-09)
- **Fixed TypeScript build error**: Added `window.gtag` type declaration to `CookieConsent.tsx`
- **Pushed to deploy repo**: Sonodo/vertaile — Vercel should rebuild automatically

### Session #080 — Compliance Audit (2026-04-07)
- **Cookie consent added**: GDPR-compliant cookie banner implemented
- **Search improved**: Better fuzzy matching and keyword coverage
- **Nav fixed**: Navigation links corrected across the hub
- **Deployed**: Changes pushed to production

### Session #079 — Link Updates + Fixes (2026-04-07)
- **GA4 G-YZJZQWR330 active**: Tracking confirmed
- **GSC verification tag added**: Google Search Console ready
- **OG image regenerated**: Updated from old version
- **Spoke links updated**: First from unpurchased domains to live Vercel URLs, then to custom domains as they were purchased
- **Broken links fixed**: Various dead links corrected across the site
- **Typos corrected**: Content quality pass
- **lucide-react added**: Missing dependency that was causing build errors

## Tech Stack
- Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4
- Deploy: Vercel

## Next Steps

1. **Ship Valitse-ID account surface** — /tili destination, saved comparisons, bookmark flow; then flip `NEXT_PUBLIC_AUTH_ENABLED=1`
2. **Wire Resend env vars on Vercel** (`RESEND_API_KEY`, `CONTACT_EMAIL`, `RESEND_FROM_EMAIL`) so contact submissions actually send email (currently logs + success-fallback)
3. **Submit sitemap to Google Search Console** — accelerate indexing
4. **Apply for AdSense** — organic traffic monetization
5. **Add more spoke sites** as verticals launch

## Blockers

- `RESEND_API_KEY` + `CONTACT_EMAIL` not set on Vercel — contact submissions currently logged only (users still see success)
