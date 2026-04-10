import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { BLOG_CATEGORIES } from '@/lib/constants';
import { formatDateFi } from '@/lib/utils';
import Badge from '@/components/ui/Badge';

export default function LatestBlogPosts() {
  const latestPosts = blogPosts.slice(0, 3);

  if (latestPosts.length === 0) return null;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      {/* Header */}
      <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tuoreimmat artikkelit
          </h2>
          <p className="mt-2 text-lg text-slate-600">
            Ajankohtaisia vinkkejä ja oppaita vertailuun.
          </p>
        </div>
        <Link
          href="/blogi"
          className="flex items-center gap-1 text-sm font-semibold text-[#0891B2] transition-colors hover:text-[#0891B2]/80"
        >
          Kaikki artikkelit
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {latestPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blogi/${post.slug}`}
            className="card-hover-lift group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
          >
            {/* Color accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#0891B2] to-[#0B1F3F]" />

            <div className="flex flex-1 flex-col p-6">
              {/* Category badge */}
              <div className="mb-3">
                <Badge variant="default">{BLOG_CATEGORIES.find((c) => c.id === post.category)?.label ?? post.category.charAt(0).toUpperCase() + post.category.slice(1)}</Badge>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[#0891B2]">
                {post.title}
              </h3>

              {/* Description */}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-3">
                {post.description}
              </p>

              {/* Meta */}
              <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
                <span>{formatDateFi(post.publishedAt)}</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime} min
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
