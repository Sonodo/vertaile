'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Layers, Menu, X, ChevronDown } from 'lucide-react';
import { NAVIGATION } from '@/lib/constants';
import { spokes } from '@/data/spokes';
import { SpokeIcon } from '@/components/ui/SpokeIcon';
import { NavSearch } from '@/components/layout/NavSearch';
import { UserMenu } from '@/components/auth/UserMenu';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleDropdownEnter() {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  }

  function handleDropdownLeave() {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 150);
  }

  function isActive(href: string): boolean {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 glass-dark border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Päänavigaatio">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group hover:opacity-90 transition-opacity" aria-label="Valitse etusivu">
            <Image
              src="/logo.png"
              alt="Valitse.fi"
              width={865}
              height={279}
              priority
              className="h-9 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAVIGATION.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px]',
                      isActive(item.href)
                        ? 'text-white bg-white/15'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    )}
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className={cn('w-4 h-4 transition-transform', dropdownOpen && 'rotate-180')} />
                  </button>

                  {dropdownOpen && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-xl shadow-xl border border-slate-200 p-4 animate-scale-in"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {spokes.map((spoke) => (
                          <Link
                            key={spoke.id}
                            href={`/palvelut/${spoke.slug}`}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors group/item"
                          >
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                              style={{ backgroundColor: spoke.colorLight }}
                            >
                              <SpokeIcon iconName={spoke.iconName} size={20} className="transition-transform group-hover/item:scale-110" style={{ color: spoke.color }} />
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                                {spoke.name}
                                {spoke.status === 'coming-soon' && (
                                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">Tulossa</span>
                                )}
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">{spoke.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <Link
                          href="/palvelut"
                          className="text-sm font-medium text-accent hover:text-accent-600 transition-colors"
                        >
                          Kaikki palvelut &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px] inline-flex items-center',
                    isActive(item.href)
                      ? 'text-white bg-white/15'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Search + Auth + CTA */}
          <div className="flex items-center gap-2">
            <NavSearch />
            {process.env.NEXT_PUBLIC_AUTH_ENABLED === '1' && <UserMenu />}
            <Link
              href="/palvelut"
              className="hidden lg:inline-flex items-center bg-accent text-white rounded-lg px-4 py-2 text-sm font-semibold hover:bg-accent-600 transition-colors min-h-[44px]"
            >
              Katso kaikki palvelut
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={mobileOpen ? 'Sulje valikko' : 'Avaa valikko'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile slide-out panel */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 top-16 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] glass-dark shadow-xl z-50 lg:hidden overflow-y-auto border-l border-white/10">
            <nav className="p-4 space-y-1" aria-label="Mobiilinavigaatio">
              {/* Palvelut section */}
              <div className="pb-3 mb-3 border-b border-white/10">
                <p className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Palvelut</p>
                {spokes.map((spoke) => (
                  <Link
                    key={spoke.id}
                    href={`/palvelut/${spoke.slug}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 transition-colors min-h-[44px]"
                    onClick={() => setMobileOpen(false)}
                  >
                    <div
                      className="w-8 h-8 rounded-md flex items-center justify-center shrink-0"
                      style={{ backgroundColor: spoke.colorLight }}
                    >
                      <SpokeIcon iconName={spoke.iconName} size={16} style={{ color: spoke.color }} />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{spoke.name}</span>
                    {spoke.status === 'coming-soon' && (
                      <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 ml-auto">Tulossa</span>
                    )}
                  </Link>
                ))}
              </div>

              {/* Other nav items */}
              {NAVIGATION.filter((item) => !item.hasDropdown).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors min-h-[44px]',
                    isActive(item.href)
                      ? 'text-white bg-white/15'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                  {item.description && (
                    <span className="block text-xs text-slate-500 mt-0.5">{item.description}</span>
                  )}
                </Link>
              ))}

              {/* Mobile CTA */}
              <div className="pt-4 mt-4 border-t border-white/10">
                <Link
                  href="/palvelut"
                  className="flex items-center justify-center w-full bg-accent text-white rounded-lg px-4 py-3 text-sm font-semibold hover:bg-accent-600 transition-colors min-h-[44px]"
                  onClick={() => setMobileOpen(false)}
                >
                  Katso kaikki palvelut
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
