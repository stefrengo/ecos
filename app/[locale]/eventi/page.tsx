import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { sportEvents, cinemaEvents } from "@/data/events";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Eventi",
    description:
      "Eventi e iniziative di comunicazione sociale per contrastare lo stigma e portare nello spazio pubblico i temi della salute mentale, dell'inclusione e del disagio giovanile attraverso sport e cinema.",
  },
  en: {
    title: "Events",
    description:
      "Events and social communication initiatives to fight stigma and bring mental health, inclusion and youth hardship into the public conversation through sport and film.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const copyByLocale = {
  it: {
    home: "Home",
    breadcrumb: "Eventi",
    eyebrow: "Eventi e comunicazione sociale",
    heroTitle: "Apriamo il dialogo sul disagio giovanile.",
    heroSubtitle:
      "Realizziamo eventi e iniziative di comunicazione sociale per contrastare lo stigma, creare occasioni di incontro e portare nello spazio pubblico i temi della salute mentale, dell'inclusione e del disagio giovanile attraverso sport e cinema.",
    sportLabel: "Sport",
    sportTitle: "Lo sport come spazio di incontro e inclusione",
    sportText:
      "Eventi sportivi capaci di coinvolgere persone, comunità e organizzazioni, creando occasioni pubbliche per parlare di salute mentale, disagio giovanile e inclusione.",
    cinemaLabel: "Cinema",
    cinemaTitle: "Il cinema per raccontare, comprendere e cambiare prospettiva",
    cinemaText:
      "Progetti e iniziative audiovisive che aprono il dialogo sui temi della salute mentale e del disagio, dando spazio a storie, esperienze e nuovi punti di vista.",
    ctaTitle: "Vuoi organizzare un evento con noi?",
    ctaText: "Raccontaci la tua idea: sport, cinema o un altro linguaggio per parlare di inclusione e salute mentale.",
    ctaLabel: "Parla con il team ECOS",
  },
  en: {
    home: "Home",
    breadcrumb: "Events",
    eyebrow: "Events & social communication",
    heroTitle: "Opening the dialogue on youth hardship.",
    heroSubtitle:
      "We run events and social communication initiatives to fight stigma, create opportunities to meet, and bring mental health, inclusion and youth hardship into the public conversation through sport and film.",
    sportLabel: "Sport",
    sportTitle: "Sport as a space for meeting and inclusion",
    sportText:
      "Sport events that engage people, communities and organisations, creating public opportunities to talk about mental health, youth hardship and inclusion.",
    cinemaLabel: "Film",
    cinemaTitle: "Film to tell, understand and shift perspective",
    cinemaText:
      "Audiovisual projects and initiatives that open the dialogue on mental health and hardship, giving space to stories, experiences and new points of view.",
    ctaTitle: "Want to organise an event with us?",
    ctaText: "Tell us your idea: sport, film or another language to talk about inclusion and mental health.",
    ctaLabel: "Talk to the ECOS team",
  },
} as const;

export default function EventiPage({ params }: { params: { locale: Locale } }) {
  const t = copyByLocale[params.locale];
  const { locale } = params;

  return (
    <>
      <Breadcrumb
        items={[{ label: t.home, href: localeHref(locale, "/") }, { label: t.breadcrumb }]}
      />
      <Hero compact eyebrow={t.eyebrow} title={t.heroTitle} subtitle={t.heroSubtitle} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl2 border border-line bg-surface p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy">
              {t.sportLabel}
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink">{t.sportTitle}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{t.sportText}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {sportEvents.map((event) => (
                <li
                  key={event.name}
                  className="rounded-full bg-mist-cool px-4 py-2 text-sm font-medium text-ink"
                >
                  {event.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl2 border border-line bg-surface p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple">
              {t.cinemaLabel}
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink">{t.cinemaTitle}</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{t.cinemaText}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {cinemaEvents.map((event) => (
                <li
                  key={event.name}
                  className="rounded-full bg-mist-pink px-4 py-2 text-sm font-medium text-ink"
                >
                  {event.name}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTASection
        title={t.ctaTitle}
        text={t.ctaText}
        primaryLabel={t.ctaLabel}
        primaryHref={localeHref(locale, "/contatti")}
      />
    </>
  );
}
