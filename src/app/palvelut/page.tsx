import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, ExternalLink, Clock } from 'lucide-react';
import { spokes } from '@/data/spokes';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import SpokeIcon from '@/components/ui/SpokeIcon';
import Badge from '@/components/ui/Badge';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: `Kaikki palvelut — ${SITE_NAME}`,
  description:
    'Tutustu Valitseen kaikkiin vertailupalveluihin. Vertaa sähköä, lainoja, vakuutuksia, asuntoja, kotipalveluita, tarjouksia ja talouden seurantaa.',
  alternates: { canonical: `${SITE_URL}/palvelut` },
};

export default function PalvelutPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Palvelut', url: '/palvelut' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Palvelut' }]} />

        {/* Hero */}
        <section className="mb-12 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1F3F] sm:text-4xl lg:text-5xl">
            Kaikki palvelumme
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Valitse tarjoaa kahdeksan erikoistunutta vertailupalvelua, jotka
            kattavat suomalaisen arjen tärkeimmät osa-alueet. Yhtenäinen
            järjestelyperuste kaikille — järjestys perustuu hintaan ja
            ominaisuuksiin.
          </p>
        </section>

        {/* Spoke Cards Grid */}
        <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {spokes.map((spoke) => (
            <article
              key={spoke.id}
              className="card-hover-lift relative overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              {/* Color accent left border */}
              <div
                className="absolute inset-y-0 left-0 w-1"
                style={{ backgroundColor: spoke.color }}
              />

              <div className="p-6 pl-7 sm:p-8 sm:pl-9">
                {/* Header */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: spoke.colorLight }}
                    >
                      <SpokeIcon iconName={spoke.iconName} style={{ color: spoke.color }} size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-[#0B1F3F]">{spoke.name}</h2>
                      <span className="text-sm text-slate-500">{spoke.verticalFi}</span>
                    </div>
                  </div>
                  {spoke.status === 'coming-soon' && (
                    <Badge variant="warning">
                      <Clock className="h-3 w-3" />
                      Tulossa pian
                    </Badge>
                  )}
                  {spoke.status === 'beta' && (
                    <Badge variant="warning">Beta</Badge>
                  )}
                </div>

                {/* Description */}
                <p className="mb-5 text-sm leading-relaxed text-slate-600">
                  {spoke.longDescription}
                </p>

                {/* Features */}
                <ul className="mb-5 grid grid-cols-1 gap-x-4 gap-y-1.5 sm:grid-cols-2">
                  {spoke.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: spoke.color }}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats */}
                {spoke.stats && spoke.stats.length > 0 && (
                  <div className="mb-5 flex flex-wrap gap-4">
                    {spoke.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className="text-lg font-bold" style={{ color: spoke.color }}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-3">
                  {spoke.status === 'live' ? (
                    <>
                      <a
                        href={spoke.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        style={{ backgroundColor: spoke.color }}
                      >
                        Siirry palveluun
                        <ExternalLink className="h-4 w-4" />
                      </a>
                      <Link
                        href={`/palvelut/${spoke.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-[#0891B2]"
                      >
                        Lue lisää
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </>
                  ) : (
                    <Link
                      href={`/palvelut/${spoke.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200"
                    >
                      Lue lisää
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 rounded-2xl bg-gradient-to-br from-[#0B1F3F] to-[#1A3A6B] px-6 py-12 text-center text-white sm:px-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Etkö tiedä mistä aloittaa?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Kerro tilanteesi ja me kerromme, mitkä palvelumme auttavat sinua eniten.
            Tutustu elämäntapahtumiin ja löydä juuri sinulle sopivat vertailut.
          </p>
          <Link
            href="/elamanmuutokset"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0891B2] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Tutustu elämäntapahtumiin
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </>
  );
}
