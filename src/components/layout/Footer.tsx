import Link from 'next/link';
import { Layers, ExternalLink } from 'lucide-react';
import { SITE_TAGLINE } from '@/lib/constants';
import { spokes } from '@/data/spokes';
import { lifeEvents } from '@/data/life-events';

const networkSites = [
  { name: 'Valitse', url: 'https://valitse.fi', current: true },
  { name: 'Valitse Sähkö', url: 'https://valitsesahko.fi' },
  { name: 'Valitse Laina', url: 'https://valitselaina.fi' },
  { name: 'Valitse Vakuutus', url: 'https://valitsevakuutus.fi' },
  { name: 'Valitse Liittymä', url: 'https://valitseliittyma.fi' },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 group" aria-label="Valitse etusivu">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-to-br from-accent-400 to-accent">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
                Valitse
              </span>
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed">
              {SITE_TAGLINE}. Monipuolinen vertailupalvelu, joka auttaa sinua säästämään aikaa ja rahaa.
            </p>
            {/* Osa Valitse-verkostoa badge */}
            <div className="mt-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-400 bg-accent/10 rounded-full px-3 py-1.5 ring-1 ring-accent/20">
                <Layers className="w-3 h-3" />
                Osa Valitse-verkostoa
              </span>
            </div>
            {/* Trust badges */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10">
                Kattava
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10">
                Ilmainen
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-300 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10">
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
                  <a
                    href={spoke.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-slate-400 hover:text-accent-400 transition-colors"
                  >
                    {spoke.verticalFi}
                    <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
                  </a>
                </li>
              ))}
              <li className="pt-1.5">
                <Link
                  href="/palvelut"
                  className="text-sm font-medium text-accent-400 hover:text-white transition-colors"
                >
                  Kaikki palvelut &rarr;
                </Link>
              </li>
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
                    className="text-sm text-slate-400 hover:text-accent-400 transition-colors"
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
                <Link href="/tietoa" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Tietoa Valitsesta
                </Link>
              </li>
              <li>
                <Link href="/blogi" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Artikkelit
                </Link>
              </li>
              <li>
                <Link href="/tietosuoja" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Tietosuojaseloste
                </Link>
              </li>
              <li>
                <Link href="/kayttoehdot" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Käyttöehdot
                </Link>
              </li>
              <li>
                <Link href="/evasteet" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Evästeet
                </Link>
              </li>
              <li>
                <Link href="/menetelma" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Menetelmä
                </Link>
              </li>
              <li>
                <Link href="/yhteystiedot" className="text-sm text-slate-400 hover:text-accent-400 transition-colors">
                  Yhteystiedot
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Valitse network cross-links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Valitse-verkosto</p>
          <div className="flex flex-wrap gap-2">
            {networkSites.map((site) => (
              <a
                key={site.name}
                href={site.url}
                target={site.current ? undefined : '_blank'}
                rel={site.current ? undefined : 'noopener noreferrer'}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  site.current
                    ? 'bg-accent/15 text-accent-400 ring-1 ring-accent/30'
                    : 'bg-white/5 text-slate-300 ring-1 ring-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {site.name}
                {!site.current && <ExternalLink className="w-3 h-3" />}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; 2024&ndash;{new Date().getFullYear()} Valitse. Kaikki oikeudet pidätetään.
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
