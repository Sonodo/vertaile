import type { Metadata } from 'next';
import { Settings } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Evästekäytäntö',
  description: `${SITE_NAME}n evästekäytäntö. Tietoa käyttämistämme evästeistä ja niiden hallinnasta.`,
  alternates: {
    canonical: `${SITE_URL}/evasteet`,
  },
};

export default function CookiePolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Evästekäytäntö' },
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
                { label: 'Etusivu', href: '/' },
                { label: 'Evästekäytäntö' },
              ]}
            />
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0891B2]/10">
                <Settings className="h-6 w-6 text-[#0891B2]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Evästekäytäntö</h1>
                <p className="text-sm text-slate-500">Päivitetty 28.3.2026</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-[#0891B2]">
              <h2>1. Mitä evästeet ovat</h2>
              <p>
                Evästeet (cookies) ovat pieniä tekstitiedostoja, jotka verkkosivusto tallentaa
                selaimellesi, kun vierailet sivustolla. Evästeiden avulla sivusto voi muistaa
                asetuksiasi ja tarjota sinulle paremman käyttökokemuksen.
              </p>
              <p>
                Evästeet eivät vahingoita laitettasi eivätkä sisällä viruksia tai haittaohjelmia.
                Niitä käytetään laajasti kaikilla verkkosivustoilla.
              </p>

              <h2>2. Käyttämämme evästeet</h2>
              <p>
                Alla on luettelo kaikista evästeistä, joita Valitse-palvelu käyttää:
              </p>

              {/* Cookie table */}
              <div className="not-prose my-6 overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-4 py-3 font-semibold text-slate-900">Eväste</th>
                      <th className="px-4 py-3 font-semibold text-slate-900">Tyyppi</th>
                      <th className="px-4 py-3 font-semibold text-slate-900">Tarkoitus</th>
                      <th className="px-4 py-3 font-semibold text-slate-900">Voimassaolo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-mono text-xs text-slate-700">_ga</td>
                      <td className="px-4 py-3 text-slate-600">Analytiikka</td>
                      <td className="px-4 py-3 text-slate-600">
                        Google Analytics — käytetään käyttäjien erottamiseen toisistaan anonymisoidusti.
                      </td>
                      <td className="px-4 py-3 text-slate-600">2 vuotta</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <td className="px-4 py-3 font-mono text-xs text-slate-700">_ga_*</td>
                      <td className="px-4 py-3 text-slate-600">Analytiikka</td>
                      <td className="px-4 py-3 text-slate-600">
                        Google Analytics 4 — käytetään istunnon tilan ylläpitämiseen.
                      </td>
                      <td className="px-4 py-3 text-slate-600">2 vuotta</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="px-4 py-3 font-mono text-xs text-slate-700">_gid</td>
                      <td className="px-4 py-3 text-slate-600">Analytiikka</td>
                      <td className="px-4 py-3 text-slate-600">
                        Google Analytics — käytetään käyttäjien erottamiseen toisistaan 24 tunnin aikaikkunassa.
                      </td>
                      <td className="px-4 py-3 text-slate-600">24 tuntia</td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-slate-50/50">
                      <td className="px-4 py-3 font-mono text-xs text-slate-700">cookie_consent</td>
                      <td className="px-4 py-3 text-slate-600">Välttämätön</td>
                      <td className="px-4 py-3 text-slate-600">
                        Tallentaa käyttäjän evästeasetukset — mitä evästekategorioita käyttäjä on hyväksynyt.
                      </td>
                      <td className="px-4 py-3 text-slate-600">1 vuosi</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>3. Välttämättömät evästeet</h2>
              <p>
                Välttämättömät evästeet ovat tarpeen sivuston perustoimintojen
                mahdollistamiseksi. Näitä ovat esimerkiksi evästeasetukset tallentava eväste.
                Välttämättömiä evästeitä ei voi poistaa käytöstä, sillä sivusto ei
                toimisi ilman niitä.
              </p>

              <h2>4. Analytiikkaevästeet</h2>
              <p>
                Käytämme Google Analytics 4 -palvelua ymmärtääksemme, miten sivustoamme
                käytetään. Analytiikkaevästeet keräävät tietoa anonymisoidusti — emme voi
                yksilöidä yksittäisiä käyttäjiä analytiikkatietojen perusteella.
              </p>
              <p>
                Analytiikkatiedot auttavat meitä parantamaan palvelua: ymmärrämme, mitkä
                sivut ovat suosittuja, miten käyttäjät navigoivat sivustolla ja missä
                kohtaamme ongelmia. IP-osoitteet anonymisoidaan ennen tallentamista.
              </p>
              <p>
                Analytiikkaevästeet otetaan käyttöön vasta, kun olet antanut niihin
                suostumuksesi evästebannerin kautta.
              </p>

              <h2>5. Evästeiden hallinta</h2>
              <p>
                Voit hallita evästeasetuksiasi usealla tavalla:
              </p>
              <ul>
                <li>
                  <strong>Evästebanneri</strong> — Kun vierailet sivustollamme ensimmäistä
                  kertaa, voit valita, mitkä evästekategoriat hyväksyt. Voit muuttaa valintaasi
                  milloin tahansa.
                </li>
                <li>
                  <strong>Selainasetukset</strong> — Voit hallita evästeitä myös selaimesi
                  asetuksista. Useimmat selaimet mahdollistavat evästeiden estämisen tai
                  poistamisen.
                </li>
              </ul>
              <p>Ohjeet evästeiden hallintaan yleisimmissä selaimissa:</p>
              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/fi/kb/evasteet"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/fi-fi/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/fi-fi/microsoft-edge/evästeiden-poistaminen-microsoft-edgessä-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p>
                Huomioithan, että evästeiden estäminen voi vaikuttaa sivuston toimintaan ja
                käyttökokemukseen.
              </p>

              <h2>6. Lisätietoja</h2>
              <p>
                Lisätietoja henkilötietojen käsittelystä löydät{' '}
                <a href="/tietosuoja">tietosuojaselosteestamme</a>.
              </p>
              <p>
                Jos sinulla on kysyttävää evästekäytännöstämme, ota meihin yhteyttä
                osoitteessa{' '}
                <a href="mailto:info@valitse.fi">info@valitse.fi</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
