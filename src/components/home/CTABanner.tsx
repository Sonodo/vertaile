import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#0891B2] to-[#0B1F3F] px-8 py-12 text-center sm:px-12 sm:py-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Aloita vertailu nyt
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Löydä parhaat tarjoukset ja säästä rahaa — aina ilmaiseksi.
        </p>
        <Link
          href="/palvelut"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-base font-semibold text-[#0B1F3F] shadow-lg transition-all hover:bg-white/90 hover:shadow-xl"
        >
          Tutustu palveluihin
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
