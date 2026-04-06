'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Search, ArrowRight, X } from 'lucide-react';
import { spokes } from '@/data/spokes';
import { lifeEvents } from '@/data/life-events';
import SpokeIcon from '@/components/ui/SpokeIcon';
import Badge from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export default function SearchClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState('Kaikki');

  // Sync query from URL on mount
  useEffect(() => {
    const q = searchParams.get('q');
    if (q) setQuery(q);
  }, [searchParams]);

  // Get unique verticalFi values
  const categories = useMemo(() => {
    const verticals = Array.from(new Set(spokes.map((s) => s.verticalFi)));
    return ['Kaikki', ...verticals];
  }, []);

  const normalizedQuery = normalize(query.trim());

  // Filter spokes
  const filteredSpokes = useMemo(() => {
    let results = spokes;

    // Filter by category
    if (activeCategory !== 'Kaikki') {
      results = results.filter((s) => s.verticalFi === activeCategory);
    }

    // Filter by query
    if (normalizedQuery) {
      results = results.filter((s) => {
        const searchable = [s.name, s.description, s.verticalFi, ...s.features].join(' ');
        return normalize(searchable).includes(normalizedQuery);
      });
    }

    return results;
  }, [normalizedQuery, activeCategory]);

  // Filter life events
  const filteredLifeEvents = useMemo(() => {
    if (activeCategory !== 'Kaikki') return [];

    if (!normalizedQuery) return lifeEvents;

    return lifeEvents.filter((le) => {
      const searchable = [le.name, le.description, le.longDescription].join(' ');
      return normalize(searchable).includes(normalizedQuery);
    });
  }, [normalizedQuery, activeCategory]);

  const hasResults = filteredSpokes.length > 0 || filteredLifeEvents.length > 0;
  const isSearching = normalizedQuery.length > 0;

  const updateUrl = useCallback(
    (q: string) => {
      const params = new URLSearchParams();
      if (q.trim()) params.set('q', q.trim());
      router.replace(`/haku${params.toString() ? `?${params.toString()}` : ''}`, {
        scroll: false,
      });
    },
    [router],
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {/* Search input */}
      <div className="mx-auto max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              updateUrl(e.target.value);
            }}
            placeholder="Hae palveluita, vertailuja tai elämäntapahtumia..."
            className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-12 text-lg text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-[#0891B2] focus:outline-none focus:ring-2 focus:ring-[#0891B2]/20"
            autoFocus
            aria-label="Hakukenttä"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                updateUrl('');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
              aria-label="Tyhjennä haku"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Category tabs */}
      <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              'shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors',
              activeCategory === cat
                ? 'bg-[#0B1F3F] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="mt-10">
        {!hasResults && isSearching ? (
          /* Empty state */
          <div className="py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <Search className="h-7 w-7 text-slate-400" />
            </div>
            <h3 className="mt-6 text-xl font-semibold text-slate-900">Ei hakutuloksia</h3>
            <p className="mt-2 text-slate-600">
              Kokeile toista hakusanaa tai selaa palveluitamme alta.
            </p>

            {/* Show all spokes as suggestions */}
            <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
              {spokes.map((spoke) => (
                <Link
                  key={spoke.id}
                  href={`/palvelut/${spoke.slug}`}
                  className="card-hover-lift flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left shadow-sm"
                >
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
                  <div>
                    <div className="font-semibold text-slate-900">{spoke.name}</div>
                    <div className="text-sm text-slate-500">{spoke.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <>
            {/* Spokes results */}
            {filteredSpokes.length > 0 && (
              <div className="mb-12">
                <h2 className="mb-6 text-xl font-bold text-slate-900">
                  Palvelut
                  {isSearching && (
                    <span className="ml-2 text-base font-normal text-slate-500">
                      ({filteredSpokes.length})
                    </span>
                  )}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredSpokes.map((spoke) => (
                    <Link
                      key={spoke.id}
                      href={`/palvelut/${spoke.slug}`}
                      className="card-hover-lift group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="mb-3 flex items-start justify-between">
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
                        {spoke.status !== 'live' && (
                          <Badge variant={spoke.status === 'beta' ? 'warning' : 'coming-soon'}>
                            {spoke.status === 'beta' ? 'Beta' : 'Tulossa'}
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-bold text-slate-900">{spoke.name}</h3>
                      <p className="mt-1 flex-1 text-sm text-slate-600">{spoke.description}</p>
                      <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-[#0891B2] transition-colors group-hover:text-[#0891B2]/80">
                        Vertaile
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Life events results */}
            {filteredLifeEvents.length > 0 && (
              <div>
                <h2 className="mb-6 text-xl font-bold text-slate-900">
                  Elamanmuutokset
                  {isSearching && (
                    <span className="ml-2 text-base font-normal text-slate-500">
                      ({filteredLifeEvents.length})
                    </span>
                  )}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredLifeEvents.map((event) => (
                    <Link
                      key={event.id}
                      href={`/elamanmuutokset/${event.slug}`}
                      className="card-hover-lift group flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div
                        className="mb-3 flex h-10 w-10 items-center justify-center rounded-full"
                        style={{ backgroundColor: event.colorLight }}
                      >
                        <SpokeIcon
                          iconName={event.iconName}
                          className="h-5 w-5"
                          style={{ color: event.color }}
                        />
                      </div>
                      <h3 className="font-bold text-slate-900">{event.name}</h3>
                      <p className="mt-1 flex-1 text-sm text-slate-600">{event.description}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500">
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
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
