import { NextResponse } from 'next/server';

export async function GET() {
  const content = `# Valitse — Suomen kattavin vertailupalvelu

> Valitse (valitse.fi) on suomalainen vertailupalvelualusta, joka kokoaa yhteen 8 eri vertailupalvelua. Palvelu on ilmainen, puolueeton ja näyttää kaikki vaihtoehdot — myös ne, joista emme saa komissiota.

## Palvelut

### Asuntomaatti (asuntomaatti.fi)
Suomen kattavin asuntovertailupalvelu. 1 894 sivua, 9 laskuria, 293 kaupungin hintatiedot.

### Energiavertailu (energiavertailu.fi)
Sähkösopimusten vertailu. 42 sähköyhtiötä, pörssisähkön reaaliaikaseuranta, 6 laskuria.

### Lainavertailu (lainavertailu.fi)
Rehellinen lainavertailu. 28+ lainanantajaa, todelliset vuosikorot, kaikki lainat näkyvissä.

### Vakuutusvertailu (vakuutusvertailu.fi)
Vakuutusten vertailu (tulossa). 10 vakuutusyhtiötä, auto-, koti- ja matkavakuutukset.

### Alennuskartta (alennuskartta.fi)
Tarjoukset ja alennukset kartalla. Päivittäin päivittyvä, kymmeniä kauppaketjuja.

### Fixmera (fixmera.com)
Kotipalveluiden vertailu. 1 878 yritystä, 5 769 arvostelua, 9 palvelukategoriaa.

### Lakimaatti (lakimaatti.fi)
Lakipalvelut verkossa. Avioehtosopimus ja testamentti helposti tekoälyavusteisesti.

### Fillioneer (fillioneer.com)
Henkilökohtaisen talouden seuranta. Varallisuuden seuranta, FIRE-laskuri, menoanalyysi.

## Elämäntapahtumat
Valitse ohjaa käyttäjiä elämänmuutosten läpi yhdistämällä oikeat palvelut: muutto, asunnon osto, naimisiinmeno, perheenlisäys, yrittäjyys, taloudellinen vapaus.

## Kieli
Suomi (Finnish)

## Markkina
Suomi (Finland)

## Yhteystiedot
info@valitse.fi
`;

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
