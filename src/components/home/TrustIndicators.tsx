import { Layers, ShieldCheck, CircleDollarSign, Flag } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const indicators = [
  { icon: Layers, value: '8+', label: 'vertailupalvelua' },
  { icon: ShieldCheck, value: '100 %', label: 'ilmainen' },
  { icon: CircleDollarSign, value: 'Aina', label: 'ilmainen käyttää' },
  { icon: Flag, value: 'Suomalainen', label: 'palvelu' },
];

export default function TrustIndicators() {
  return (
    <section className="bg-background py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:justify-between">
            {indicators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">{item.value}</div>
                    <div className="text-sm text-slate-500">{item.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
