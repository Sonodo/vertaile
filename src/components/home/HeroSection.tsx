'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      router.push(`/haku?q=${encodeURIComponent(trimmed)}`);
    } else {
      router.push('/haku');
    }
  }

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

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#F59E0B]" />
            Suomen kattavin vertailupalvelu
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

          {/* Search bar */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-xl items-center gap-0 overflow-hidden rounded-2xl bg-white shadow-xl shadow-black/20 ring-1 ring-white/20"
          >
            <div className="flex flex-1 items-center gap-3 px-5 py-4">
              <Search className="h-5 w-5 shrink-0 text-slate-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Mitä haluat vertailla?"
                className="w-full bg-transparent text-base text-slate-900 placeholder-slate-400 outline-none"
                aria-label="Hakukenttä"
              />
            </div>
            <button
              type="submit"
              className="shrink-0 bg-[#0891B2] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0891B2]/90 sm:px-8 sm:text-base"
            >
              Aloita vertailu
            </button>
          </form>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              8+ palvelua
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              100% puolueeton
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Aina ilmainen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
