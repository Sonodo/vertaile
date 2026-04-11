import { Layers, Building2, BadgeCheck, Clock } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const stats = [
  { icon: Layers, value: '5', suffix: ' vertailua', label: 'vertailupalvelua verkostossa' },
  { icon: Building2, value: '50+', suffix: '', label: 'palveluntarjoajaa' },
  { icon: BadgeCheck, value: '100%', suffix: '', label: 'ilmainen käyttää' },
  { icon: Clock, value: '2', suffix: ' min', label: 'niin nopeasti löydät parhaan' },
];

export default function StatsCounter() {
  return (
    <section className="relative bg-navy py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={i * 100}>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <Icon className="w-7 h-7 text-accent-400" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-accent-400">
                    {stat.value}
                    {stat.suffix && <span className="text-xl sm:text-2xl">{stat.suffix}</span>}
                  </div>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
