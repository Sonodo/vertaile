import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { lifeEvents } from '@/data/life-events';
import SpokeIcon from '@/components/ui/SpokeIcon';

export default function LifeEventsCTA() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Suuri muutos edessä?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Elämäntapahtumat kokoavat kaikki tarvittavat palvelut yhteen. Seuraa vaiheittaista opasta
            ja hoida kaikki vertailut kerralla.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lifeEvents.map((event) => (
            <Link
              key={event.id}
              href={`/elamanmuutokset/${event.slug}`}
              className="card-hover-lift group flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              {/* Icon */}
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: event.colorLight }}
              >
                <SpokeIcon iconName={event.iconName} className="h-6 w-6" style={{ color: event.color }} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900">{event.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {event.description}
              </p>

              {/* Related services count */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500">
                  {event.relatedSpokeIds.length} palvelua
                </span>
                <span className="flex items-center gap-1 text-sm font-semibold text-[#0891B2] transition-colors group-hover:text-[#0891B2]/80">
                  Lue lisää
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
