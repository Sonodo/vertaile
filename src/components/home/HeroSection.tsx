import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0B1F3F] to-[#1A3A6B] text-white">
      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0891B2]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#F59E0B]" />
            Suomen monipuolisin vertailupalvelu
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Vertaa kaikkea{' '}
            <span className="bg-gradient-to-r from-[#22D3EE] to-[#0891B2] bg-clip-text text-transparent">
              yhdestä paikasta
            </span>
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Sähkösopimukset, lainat, vakuutukset, asunnot ja paljon muuta.
            Löydä parhaat tarjoukset ja säästä rahaa — aina ilmaiseksi ja puolueettomasti.
          </p>
        </div>
      </div>
    </section>
  );
}
