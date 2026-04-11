import { Shield, Zap, TrendingUp } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    icon: Shield,
    title: 'Laaja vertailu',
    description:
      'Näytämme kattavasti eri palveluntarjoajat — myös ne, joista emme saa komissiota.',
  },
  {
    icon: Zap,
    title: 'Nopea ja helppo',
    description:
      'Vertaile kymmeniä vaihtoehtoja muutamassa minuutissa. Selkeät tulokset ilman turhaa jargonia.',
  },
  {
    icon: TrendingUp,
    title: 'Säästä oikeasti',
    description:
      'Käyttäjämme säästävät keskimäärin satoja euroja vuodessa vaihtamalla edullisempaan palveluntarjoajaan.',
  },
];

export default function WhyValitse() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="section-title">
              Miksi Valitse?
            </h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Monipuolinen vertailupalvelu — ilmainen, kattava ja helppo.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={i * 120}>
                <div className="card-hover flex flex-col items-start h-full">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
