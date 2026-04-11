import { Search, ArrowLeftRight, PiggyBank } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Valitse palvelu',
    description:
      'Valitse vertailupalvelu tarpeidesi mukaan — sähkö, lainat, vakuutukset tai liittymät.',
  },
  {
    number: 2,
    icon: ArrowLeftRight,
    title: 'Vertaile vaihtoehtoja',
    description:
      'Vertaa hintoja, ominaisuuksia ja arvosteluja puolueettomasti yhdestä paikasta.',
  },
  {
    number: 3,
    icon: PiggyBank,
    title: 'Säästä rahaa',
    description:
      'Valitse sopivin vaihtoehto ja säästä jopa satoja euroja vuodessa.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-accent-50/50 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="section-title">
              Miten Valitse toimii?
            </h2>
            <p className="section-subtitle mx-auto max-w-2xl">
              Kolme helppoa askelta parempiin valintoihin.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Connector line (desktop only) */}
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden md:block">
            <div className="mx-auto flex max-w-2xl items-center justify-between px-16">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20" />
            </div>
          </div>

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.number} delay={i * 150}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Numbered circle */}
                  <div className="relative mb-6">
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 ring-1 ring-accent/20">
                      <Icon className="h-8 w-8 text-accent" />
                    </div>
                    <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md shadow-accent/30">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                    {step.description}
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
