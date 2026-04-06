import type { Metadata } from 'next';
import {
  FileSearch,
  Database,
  Scale,
  BarChart3,
  RefreshCw,
  Handshake,
  MessageSquare,
} from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: `Menetelmä — Miten vertailumme toimii | ${SITE_NAME}`,
  description:
    'Lue miten Valitse kerää tietoja, vertailee palveluita ja varmistaa puolueettomuuden. Läpinäkyvä menetelmä ja ansaintamalli.',
  alternates: { canonical: `${SITE_URL}/menetelma` },
};

const sections = [
  {
    id: 'tietojen-keraaminen',
    icon: Database,
    title: 'Tietojen kerääminen',
    content: [
      'Valitse kerää tiedot julkisista ja luotettavista lähteistä. Käytämme palveluntarjoajien verkkosivuja, julkisia rekistereitä (kuten Energiaviraston sähkövertailu, Tilastokeskuksen hintatiedot ja Maanmittauslaitoksen kauppahinnat) sekä palveluntarjoajien julkisesti saatavilla olevia hinnastoja.',
      'Emme koskaan käytä maksumuuria takana olevia tai salassa pidettäviä tietoja. Kaikki lähteemme ovat julkisesti saatavilla ja tarkistettavissa.',
      'Automaattiset järjestelmämme keräävät ja päivittävät tietoja säännöllisesti, mutta toimituksellinen tiimimme tarkistaa tiedot ennen julkaisua.',
    ],
  },
  {
    id: 'puolueettomuus',
    icon: Scale,
    title: 'Puolueettomuus',
    content: [
      'Valitse näyttää aina kaikki vaihtoehdot — sekä kumppaneidemme tuotteet että ne palveluntarjoajat, joiden kanssa meillä ei ole kaupallista yhteistyötä. Tämä on periaatteemme ydin ja erottaa meidät useimmista vertailusivustoista.',
      'Kaupalliset kumppanuudet eivät koskaan vaikuta tuotteiden tai palveluiden järjestykseen vertailutaulukoissa. Oletusarvoisesti tulokset järjestetään kuluttajalle edullisimman vaihtoehdon mukaan (esimerkiksi halvimman hinnan tai todellisen vuosikoron mukaan).',
      'Kumppanuussuhde voi näkyä ainoastaan merkintänä "Kumppani" tuotteen yhteydessä, mutta tämä ei vaikuta sen sijoitukseen. Ei-kumppanien tuotteet näytetään aina samassa listassa.',
    ],
  },
  {
    id: 'vertailumenetelma',
    icon: BarChart3,
    title: 'Vertailumenetelmä',
    content: [
      'Jokainen vertailupalvelumme käyttää vertailulle ominaista metodologiaa. Sähkövertailussa vertailemme sähkösopimuksia kuluttajan ilmoittaman vuosikulutuksen ja sijainnin perusteella. Lainavertailussa vertailemme todellisia vuosikorkoja (TAE), jotka sisältävät kaikki lainan kulut.',
      'Oletusarvoisesti tulokset järjestetään hinnalla tai kustannuksella. Käyttäjä voi aina muuttaa järjestystä haluamallaan tavalla — esimerkiksi asiakastyytyväisyyden, kattavuuden tai yrityksen koon mukaan.',
      'Emme käytä subjektiivisia "tähtiarvioita" tai pisteytyksiä, jotka voisivat olla harhaanjohtavia. Sen sijaan näytämme objektiivista dataa ja annamme kuluttajan tehdä päätöksen itse.',
    ],
  },
  {
    id: 'paivitystahti',
    icon: RefreshCw,
    title: 'Päivitystahti',
    content: [
      'Pidämme huolen siitä, että tiedot ovat ajan tasalla. Sähkön hinnat tarkistetaan viikoittain, pörssisähkön hinta päivittyy reaaliajassa. Lainojen korot ja ehdot tarkistetaan vähintään kuukausittain.',
      'Asuntojen hintatiedot perustuvat viimeisimpiin saatavilla oleviin tilastoihin, jotka päivittyvät kvartaaleittain. Kotipalveluyritysten tiedot ja arvostelut päivittyvät jatkuvasti.',
      'Jokaisen vertailutaulukon yhteydessä näytetään milloin tiedot on viimeksi päivitetty, jotta voit arvioida tietojen ajankohtaisuuden.',
    ],
  },
  {
    id: 'kumppanuudet',
    icon: Handshake,
    title: 'Kumppanuudet ja ansaintamalli',
    content: [
      'Valitse ansaitsee pääasiassa affiliate-komissioista. Kun klikkaat kumppanimme tuotetta ja teet sopimuksen tai ostoksen, saamme siitä pienen provision. Tämä ei koskaan vaikuta tuotteen hintaan sinulle — hinta on aina sama kuin suoraan palveluntarjoajan sivulla.',
      'Tärkeintä: näytämme aina myös ne palveluntarjoajat, joiden kanssa meillä ei ole kumppanuutta. Jos markkinoiden edullisin vaihtoehto on ei-kumppanimme, se näytetään ensimmäisenä. Kuluttajan etu menee aina ansaintamallimme edelle.',
      'Kumppanuudet merkitään selkeästi jokaisen tuotteen yhteydessä. Emme koskaan piilota sitä, onko kyseessä kaupallinen yhteistyö vai ei.',
    ],
  },
  {
    id: 'palaute',
    icon: MessageSquare,
    title: 'Palaute ja korjaukset',
    content: [
      'Inhimilliset virheet ja tekniset häiriöt ovat mahdollisia. Jos huomaat virheellisen tiedon palvelussamme, voit ilmoittaa siitä meille osoitteeseen info@valitse.fi. Käsittelemme virheraporttejamme nopeasti ja korjaamme virheelliset tiedot mahdollisimman pian.',
      'Otamme mielellämme vastaan myös palautetta ja kehitysehdotuksia. Haluamme rakentaa palvelun, joka palvelee suomalaisia kuluttajia mahdollisimman hyvin.',
      'Palveluntarjoajat voivat myös ilmoittaa meille, jos heidän tietonsa ovat vanhentuneet tai virheelliset. Päivitämme tiedot tarkistuksen jälkeen.',
    ],
  },
];

export default function MenetelmaPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Menetelmä', url: '/menetelma' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Etusivu', href: '/' }, { label: 'Menetelmä' }]} />

        {/* Hero */}
        <section className="mb-16 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0891B2]/10">
            <FileSearch className="h-8 w-8 text-[#0891B2]" />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-[#0B1F3F] sm:text-4xl lg:text-5xl">
            Miten vertailumme toimii
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Läpinäkyvyys on palvelumme perusta. Täällä kerromme avoimesti miten keräämme
            tietoja, miten vertailumme toimii ja miten ansaitsemme.
          </p>
        </section>

        {/* Table of Contents */}
        <nav className="mb-12 rounded-xl bg-slate-50 p-6">
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
            Sisällysluettelo
          </h2>
          <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-[#0891B2]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0891B2]/10 text-xs font-semibold text-[#0891B2]">
                    {index + 1}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="mx-auto max-w-3xl space-y-16">
          {sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0891B2]/10">
                  <section.icon className="h-5 w-5 text-[#0891B2]" />
                </div>
                <h2 className="text-xl font-bold text-[#0B1F3F] sm:text-2xl">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4">
                {section.content.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-relaxed text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Bottom CTA */}
        <section className="mt-16 rounded-2xl bg-slate-50 p-8 text-center sm:p-10">
          <h2 className="text-xl font-bold text-[#0B1F3F]">Onko sinulla kysyttävää?</h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-slate-600">
            Jos sinulla on kysymyksiä menetelmästämme, tietojen oikeellisuudesta tai
            mistä tahansa muusta, ota yhteyttä. Vastaamme mielellämme.
          </p>
          <a
            href="/yhteystiedot"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0B1F3F] px-5 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ota yhteyttä
          </a>
        </section>
      </div>
    </>
  );
}
