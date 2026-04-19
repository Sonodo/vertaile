/**
 * Analytics wrapper for GA4 custom events.
 *
 * All functions are no-ops in SSR / when gtag is unavailable (e.g. consent
 * denied, ad-blocker, GA not yet loaded). Never throws.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Generic gtag event wrapper. Safe to call from any render path. */
export function trackEvent(name: string, params?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', name, params ?? {});
}

/** Fires when a hub visitor clicks through to a spoke site. */
export function trackOutboundSpokeClick(spoke: string, href: string): void {
  trackEvent('outbound_spoke_click', {
    spoke,
    href,
    link_domain: safeHostname(href),
  });
}

/** Fires when a lead form completes (newsletter, hintavahti, etc.). */
export function trackLead(source: string, params?: Record<string, unknown>): void {
  trackEvent('lead', {
    source,
    ...(params ?? {}),
  });
}

/** Fires when a user begins a comparison flow. */
export function trackBeginCompare(vertical: string): void {
  trackEvent('begin_compare', { vertical });
}

function safeHostname(href: string): string | undefined {
  try {
    return new URL(href).hostname;
  } catch {
    return undefined;
  }
}
