import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicForm from "@/components/DynamicForm";
import Icon from "@/components/Icon";
import { erasmusMobilityRequest, erasmusHostingOffer } from "@/data/forms";

export const metadata: Metadata = {
  title: "Mobilità e formazione Erasmus+",
  description:
    "Programmi di mobilità Erasmus+ per organizzazioni, professionisti, educatori e studenti, in Italia e in Europa.",
};

const outActivities = [
  "Job shadowing",
  "Visite studio",
  "Corsi di formazione",
  "Mobilità di gruppo",
  "Scambi di buone pratiche",
  "Percorsi di apprendimento presso organizzazioni partner",
  "Incontri con professionisti ed esperti europei",
];

const outSupport = [
  "Definizione degli obiettivi formativi",
  "Individuazione dell'organizzazione ospitante",
  "Progettazione del programma",
  "Organizzazione logistica",
  "Preparazione dei partecipanti",
  "Tutoraggio",
  "Valutazione dei risultati",
  "Documentazione dell'esperienza",
];

const inActivities = [
  "Visite a servizi e organizzazioni",
  "Incontri con professionisti",
  "Job shadowing",
  "Workshop",
  "Visite studio",
  "Attività formative",
  "Scambi con enti pubblici e realtà del territorio",
  "Partecipazione alle attività di ECOS e Happy Club",
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-forest" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ErasmusPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Erasmus+" }]} />
      <Hero
        compact
        eyebrow="Mobilità internazionale"
        title="Imparare, condividere e crescere attraverso l&rsquo;Europa"
        subtitle="Progettiamo esperienze formative internazionali che permettono a organizzazioni, professionisti, educatori e studenti di conoscere nuovi metodi di lavoro, sviluppare competenze e costruire collaborazioni europee durature."
        primaryAction={{ label: "Richiedi un programma di mobilità", href: "#richiedi" }}
        secondaryAction={{ label: "Offri una mobilità", href: "#offri" }}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Mobilità in uscita"
            title="Partire con un programma Erasmus+"
            subtitle="Accompagniamo organizzazioni, professionisti, educatori, operatori e studenti nella realizzazione di esperienze formative all'estero."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink">
                Possibili attività
              </h3>
              <CheckList items={outActivities} />
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink">
                ECOS può supportare
              </h3>
              <CheckList items={outSupport} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Mobilità in entrata"
            title="Realizzare una mobilità Erasmus+ in Italia"
            subtitle="Accogliamo in Italia gruppi, professionisti, studenti e organizzazioni europee interessati a conoscere progetti, servizi ed esperienze nel campo dell'inclusione, dell'educazione, delle politiche giovanili e dell'innovazione sociale."
          />
          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink">
              Possibili attività
            </h3>
            <CheckList items={inActivities} />
          </div>
        </Container>
      </section>

      <section id="richiedi" className="scroll-mt-20 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Vuoi organizzare un&rsquo;esperienza Erasmus+?"
            subtitle="Raccontaci quali competenze vuoi sviluppare, chi parteciperà e quale tipo di esperienza stai cercando."
          />
          <div className="mt-8 rounded-xl2 border border-line bg-surface p-6 shadow-card sm:p-8">
            <DynamicForm config={erasmusMobilityRequest} sourcePage="/erasmus" />
          </div>
        </Container>
      </section>

      <section id="offri" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title="La tua organizzazione può ospitare una mobilità?"
            subtitle="Entra nella nostra rete di enti, servizi, aziende e professionisti disponibili a condividere competenze ed esperienze con partecipanti europei."
          />
          <div className="mt-8 rounded-xl2 border border-line bg-mist p-6 shadow-card sm:p-8">
            <DynamicForm config={erasmusHostingOffer} sourcePage="/erasmus" />
          </div>
        </Container>
      </section>
    </>
  );
}
