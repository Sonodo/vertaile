import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, SITE_TAGLINE } from '@/lib/constants';
import HeroSection from '@/components/home/HeroSection';
import VerticalCardsGrid from '@/components/home/VerticalCardsGrid';
import LifeEventsCTA from '@/components/home/LifeEventsCTA';
import HowItWorks from '@/components/home/HowItWorks';
import TrustIndicators from '@/components/home/TrustIndicators';
import LatestBlogPosts from '@/components/home/LatestBlogPosts';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: `${SITE_NAME} — ${SITE_TAGLINE}`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website',
    locale: 'fi_FI',
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VerticalCardsGrid />
      <TrustIndicators />
      <LifeEventsCTA />
      <HowItWorks />
      <LatestBlogPosts />
      <CTABanner />
    </>
  );
}
