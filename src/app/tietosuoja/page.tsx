import type { Metadata } from 'next';
import { Shield } from 'lucide-react';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { generateBreadcrumbSchema } from '@/lib/seo';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Tietosuojaseloste',
  description: `${SITE_NAME}n tietosuojaseloste. Kerromme, miten keräämme, käsittelemme ja suojaamme henkilötietojasi.`,
  alternates: {
    canonical: `${SITE_URL}/tietosuoja`,
  },
};

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Etusivu', url: '/' },
    { name: 'Tietosuojaseloste' },
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
                { label: 'Tietosuojaseloste' },
              ]}
            />
          </div>
        </section>

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0891B2]/10">
                <Shield className="h-6 w-6 text-[#0891B2]" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Tietosuojaseloste</h1>
                <p className="text-sm text-slate-500">Päivitetty 28.3.2026</p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-a:text-[#0891B2]">
              <h2>1. Rekisterinpitäjä</h2>
              <p>
                <strong>Sonodo</strong><br />
                Helsinki, Suomi
              </p>
              <p>
                Tämä tietosuojaseloste koskee Valitse-palvelua (valitse.fi) ja siihen liittyviä
                alapalveluita. Olemme sitoutuneet suojaamaan käyttäjiemme yksityisyyttä ja
                noudattamaan EU:n yleistä tietosuoja-asetusta (GDPR) sekä Suomen
                tietosuojalainsäädäntöä.
              </p>

              <h2>2. Henkilötietojen käsittelyn tarkoitus</h2>
              <p>Käsittelemme henkilötietoja seuraaviin tarkoituksiin:</p>
              <ul>
                <li>
                  <strong>Palvelun tarjoaminen</strong> — Vertailupalvelun toimittaminen ja
                  käyttökokemuksen parantaminen.
                </li>
                <li>
                  <strong>Viestintä</strong> — Yhteydenottopyyntöihin vastaaminen.
                </li>
                <li>
                  <strong>Analytiikka</strong> — Palvelun käytön seuranta ja analysointi
                  palvelun kehittämistä varten. Analytiikkatiedot ovat anonymisoituja.
                </li>
                <li>
                  <strong>Palvelun kehittäminen</strong> — Käyttäjäkokemuksen ja palvelun
                  laadun jatkuva parantaminen kerättyjen tietojen perusteella.
                </li>
              </ul>

              <h2>3. Kerättävät tiedot</h2>
              <p>Keräämme seuraavia tietoja:</p>
              <ul>
                <li>
                  <strong>Yhteydenottolomakkeen tiedot</strong> — Nimi, sähköpostiosoite ja
                  viesti, kun käytät yhteydenottolomaketta. Näitä tietoja käytetään ainoastaan
                  yhteydenottoosi vastaamiseen.
                </li>
                <li>
                  <strong>Analytiikkatiedot</strong> — Google Analytics 4:n keräämät
                  anonymisoidut tiedot, kuten sivunkatselut, istunnon kesto, käytetty laite ja
                  selain sekä likimääräinen maantieteellinen sijainti. Emme kerää
                  yksilöiviä tunnistetietoja analytiikan avulla.
                </li>
              </ul>

              <h2>4. Tietojen säilytysaika</h2>
              <ul>
                <li>
                  <strong>Yhteydenottolomakkeen tiedot</strong> — Säilytämme yhteydenottotietoja
                  enintään 2 vuotta yhteydenoton vastaanottamisesta, minkä jälkeen tiedot
                  poistetaan.
                </li>
                <li>
                  <strong>Analytiikkatiedot</strong> — Google Analyticsin keräämien tietojen
                  säilytysaika noudattaa Googlen omaa tietosuojakäytäntöä. Oletusasetus
                  on 14 kuukautta.
                </li>
              </ul>

              <h2>5. Tietojen luovutus</h2>
              <p>
                Emme myy, vuokraa tai muutoin luovuta henkilötietojasi kolmansille osapuolille
                markkinointitarkoituksiin. Tietoja voidaan jakaa seuraaville palveluntarjoajille
                palvelun toteuttamista varten:
              </p>
              <ul>
                <li>
                  <strong>Google Analytics (Google LLC)</strong> — Verkkoanalytiikkapalvelu,
                  joka kerää anonymisoitua käyttötietoa palvelun kehittämistä varten.
                </li>
                <li>
                  <strong>Resend</strong> — Sähköpostipalvelu, jota käytetään
                  yhteydenottolomakkeen viestien välittämiseen.
                </li>
              </ul>
              <p>
                Kumpikin palveluntarjoaja käsittelee tietoja omien tietosuojakäytäntöjensä
                mukaisesti ja toimii tietojen käsittelijänä meidän lukuumme.
              </p>

              <h2>6. Evästeet</h2>
              <p>
                Käytämme evästeitä palvelun toiminnan varmistamiseksi ja käyttökokemuksen
                parantamiseksi. Tarkemmat tiedot käyttämistämme evästeistä, niiden
                tarkoituksesta ja voimassaoloajasta löydät{' '}
                <a href="/evasteet">evästekäytännöstämme</a>.
              </p>

              <h2>7. Tietojen siirto EU:n ulkopuolelle</h2>
              <p>
                Google Analytics saattaa siirtää tietoja Euroopan talousalueen ulkopuolelle,
                mukaan lukien Yhdysvaltoihin. Tiedonsiirto perustuu EU:n komission hyväksymiin
                vakiolausekkein (Standard Contractual Clauses, SCC) ja Googlen
                tietosuojasertifiointeihin, jotka takaavat riittävän tietosuojan tason GDPR:n
                vaatimusten mukaisesti.
              </p>

              <h2>8. Rekisteröidyn oikeudet</h2>
              <p>
                Sinulla on GDPR:n mukaisesti seuraavat oikeudet henkilötietojesi suhteen:
              </p>
              <ul>
                <li>
                  <strong>Oikeus saada pääsy tietoihin</strong> — Voit pyytää kopion kaikista
                  sinusta kerätystä henkilötiedoista.
                </li>
                <li>
                  <strong>Oikeus tietojen oikaisemiseen</strong> — Voit pyytää virheellisten
                  tai puutteellisten tietojen korjaamista.
                </li>
                <li>
                  <strong>Oikeus tietojen poistamiseen</strong> — Voit pyytää henkilötietojesi
                  poistamista, kun käsittelylle ei ole enää perustetta.
                </li>
                <li>
                  <strong>Oikeus käsittelyn rajoittamiseen</strong> — Voit pyytää
                  henkilötietojesi käsittelyn rajoittamista tietyissä tilanteissa.
                </li>
                <li>
                  <strong>Oikeus tietojen siirrettävyyteen</strong> — Voit pyytää
                  henkilötietosi siirrettäväksi toiseen palveluun koneluettavassa muodossa.
                </li>
                <li>
                  <strong>Oikeus vastustaa käsittelyä</strong> — Voit vastustaa
                  henkilötietojesi käsittelyä, erityisesti suoramarkkinointitarkoituksiin.
                </li>
              </ul>
              <p>
                Voit käyttää oikeuksiasi ottamalla meihin yhteyttä{' '}
                <a href="/yhteystiedot">yhteydenottosivullamme</a>. Vastaamme pyyntöösi
                30 päivän kuluessa.
              </p>
              <p>
                Sinulla on myös oikeus tehdä valitus tietosuojavaltuutetun toimistolle, jos
                katsot, että henkilötietojesi käsittelyssä on rikottu tietosuojalainsäädäntöä.
                Tietosuojavaltuutetun toimiston yhteystiedot:{' '}
                <a href="https://tietosuoja.fi" target="_blank" rel="noopener noreferrer">
                  tietosuoja.fi
                </a>
              </p>

              <h2>9. Tietosuojaselosteen muutokset</h2>
              <p>
                Pidätämme oikeuden päivittää tätä tietosuojaselostetta. Muutokset julkaistaan
                tällä sivulla, ja merkittävistä muutoksista ilmoitetaan palvelun
                käyttöliittymässä. Suosittelemme tarkistamaan tämän sivun säännöllisesti.
              </p>

              <h2>10. Yhteystiedot</h2>
              <p>
                Kaikissa henkilötietojen käsittelyyn liittyvissä kysymyksissä ja pyynnöissä
                voit ottaa meihin yhteyttä:
              </p>
              <p>
                <strong>Sonodo</strong><br />
                <a href="/yhteystiedot">Ota yhteyttä</a>
              </p>
              <p>
                Pyrimme vastaamaan kaikkiin tiedusteluihin mahdollisimman nopeasti, viimeistään
                30 päivän kuluessa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
