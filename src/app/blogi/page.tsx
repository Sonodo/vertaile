import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { BLOG_CATEGORIES, SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import BlogIndexClient from './BlogIndexClient';

export const metadata: Metadata = {
  title: 'Blogi',
  description: `${SITE_NAME}-blogi: vinkkejä, oppaita ja ajankohtaisia artikkeleita vertailuun, säästämiseen ja arjen talousvalintoihin.`,
  alternates: {
    canonical: `${SITE_URL}/blogi`,
  },
  openGraph: {
    title: `Blogi — ${SITE_NAME}`,
    description: 'Vinkkejä, oppaita ja ajankohtaista vertailuun ja säästämiseen.',
    url: `${SITE_URL}/blogi`,
  },
};

export default function BlogPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Blogi' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        {/* Hero */}
        <section className="bg-[#0B1F3F] text-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Etusivu', href: '/' },
                { label: 'Blogi' },
              ]}
            />
            <div className="mt-6 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Valitse-blogi
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Vinkkejä, oppaita ja ajankohtaista vertailuun ja säästämiseen.
              </p>
            </div>
          </div>
        </section>

        {/* Blog index */}
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <BlogIndexClient posts={blogPosts} categories={BLOG_CATEGORIES} />
        </section>
      </div>
    </>
  );
}
