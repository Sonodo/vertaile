import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative bg-navy py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Accent glow orb */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Aloita vertailu nyt
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
          Löydä parhaat tarjoukset ja säästä rahaa — aina ilmaiseksi ja puolueettomasti.
        </p>
        <Link
          href="/palvelut"
          className="mt-8 inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-accent/30 hover:bg-accent-600 hover:shadow-xl transition-all min-h-[44px]"
        >
          Tutustu palveluihin
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
