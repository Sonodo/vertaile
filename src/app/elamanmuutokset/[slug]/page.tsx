import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Lightbulb, CheckCircle2, HelpCircle } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';
import { lifeEvents, getLifeEventBySlug } from '@/data/life-events';
import { getSpokeById } from '@/data/spokes';
import { generateBreadcrumbSchema } from '@/lib/seo';
import SpokeIcon from '@/components/ui/SpokeIcon';

export function generateStaticParams() {
  return lifeEvents.map((le) => ({ slug: le.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getLifeEventBySlug(slug);
  if (!event) return {};

  return {
    title: event.name,
    description: event.description,
    alternates: { canonical: `${SITE_URL}/elamanmuutokset/${event.slug}` },
    openGraph: {
      title: `${event.name} — Valitse`,
      description: event.description,
      url: `${SITE_URL}/elamanmuutokset/${event.slug}`,
      type: 'article',
    },
  };
}

export default async function LifeEventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getLifeEventBySlug(slug);
  if (!event) notFound();

  const relatedSpokes = event.relatedSpokeIds
    .map((id) => getSpokeById(id))
    .filter(Boolean);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Elämänmuutokset', url: '/elamanmuutokset' },
    { name: event.name },
  ]);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: event.name,
    description: event.longDescription,
    step: event.steps.map((step) => ({
      '@type': 'HowToStep',
      position: step.order,
      name: step.title,
      text: step.description,
    })),
  };

  const faqSchema =
    event.faqs && event.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: event.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Breadcrumbs */}
      <nav className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8" aria-label="Murupolku">
        <ol className="flex items-center gap-2 text-sm text-slate-500">
          <li>
            <Link href="/" className="transition-colors hover:text-[#0891B2]">
              Etusivu
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/elamanmuutokset" className="transition-colors hover:text-[#0891B2]">
              Elämänmuutokset
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-slate-900">{event.name}</li>
        </ol>
      </nav>

      {/* Hero */}
      <section
        className="mt-6 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${event.color}15, ${event.color}05)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:gap-8">
            {/* Icon */}
            <div
              className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl"
              style={{ backgroundColor: event.colorLight }}
            >
              <SpokeIcon iconName={event.iconName} className="h-10 w-10" style={{ color: event.color }} />
            </div>

            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                {event.name}
              </h1>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-slate-600">
                {event.longDescription}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  {event.steps.length} vaihetta
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
                  {event.relatedSpokeIds.length} palvelua
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step journey */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h2 className="mb-10 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Vaiheittainen opas
        </h2>

        <div className="relative">
          {event.steps.map((step, index) => {
            const spoke = getSpokeById(step.spokeId);
            const isLast = index === event.steps.length - 1;

            return (
              <div key={step.order} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Timeline line */}
                <div className="flex flex-col items-center">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-md"
                    style={{ backgroundColor: event.color }}
                  >
                    {step.order}
                  </div>
                  {!isLast && (
                    <div
                      className="mt-2 w-0.5 flex-1"
                      style={{ backgroundColor: `${event.color}30` }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>

                  {/* Spoke card */}
                  {spoke && (
                    <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                          style={{ backgroundColor: spoke.colorLight }}
                        >
                          <SpokeIcon
                            iconName={spoke.iconName}
                            className="h-5 w-5"
                            style={{ color: spoke.color }}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-900">{spoke.name}</div>
                          <div className="text-sm text-slate-500">{spoke.description}</div>
                        </div>
                        <Link
                          href={`/palvelut/${spoke.slug}`}
                          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold text-white transition-colors"
                          style={{ backgroundColor: spoke.color }}
                        >
                          {step.actionText}
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tips */}
      {event.tips.length > 0 && (
        <section className="bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F59E0B]/10">
                  <Lightbulb className="h-5 w-5 text-[#F59E0B]" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Vinkit</h2>
              </div>

              <ul className="space-y-4">
                {event.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0"
                      style={{ color: event.color }}
                    />
                    <span className="text-slate-700">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Deep content — long-form educational blocks */}
      {event.content && event.content.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-12">
              {event.content.map((block, i) => {
                if (block.type === 'section') {
                  return (
                    <div key={i}>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {block.heading}
                      </h2>
                      <div className="mt-5 space-y-4">
                        {block.paragraphs.map((para, j) => (
                          <p key={j} className="text-base leading-relaxed text-slate-700">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (block.type === 'section-with-list') {
                  return (
                    <div key={i}>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {block.heading}
                      </h2>
                      <div className="mt-5 space-y-4">
                        {block.paragraphs.map((para, j) => (
                          <p key={j} className="text-base leading-relaxed text-slate-700">
                            {para}
                          </p>
                        ))}
                      </div>
                      {block.listHeading && (
                        <h3 className="mt-6 text-lg font-semibold text-slate-900">
                          {block.listHeading}
                        </h3>
                      )}
                      <ul className="mt-4 space-y-3">
                        {block.listItems.map((item, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <CheckCircle2
                              className="mt-0.5 h-5 w-5 shrink-0"
                              style={{ color: event.color }}
                            />
                            <span className="text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                if (block.type === 'table') {
                  return (
                    <div key={i}>
                      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                        {block.heading}
                      </h2>
                      {block.intro && (
                        <p className="mt-4 text-base leading-relaxed text-slate-700">
                          {block.intro}
                        </p>
                      )}
                      <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                          <thead className="bg-slate-50">
                            <tr>
                              {block.columns.map((col, j) => (
                                <th
                                  key={j}
                                  scope="col"
                                  className="px-4 py-3 font-semibold text-slate-900"
                                >
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            {block.rows.map((row, j) => (
                              <tr key={j} className="hover:bg-slate-50/60">
                                {row.map((cell, k) => (
                                  <td key={k} className="px-4 py-3 text-slate-700">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      {block.footnote && (
                        <p className="mt-3 text-xs text-slate-500">{block.footnote}</p>
                      )}
                    </div>
                  );
                }

                return null;
              })}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {event.faqs && event.faqs.length > 0 && (
        <section className="bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0891B2]/10">
                  <HelpCircle className="h-5 w-5 text-[#0891B2]" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  Usein kysyttyä
                </h2>
              </div>

              <div className="space-y-3">
                {event.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-colors open:border-slate-300"
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 text-left font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
                      <span>{faq.question}</span>
                      <span
                        aria-hidden="true"
                        className="mt-1 text-xl leading-none text-slate-400 transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-base leading-relaxed text-slate-700">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedSpokes.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold tracking-tight text-slate-900">
            Liittyvät palvelut
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedSpokes.map((spoke) => {
              if (!spoke) return null;
              return (
                <Link
                  key={spoke.id}
                  href={`/palvelut/${spoke.slug}`}
                  className="card-hover-lift group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: spoke.colorLight }}
                  >
                    <SpokeIcon
                      iconName={spoke.iconName}
                      className="h-6 w-6"
                      style={{ color: spoke.color }}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{spoke.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">{spoke.description}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#0891B2] transition-colors group-hover:text-[#0891B2]/80">
                      Vertaile
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}
