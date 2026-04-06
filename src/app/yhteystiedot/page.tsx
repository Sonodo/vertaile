import type { Metadata } from 'next';
import { Mail, Clock, Building2, ChevronDown } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: `Yhteystiedot — ${SITE_NAME}`,
  description:
    'Ota yhteyttä Valitseen. Lähetä viesti, anna palautetta tai ilmoita virheestä. Vastaamme 1–2 arkipäivän kuluessa.',
  alternates: { canonical: `${SITE_URL}/yhteystiedot` },
};

const contactFaqs = [
  {
    question: 'Miten voin ilmoittaa virheellisistä tiedoista?',
    answer:
      'Voit ilmoittaa virheellisistä tiedoista yhteydenottolomakkeella valitsemalla aiheeksi "Virheraportti". Kerro selkeästi mikä tieto on virheellinen, missä palvelussa ja mikä on oikea tieto. Korjaamme virheelliset tiedot mahdollisimman pian.',
  },
  {
    question: 'Kuinka nopeasti saanko vastauksen?',
    answer:
      'Vastaamme viesteihin 1–2 arkipäivän kuluessa. Kiireelliset virheraportit käsitellään mahdollisuuksien mukaan saman päivän aikana.',
  },
  {
    question: 'Miten palveluntarjoaja voi liittyä vertailuun?',
    answer:
      'Palveluntarjoajat voivat ottaa yhteyttä osoitteeseen info@valitse.fi aiheella "Yhteistyö". Kerromme mielellämme lisää kumppanuusmahdollisuuksista. Huomioithan, että näytämme vertailutuloksissa myös ei-kumppaneita — kumppanuus ei ole edellytys vertailussa mukana olemiselle.',
  },
];

export default function YhteystiedotPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Yhteystiedot', url: '/yhteystiedot' },
  ]);

  const faqSchema = generateFAQSchema(contactFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[{ label: 'Etusivu', href: '/' }, { label: 'Yhteystiedot' }]}
        />

        {/* Hero */}
        <section className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0891B2]/10">
            <Mail className="h-8 w-8 text-[#0891B2]" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1F3F] sm:text-4xl lg:text-5xl">
            Ota yhteyttä
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Haluatko antaa palautetta, ilmoittaa virheestä tai kysyä palvelustamme?
            Otamme mielellämme vastaan viestisi.
          </p>
        </section>

        {/* Two-column layout */}
        <section className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Contact Info */}
          <div className="space-y-6">
            {/* Email card */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0891B2]/10">
                  <Mail className="h-5 w-5 text-[#0891B2]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1F3F]">Sähköposti</h3>
                  <a
                    href="mailto:info@valitse.fi"
                    className="text-sm text-[#0891B2] hover:underline"
                  >
                    info@valitse.fi
                  </a>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Voit myös lähettää meille viestin suoraan sähköpostilla. Käytä
                yhteydenottolomaketta nopeampaan palveluun.
              </p>
            </div>

            {/* Response time card */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
                  <Clock className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1F3F]">Vastausaika</h3>
                  <span className="text-sm text-slate-600">1–2 arkipäivää</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Pyrimme vastaamaan kaikkiin viesteihin 1–2 arkipäivän kuluessa.
                Kiireelliset virheraportit käsitellään mahdollisuuksien mukaan
                nopeammin.
              </p>
            </div>

            {/* Company info card */}
            <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                  <Building2 className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0B1F3F]">Yritystiedot</h3>
                  <span className="text-sm text-slate-600">Sonodo</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">
                Valitse on Sonodo-yhtiön tuottama palvelu. Sonodo kehittää datalähtöisiä
                vertailu- ja tietopalveluita suomalaisille kuluttajille.
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-[#0B1F3F]">
              Lähetä viesti
            </h2>
            <ContactForm />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-[#0B1F3F]">
            Usein kysyttyä
          </h2>
          <div className="mx-auto max-w-3xl space-y-3">
            {contactFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl bg-white shadow-sm ring-1 ring-slate-200"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-left font-medium text-[#0B1F3F] marker:[font-size:0] [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="border-t border-slate-100 px-6 py-4 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
