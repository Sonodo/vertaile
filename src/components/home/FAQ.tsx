'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const faqs = [
  {
    question: 'Onko Valitse ilmainen?',
    answer:
      'Kyllä, Valitse on täysin ilmainen käyttää. Emme veloita sinulta mitään vertailusta tai palveluidemme käytöstä. Rahoitamme toimintamme kumppanuusmaksuilla, jotka eivät vaikuta vertailutuloksiin.',
  },
  {
    question: 'Miten Valitse eroaa muista vertailupalveluista?',
    answer:
      'Valitse on monipuolinen vertailupalvelu. Yhdestä paikasta voit vertailla sähköä, lainoja, vakuutuksia, liittymiä ja paljon muuta. Pyrimme näyttämään kattavasti eri palveluntarjoajat.',
  },
  {
    question: 'Miten vertailutulokset määräytyvät?',
    answer:
      'Vertailutulokset perustuvat avoimiin kriteereihin kuten hintaan ja ominaisuuksiin. Kumppanuudet eivät vaikuta tulosten järjestykseen. Lue lisää menetelmästämme Menetelmä-sivulta.',
  },
  {
    question: 'Voinko luottaa Valitseen?',
    answer:
      'Valitse on suomalainen yritys. Pyrimme näyttämään kaikki relevantit palveluntarjoajat, ja vertailumenetelmämme on avoimesti dokumentoitu.',
  },
  {
    question: 'Mitä kaikkea voin vertailla?',
    answer:
      'Valitseen kuuluu useita erikoistuneita vertailupalveluita: sähkösopimukset, lainat ja luotot, vakuutukset, puhelinliittymät, kotipalvelut, tarjoukset ja asunnot. Jokaisella palvelulla on oma sivustonsa, joka on erikoistunut kyseiseen aihealueeseen.',
  },
  {
    question: 'Miten pääsen alkuun?',
    answer:
      'Valitse palvelu, jota haluat vertailla, ja seuraa ohjeita. Useimpiin vertailuihin tarvitset vain muutaman perustiedon — tulokset saat muutamassa sekunnissa.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <h2 className="section-title">
              Usein kysytyt kysymykset
            </h2>
            <p className="section-subtitle">
              Vastauksia yleisimpiin kysymyksiin Valitsesta.
            </p>
          </div>
        </ScrollReveal>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={i} delay={i * 60}>
                <div>
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between py-5 text-left group min-h-[44px]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-slate-900 group-hover:text-accent transition-colors pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 pb-5' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
