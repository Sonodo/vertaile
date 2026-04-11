import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { spokes } from '@/data/spokes';
import SpokeIcon from '@/components/ui/SpokeIcon';
import Badge from '@/components/ui/Badge';
import ScrollReveal from '@/components/ScrollReveal';

export default function VerticalCardsGrid() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="section-title">
              Mitä haluat vertailla?
            </h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Valitse palvelu ja aloita vertailu. Kaikki palvelumme ovat ilmaisia ja puolueettomia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {spokes.map((spoke, i) => (
            <ScrollReveal key={spoke.id} delay={i * 100}>
              <Link
                href={spoke.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover group relative flex flex-col h-full"
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
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent transition-colors group-hover:text-accent-600">
                  Vertaile
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
