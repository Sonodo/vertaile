import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { getSpokeById } from '@/data/spokes';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { formatDateFi } from '@/lib/utils';
import { generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SpokeIcon from '@/components/ui/SpokeIcon';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE_URL}/blogi/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedSpokes = post.relatedSpokeIds
    .map((id) => getSpokeById(id))
    .filter(Boolean);

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Blogi', url: '/blogi' },
    { name: post.title },
  ]);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.description,
    slug: post.slug,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    author: post.author,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <section className="bg-[#0B1F3F] text-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Blogi', href: '/blogi' },
                { label: post.title },
              ]}
            />
          </div>
        </section>

        {/* Article */}
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
            {/* Main content */}
            <article>
              {/* Back link */}
              <Link
                href="/blogi"
                className="mb-6 inline-flex items-center gap-1.5 text-sm text-[#0891B2] hover:underline"
              >
                <ArrowLeft className="h-4 w-4" />
                Takaisin blogiin
              </Link>

              {/* Article header */}
              <div className="mb-8">
                <span className="inline-block rounded-full bg-[#0891B2]/10 px-3 py-1 text-xs font-semibold text-[#0891B2]">
                  {post.category}
                </span>
                <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
                  {post.title}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    {formatDateFi(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {post.readTime} min lukuaika
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                </div>
              </div>

              {/* Article body */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-[#0891B2] prose-a:no-underline hover:prose-a:underline prose-li:text-slate-700 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
              {post.tags.length > 0 && (
                <div className="mt-10 border-t border-slate-200 pt-6">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Related spokes */}
              {relatedSpokes.length > 0 && (
                <div className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">
                    Liittyvät palvelut
                  </h3>
                  <div className="space-y-3">
                    {relatedSpokes.map((spoke) =>
                      spoke ? (
                        <Link
                          key={spoke.id}
                          href={`/palvelut/${spoke.slug}`}
                          className="group flex items-center gap-3 rounded-lg border border-slate-100 p-3 transition-colors hover:border-slate-200 hover:bg-slate-50"
                        >
                          <div
                            className="flex h-10 w-10 items-center justify-center rounded-lg"
                            style={{ backgroundColor: spoke.colorLight }}
                          >
                            <SpokeIcon
                              iconName={spoke.iconName}
                              className="h-5 w-5"
                              style={{ color: spoke.color }}
                            />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-slate-900 group-hover:text-[#0891B2]">
                              {spoke.name}
                            </p>
                            <p className="text-xs text-slate-500 line-clamp-1">
                              {spoke.description}
                            </p>
                          </div>
                        </Link>
                      ) : null
                    )}
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* "Lue myös" section */}
          {otherPosts.length > 0 && (
            <section className="mt-16 border-t border-slate-200 pt-12">
              <h2 className="mb-8 text-2xl font-bold text-slate-900">
                Lue myös
              </h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {otherPosts.map((otherPost) => (
                  <Link
                    key={otherPost.slug}
                    href={`/blogi/${otherPost.slug}`}
                    className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="h-0.5 bg-[#0891B2]" />
                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-2 inline-block self-start rounded-full bg-[#0891B2]/10 px-3 py-1 text-xs font-semibold text-[#0891B2]">
                        {otherPost.category}
                      </span>
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0891B2] transition-colors">
                        {otherPost.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-2">
                        {otherPost.description}
                      </p>
                      <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {formatDateFi(otherPost.publishedAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {otherPost.readTime} min
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA Banner */}
          <section className="mt-16">
            <div className="rounded-2xl bg-[#0B1F3F] p-8 text-center sm:p-12">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Aloita vertailu
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-slate-300">
                Valitse auttaa sinua tekemään parempia päätöksiä. Tutustu kaikkiin vertailupalveluihimme ja löydä juuri sinulle sopivat ratkaisut.
              </p>
              <Link
                href="/palvelut"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0891B2] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0891B2]/90"
              >
                Tutustu palveluihin
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
