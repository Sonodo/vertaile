import { Search, ArrowLeftRight, PiggyBank } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Search,
    title: 'Valitse palvelu',
    description:
      'Valitse vertailupalvelu tarpeidesi mukaan — asunnot, sähkö, lainat tai vakuutukset.',
  },
  {
    number: 2,
    icon: ArrowLeftRight,
    title: 'Vertaile vaihtoehtoja',
    description:
      'Vertaa hintoja, ominaisuuksia ja arvosteluja puolueettomasti.',
  },
  {
    number: 3,
    icon: PiggyBank,
    title: 'Säästä rahaa',
    description:
      'Valitse paras vaihtoehto ja säästä jopa satoja euroja vuodessa.',
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Miten Valitse toimii?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Kolme helppoa askelta parempiin valintoihin.
        </p>
      </div>

      <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
        {/* Connector lines (desktop only) */}
        <div className="pointer-events-none absolute left-0 right-0 top-10 hidden md:block">
          <div className="mx-auto flex max-w-2xl items-center justify-between px-16">
            <div className="h-0.5 flex-1 bg-gradient-to-r from-[#0891B2]/20 via-[#0891B2]/40 to-[#0891B2]/20" />
          </div>
        </div>

        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Numbered circle */}
              <div className="relative mb-6">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0891B2]/10 to-[#0891B2]/5 ring-1 ring-[#0891B2]/20">
                  <Icon className="h-8 w-8 text-[#0891B2]" />
                </div>
                <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#0891B2] text-xs font-bold text-white shadow-md">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
