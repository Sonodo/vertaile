import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Compass, CheckCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';
import { lifeEvents } from '@/data/life-events';
import { generateBreadcrumbSchema } from '@/lib/seo';
import SpokeIcon from '@/components/ui/SpokeIcon';

export const metadata: Metadata = {
  title: 'Elamanmuutokset',
  description:
    'Suuri muutos edessä? Valitse opastaa sinut läpi kaikki tarvittavat palvelut — muutto, ensiasunto, perheenlisäys ja muut elämäntapahtumat.',
  alternates: { canonical: `${SITE_URL}/elamanmuutokset` },
};

export default function ElamanmuutoksetPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Elamanmuutokset' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8" aria-label="Murupolku">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link href="/" className="transition-colors hover:text-[#0891B2]">
              Etusivu
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-slate-900">Elamanmuutokset</li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#0891B2]/10 p-3">
            <Compass className="h-8 w-8 text-[#0891B2]" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Elamanmuutokset
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            Suuri muutos edessä? Valitse opastaa sinut läpi kaikki tarvittavat palvelut.
            Valitse elämäntapahtuma ja seuraa vaiheittaista opasta.
          </p>
        </div>
      </section>

      {/* Life events grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lifeEvents.map((event) => (
            <Link
              key={event.id}
              href={`/elamanmuutokset/${event.slug}`}
              className="card-hover-lift group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: event.colorLight }}
              >
                <SpokeIcon iconName={event.iconName} className="h-7 w-7" style={{ color: event.color }} />
              </div>

              {/* Content */}
              <h2 className="text-xl font-bold text-slate-900">{event.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {event.description}
              </p>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {event.relatedSpokeIds.length} palvelua
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold text-[#0891B2] transition-colors group-hover:text-[#0891B2]/80">
                  Aloita
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* How it works explanation */}
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Miten elämäntapahtumat toimivat?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Jokainen elämäntapahtuma kokoaa yhteen kaikki tarvittavat vertailut ja palvelut.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2]/10">
                <span className="text-lg font-bold text-[#0891B2]">1</span>
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Valitse tapahtuma</h3>
              <p className="mt-2 text-sm text-slate-600">
                Valitse elämäntilannettasi vastaava tapahtuma — muutto, ensiasunto, perheenlisäys tai muu.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2]/10">
                <span className="text-lg font-bold text-[#0891B2]">2</span>
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Seuraa opasta</h3>
              <p className="mt-2 text-sm text-slate-600">
                Käy läpi vaiheittainen opas, joka ohjaa sinut oikeisiin vertailupalveluihin oikeassa järjestyksessä.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0891B2]/10">
                <CheckCircle className="h-6 w-6 text-[#0891B2]" />
              </div>
              <h3 className="mt-4 font-bold text-slate-900">Hoida kaikki kerralla</h3>
              <p className="mt-2 text-sm text-slate-600">
                Vertaile ja valitse parhaat palvelut — sähkö, vakuutukset, lainat ja muut — yhdestä paikasta.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
