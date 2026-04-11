import Link from 'next/link';
import { Sparkles, ArrowRight, Layers, ShieldCheck, Users } from 'lucide-react';
import WaveDivider from '@/components/WaveDivider';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 sm:py-32 lg:py-40">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light" />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-80 h-80 bg-accent-400/20 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-sm px-5 py-2 text-sm font-medium text-slate-200">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-400" />
            </span>
            Suomen kattavin vertailupalvelu
          </div>

          {/* H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Vertaa ja säästä.
            <br />
            <span className="bg-gradient-to-r from-accent-400 to-accent-200 bg-clip-text text-transparent">
              Kaikki yhdestä paikasta.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed">
            Sähkösopimukset, lainat, vakuutukset, liittymät ja paljon muuta.
            Löydä parhaat tarjoukset ja säästä rahaa — aina ilmaiseksi ja puolueettomasti.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/palvelut"
              className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-accent/30 hover:bg-accent-600 hover:shadow-xl transition-all min-h-[44px]"
            >
              Aloita vertailu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/tietoa"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/10 transition-all min-h-[44px]"
            >
              Miten se toimii?
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-2 text-slate-300">
              <Layers className="w-5 h-5 text-accent-400" />
              <span className="text-sm"><strong className="text-white">8+</strong> palvelua</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Users className="w-5 h-5 text-accent-400" />
              <span className="text-sm"><strong className="text-white">50+</strong> tarjoajaa</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-5 h-5 text-accent-400" />
              <span className="text-sm"><strong className="text-white">100%</strong> ilmainen</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Sparkles className="w-5 h-5 text-accent-400" />
              <span className="text-sm"><strong className="text-white">Aina</strong> ilmainen</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveDivider color="#F8FAFC" />
      </div>
    </section>
  );
}
