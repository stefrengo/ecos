import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { sportEvents, cinemaEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Eventi",
  description:
    "Eventi e iniziative di comunicazione sociale per contrastare lo stigma e portare nello spazio pubblico i temi della salute mentale, dell'inclusione e del disagio giovanile attraverso sport e cinema.",
};

export default function EventiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Eventi" }]} />
      <Hero
        compact
        eyebrow="Eventi e comunicazione sociale"
        title="Apriamo il dialogo sul disagio giovanile."
        subtitle="Realizziamo eventi e iniziative di comunicazione sociale per contrastare lo stigma, creare occasioni di incontro e portare nello spazio pubblico i temi della salute mentale, dell'inclusione e del disagio giovanile attraverso sport e cinema."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl2 border border-line bg-surface p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-navy">
              Sport
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink">
              Lo sport come spazio di incontro e inclusione
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Eventi sportivi capaci di coinvolgere persone, comunità e
              organizzazioni, creando occasioni pubbliche per parlare di
              salute mentale, disagio giovanile e inclusione.
            </p>
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
              Cinema
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink">
              Il cinema per raccontare, comprendere e cambiare prospettiva
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
              Progetti e iniziative audiovisive che aprono il dialogo sui
              temi della salute mentale e del disagio, dando spazio a
              storie, esperienze e nuovi punti di vista.
            </p>
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
        title="Vuoi organizzare un evento con noi?"
        text="Raccontaci la tua idea: sport, cinema o un altro linguaggio per parlare di inclusione e salute mentale."
        primaryLabel="Parla con il team ECOS"
        primaryHref="/contatti"
      />
    </>
  );
}
