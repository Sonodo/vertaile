import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Käyttöehdot',
  description: `${SITE_NAME}-palvelun käyttöehdot. Lue ehdot ennen palvelun käyttöä.`,
  alternates: {
    canonical: `${SITE_URL}/kayttoehdot`,
  },
};

export default function TermsOfServicePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Käyttöehdot' },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-slate-50">
        <section className="bg-[#0B1F3F] text-white">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Käyttöehdot' },
              ]}
            />
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0891B2]/10">
                <FileText className="h-6 w-6 text-[#0891B2]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Käyttöehdot</h1>
                <p className="text-sm text-slate-500">Päivitetty 28.3.2026</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-[#0891B2]">
              <p>
                Nämä käyttöehdot koskevat Valitse-palvelua (valitse.fi) ja siihen liittyviä
                alapalveluita. Käyttämällä palvelua hyväksyt nämä käyttöehdot.
              </p>

              <h2>1. Palvelun kuvaus</h2>
              <p>
                Valitse on ilmainen vertailupalvelualusta, joka auttaa kuluttajia vertaamaan
                erilaisia palveluita ja tuotteita Suomessa. Palvelu kokoaa yhteen useita
                vertailualustoja, kuten sähkösopimukset, lainat, vakuutukset, asunnot,
                kotipalvelut, tarjoukset, lakipalvelut ja henkilökohtaisen talouden hallinnan.
              </p>
              <p>
                Palvelun tavoitteena on tarjota puolueettomia vertailutietoja, joiden avulla
                kuluttajat voivat tehdä tietoon perustuvia päätöksiä. Näytämme kaikki
                vaihtoehdot — myös ne, joista emme saa komissiota.
              </p>

              <h2>2. Käyttöoikeus</h2>
              <p>
                Valitse-palvelun käyttö on ilmaista, eikä peruskäyttöön vaadita
                rekisteröitymistä. Palvelu on tarkoitettu henkilökohtaiseen, ei-kaupalliseen
                käyttöön. Palvelun sisältöä ei saa kopioida, muokata tai jakaa
                ilman kirjallista lupaa.
              </p>
              <p>
                Pidätämme oikeuden rajoittaa palvelun käyttöä, jos havaitsemme
                väärinkäyttöä, kuten automaattista tietojen keräämistä tai palvelun kuormittamista.
              </p>

              <h2>3. Tietojen oikeellisuus</h2>
              <p>
                Pyrimme varmistamaan, että palvelussa esitetyt tiedot ovat mahdollisimman
                ajantasaisia ja paikkansapitäviä. Hinnat, ehdot ja muut tiedot voivat kuitenkin
                muuttua ilman eri ilmoitusta palveluntarjoajien toimesta.
              </p>
              <p>
                Suosittelemme aina tarkistamaan voimassaolevat hinnat ja ehdot suoraan
                palveluntarjoajalta ennen lopullista päätöstä. Valitse ei vastaa
                palveluntarjoajien tietojen oikeellisuudesta.
              </p>

              <h2>4. Vastuunrajoitukset</h2>
              <p>
                Valitse on vertailupalvelu eikä neuvontapalvelu. Emme ole vastuussa
                päätöksistä, jotka käyttäjä tekee palvelun tietojen perusteella. Valitse
                ei ole osapuoli käyttäjän ja palveluntarjoajan välisissä sopimuksissa.
              </p>
              <p>
                Palvelu tarjotaan "sellaisena kuin se on" ilman mitään takuuta palvelun
                keskeytymättömyydestä, virheettömyydestä tai soveltuvuudesta tiettyyn
                tarkoitukseen. Emme vastaa palvelun käytöstä aiheutuneista välittömistä tai
                välillisistä vahingoista.
              </p>

              <h2>5. Kumppanuudet</h2>
              <p>
                Osa palvelussa esitetyistä linkeistä on kumppanuuslinkkejä (affiliate-linkkejä),
                joiden kautta Valitse voi saada komissiota, jos käyttäjä tekee oston tai
                sopimuksen palveluntarjoajan kanssa.
              </p>
              <p>
                Kumppanuuslinkki on aina merkitty selkeästi. Kumppanuus ei vaikuta
                vertailujärjestykseen tai arviointeihin — kaikki palveluntarjoajat
                arvioidaan samoilla kriteereillä. Näytämme myös palveluntarjoajat, joiden
                kanssa meillä ei ole kumppanuussopimusta.
              </p>

              <h2>6. Immateriaalioikeudet</h2>
              <p>
                Kaikki Valitse-palvelun sisältö, mukaan lukien tekstit, grafiikat,
                kuvat, logot, laskurit, ohjelmistokoodi ja tietokannat, ovat Sonodon
                omaisuutta ja suojattuja tekijänoikeuslailla ja muilla
                immateriaalioikeuslaeilla.
              </p>
              <p>
                Sisällön kopioiminen, jakelu, muokkaaminen tai kaupallinen hyödyntäminen
                ilman etukäteen annettua kirjallista lupaa on kielletty.
              </p>

              <h2>7. Linkit ulkopuolisiin sivustoihin</h2>
              <p>
                Valitse sisältää linkkejä kolmansien osapuolien verkkosivustoille.
                Emme hallinnoi näitä sivustoja emmekä ole vastuussa niiden sisällöstä,
                tietosuojakäytännöistä tai toiminnasta. Kolmansien osapuolien sivustoille
                siirtyminen tapahtuu käyttäjän omalla vastuulla.
              </p>

              <h2>8. Evästeet ja yksityisyys</h2>
              <p>
                Käytämme evästeitä palvelun toiminnan varmistamiseksi ja käyttökokemuksen
                parantamiseksi. Lisätietoja evästekäytännöstämme löydät{' '}
                <a href="/evasteet">evästekäytännöstä</a>.
              </p>
              <p>
                Henkilötietojen käsittelystä kerrotaan tarkemmin{' '}
                <a href="/tietosuoja">tietosuojaselosteessamme</a>.
              </p>

              <h2>9. Muutokset käyttöehtoihin</h2>
              <p>
                Pidätämme oikeuden muuttaa näitä käyttöehtoja milloin tahansa.
                Muutokset astuvat voimaan, kun ne on julkaistu tällä sivulla. Merkittävistä
                muutoksista ilmoitetaan palvelun käyttöliittymässä.
              </p>
              <p>
                Palvelun käytön jatkaminen muutosten julkaisemisen jälkeen katsotaan
                hyväksynnäksi muutetuille käyttöehdoille. Jos et hyväksy muutettuja
                ehtoja, sinun tulee lopettaa palvelun käyttö.
              </p>

              <h2>10. Sovellettava laki</h2>
              <p>
                Näihin käyttöehtoihin sovelletaan Suomen lakia. Mahdolliset erimielisyydet
                pyritään ratkaisemaan ensisijaisesti neuvottelemalla. Jos neuvotteluratkaisu
                ei ole mahdollinen, erimielisyydet ratkaistaan Helsingin käräjäoikeudessa.
              </p>
              <p>
                Kuluttajalla on aina oikeus saattaa riita-asia kuluttajariitalautakunnan
                (KRIL) käsiteltäväksi. Lisätietoja:{' '}
                <a href="https://www.kuluttajariita.fi" target="_blank" rel="noopener noreferrer">
                  kuluttajariita.fi
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
