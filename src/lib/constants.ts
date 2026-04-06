import type { NavigationItem, BlogCategory } from '@/types';

export const SITE_NAME = 'Valitse';
export const SITE_URL = 'https://valitse.fi';
export const SITE_DESCRIPTION = 'Suomen kattavin vertailupalvelu. Vertaa sähköä, lainoja, vakuutuksia, asuntoja, kotipalveluita ja tarjouksia yhdestä paikasta — Valitse paras.';
export const SITE_TAGLINE = 'Vertaa kaikkea yhdestä paikasta';

export const COLORS = {
  primary: '#0B1F3F',
  primaryLight: '#1A3A6B',
  accent: '#0891B2',
  accentLight: '#22D3EE',
  highlight: '#F59E0B',
  highlightLight: '#FBBF24',
  background: '#F8FAFC',
  foreground: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  success: '#059669',
  error: '#DC2626',
} as const;

export const NAVIGATION: NavigationItem[] = [
  { label: 'Palvelut', href: '/palvelut', description: 'Kaikki vertailupalvelumme', hasDropdown: true },
  { label: 'Elämäntapahtumat', href: '/elamanmuutokset', description: 'Suuri muutos edessä?' },
  { label: 'Blogi', href: '/blogi', description: 'Ajankohtaista ja vinkkejä' },
  { label: 'Tietoa', href: '/tietoa', description: 'Tietoa Valitsesta' },
];

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: 'kaikki', label: 'Kaikki' },
  { id: 'asuminen', label: 'Asuminen' },
  { id: 'energia', label: 'Energia' },
  { id: 'talous', label: 'Talous' },
  { id: 'vakuutukset', label: 'Vakuutukset' },
  { id: 'vinkit', label: 'Vinkit' },
  { id: 'elamanmuutokset', label: 'Elämäntapahtumat' },
];
