import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { about, values } from "@/data/team";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "La storia, la missione, la visione e i valori di ECOS: persone, competenze e relazioni al servizio delle comunità.",
};

export default function ChiSiamoPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Chi siamo" }]} />
      <Hero
        compact
        eyebrow="Chi siamo"
        title="Persone, competenze e relazioni al servizio delle comunità"
        subtitle="ECOS progetta e realizza iniziative sociali, educative e internazionali mettendo in connessione giovani, enti, organizzazioni e imprese. Crediamo nella partecipazione, nell&rsquo;apprendimento e nella cooperazione come strumenti per creare un impatto duraturo."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-xl2 border border-line bg-surface p-7">
            <h2 className="font-display text-xl text-ink">Missione</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {about.mission}
            </p>
          </div>
          <div className="rounded-xl2 border border-line bg-surface p-7">
            <h2 className="font-display text-xl text-ink">Visione</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {about.vision}
            </p>
          </div>
          <div className="rounded-xl2 border border-line bg-surface p-7">
            <h2 className="font-display text-xl text-ink">Metodo di lavoro</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {about.method}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="La nostra storia" title="Da dove veniamo" />
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {about.history}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="I nostri valori" title="Ciò in cui crediamo" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl2 border border-line bg-surface p-6"
              >
                <h3 className="font-display text-lg text-forest-dark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Il team" title="Le persone di ECOS" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            [SEGNAPOSTO] Questa sezione ospiterà le fotografie e i profili reali del
            team ECOS non appena disponibili.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Documenti istituzionali" title="Trasparenza e dati principali" />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            [SEGNAPOSTO] Statuto, bilancio sociale e altri documenti istituzionali
            ufficiali saranno collegati qui.
          </p>
        </Container>
      </section>

      <CTASection
        title="Vuoi conoscere meglio ECOS?"
        text="Scrivici per saperne di più sulla nostra organizzazione o per proporre una collaborazione."
        primaryLabel="Parla con il team ECOS"
        primaryHref="/contatti"
      />
    </>
  );
}
