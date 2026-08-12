import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicForm from "@/components/DynamicForm";
import CTASection from "@/components/CTASection";
import { corporatePartnership } from "@/data/forms";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Responsabilità sociale e impatto",
  description:
    "Programmi strutturati per aziende: volontariato, partecipazione dei dipendenti e sostegno diretto ai laboratori.",
};

const steps = [
  "Ascolto dei bisogni e degli obiettivi dell'impresa",
  "Definizione dei temi e dei destinatari",
  "Co-progettazione del programma",
  "Coinvolgimento dei dipendenti",
  "Realizzazione delle attività",
  "Raccolta di dati, testimonianze e risultati",
  "Produzione di una relazione di impatto",
];

const programs = [
  {
    title: "Conoscere la fragilità giovanile",
    kicker: "Knowledge building",
    text: "Il team di ECOS realizza incontri di approfondimento e formazione per aiutare aziende e dipendenti a comprendere le condizioni di vulnerabilità vissute da molti giovani.",
    items: [
      "Giustizia minorile",
      "Salute mentale",
      "Giovani migranti",
      "Rifugiati",
      "Povertà educativa",
      "Esclusione sociale",
      "Accesso alle opportunità",
      "Partecipazione",
      "Autonomia",
    ],
  },
  {
    title: "Agire direttamente nei progetti",
    kicker: "Volontariato aziendale",
    text: "Coinvolgiamo i dipendenti in azioni di volontariato strutturate e certificate, realizzate all'interno dei nostri progetti nazionali e internazionali. Ogni esperienza viene preparata e accompagnata dal team ECOS, nel rispetto dei beneficiari, dei servizi responsabili e delle procedure di tutela.",
    items: [
      "Supporto ai laboratori",
      "Mentoring",
      "Accompagnamento durante eventi",
      "Attività sportive e culturali",
      "Condivisione di competenze professionali",
      "Supporto organizzativo",
      "Partecipazione a iniziative internazionali",
      "Volontariato di gruppo",
    ],
  },
  {
    title: "Co-progettare eventi che creano relazioni",
    kicker: "Eventi a impatto sociale",
    text: "Progettiamo insieme alle imprese eventi che permettono ai dipendenti di conoscere direttamente i progetti, incontrare operatori e partecipanti e contribuire ad attività concrete. La partecipazione dei beneficiari avviene sempre nel rispetto della loro volontà, privacy, sicurezza e dignità.",
    items: [
      "Giornate aziendali",
      "Tornei sportivi",
      "Eventi culturali",
      "Workshop",
      "Team building sociale",
      "Campagne territoriali",
      "Incontri di sensibilizzazione",
      "Raccolte fondi",
      "Iniziative collegate ai progetti europei",
    ],
  },
];

export default function PartnershipPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Responsabilità sociale e impatto" },
        ]}
      />
      <Hero
        compact
        eyebrow="04 · Responsabilità sociale e impatto"
        title="Programmi strutturati per le aziende."
        subtitle="Costruiamo partnership che permettono alle imprese di partecipare concretamente alle nostre attività: programmi di volontariato aziendale, coinvolgimento dei dipendenti e sostegno diretto ai laboratori rivolti ai giovani."
        primaryAction={{ label: "Costruiamo una partnership", href: "#richiedi" }}
      />

      <section className="py-4">
        <Container>
          <p className="rounded-xl2 border-l-4 border-navy bg-navy-light/50 px-6 py-5 text-[15px] leading-relaxed text-ink">
            ECOS progetta programmi strutturati di cooperazione tra imprese,
            professionisti, organizzazioni sociali e beneficiari: non proponiamo
            soltanto attività occasionali.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Metodo di lavoro" title="Un percorso in sette passaggi" />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li
                key={step}
                className="rounded-xl2 border border-line bg-surface p-5"
              >
                <span className="font-display text-2xl text-navy-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {programs.map((program, i) => (
        <section
          key={program.title}
          className={i % 2 === 0 ? "bg-white py-16 sm:py-20" : "py-16 sm:py-20"}
        >
          <Container>
            <SectionHeading
              eyebrow={program.kicker}
              title={program.title}
              subtitle={program.text}
            />
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {program.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-mist px-4 py-2 text-sm text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Misurazione dell'impatto"
            title="Rendere visibile il valore generato"
            subtitle="Ogni percorso di partnership può essere accompagnato da una relazione di impatto che documenta attività, partecipazione, risultati e valore sociale generato. La relazione può contribuire alla comunicazione istituzionale e al bilancio sociale dell'impresa."
          />
          <p className="mt-4 max-w-2xl text-sm text-ink-soft">
            L&rsquo;utilizzo dei dati nel bilancio sociale deve essere verificato
            dall&rsquo;impresa con i propri consulenti; ECOS non garantisce
            automaticamente conformità normativa o certificazioni.
          </p>
        </Container>
      </section>

      <section id="richiedi" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Costruiamo il programma giusto per la tua impresa"
            subtitle="Raccontaci gli obiettivi della tua organizzazione, i temi di interesse e il tipo di coinvolgimento che desideri offrire ai dipendenti."
          />
          <div className="mt-8 rounded-xl2 border border-line bg-mist p-6 shadow-card sm:p-8">
            <DynamicForm config={corporatePartnership} sourcePage="/partnership" />
          </div>
        </Container>
      </section>

      <CTASection
        title="Scopri un progetto concreto"
        text="Conosci Happy Club, il programma di ECOS che utilizza sport, cultura e partecipazione per accompagnare bambini e giovani in condizioni di vulnerabilità."
        primaryLabel="Scopri Happy Club"
        primaryHref={site.happyClubUrl}
        external
      />
    </>
  );
}
