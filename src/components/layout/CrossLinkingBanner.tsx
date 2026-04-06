import Link from 'next/link';
import { spokes } from '@/data/spokes';
import { SpokeIcon } from '@/components/ui/SpokeIcon';

interface CrossLinkingBannerProps {
  variant?: 'compact' | 'full';
}

export function CrossLinkingBanner({ variant = 'full' }: CrossLinkingBannerProps) {
  if (variant === 'compact') {
    return (
      <section className="bg-slate-50 border-y border-slate-200 py-4" aria-label="Valitse-palvelut">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide pb-1">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap shrink-0">
              Valitse-palvelut
            </span>
            {spokes.map((spoke) => (
              <Link
                key={spoke.id}
                href={spoke.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors whitespace-nowrap shrink-0"
              >
                <SpokeIcon iconName={spoke.iconName} size={14} style={{ color: spoke.color }} />
                <span>{spoke.domain}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-8" aria-label="Valitse-palvelut">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-6">
          Valitse-palveluverkosto
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {spokes.map((spoke) => (
            <Link
              key={spoke.id}
              href={spoke.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all group"
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: spoke.colorLight }}
              >
                <SpokeIcon iconName={spoke.iconName} size={20} style={{ color: spoke.color }} />
              </div>
              <span className="text-xs font-medium text-slate-600 text-center leading-tight">
                {spoke.domain}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
