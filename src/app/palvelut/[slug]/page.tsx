import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowRight, ExternalLink, Clock, ChevronDown } from 'lucide-react';
import { spokes, getSpokeBySlug } from '@/data/spokes';
import { verticalContent } from '@/data/vertical-content';
import { lifeEvents } from '@/data/life-events';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import SpokeIcon from '@/components/ui/SpokeIcon';
import Badge from '@/components/ui/Badge';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export function generateStaticParams() {
  return spokes.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const spoke = getSpokeBySlug(slug);
  if (!spoke) return {};
  return {
    title: `${spoke.name} — ${spoke.verticalFi} | ${SITE_NAME}`,
    description: spoke.longDescription,
    alternates: { canonical: `${SITE_URL}/palvelut/${slug}` },
  };
}

export default async function VerticalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const spoke = getSpokeBySlug(slug);

  if (!spoke) {
    notFound();
  }

  const content = verticalContent.find((vc) => vc.spokeId === spoke.id);
  const relatedLifeEvents = lifeEvents.filter((le) =>
    le.relatedSpokeIds.includes(spoke.id)
  );
  const otherSpokes = spokes.filter((s) => s.id !== spoke.id).slice(0, 4);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Palvelut', url: '/palvelut' },
    { name: spoke.name, url: `/palvelut/${spoke.slug}` },
  ]);

  const faqSchema = content?.faqs ? generateFAQSchema(content.faqs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Section 1: Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${spoke.colorLight} 0%, white 60%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Etusivu', href: '/' },
              { label: 'Palvelut', href: '/palvelut' },
              { label: spoke.name },
            ]}
          />

          <div className="flex flex-col items-center gap-8 py-8 sm:py-12 lg:flex-row lg:items-start lg:gap-12 lg:py-16">
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4 inline-flex items-center gap-2">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm"
                  style={{ backgroundColor: spoke.colorLight }}
                >
                  <SpokeIcon iconName={spoke.iconName} style={{ color: spoke.color }} size={28} />
                </div>
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1F3F] sm:text-4xl lg:text-5xl">
                {spoke.name}
              </h1>
              <p className="mt-1 text-lg font-medium" style={{ color: spoke.color }}>
                {spoke.verticalFi}
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0">
                {spoke.longDescription}
              </p>

              {/* CTA or Coming Soon */}
              <div className="mt-6">
                {spoke.status === 'live' ? (
                  <a
                    href={spoke.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg transition-opacity hover:opacity-90"
                    style={{ backgroundColor: spoke.color }}
                  >
                    {spoke.ctaText}
                    <ExternalLink className="h-5 w-5" />
                  </a>
                ) : (
                  <div className="inline-flex items-center gap-2 rounded-xl bg-amber-50 px-6 py-3 text-base font-semibold text-amber-700 ring-1 ring-amber-200">
                    <Clock className="h-5 w-5" />
                    Tulossa pian
                  </div>
                )}
              </div>

              {/* Stats */}
              {spoke.stats && spoke.stats.length > 0 && (
                <div className="mt-8 flex flex-wrap justify-center gap-6 lg:justify-start">
                  {spoke.stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div
                        className="text-2xl font-bold"
                        style={{ color: spoke.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section 2: How It Works */}
        {content?.howItWorks && content.howItWorks.length > 0 && (
          <section className="py-16">
            <h2 className="mb-10 text-center text-2xl font-bold text-[#0B1F3F] sm:text-3xl">
              Miten {spoke.name} toimii?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {content.howItWorks.map((step, index) => (
                <div key={step.step} className="relative text-center">
                  {/* Connector line between steps (hidden on mobile) */}
                  {index < content.howItWorks.length - 1 && (
                    <div className="absolute right-0 top-8 hidden h-0.5 w-full translate-x-1/2 bg-slate-200 md:block" />
                  )}

                  {/* Step number circle */}
                  <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white shadow-md"
                    style={{ backgroundColor: spoke.color }}
                  >
                    {step.step}
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-[#0B1F3F]">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Features */}
        {content?.detailedFeatures && content.detailedFeatures.length > 0 && (
          <section className="border-t border-slate-100 py-16">
            <h2 className="mb-10 text-center text-2xl font-bold text-[#0B1F3F] sm:text-3xl">
              Ominaisuudet
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {content.detailedFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle
                      className="h-5 w-5 shrink-0"
                      style={{ color: spoke.color }}
                    />
                    <h3 className="font-semibold text-[#0B1F3F]">{feature.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 4: Related Life Events */}
        {relatedLifeEvents.length > 0 && (
          <section className="border-t border-slate-100 py-16">
            <h2 className="mb-10 text-center text-2xl font-bold text-[#0B1F3F] sm:text-3xl">
              Liittyvät elämäntapahtumat
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedLifeEvents.map((event) => (
                <Link
                  key={event.id}
                  href={`/elamanmuutokset/${event.slug}`}
                  className="card-hover-lift group rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ backgroundColor: event.colorLight }}
                    >
                      <SpokeIcon
                        iconName={event.iconName}
                        style={{ color: event.color }}
                        size={20}
                      />
                    </div>
                    <h3 className="font-semibold text-[#0B1F3F] group-hover:text-[#0891B2]">
                      {event.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">{event.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#0891B2]">
                    Lue lisää
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Section 5: FAQ */}
        {content?.faqs && content.faqs.length > 0 && (
          <section className="border-t border-slate-100 py-16">
            <h2 className="mb-10 text-center text-2xl font-bold text-[#0B1F3F] sm:text-3xl">
              Usein kysyttyä
            </h2>
            <div className="mx-auto max-w-3xl space-y-3">
              {content.faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-[#0B1F3F] marker:[font-size:0] [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="border-t border-slate-100 px-6 py-4 text-sm leading-relaxed text-slate-600">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Section 6: Other Services */}
        <section className="border-t border-slate-100 py-16">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#0B1F3F] sm:text-3xl">
            Muut palvelumme
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherSpokes.map((other) => (
              <Link
                key={other.id}
                href={`/palvelut/${other.slug}`}
                className="card-hover-lift group rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{ backgroundColor: other.colorLight }}
                  >
                    <SpokeIcon
                      iconName={other.iconName}
                      style={{ color: other.color }}
                      size={18}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F3F] group-hover:text-[#0891B2]">
                      {other.name}
                    </h3>
                    <span className="text-xs text-slate-500">{other.verticalFi}</span>
                  </div>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  {other.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* Section 7: Final CTA */}
      <section
        className="mt-4"
        style={{ backgroundColor: spoke.color }}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Aloita {spoke.verticalFi.toLowerCase()} vertailu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">
            {spoke.description}
          </p>
          {spoke.status === 'live' ? (
            <a
              href={spoke.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ color: spoke.color }}
            >
              {spoke.ctaText}
              <ExternalLink className="h-4 w-4" />
            </a>
          ) : (
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/20 px-6 py-3 text-sm font-semibold text-white">
              <Clock className="h-4 w-4" />
              Tulossa pian
            </div>
          )}
        </div>
      </section>
    </>
  );
}
