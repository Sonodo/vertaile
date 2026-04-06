import { Layers, ShieldCheck, CircleDollarSign, Flag } from 'lucide-react';

const indicators = [
  { icon: Layers, value: '8+', label: 'palvelua' },
  { icon: ShieldCheck, value: '100 %', label: 'puolueeton' },
  { icon: CircleDollarSign, value: 'Aina', label: 'ilmainen' },
  { icon: Flag, value: 'Suomalainen', label: 'palvelu' },
];

export default function TrustIndicators() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10">
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:justify-between">
          {indicators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0891B2]/10">
                  <Icon className="h-5 w-5 text-[#0891B2]" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">{item.value}</div>
                  <div className="text-sm text-slate-500">{item.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
