'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Search, ArrowUpRight, X } from 'lucide-react';
import { spokes } from '@/data/spokes';
import { lifeEvents } from '@/data/life-events';
import { SpokeIcon } from '@/components/ui/SpokeIcon';
import { cn } from '@/lib/utils';

function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

// Build a flat list of searchable items with keywords
const searchItems = [
  ...spokes.map((s) => ({
    type: 'service' as const,
    name: s.name,
    description: s.description,
    url: s.url,
    iconName: s.iconName,
    color: s.color,
    colorLight: s.colorLight,
    domain: s.domain,
    searchable: normalize([s.name, s.description, s.verticalFi, ...s.features].join(' ')),
  })),
  ...lifeEvents.map((le) => ({
    type: 'life-event' as const,
    name: le.name,
    description: le.description,
    url: `/elamanmuutokset/${le.slug}`,
    iconName: le.iconName,
    color: le.color,
    colorLight: le.colorLight,
    domain: null,
    searchable: normalize([le.name, le.description, le.longDescription].join(' ')),
  })),
];

export function NavSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const normalizedQuery = normalize(query.trim());

  const results = normalizedQuery
    ? searchItems.filter((item) => item.searchable.includes(normalizedQuery)).slice(0, 6)
    : [];

  const showDropdown = open && (results.length > 0 || normalizedQuery.length > 0);

  const close = useCallback(() => {
    setOpen(false);
    setQuery('');
    setSelectedIndex(0);
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [close]);

  // Keyboard navigation
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      const item = results[selectedIndex];
      if (item.type === 'service') {
        window.open(item.url, '_blank', 'noopener,noreferrer');
      } else {
        window.location.href = item.url;
      }
      close();
    } else if (e.key === 'Escape') {
      close();
      inputRef.current?.blur();
    }
  }

  // Reset selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [normalizedQuery]);

  return (
    <div ref={containerRef} className="relative">
      {/* Search trigger / input */}
      <div
        className={cn(
          'flex items-center rounded-lg border transition-all',
          open
            ? 'w-64 border-cyan-300 bg-white shadow-sm ring-2 ring-cyan-200/50'
            : 'w-9 border-transparent hover:bg-slate-100 lg:w-56 lg:border-slate-200 lg:bg-slate-50 lg:hover:bg-slate-100'
        )}
      >
        <button
          onClick={() => {
            setOpen(true);
            setTimeout(() => inputRef.current?.focus(), 0);
          }}
          className={cn(
            'flex items-center justify-center p-2 text-slate-400',
            open && 'pointer-events-none'
          )}
          aria-label="Avaa haku"
        >
          <Search className="h-4 w-4" />
        </button>

        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder="Hae palvelua..."
          className={cn(
            'w-full bg-transparent py-1.5 pr-2 text-sm text-slate-900 placeholder-slate-400 outline-none',
            open ? 'block' : 'hidden lg:block'
          )}
          aria-label="Hae vertailupalvelua"
          aria-expanded={showDropdown}
          role="combobox"
          aria-autocomplete="list"
        />

        {open && query && (
          <button
            onClick={() => { setQuery(''); inputRef.current?.focus(); }}
            className="mr-1.5 rounded p-0.5 text-slate-400 hover:text-slate-600"
            aria-label="Tyhjennä"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl" role="listbox">
          {results.length > 0 ? (
            <div className="py-1">
              {results.map((item, idx) => (
                <a
                  key={`${item.type}-${item.name}`}
                  href={item.url}
                  target={item.type === 'service' ? '_blank' : undefined}
                  rel={item.type === 'service' ? 'noopener noreferrer' : undefined}
                  onClick={close}
                  role="option"
                  aria-selected={idx === selectedIndex}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 transition-colors',
                    idx === selectedIndex ? 'bg-slate-50' : 'hover:bg-slate-50'
                  )}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                    style={{ backgroundColor: item.colorLight }}
                  >
                    <SpokeIcon iconName={item.iconName} size={18} style={{ color: item.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900">{item.name}</span>
                      {item.type === 'service' && (
                        <ArrowUpRight className="h-3 w-3 shrink-0 text-slate-400" />
                      )}
                    </div>
                    <p className="truncate text-xs text-slate-500">
                      {item.type === 'service' ? item.domain : item.description}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-500">
                    {item.type === 'service' ? 'Palvelu' : 'Opas'}
                  </span>
                </a>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-slate-500">Ei tuloksia haulle &ldquo;{query}&rdquo;</p>
              <p className="mt-1 text-xs text-slate-400">Kokeile esim. &ldquo;sähkö&rdquo;, &ldquo;laina&rdquo; tai &ldquo;muutto&rdquo;</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
