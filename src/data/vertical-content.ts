import type { VerticalContent } from '@/types';

export const verticalContent: VerticalContent[] = [
  {
    spokeId: 'asuntomaatti',
    howItWorks: [
      { step: 1, title: 'Valitse alue', description: 'Hae kaupungin, kunnan tai postinumeron perusteella. Valitse kiinnostavat alueet kartalta tai listasta.' },
      { step: 2, title: 'Vertaa hintoja', description: 'Näe asuntojen hintatiedot, neliöhinnat ja hintojen kehitys valitsemallasi alueella reaaliajassa.' },
      { step: 3, title: 'Tee päätös', description: 'Käytä laskureitamme arvioidaksesi asumiskustannuksia, lainantarvetta ja alueen palveluita ennen päätöstä.' },
    ],
    detailedFeatures: [
      { title: 'Kattava hintadata', description: 'Yli 1 800 sivua ajantasaista hinta- ja aluedataa kaikista Suomen kunnista. Toteutuneet kauppahinnat ja markkinatrendit.' },
      { title: '9 asuntolaskuria', description: 'Laskurit asunnon hinta-arvioon, lainan laskentaan, asumiskustannuksiin, vuokratuoton arviointiin ja muuhun.' },
      { title: 'Interaktiivinen kartta', description: 'Selaa Suomen asuntomarkkinoita kartalla. Näe alueittaiset hinnat, palvelut ja liikenneyhteydet yhdellä silmäyksellä.' },
      { title: 'Alueiden vertailu', description: 'Vertaa kahta tai useampaa asuinaluetta rinnakkain. Hintataso, palvelut, turvallisuus ja viihtyvyys selkeässä vertailussa.' },
    ],
    faqs: [
      { question: 'Onko Asuntomaatin käyttö ilmaista?', answer: 'Kyllä, Asuntomaatti on täysin ilmainen palvelu kuluttajille. Kaikki hintadata, laskurit ja vertailutyökalut ovat vapaasti käytettävissä.' },
      { question: 'Mistä hintadata tulee?', answer: 'Hintadata perustuu toteutuneisiin asuntokauppoihin, Tilastokeskuksen tilastoihin ja reaaliaikaisiin markkinatietoihin. Data päivittyy säännöllisesti.' },
      { question: 'Kuinka tarkka ilmainen hinta-arvio on?', answer: 'Hinta-arviomme osuu tyypillisesti 5–10 prosentin tarkkuuteen. Se perustuu alueen toteutuneisiin kauppoihin, asunnon kokoon ja kuntoon sekä markkinatilanteeseen.' },
      { question: 'Voiko Asuntomaattia käyttää sijoitusasunnon etsimiseen?', answer: 'Kyllä. Vuokratuottolaskuri, aluevertailu ja hintadata ovat erinomaisia työkaluja sijoitusasunnon arviointiin. Näet alueen vuokratason ja voit laskea odotetun tuoton.' },
    ],
  },
  {
    spokeId: 'energiavertailu',
    howItWorks: [
      { step: 1, title: 'Syötä tietosi', description: 'Kerro postinumerosi ja arvioitu vuosikulutuksesi kilowattitunneissa. Löydät tiedon sähkölaskustasi.' },
      { step: 2, title: 'Vertaa sopimuksia', description: 'Näe kaikkien 42 sähköyhtiön hinnat alueellasi — kiinteät, pörssisähkö- ja hybridisopimukset.' },
      { step: 3, title: 'Vaihda helposti', description: 'Valitse edullisin sopimus ja siirry sähköyhtiön sivulle tekemään vaihto. Vanha sopimus päättyy automaattisesti.' },
    ],
    detailedFeatures: [
      { title: '42 sähköyhtiön vertailu', description: 'Kaikki Suomessa toimivat sähkönmyyjät yhdessä vertailussa. Kiinteät sopimukset, pörssisähkö ja hybridimallit.' },
      { title: 'Pörssisähkön seuranta', description: 'Reaaliaikainen pörssisähkön hintaseuranta tunti tunnilta. Historialliset hinnat ja hintaennusteet.' },
      { title: 'Riskiarviointi', description: 'Jokaisen sähköyhtiön arviointi luottoluokituksen, asiakastyytyväisyyden ja historian perusteella.' },
      { title: '6 sähkölaskuria', description: 'Laskurit sähkökustannusten arviointiin, pörssi- ja kiinteän sopimuksen vertailuun sekä aurinkopaneelien kannattavuuteen.' },
    ],
    faqs: [
      { question: 'Maksaako sähkösopimuksen vaihto?', answer: 'Ei. Sähkösopimuksen vaihtaminen on kuluttajalle aina ilmaista Suomessa. Vanha sopimus päättyy automaattisesti, kun uusi alkaa.' },
      { question: 'Kumpi on edullisempi — kiinteä vai pörssisähkö?', answer: 'Historiallisesti pörssisähkö on ollut keskimäärin edullisempi, mutta hinnat vaihtelevat. Kiinteä sopimus tarjoaa ennustettavuutta. Valinta riippuu riskinsietokyvystäsi ja kulutustottumuksistasi.' },
      { question: 'Kuinka nopeasti sähkösopimuksen vaihto tapahtuu?', answer: 'Sähkösopimuksen vaihto astuu voimaan yleensä 2–4 viikon kuluttua. Sähköntoimitukseen ei tule katkosta vaihdon yhteydessä.' },
    ],
  },
  {
    spokeId: 'lainavertailu',
    howItWorks: [
      { step: 1, title: 'Valitse lainatyyppi', description: 'Kerro, millaista lainaa tarvitset: kulutusluotto, asuntolaina, autolaina vai yhdistelylaina.' },
      { step: 2, title: 'Vertaa tarjouksia', description: 'Näe kaikkien lainanantajien todelliset vuosikorot ja kokonaiskustannukset — myös ei-kumppaneidemme.' },
      { step: 3, title: 'Hae lainaa', description: 'Valitse paras vaihtoehto ja siirry lainanantajan sivulle täyttämään hakemus. Saat päätöksen usein minuuteissa.' },
    ],
    detailedFeatures: [
      { title: 'Rehellinen vertailu', description: 'Näytämme myös lainat, joiden tarjoajien kanssa meillä ei ole kumppanuutta. Todellinen puolueettomuus lainamarkkinoilla.' },
      { title: 'Todelliset vuosikorot', description: 'Jokaisen lainan todellinen vuosikorko selkeästi esillä — ei harhaanjohtavia "alkaen"-lukuja.' },
      { title: '6 lainalaskuria', description: 'Laskurit lainan kokonaiskustannusten, kuukausierän, lainojen yhdistelyn ja asuntolainan vertailuun.' },
      { title: '8 lainaopasta', description: 'Kattavat oppaat kulutusluottoihin, asuntolainaan, autolainaan, yhdistelylainaan ja lainan kilpailuttamiseen.' },
    ],
    faqs: [
      { question: 'Vaikuttaako lainahakemus luottotietoihini?', answer: 'Pelkkä lainatarjouksen pyytäminen ei vaikuta luottotietoihisi. Luottotietomerkintä syntyy vasta, kun lainahakemus käsitellään virallisesti.' },
      { question: 'Miksi näytätte myös ei-kumppaneiden lainoja?', answer: 'Uskomme, että kuluttaja ansaitsee nähdä kaikki vaihtoehdot tehdäkseen parhaan päätöksen. Rehellisyys on palvelumme perusta.' },
      { question: 'Kuinka nopeasti saan lainapäätöksen?', answer: 'Useimmat digitaaliset lainanantajat antavat alustavan päätöksen minuuteissa. Perinteisissä pankeissa käsittely voi kestää 1–3 arkipäivää.' },
      { question: 'Voiko lainan kilpailuttaa uudelleen?', answer: 'Kyllä. Jo olemassa olevan lainan voi kilpailuttaa uudelleen ja siirtää edullisempaan. Tämä on yksi tehokkaimmista tavoista säästää lainakuluissa.' },
    ],
  },
  {
    spokeId: 'vakuutusvertailu',
    howItWorks: [
      { step: 1, title: 'Valitse vakuutuslaji', description: 'Kerro, mitä vakuutusta etsit: auto-, koti-, matka-, lemmikki- tai henkilövakuutus.' },
      { step: 2, title: 'Vertaa tarjouksia', description: 'Näe eri vakuutusyhtiöiden hinnat ja kattavuudet selkeässä vertailussa.' },
      { step: 3, title: 'Valitse paras', description: 'Valitse sinulle sopivin vakuutus ja siirry yhtiön sivulle tekemään sopimus.' },
    ],
    detailedFeatures: [
      { title: '10 vakuutusyhtiön vertailu', description: 'Suomen suurimpien vakuutusyhtiöiden tuotteet vertailussa — If, LähiTapiola, OP, Fennia, Pohjola ja muut.' },
      { title: 'Selkeät kattavuusvertailut', description: 'Näe yhdellä silmäyksellä, mitä kukin vakuutus kattaa ja mitä jää ulkopuolelle. Ei pieniä printtiä.' },
      { title: 'Jopa 50 % hintaero', description: 'Vakuutusten hinnat vaihtelevat merkittävästi. Vertailulla löydät saman turvan jopa puoleen hintaan.' },
      { title: 'Puolueeton arviointi', description: 'Arvioimme vakuutuksia objektiivisesti kattavuuden, hinnan, asiakaspalvelun ja korvausmenettelyn perusteella.' },
    ],
    faqs: [
      { question: 'Kuinka usein vakuutuksia kannattaa vertailla?', answer: 'Suosittelemme vertailua vähintään 2–3 vuoden välein tai aina, kun elämäntilanteesi muuttuu (muutto, auto, perheenlisäys).' },
      { question: 'Menetänkö bonukset vaihtaessa vakuutusyhtiötä?', answer: 'Autovakuutuksen bonukset siirtyvät yhtiöstä toiseen. Muissa vakuutuksissa pitkäaikaisasiakkuuden edut voivat vaihdella yhtiöittäin.' },
      { question: 'Onko keskittäminen aina edullisinta?', answer: 'Ei aina. Vaikka keskittämisalennus on houkutteleva, yksittäisten vakuutusten hajautus eri yhtiöihin voi olla kokonaisedullisempi.' },
    ],
  },
  {
    spokeId: 'alennuskartta',
    howItWorks: [
      { step: 1, title: 'Avaa kartta', description: 'Selaa tarjouksia interaktiivisella kartalla tai hae kaupungin tai kauppaketjun nimellä.' },
      { step: 2, title: 'Suodata tarjoukset', description: 'Rajaa tarjouksia kategorian, kauppaketjun tai alennus­prosentin perusteella.' },
      { step: 3, title: 'Säästä arjessa', description: 'Löydä parhaat tarjoukset lähikaupoistasi ja säästä päivittäisissä ostoksissasi.' },
    ],
    detailedFeatures: [
      { title: 'Tarjoukset kartalla', description: 'Näe lähimmät tarjoukset interaktiivisella kartalla. Suunnittele ostosreittisi tehokkaasti.' },
      { title: 'Päivittäin päivittyvä', description: 'Tarjoukset päivittyvät automaattisesti joka päivä. Uudet tarjoukset näkyvät heti niiden julkaisun jälkeen.' },
      { title: 'Kymmeniä kauppaketjuja', description: 'S-ryhmä, K-ryhmä, Lidl, Tokmanni ja monet muut. Kaikki tarjoukset yhdestä paikasta.' },
      { title: 'Suosikit ja hälytykset', description: 'Merkitse suosikkituotteet ja saa ilmoitus, kun niistä on tarjous. Älä missaa parhaita diilejä.' },
    ],
    faqs: [
      { question: 'Onko Alennuskartta ilmainen?', answer: 'Kyllä, Alennuskartta on täysin ilmainen palvelu. Selaa tarjouksia rajattomasti ilman rekisteröitymistä.' },
      { question: 'Kuinka usein tarjoukset päivittyvät?', answer: 'Tarjoukset päivittyvät päivittäin. Useimpien ketjujen viikkotarjoukset vaihtuvat maanantaisin tai torstaisin.' },
      { question: 'Voiko tarjouksia suodattaa ruoka-aineallergia mukaan?', answer: 'Kategoriasuodatus on käytössä, mutta yksittäisten allergeenien suodatus on tulossa myöhemmin.' },
    ],
  },
  {
    spokeId: 'fixmera',
    howItWorks: [
      { step: 1, title: 'Kerro tarpeesi', description: 'Valitse palvelukategoria ja kuvaile tarvitsemaasi palvelua. Remontit, siivous, putkityöt ja muut.' },
      { step: 2, title: 'Vertaa yrityksiä', description: 'Selaa alueen yrityksiä, lue arvosteluja ja vertaa palveluita. Yli 5 700 arvostelua luotettavilta asiakkailta.' },
      { step: 3, title: 'Pyydä tarjous', description: 'Lähetä tarjouspyyntö suoraan yrityksille tai soita heille. Hyödynnä kotitalousvähennys.' },
    ],
    detailedFeatures: [
      { title: '1 800+ yritystä', description: 'Laaja kotipalveluyritysten hakemisto. Remonttifirmat, siivoojat, putkimiehet, sähköasentajat ja muut.' },
      { title: 'Aidot arvostelut', description: 'Yli 5 700 arvostelua todellisilta asiakkailta. Lue kokemuksia ennen palveluntarjoajan valintaa.' },
      { title: '9 palvelukategoriaa', description: 'Remontti, siivous, putkityöt, sähkötyöt, maalaus, muutto, pihatyöt, LVI ja yleispalvelut.' },
      { title: 'Kotitalousvähennysopas', description: 'Kattava opas kotitalousvähennykseen. Selvitä, kuinka paljon voit säästää veroissa kotipalveluista.' },
    ],
    faqs: [
      { question: 'Onko Fixmeran käyttö ilmaista?', answer: 'Kyllä, yritysten etsiminen ja arvostelujen lukeminen on täysin ilmaista. Tarjouspyyntöjen lähettäminen on myös maksutonta.' },
      { question: 'Kuinka kotitalousvähennys toimii?', answer: 'Voit vähentää verotuksessa 40 % kotona tehdyn työn osuudesta, enintään 2 250 euroa vuodessa per henkilö. Vähennys koskee esimerkiksi siivous-, remontti- ja hoivapalveluita.' },
      { question: 'Miten arvostelujen luotettavuus varmistetaan?', answer: 'Arvostelut ovat todellisilta asiakkailta, ja moderoimme sisältöä aktiivisesti. Epäaidot arvostelut poistetaan.' },
      { question: 'Tarvitsenko aina tarjouspyyntöä?', answer: 'Et välttämättä. Voit myös soittaa suoraan yritykselle tai käyttää heidän omia yhteydenottolomakkeitaan. Tarjouspyyntölomake helpottaa usean yrityksen vertailua.' },
    ],
  },
  {
    spokeId: 'puhelinvertailu',
    howItWorks: [
      { step: 1, title: 'Valitse tarpeesi', description: 'Kerro, tarvitsetko rajatonta dataa, 5G-nopeuksia vai edullista perusliittymää. Vertaa mobiili- tai laajakaistaliittymiä.' },
      { step: 2, title: 'Vertaa liittymiä', description: 'Näe kaikkien operaattoreiden liittymät rinnakkain — hinnat, nopeudet, datamäärät ja sopimusehdot.' },
      { step: 3, title: 'Vaihda operaattoria', description: 'Valitse paras liittymä ja siirry operaattorin sivulle. Numeron siirto on ilmaista ja helppoa.' },
    ],
    detailedFeatures: [
      { title: '7 operaattorin vertailu', description: 'Elisa, DNA, Telia, Moi, Giga Mobiili, Oomi ja Globetel — kaikki operaattorit yhdessä paikassa.' },
      { title: 'Mobiili- ja laajakaistat', description: 'Vertaa puhelinliittymiä ja kiinteitä laajakaistoja. Löydä paras yhdistelmä kotiin ja taskuun.' },
      { title: 'Operaattorivertailut', description: 'Elisa vs DNA, Telia vs Moi ja muut suositut vertailut valmiina. Näe erot selkeästi.' },
      { title: 'Kaupunkisivut', description: 'Katso liittymätarjoukset ja saatavuus omalla paikkakunnallasi. 5G-kattavuustiedot alueittain.' },
    ],
    faqs: [
      { question: 'Onko liittymävertailu ilmaista?', answer: 'Kyllä, Valitse Puhelin on täysin ilmainen palvelu. Vertaa kaikkia liittymiä ja operaattoreita maksutta.' },
      { question: 'Voiko numeroa siirtää operaattoreiden välillä?', answer: 'Kyllä. Numeron siirto on Suomessa ilmaista ja helppoa. Uusi operaattori hoitaa siirron puolestasi 1–5 arkipäivässä.' },
      { question: 'Mikä on halvin rajaton liittymä?', answer: 'Rajattomien liittymien hinnat alkavat noin 20 eurosta kuukaudessa. Hinta riippuu nopeudesta — 4G-liittymät ovat edullisempia kuin 5G.' },
      { question: 'Tarvitsenko 5G-liittymän?', answer: '5G on nopeampi kuin 4G, mutta useimmille käyttäjille 4G riittää hyvin. 5G kannattaa, jos käytät paljon dataa tai haluat parhaan mahdollisen nopeuden.' },
    ],
  },
  {
    spokeId: 'fillioneer',
    howItWorks: [
      { step: 1, title: 'Luo tili', description: 'Rekisteröidy ilmaiseksi ja syötä tulosi, menosi ja varallisuutesi. Ilmainen perusversio riittää alkuun.' },
      { step: 2, title: 'Seuraa kehitystä', description: 'Näe nettovarallisuutesi trendit, menoanalyysit ja FIRE-edistymisesi selkeillä kaavioilla.' },
      { step: 3, title: 'Optimoi taloutesi', description: 'Saa AI-avusteisia vinkkejä säästämiseen, sijoittamiseen ja taloudellisen vapauden saavuttamiseen.' },
    ],
    detailedFeatures: [
      { title: 'Varallisuuden seuranta', description: 'Seuraa nettovarallisuutesi kehitystä kuukausittain. Sijoitukset, säästöt, velat ja kiinteistöt yhdessä näkymässä.' },
      { title: 'FIRE-laskuri', description: 'Laske oma FIRE-lukusi ja näe, kuinka kauan taloudelliseen vapauteen on matkaa nykyisellä säästöasteellasi.' },
      { title: 'Menoanalyysi', description: 'Analysoi menojasi kategorioittain ja löydä kohteet, joissa voit säästää. Vertaa menojasi suomalaisten keskiarvoon.' },
      { title: 'AI-talousneuvoja', description: 'Tekoälyavusteinen talousneuvoja antaa räätälöityjä vinkkejä taloutesi optimointiin ja tavoitteidesi saavuttamiseen.' },
    ],
    faqs: [
      { question: 'Onko Fillioneer ilmainen?', answer: 'Perusversio on ilmainen ja sisältää varallisuuden seurannan ja FIRE-laskurin. Premium-versio tarjoaa lisäominaisuuksia kuten AI-talousneuvoja.' },
      { question: 'Onko tietoni turvassa?', answer: 'Kyllä. Kaikki data on salattu ja tallennetaan EU-alueella sijaitseville palvelimille. Emme jaa tietojasi kolmansille osapuolille.' },
      { question: 'Mikä on FIRE?', answer: 'FIRE (Financial Independence, Retire Early) tarkoittaa taloudellista vapautta — tilannetta, jossa passiiviset tulosi kattavat menosi etkä ole riippuvainen palkkatyöstä.' },
      { question: 'Tarvitaanko pankkiyhteyttä?', answer: 'Ei, Fillioneer ei vaadi pankkiyhteyttä. Syötät tietosi manuaalisesti, mikä takaa täyden yksityisyyden.' },
    ],
  },
];

export function getVerticalContentBySpokeId(spokeId: string): VerticalContent | undefined {
  return verticalContent.find((vc) => vc.spokeId === spokeId);
}
