'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Calendar } from 'lucide-react';
import type { BlogPost, BlogCategory } from '@/types';
import { cn, formatDateFi } from '@/lib/utils';

interface BlogIndexClientProps {
  posts: BlogPost[];
  categories: BlogCategory[];
}

export default function BlogIndexClient({ posts, categories }: BlogIndexClientProps) {
  const [activeCategory, setActiveCategory] = useState('kaikki');

  const filteredPosts =
    activeCategory === 'kaikki'
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  const [featuredPost, ...restPosts] = filteredPosts;

  return (
    <div>
      {/* Category filter tabs */}
      <div className="mb-10 overflow-x-auto">
        <div className="flex gap-2 pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors',
                activeCategory === category.id
                  ? 'bg-[#0891B2] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white py-16 text-center">
          <p className="text-lg text-slate-500">Ei artikkeleita tässä kategoriassa.</p>
        </div>
      ) : (
        <>
          {/* Featured post (first post, large card) */}
          {featuredPost && (
            <Link
              href={`/blogi/${featuredPost.slug}`}
              className="group mb-10 block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="h-1 bg-[#0891B2]" />
              <div className="p-8 sm:p-10">
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-[#0891B2]/10 px-3 py-1 text-xs font-semibold text-[#0891B2]">
                    {getCategoryLabel(categories, featuredPost.category)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#0891B2] transition-colors sm:text-3xl">
                  {featuredPost.title}
                </h2>
                <p className="mt-3 text-lg text-slate-600 line-clamp-3">
                  {featuredPost.description}
                </p>
                <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime} min lukuaika
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Rest of posts in grid */}
          {restPosts.length > 0 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {restPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blogi/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="h-0.5 bg-[#0891B2]" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3">
                      <span className="inline-block rounded-full bg-[#0891B2]/10 px-3 py-1 text-xs font-semibold text-[#0891B2]">
                        {getCategoryLabel(categories, post.category)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0891B2] transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-slate-600 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 text-xs text-slate-500">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime} min lukuaika
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function getCategoryLabel(categories: BlogCategory[], categoryId: string): string {
  return categories.find((c) => c.id === categoryId)?.label ?? categoryId;
}
