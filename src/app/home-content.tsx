'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Zap,
  Landmark,
  Smartphone,
  Check,
  Users,
  Search,
  BarChart3,
  PiggyBank,
  Clock,
  Globe,
  TrendingUp,
  Minus,
  Plus,
  Star,
  Home,
  Tag,
  Wrench,
  ChevronRight,
} from 'lucide-react';
import { AnimatedHeading, ScrollReveal, WaveDivider, StatsCounter } from '@/components/landing';
import { trackOutboundSpokeClick } from '@/lib/analytics';

/* ═══════════════════════════════════════════════════════════════════
   Valitse — Premium Hub Landing Page
   12 visually varied sections with Framer Motion animations
   ═══════════════════════════════════════════════════════════════════ */

const ease = [0.25, 0.1, 0.25, 1] as const;

/* ── Spoke link helpers ───────────────────────────────────────────
   Append hub→spoke UTM params so spoke GA4 can attribute traffic back
   to valitse.fi, and fire an outbound_spoke_click event on GA4. */

const SPOKE_UTM = 'utm_source=valitse_hub&utm_medium=spoke_referral&utm_campaign=cross_sell';

function withSpokeUtm(url: string): string {
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${SPOKE_UTM}`;
}

function handleSpokeClick(spokeId: string, href: string): void {
  trackOutboundSpokeClick(spokeId, href);
}

/* ── Static Data ──────────────────────────────────────────────── */

const verticals = [
  {
    id: 'sahko',
    name: 'Valitse Sähkö',
    tagline: 'Vertaa sähkösopimuksia',
    description: 'Vertaa Suomen sähköyhtiöiden hintoja, seuraa pörssisähköä reaaliajassa ja löydä edullisin sopimus — kiinteä, pörssi tai hybridi.',
    icon: Zap,
    color: '#0066FF',
    colorLight: '#DBEAFE',
    url: 'https://valitsesahko.fi',
    stats: 'Kattava vertailu',
    features: ['Pörssisähkön seuranta', 'Useita laskureita', 'Riskiarviointi'],
  },
  {
    id: 'lainat',
    name: 'Valitse Laina',
    tagline: 'Vertaa lainoja',
    description: 'Vertaa kulutusluottoja, asuntolainoja ja yhdistelylainoja Suomen lainanantajilta. Järjestys perustuu hintaan ja todelliseen vuosikorkoon.',
    icon: Landmark,
    color: '#7C3AED',
    colorLight: '#EDE9FE',
    url: 'https://valitselaina.fi',
    stats: 'Avoin menetelmä',
    features: ['Todelliset vuosikorot', 'Lainalaskurit', 'Puolueeton järjestys'],
  },
  {
    id: 'vakuutukset',
    name: 'Valitse Vakuutus',
    tagline: 'Vertaa vakuutuksia',
    description: 'Vertaa auto-, koti-, matka- ja lemmikkivakuutuksia Suomen johtavilta vakuutusyhtiöiltä. Vakuutusten hintaerot voivat olla merkittäviä.',
    icon: Shield,
    color: '#0891B2',
    colorLight: '#CFFAFE',
    url: 'https://valitsevakuutus.fi',
    stats: 'Kattava vertailu',
    features: ['Useita vakuutuslajeja', 'Hintavertailu', 'Vakuutusoppaat'],
  },
  {
    id: 'liittymat',
    name: 'Valitse Liittymä',
    tagline: 'Vertaa puhelinliittymiä',
    description: 'Vertaa merkittävimpien operaattoreiden liittymiä — Elisa, DNA, Telia, Moi ja muut — yhdestä paikasta. Löydä halvin 5G-liittymä tai rajaton data.',
    icon: Smartphone,
    color: '#8B5CF6',
    colorLight: '#EDE9FE',
    url: 'https://valitseliittyma.fi',
    stats: 'Kattava vertailu',
    features: ['Mobiili ja laajakaista', 'Operaattorivertailut', 'Kaupunkisivut'],
  },
];

const moreServices = [
  {
    name: 'Asuntomaatti',
    description: 'Vertaa asuntoja, hintoja ja asuinalueita koko Suomessa.',
    icon: Home,
    color: '#059669',
    url: 'https://asuntomaatti.fi',
    stat: 'Tuhansia sivuja',
  },
  {
    name: 'Alennuskartta',
    description: 'Löydä parhaat tarjoukset ja alennukset kartalta.',
    icon: Tag,
    color: '#F97316',
    url: 'https://alennuskartta.fi',
    stat: 'Satoja kauppoja',
  },
  {
    name: 'Fixmera',
    description: 'Löydä luotettavat kotipalveluyritykset ja lue arvosteluja.',
    icon: Wrench,
    color: '#2563EB',
    url: 'https://fixmera.com',
    stat: 'Tuhansia yrityksiä',
  },
  {
    name: 'Fillioneer',
    description: 'Seuraa varallisuuttasi ja suunnittele taloudellinen vapautesi.',
    icon: TrendingUp,
    color: '#059669',
    url: 'https://fillioneer.com',
    stat: 'Useita laskureita',
  },
];

const howItWorks = [
  {
    step: 1,
    icon: Search,
    title: 'Valitse palvelu',
    desc: 'Valitse vertailupalvelu tarpeidesi mukaan — sähkö, lainat, vakuutukset tai liittymät.',
  },
  {
    step: 2,
    icon: BarChart3,
    title: 'Vertaile vaihtoehtoja',
    desc: 'Vertaa hintoja, ominaisuuksia ja ehtoja puolueettomasti yhdessä paikassa.',
  },
  {
    step: 3,
    icon: PiggyBank,
    title: 'Säästä rahaa',
    desc: 'Valitse sopivin vaihtoehto ja säästä jopa satoja euroja vuodessa.',
  },
];

const valueProps = [
  {
    icon: Shield,
    title: 'Laaja vertailu',
    description: 'Puolueeton vertailu, jossa sama menetelmä koskee jokaista palveluntarjoajaa. Järjestys perustuu hintaan ja ominaisuuksiin.',
  },
  {
    icon: Clock,
    title: 'Aina ajan tasalla',
    description: 'Tarkistamme tiedot säännöllisesti. Näet aina ajankohtaiset hinnat ja ehdot yhdestä paikasta.',
  },
  {
    icon: TrendingUp,
    title: 'Oikeita säästöjä',
    description: 'Käyttäjämme säästävät keskimäärin satoja euroja vuodessa vaihtamalla edullisempaan palveluntarjoajaan.',
  },
  {
    icon: Globe,
    title: 'Kaikki yhdessä paikassa',
    description: 'Sähkö, lainat, vakuutukset, liittymät ja paljon muuta — kaikki vertailut yhdestä osoitteesta.',
  },
];

const faqItems = [
  {
    q: 'Mitä Valitse on?',
    a: 'Valitse on suomalainen vertailupalveluverkosto, johon kuuluu hub-sivusto valitse.fi ja neljä erikoistunutta vertailusivustoa: Valitse Sähkö, Valitse Laina, Valitse Vakuutus ja Valitse Liittymä. Operaattorina toimii Sonodo (Y-tunnus 2887416-4).',
  },
  {
    q: 'Maksaako vertailu?',
    a: 'Ei. Valitse on täysin ilmainen käyttää — ei maksuja, ei rekisteröitymistä, ei sitoumusta. Kaikki vertailupalvelut ovat avoimia kaikille.',
  },
  {
    q: 'Miten tienaatte rahaa?',
    a: 'Affiliate-yhteistyöllä: saamme palkkion, jos käyttäjä siirtyy sivustoltamme yhteistyökumppanin palveluun ja tekee sopimuksen. Tämä ei vaikuta vertailutulosten järjestykseen — kaikki palveluntarjoajat saavat sijoituksensa samojen kriteerien perusteella. Lue tarkemmin Toimituksen periaatteet -sivulta.',
  },
  {
    q: 'Onko data tuoretta?',
    a: 'Sähkön spot-hinnat päivittyvät 15 minuutin välein, lainakorot ja vakuutusmaksut päivittäin, kiinteät sähköhinnat ja liittymähinnat viikoittain. Tarkat päivitysrytmit on listattu Toimituksen periaatteet -sivulla.',
  },
  {
    q: 'Miten valitsen oikean palvelun?',
    a: 'Aloita siitä, mitä haluat vertailla. Sähköön valitsesahko.fi, lainoihin valitselaina.fi, vakuutuksiin valitsevakuutus.fi, liittymiin valitseliittyma.fi. Etusivulta löydät kaikki neljä yhdellä klikkauksella. Lue myös oppaat-osiomme cross-categorical-aiheista.',
  },
];

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */

export default function HomeContent() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
          Full viewport, dark navy, animated heading
         ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] overflow-hidden bg-navy">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow orbs */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[128px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-400/10 blur-[128px]" />
          <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-secondary/10 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-28 pt-20 sm:px-6 sm:pb-36 sm:pt-28 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Animated badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
              </span>
              Suomen kattavin vertailupalvelu
            </motion.div>

            {/* Animated heading */}
            <AnimatedHeading
              text="VERTAA JA SÄÄSTÄ."
              className="text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
              className="mt-2 text-4xl font-extrabold uppercase leading-tight tracking-wide sm:text-5xl lg:text-6xl"
            >
              <span className="bg-gradient-to-r from-accent-400 to-accent-200 bg-clip-text text-transparent">
                Kaikki yhdestä paikasta.
              </span>
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80"
            >
              Sähkösopimukset, lainat, vakuutukset, liittymät ja paljon muuta.
              Löydä parhaat tarjoukset ja säästä rahaa — aina ilmaiseksi ja puolueettomasti.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/palvelut"
                className="group inline-flex items-center justify-center border-2 border-accent bg-accent px-6 py-3 sm:px-8 sm:py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                Katso kaikki palvelut
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tietoa"
                className="inline-flex items-center justify-center border-2 border-white/30 px-6 py-3 sm:px-8 sm:py-4 text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-white hover:text-white"
              >
                Miten se toimii?
              </Link>
            </motion.div>

            {/* Hero trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1, ease }}
              className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
            >
              {[
                { value: '8', label: 'vertailupalvelua' },
                { value: 'Kattava', label: 'palveluntarjoajaverkosto' },
                { value: '100 %', label: 'ilmainen' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="h-8 w-px bg-white/10" />}
                  <div className="text-center">
                    <p className="text-2xl font-bold text-white whitespace-nowrap">{item.value}</p>
                    <p className="text-sm text-slate-400">{item.label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: TRUST BAR
          Subtle light strip
         ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-slate-100 bg-white py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 sm:px-6 lg:px-8">
          {[
            { icon: Shield, text: 'Laaja vertailu', color: 'text-accent' },
            { icon: Check, text: 'Ilmainen palvelu', color: 'text-emerald-500' },
            { icon: Users, text: 'Kattava tarjoajaverkosto', color: 'text-accent-400' },
            { icon: Zap, text: 'Säännöllisesti tarkistettu', color: 'text-amber-500' },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="up">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <item.icon className={`h-5 w-5 ${item.color}`} />
                {item.text}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: MAIN VERTICALS — 4 prominent cards
          White bg, large feature cards with colored accents
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mb-14 text-center">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
                Mitä haluat vertailla?
              </h2>
              <p className="mt-3 text-lg text-slate-500">
                Valitse palvelu ja aloita vertailu — kaikki palvelumme ovat ilmaisia ja puolueettomia
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {verticals.map((v, i) => (
              <ScrollReveal key={v.id} delay={i * 0.12} direction="up">
                <a
                  href={withSpokeUtm(v.url)}
                  onClick={() => handleSpokeClick(v.id, v.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white p-8 ring-1 ring-slate-200/60 shadow-sm transition-all duration-300 hover:shadow-lg hover:ring-accent/30 hover:-translate-y-1"
                >
                  {/* Colored top bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-1 transition-all duration-300 group-hover:h-1.5"
                    style={{ backgroundColor: v.color }}
                  />

                  <div className="flex items-start gap-5">
                    {/* Icon */}
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: v.colorLight }}
                    >
                      <v.icon className="h-7 w-7" style={{ color: v.color }} />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-slate-900">{v.name}</h3>
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
                          style={{ backgroundColor: v.color }}
                        >
                          {v.stats}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.description}</p>

                      {/* Feature chips */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {v.features.map((f) => (
                          <span
                            key={f}
                            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                          >
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-widest transition-colors group-hover:text-accent" style={{ color: v.color }}>
                        {v.tagline}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: HOW IT WORKS — Gradient step cards
          Connected horizontal steps on light bg
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mb-14 text-center">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
                Näin helppoa se on
              </h2>
              <p className="mt-3 text-slate-500">
                Kolme askelta parempiin valintoihin
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="absolute left-[calc(16.67%+20px)] right-[calc(16.67%+20px)] top-10 hidden h-0.5 bg-gradient-to-r from-accent-200 via-accent-400 to-accent md:block" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {howItWorks.map((item, i) => (
                <ScrollReveal key={item.step} delay={i * 0.15} direction="up">
                  <div className="flex flex-col items-center text-center">
                    {/* Numbered circle */}
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-accent/20">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                        {item.step}
                      </div>
                    </div>
                    <item.icon className="mt-6 h-8 w-8 text-accent-400" />
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 max-w-xs text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: VALUE PROPOSITION — 2-column layout
          Dark bg, large heading left, info cards right
         ───────────────────────────────────────────────────────────── */}
      <WaveDivider color="#0B1F3F" flip={false} />
      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left: large heading and text */}
            <ScrollReveal direction="left">
              <div className="max-w-xl">
                <h2 className="text-2xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-3xl lg:text-4xl">
                  Kattava. Ajantasainen. Ilmainen.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-white/70">
                  Suomalaiset maksavat joka vuosi satoja euroja liikaa sähköstä, lainoista, vakuutuksista ja liittymistä.
                  Valitse auttaa löytämään saman laadun edullisemmin — vertailemalla palveluntarjoajien hinnat yhdessä paikassa.
                </p>
                <div className="mt-8">
                  <Link
                    href="/palvelut"
                    className="inline-flex items-center gap-2 border-2 border-accent bg-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-white"
                  >
                    Tutustu palveluihin
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: 2x2 value cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {valueProps.map((vp, i) => (
                <ScrollReveal key={i} delay={i * 0.12} direction="right">
                  <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
                    <vp.icon className="h-8 w-8 text-accent-400" />
                    <h3 className="mt-4 text-base font-bold text-white">
                      {vp.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {vp.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: STATS
          Dark bg, CountUp numbers
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-navy pb-20 sm:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <StatsCounter
            stats={[
              { end: 8, suffix: '', label: 'Vertailupalvelua' },
              { end: 293, suffix: '', label: 'Kaupungin hintadata' },
              { end: 4500, suffix: '+', label: 'Sisältösivua' },
              { end: 100, suffix: ' %', label: 'Ilmainen käyttää' },
            ]}
          />
        </div>
      </section>
      <WaveDivider color="#ffffff" />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: MORE SERVICES — compact grid
          White bg, smaller cards for secondary verticals
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mb-12 text-center">
              <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
                Verkoston muut palvelut
              </h2>
              <p className="mt-3 text-slate-500">
                Valitse-verkostoon kuuluu myös näitä erikoistuneita palveluita
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {moreServices.map((svc, i) => (
              <ScrollReveal key={svc.name} delay={i * 0.1} direction="up">
                <a
                  href={svc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-hover group flex flex-col items-center text-center"
                >
                  <div
                    className="mb-3 flex h-14 w-14 items-center justify-center rounded-full text-white text-xl font-bold shadow-lg"
                    style={{ backgroundColor: svc.color }}
                  >
                    <svc.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-accent">{svc.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{svc.stat}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600">{svc.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest text-accent opacity-70 transition-opacity group-hover:opacity-100">
                    Avaa
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 8: COMPARISON TABLE
          White bg, comparison table with highlighted column
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
              Miksi Valitse?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
              Vertaile eri tapoja löytää parhaat palvelut
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <div className="mt-12 overflow-x-auto rounded-lg ring-1 ring-slate-200">
              <table className="w-full min-w-[500px] text-left">
                <thead>
                  <tr className="border-b border-slate-200 bg-white">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest text-slate-400 sm:px-6">&nbsp;</th>
                    <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-400 sm:px-6">
                      Itse etsiminen
                    </th>
                    <th className="px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-slate-400 sm:px-6">
                      Yksittäiset vertailut
                    </th>
                    <th className="bg-navy px-5 py-4 text-center text-xs font-bold uppercase tracking-widest text-white sm:px-6">
                      Valitse
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white text-sm">
                  {[
                    { label: 'Kattavuus', a: 'Yksi palvelu kerrallaan', b: 'Yksi kategoria', c: 'Kaikki kategoriat' },
                    { label: 'Menetelmä', a: 'Vaihtelee', b: 'Vaihtelee', c: 'Avoin menetelmä' },
                    { label: 'Ajantasaisuus', a: 'Vaihtelee', b: 'Vaihtelee', c: 'Säännöllisesti päivitetty' },
                    { label: 'Ajankäyttö', a: 'Tunteja', b: 'Kymmeniä minuutteja', c: 'Muutama minuutti' },
                    { label: 'Hinta', a: 'Ilmainen', b: 'Usein ilmainen', c: 'Aina ilmainen' },
                  ].map((row, i) => (
                    <tr key={i}>
                      <td className="px-5 py-4 font-medium text-slate-900 sm:px-6">{row.label}</td>
                      <td className="px-5 py-4 text-center text-slate-500 sm:px-6">{row.a}</td>
                      <td className="px-5 py-4 text-center text-slate-500 sm:px-6">{row.b}</td>
                      <td className="bg-navy/5 px-5 py-4 text-center font-bold text-navy sm:px-6">{row.c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 9: VERTICAL QUICK-ACCESS — Colored gradient cards
          Light bg, 4-col quick-access cards
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
              Suosituimmat vertailut
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-slate-500">
              Aloita vertailu suoraan — valitse aihe ja löydä paras vaihtoehto
            </p>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {verticals.map((v, i) => (
              <ScrollReveal key={v.id} delay={i * 0.12} direction="up">
                <a
                  href={withSpokeUtm(v.url)}
                  onClick={() => handleSpokeClick(v.id, v.url)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[200px] flex-col items-center justify-center rounded-xl px-6 py-8 transition-transform duration-300 hover:scale-[1.03]"
                  style={{ backgroundColor: v.colorLight }}
                >
                  <v.icon className="h-10 w-10" style={{ color: v.color }} />
                  <p className="mt-4 text-center text-lg font-bold" style={{ color: v.color }}>
                    {v.name}
                  </p>
                  <p className="mt-1 text-center text-sm font-medium opacity-70" style={{ color: v.color }}>
                    {v.stats}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-widest opacity-60 transition-opacity group-hover:opacity-100" style={{ color: v.color }}>
                    Vertaile
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 10: LIFE EVENTS CTA
          Gradient bg card, empathetic messaging
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-navy-light to-navy p-10 sm:p-14">
              {/* Glow */}
              <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full bg-accent/20 blur-[100px]" aria-hidden="true" />
              <div className="absolute -bottom-20 -left-20 h-[200px] w-[200px] rounded-full bg-secondary/15 blur-[80px]" aria-hidden="true" />

              <div className="relative text-center">
                <Star className="mx-auto mb-4 h-10 w-10 text-secondary-400" />
                <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
                  Suuri muutos edessä?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
                  Muutto, lapsen syntymä, eläkkeelle jääminen tai avioero — suuret elämänmuutokset tarkoittavat monia sopimuksia,
                  jotka kannattaa tarkistaa. Autamme sinua hoitamaan kaikki vertailut kerralla.
                </p>
                <div className="mt-8">
                  <Link
                    href="/elamanmuutokset"
                    className="group inline-flex items-center gap-2 border-2 border-accent bg-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-white"
                  >
                    Katso elämäntapahtumat
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 11: FAQ ACCORDION
          Light bg, animated expand/collapse
         ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-2xl font-extrabold uppercase tracking-wide text-slate-900 sm:text-3xl">
              Usein kysytyt kysymykset
            </h2>
          </ScrollReveal>

          <div className="mt-10 divide-y divide-slate-200 border-t border-slate-200">
            {faqItems.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.05} direction="none">
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="flex w-full items-center justify-between py-6 text-left min-h-[44px]"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="pr-4 text-base font-semibold text-slate-900 sm:text-lg">
                      {item.q}
                    </span>
                    {openFaqIndex === index ? (
                      <Minus className="h-5 w-5 shrink-0 text-accent" />
                    ) : (
                      <Plus className="h-5 w-5 shrink-0 text-slate-400" />
                    )}
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaqIndex === index && (
                      <motion.div
                        key={`faq-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 leading-relaxed text-slate-600">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 12: CTA
          Dark bg with glow, strong call to action
         ───────────────────────────────────────────────────────────── */}
      <WaveDivider color="#0B1F3F" flip={false} />
      <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
        {/* Glow */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[128px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <AnimatedHeading
              as="h2"
              text="Valitse palvelu ja aloita"
              className="text-3xl font-extrabold text-white sm:text-4xl"
            />
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70 leading-relaxed">
              Löydä parhaat tarjoukset ja säästä rahaa — aina ilmaiseksi ja puolueettomasti.
              Sähkö, lainat, vakuutukset, liittymät ja paljon muuta yhdestä paikasta.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/palvelut"
                className="group inline-flex items-center gap-2 border-2 border-accent bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                Tutustu palveluihin
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/menetelma"
                className="inline-flex items-center gap-2 border-2 border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white/80 transition-all duration-300 hover:border-white hover:text-white"
              >
                Menetelmämme
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
