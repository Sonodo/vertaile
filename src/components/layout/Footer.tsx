import Link from 'next/link';
import { Layers } from 'lucide-react';
import { SITE_TAGLINE } from '@/lib/constants';
import { spokes } from '@/data/spokes';
import { lifeEvents } from '@/data/life-events';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group" aria-label="Valitse etusivu">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0891B2, #22D3EE)' }}>
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Valitse
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              {SITE_TAGLINE}. Suomen kattavin vertailupalvelu auttaa sinua säästämään aikaa ja rahaa.
            </p>
            {/* Trust badges */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full px-3 py-1">
                Puolueeton
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full px-3 py-1">
                Ilmainen
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-slate-800 rounded-full px-3 py-1">
                Suomalainen
              </span>
            </div>
          </div>

          {/* Palvelut column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Palvelut</h3>
            <ul className="space-y-2.5">
              {spokes.map((spoke) => (
                <li key={spoke.id}>
                  <Link
                    href={`/palvelut/${spoke.slug}`}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {spoke.verticalFi}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Elämäntapahtumat column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Elämäntapahtumat</h3>
            <ul className="space-y-2.5">
              {lifeEvents.map((event) => (
                <li key={event.id}>
                  <Link
                    href={`/elamanmuutokset/${event.slug}`}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {event.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tietoa column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Tietoa</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/tietoa" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Tietoa Valitsesta
                </Link>
              </li>
              <li>
                <Link href="/blogi" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Blogi
                </Link>
              </li>
              <li>
                <Link href="/tietosuoja" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Tietosuojaseloste
                </Link>
              </li>
              <li>
                <Link href="/kayttoehdot" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Käyttöehdot
                </Link>
              </li>
              <li>
                <Link href="/evasteet" className="text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                  Evästeet
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Valitse. Kaikki oikeudet pidätetään.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/tietosuoja" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Tietosuoja
            </Link>
            <Link href="/kayttoehdot" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Käyttöehdot
            </Link>
            <Link href="/evasteet" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">
              Evästeet
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
