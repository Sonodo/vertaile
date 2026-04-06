import type { Metadata } from 'next';
import { Suspense } from 'react';
import { SITE_URL } from '@/lib/constants';
import SearchClient from './SearchClient';

export const metadata: Metadata = {
  title: 'Haku',
  description: 'Hae ja vertaa palveluita — sähkö, lainat, vakuutukset, asunnot ja muut.',
  alternates: { canonical: `${SITE_URL}/haku` },
};

export default function HakuPage() {
  return (
    <Suspense fallback={<div className="flex min-h-[60vh] items-center justify-center"><div className="animate-shimmer h-8 w-48 rounded-lg" /></div>}>
      <SearchClient />
    </Suspense>
  );
}
