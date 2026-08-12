import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { getServices } from "@/data/services";
import { getTopics } from "@/data/topics";
import { getNetworks } from "@/data/networks";
import { sportEvents, cinemaEvents } from "@/data/events";
import { getSiteCopy } from "@/data/site";
import { localeHref, type Locale } from "@/lib/i18n";

// Questa pagina era la homepage originale. Su richiesta di Stefano è stata
// spostata su /landing (invariata) per lasciare spazio a una nuova homepage
// costruita sulla struttura del mockup "Innovazione sociale per migliorare
// le comunità, insieme." Vedi app/[locale]/page.tsx.

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Landing",
  },
  en: {
    title: "Landing",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const quadrantBg: Record<string, string> = {
  navy: "bg-navy",
  purple: "bg-purple",
  pink: "bg-pink",
  orange: "bg-orange",
};

// Tono più scuro sullo stesso colore al passaggio del mouse: l'"area si
// colora" senza cambiare palette, restando fedele al mockup.
const quadrantHoverBg: Record<string, string> = {
  navy: "hover:bg-navy-dark",
  purple: "hover:bg-purple-dark",
  pink: "hover:bg-pink-dark",
  orange: "hover:bg-orange-dark",
};

const copy = {
  it: {
    heroCta1: "Scopri cosa facciamo",
    heroCta2: "Contattaci",
    pillarsEyebrow: "I tre pilastri ECOS",
    pillarsText:
      "Coinvolgiamo i ragazzi in attività significative, li connettiamo con persone, servizi e opportunità, e li accompagniamo verso maggiore consapevolezza, competenze e autonomia.",
    pillarsWords: ["Engage", "Connect", "Empower"],
    topicsEyebrow: "Aree tematiche",
    topicsTitle: "I contesti in cui concentriamo il nostro lavoro.",
    topicsText:
      "Le nostre attività si sviluppano in relazione a bisogni e contesti specifici, in collaborazione con servizi, scuole e professionisti.",
    networksEyebrow: "I nostri network",
    networksTitle: "Una rete europea di competenze e organizzazioni.",
    networksSubtitle:
      "ECOS fa parte di network internazionali che ci permettono di condividere pratiche, costruire nuove collaborazioni e contribuire al dibattito europeo su sport, inclusione e salute mentale.",
    networksCtaPrefix: "Scopri il sito",
    collabTitle: "Collabora con ECOS",
    collabText:
      "Se rappresenti un'organizzazione interessata a entrare in contatto con la nostra rete europea, raccontaci chi sei.",
    collabCta: "Contattaci",
    eventsEyebrow: "Eventi e comunicazione sociale",
    eventsTitle: "Apriamo il dialogo sul disagio giovanile.",
    eventsSubtitle:
      "Realizziamo eventi e iniziative di comunicazione sociale per contrastare lo stigma, creare occasioni di incontro e portare nello spazio pubblico i temi della salute mentale, dell'inclusione e del disagio giovanile attraverso sport e cinema.",
    sportLabel: "Sport",
    sportTitle: "Lo sport come spazio di incontro e inclusione",
    cinemaLabel: "Cinema",
    cinemaTitle: "Il cinema per raccontare, comprendere e cambiare prospettiva",
    eventsCta: "Scopri tutti gli eventi",
  },
  en: {
    heroCta1: "Discover what we do",
    heroCta2: "Contact us",
    pillarsEyebrow: "The three ECOS pillars",
    pillarsText:
      "We involve young people in meaningful activities, connect them with people, services and opportunities, and support them towards greater awareness, skills and autonomy.",
    pillarsWords: ["Engage", "Connect", "Empower"],
    topicsEyebrow: "Focus areas",
    topicsTitle: "The contexts where we focus our work.",
    topicsText:
      "Our activities respond to specific needs and contexts, in collaboration with services, schools and professionals.",
    networksEyebrow: "Our networks",
    networksTitle: "A European network of expertise and organisations.",
    networksSubtitle:
      "ECOS is part of international networks that let us share practices, build new collaborations and contribute to the European debate on sport, inclusion and mental health.",
    networksCtaPrefix: "Visit the",
    collabTitle: "Work with ECOS",
    collabText:
      "If you represent an organisation interested in connecting with our European network, tell us about yourselves.",
    collabCta: "Contact us",
    eventsEyebrow: "Events & social communication",
    eventsTitle: "Opening the dialogue on youth hardship.",
    eventsSubtitle:
      "We run events and social communication initiatives to fight stigma, create opportunities to meet, and bring mental health, inclusion and youth hardship into the public conversation through sport and film.",
    sportLabel: "Sport",
    sportTitle: "Sport as a space for meeting and inclusion",
    cinemaLabel: "Film",
    cinemaTitle: "Film to tell, understand and shift perspective",
    eventsCta: "See all events",
  },
} as const;

export default function LandingPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = copy[locale];
  const siteCopy = getSiteCopy(locale);
  const services = getServices(locale);
  const topics = getTopics(locale);
  const networks = getNetworks(locale);

  return (
    <>
      {/* Hero — banner navy pieno + card bianca "I tre pilastri ECOS", fedele al mockup PDF.
          Sfondo: foto stock Pexels (licenza gratuita, nessuna attribuzione richiesta) in
          dissolvenza, con overlay navy sopra per mantenere leggibilità e identità colore.
          [SEGNAPOSTO] sostituire con una fotografia autentica delle attività ECOS quando disponibile. */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/7683897/pexels-photo-7683897.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-fade-in object-cover"
          />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <Container className="relative grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr,0.85fr] lg:items-center lg:gap-14 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink">
              {siteCopy.pillars}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              {siteCopy.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {siteCopy.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={localeHref(locale, "/landing#aree")}
                className="inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-pink-dark"
              >
                {t.heroCta1}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <Link
                href={localeHref(locale, "/contatti")}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white"
              >
                {t.heroCta2}
              </Link>
            </div>
          </div>

          <div className="rounded-xl2 bg-white p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink">
              {t.pillarsEyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl leading-tight text-navy-dark">
              {siteCopy.pillars}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              {t.pillarsText}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {t.pillarsWords.map((word) => (
                <span
                  key={word}
                  className="inline-flex items-center rounded-full bg-mist-cool px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-navy-dark"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* I 4 quadranti operativi — solo numero, titolo, testo, link, come nel mockup.
          Hover: il colore si scurisce, la card si solleva leggermente e appare un
          bagliore diagonale che attraversa la card, per più dinamicità. */}
      <section id="aree" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 90}>
                <Link
                  href={localeHref(locale, service.href)}
                  className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-xl2 p-8 text-white transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-soft ${quadrantBg[service.tone]} ${quadrantHoverBg[service.tone]}`}
                >
                  {/* Bagliore diagonale in dissolvenza che attraversa la card al hover. */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
                  />
                  <div className="relative">
                    <p className="text-sm font-semibold text-white/70">
                      {service.number}
                    </p>
                    <h3 className="mt-3 font-display text-2xl">{service.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                      {service.description}
                    </p>
                  </div>
                  <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-semibold">
                    {service.cta}
                    <Icon
                      name="arrowRight"
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Aree tematiche. */}
      <section className="bg-mist-warm py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy">
            {t.topicsEyebrow}
          </p>
          <div>
            <SectionHeading title={t.topicsTitle} />
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              {t.topicsText}
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {topics.map((topic, i) => (
                <Reveal key={topic} as="li" delay={i * 60}>
                  <span className="cursor-default rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-navy/40 hover:bg-navy hover:text-white">
                    {topic}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* I nostri network. */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={t.networksEyebrow}
            title={t.networksTitle}
            subtitle={t.networksSubtitle}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {networks.map((network, i) => (
              <Reveal key={network.name} delay={i * 90}>
                <div className="group h-full rounded-xl2 border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:bg-navy hover:shadow-soft">
                  <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-white">
                    {network.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-white/80">
                    {network.description}
                  </p>
                  <Link
                    href={network.href}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-dark transition-colors duration-300 group-hover:text-white"
                  >
                    {t.networksCtaPrefix} {network.name}
                    <Icon
                      name="arrowRight"
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </Reveal>
            ))}
            <Reveal delay={networks.length * 90}>
              <div className="group h-full rounded-xl2 border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy/30 hover:bg-navy hover:shadow-soft">
                <h3 className="font-display text-xl text-ink transition-colors duration-300 group-hover:text-white">
                  {t.collabTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-white/80">
                  {t.collabText}
                </p>
                <Link
                  href={localeHref(locale, "/contatti")}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-dark transition-colors duration-300 group-hover:text-white"
                >
                  {t.collabCta}
                  <Icon
                    name="arrowRight"
                    className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Eventi e comunicazione sociale. */}
      <section className="bg-mist-pink py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={t.eventsEyebrow}
            title={t.eventsTitle}
            subtitle={t.eventsSubtitle}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-xl2 border border-line bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-navy">
                  {t.sportLabel}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink">
                  {t.sportTitle}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {sportEvents.map((event) => (
                    <li
                      key={event.name}
                      className="cursor-default rounded-full bg-mist-cool px-3.5 py-1.5 text-sm text-ink transition-colors duration-200 hover:bg-navy hover:text-white"
                    >
                      {event.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="h-full rounded-xl2 border border-line bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-wide text-purple">
                  {t.cinemaLabel}
                </p>
                <h3 className="mt-2 font-display text-xl text-ink">
                  {t.cinemaTitle}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {cinemaEvents.map((event) => (
                    <li
                      key={event.name}
                      className="cursor-default rounded-full bg-mist-cool px-3.5 py-1.5 text-sm text-ink transition-colors duration-200 hover:bg-purple hover:text-white"
                    >
                      {event.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <Link
            href={localeHref(locale, "/eventi")}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-dark"
          >
            {t.eventsCta}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
