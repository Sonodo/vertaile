import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, Scale, Globe, Users, ArrowRight } from 'lucide-react';
import { spokes } from '@/data/spokes';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import SpokeIcon from '@/components/ui/SpokeIcon';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: `Tietoa Valitsesta — ${SITE_NAME}`,
  description:
    'Valitse on monipuolinen suomalainen vertailupalvelu. Autamme suomalaisia tekemään parempia päätöksiä läpinäkyvällä ja puolueettomalla vertailutiedolla.',
  alternates: { canonical: `${SITE_URL}/tietoa` },
};

const values = [
  {
    icon: Scale,
    title: 'Puolueeton',
    description:
      'Näytämme kaikki vaihtoehdot — myös ne, joista emme saa komissiota. Kumppanuudet eivät koskaan vaikuta tuotteiden järjestykseen tai arviointiin. Vertailumme perustuu aina objektiiviseen dataan.',
  },
  {
    icon: Globe,
    title: 'Kattava',
    description:
      'Yhdeksän eri vertailupalvelua kattaa suomalaisen arjen tärkeimmät osa-alueet: asumisen, energian, lainat, vakuutukset, puhelinliittymät, tarjoukset, kotipalvelut, lakiasiat ja talouden hallinnan.',
  },
  {
    icon: Users,
    title: 'Suomalainen',
    description:
      'Palvelumme on rakennettu suomalaisille, suomalaisesta näkökulmasta. Kaikki sisältö on suomeksi ja kaikki vertailtavat palvelut toimivat Suomessa. Tunnemme suomalaisen markkinan.',
  },
];

export default function TietoaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Tietoa', url: '/tietoa' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Tietoa' }]} />

        {/* Hero */}
        <section className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0891B2]/10">
            <Shield className="h-8 w-8 text-[#0891B2]" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1F3F] sm:text-4xl lg:text-5xl">
            Tietoa Valitsesta
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Autamme suomalaisia tekemään parempia päätöksiä läpinäkyvällä,
            puolueettomalla ja kattavalla vertailutiedolla.
          </p>
        </section>

        {/* Tehtävämme */}
        <section className="mb-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-[#0B1F3F]">Tehtävämme</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-slate-600 leading-relaxed">
                Valitse syntyi yksinkertaisesta ideasta: suomalaisten pitäisi pystyä
                vertailemaan palveluita ja tuotteita yhdestä luotettavasta paikasta.
                Liian usein vertailusivustot näyttävät vain kumppaneidensa tuotteita,
                jolloin kuluttaja ei saa kattavaa kuvaa markkinasta.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Me teemme asiat toisin. Valitse näyttää aina kaikki vaihtoehdot — myös
                ne palveluntarjoajat, joiden kanssa meillä ei ole kaupallista
                yhteistyötä. Uskomme, että vain aidosti kattava vertailu palvelee
                kuluttajan etua. Kun näytämme koko markkinan, sinä voit tehdä parhaan
                mahdollisen päätöksen.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Tavoitteemme on olla Suomen luotetuin vertailupalvelu — paikka, jonne
                suomalaiset tulevat ensin kun haluavat vertailla sähköä, lainoja,
                vakuutuksia, asuntoja tai mitä tahansa arjen palveluita. Rakennamme
                luottamusta läpinäkyvyydellä: kerromme avoimesti miten ansaitsemme,
                miten vertailumme toimii ja miten tiedot kerätään.
              </p>
            </div>
          </div>
        </section>

        {/* Miten erotumme */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-[#0B1F3F]">
            Miten erotumme
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0891B2]/10">
                  <value.icon className="h-6 w-6 text-[#0891B2]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-[#0B1F3F]">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Palvelumme */}
        <section className="mb-16">
          <h2 className="mb-8 text-center text-2xl font-bold text-[#0B1F3F]">
            Palvelumme
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {spokes.map((spoke) => (
              <Link
                key={spoke.id}
                href={`/palvelut/${spoke.slug}`}
                className="card-hover-lift group rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: spoke.colorLight }}
                  >
                    <SpokeIcon
                      iconName={spoke.iconName}
                      style={{ color: spoke.color }}
                      size={20}
                    />
                  </div>
                  <h3 className="text-sm font-semibold text-[#0B1F3F] group-hover:text-[#0891B2]">
                    {spoke.name}
                  </h3>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  {spoke.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-[#0891B2]">
                  Lue lisää
                  <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Yhteystiedot */}
        <section className="mb-8 rounded-2xl bg-slate-50 p-8 sm:p-10">
          <h2 className="mb-4 text-2xl font-bold text-[#0B1F3F]">Yhteystiedot</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">
              Valitse on{' '}
              <strong className="text-[#0B1F3F]">Sonodo</strong>-yhtiön tuottama
              palvelu. Olemme suomalainen teknologiayritys, joka kehittää
              datalähtöisiä palveluita kuluttajien hyödyksi.
            </p>
            <p className="mt-3 text-slate-600">
              Voit ottaa meihin yhteyttä sähköpostilla osoitteessa{' '}
              <a
                href="mailto:info@valitse.fi"
                className="font-medium text-[#0891B2] no-underline hover:underline"
              >
                info@valitse.fi
              </a>
              . Vastaamme viesteihin 1–2 arkipäivän kuluessa.
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="/yhteystiedot"
              className="inline-flex items-center gap-2 rounded-lg bg-[#0B1F3F] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Ota yhteyttä
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
