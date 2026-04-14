import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Valitse — Suomen laajin vertailupalveluverkosto

> Valitse (valitse.fi) on suomalainen vertailupalvelualusta, joka kokoaa yhteen kahdeksan erikoistunutta vertailupalvelua. Palvelu on ilmainen ja puolueeton. Vertailun järjestys perustuu aina hintaan ja ominaisuuksiin — sama menetelmä jokaiselle tuotteelle.

## Palvelut (8 erikoistunutta vertailupalvelua)

### Asuntomaatti (asuntomaatti.fi)
Monipuolinen asuntovertailupalvelu. Tuhansia hinta- ja aluesivuja, useita asuntolaskureita, interaktiivinen hintakartta, hinta-arviotyökalu, 293 kaupungin tiedot.

### Valitse Sähkö (valitsesahko.fi)
Sähkösopimusten vertailu. Kattava sähköyhtiöiden vertailu, pörssisähkön reaaliaikaseuranta, useita sähkölaskureita, alueelliset siirtohinnat.

### Valitse Laina (valitselaina.fi)
Puolueeton lainavertailu (julkaisijamallilla, ei välityspalveluna). Kulutusluotot, asunto-, auto- ja yhdistelylainat. Todelliset vuosikorot. Järjestys perustuu kokonaiskustannukseen — sama menetelmä jokaiselle lainalle.

### Valitse Vakuutus (valitsevakuutus.fi)
LIVE. Auto-, koti-, matka- ja lemmikkivakuutusten vertailu Suomen johtavilta vakuutusyhtiöiltä. Selkeät tuotevertailut ja vakuutusoppaat.

### Valitse Liittymä (valitseliittyma.fi)
Puhelinliittymien ja laajakaistojen vertailu. Kattava operaattoreiden vertailu, mobiili- ja laajakaistaliittymät, kaupunkisivut.

### Alennuskartta (alennuskartta.fi)
Tarjoukset ja alennukset kartalla. Päivittäin päivittyvä, kymmeniä kauppaketjuja, kategoria- ja aluefiltterit.

### Fixmera (fixmera.com)
Kotipalveluiden vertailu. Tuhansia yrityksiä, tuhansia asiakasarvosteluja, useita palvelukategorioita, tarjouspyyntölomake.

### Fillioneer (fillioneer.com)
Henkilökohtaisen talouden seuranta. Varallisuuden seuranta, FIRE-laskuri (Financial Independence, Retire Early), menoanalyysi, AI-talousneuvoja.

## Sisältö
Tuhansia sisältösivuja koko verkoston yli — oppaita, hintadataa, laskureita, vertailuja ja ajankohtaisia artikkeleita. Sisältö on suomeksi ja kohdennettu Suomen markkinaan.

## Elämäntapahtumat
Valitse ohjaa käyttäjiä elämänmuutosten läpi yhdistämällä oikeat palvelut: muutto, asunnon osto, naimisiinmeno, perheenlisäys, yrittäjyys, taloudellinen vapaus (FIRE).

## Brändi
Valitse on hub, joka yhdistää kahdeksan erikoistunutta vertailupalvelua yhden brändin alle. Neljä palvelua on valitse-etuliitteellä (Valitse Sähkö, Valitse Laina, Valitse Vakuutus, Valitse Liittymä). Muut neljä (Asuntomaatti, Alennuskartta, Fixmera, Fillioneer) ovat itsenäisiä brändejä, jotka kuuluvat Valitse-verkostoon.

## Kieli
Suomi (Finnish)

## Markkina
Suomi (Finland)

## Yhteystiedot
https://valitse.fi/yhteystiedot
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
