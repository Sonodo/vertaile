import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { spokes } from '@/data/spokes';
import SpokeIcon from '@/components/ui/SpokeIcon';
import Badge from '@/components/ui/Badge';

export default function VerticalCardsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Vertailupalvelumme
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Valitse palvelu ja aloita vertailu. Kaikki palvelumme ovat ilmaisia ja puolueettomia.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {spokes.map((spoke) => (
          <Link
            key={spoke.id}
            href={`/palvelut/${spoke.slug}`}
            className="card-hover-lift group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            {/* Status badge */}
            {spoke.status !== 'live' && (
              <div className="absolute right-4 top-4">
                <Badge variant={spoke.status === 'beta' ? 'warning' : 'coming-soon'}>
                  {spoke.status === 'beta' ? 'Beta' : 'Tulossa'}
                </Badge>
              </div>
            )}

            {/* Icon */}
            <div
              className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ backgroundColor: spoke.colorLight }}
            >
              <SpokeIcon iconName={spoke.iconName} className="h-6 w-6" style={{ color: spoke.color }} />
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-slate-900">{spoke.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {spoke.description}
            </p>

            {/* Arrow link */}
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[#0891B2] transition-colors group-hover:text-[#0891B2]/80">
              Vertaile
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
