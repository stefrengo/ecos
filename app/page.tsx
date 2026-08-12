import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import { services } from "@/data/services";
import { topics } from "@/data/topics";
import { networks } from "@/data/networks";
import { sportEvents, cinemaEvents } from "@/data/events";
import { site } from "@/data/site";

const quadrantBg: Record<string, string> = {
  navy: "bg-navy",
  purple: "bg-purple",
  pink: "bg-pink",
  orange: "bg-orange",
};

export default function HomePage() {
  return (
    <>
      {/* Hero — banner navy pieno + card bianca "I tre pilastri ECOS", fedele al mockup PDF. */}
      <section className="bg-navy">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.15fr,0.85fr] lg:items-center lg:gap-14 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink">
              {site.pillars}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
              {site.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
              {site.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#aree"
                className="inline-flex items-center gap-2 rounded-full bg-pink px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm transition-colors hover:bg-pink-dark"
              >
                Scopri cosa facciamo
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white"
              >
                Contattaci
              </Link>
            </div>
          </div>

          <div className="rounded-xl2 bg-white p-8 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-pink">
              I tre pilastri ECOS
            </p>
            <h2 className="mt-2 font-display text-2xl leading-tight text-navy-dark">
              {site.pillars}
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Coinvolgiamo i ragazzi in attività significative, li
              connettiamo con persone, servizi e opportunità, e li
              accompagniamo verso maggiore consapevolezza, competenze e
              autonomia.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Engage", "Connect", "Empower"].map((word) => (
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

      {/* I 4 quadranti operativi — solo numero, titolo, testo, link, come nel mockup. */}
      <section id="aree" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className={`group flex flex-col justify-between rounded-xl2 p-8 text-white transition-transform hover:-translate-y-1 ${quadrantBg[service.tone]}`}
              >
                <div>
                  <p className="text-sm font-semibold text-white/70">
                    {service.number}
                  </p>
                  <h3 className="mt-3 font-display text-2xl">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/85">
                    {service.description}
                  </p>
                </div>
                <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">
                  {service.cta}
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Aree tematiche. */}
      <section className="bg-mist-warm py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <p className="text-xs font-semibold uppercase tracking-wide text-navy">
            Aree tematiche
          </p>
          <div>
            <SectionHeading title="I contesti in cui concentriamo il nostro lavoro." />
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Le nostre attività si sviluppano in relazione a bisogni e
              contesti specifici, in collaborazione con servizi, scuole e
              professionisti.
            </p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {topics.map((topic) => (
                <li
                  key={topic}
                  className="rounded-full border border-navy/15 bg-white px-4 py-2 text-sm font-medium text-ink"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* I nostri network. */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="I nostri network"
            title="Una rete europea di competenze e organizzazioni."
            subtitle="ECOS fa parte di network internazionali che ci permettono di condividere pratiche, costruire nuove collaborazioni e contribuire al dibattito europeo su sport, inclusione e salute mentale."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {networks.map((network) => (
              <div
                key={network.name}
                className="rounded-xl2 border border-line bg-surface p-6"
              >
                <h3 className="font-display text-xl text-ink">{network.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {network.description}
                </p>
                <Link
                  href={network.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-dark"
                >
                  Scopri il sito {network.name}
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
            <div className="rounded-xl2 border border-line bg-surface p-6">
              <h3 className="font-display text-xl text-ink">Collabora con ECOS</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Se rappresenti un&rsquo;organizzazione interessata a entrare in
                contatto con la nostra rete europea, raccontaci chi sei.
              </p>
              <Link
                href="/contatti"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-dark"
              >
                Contattaci
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Eventi e comunicazione sociale. */}
      <section className="bg-mist-pink py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Eventi e comunicazione sociale"
            title="Apriamo il dialogo sul disagio giovanile."
            subtitle="Realizziamo eventi e iniziative di comunicazione sociale per contrastare lo stigma, creare occasioni di incontro e portare nello spazio pubblico i temi della salute mentale, dell'inclusione e del disagio giovanile attraverso sport e cinema."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl2 border border-line bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-navy">
                Sport
              </p>
              <h3 className="mt-2 font-display text-xl text-ink">
                Lo sport come spazio di incontro e inclusione
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {sportEvents.map((event) => (
                  <li
                    key={event.name}
                    className="rounded-full bg-mist-cool px-3.5 py-1.5 text-sm text-ink"
                  >
                    {event.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl2 border border-line bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-purple">
                Cinema
              </p>
              <h3 className="mt-2 font-display text-xl text-ink">
                Il cinema per raccontare, comprendere e cambiare prospettiva
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cinemaEvents.map((event) => (
                  <li
                    key={event.name}
                    className="rounded-full bg-mist-cool px-3.5 py-1.5 text-sm text-ink"
                  >
                    {event.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/eventi"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-dark"
          >
            Scopri tutti gli eventi
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
