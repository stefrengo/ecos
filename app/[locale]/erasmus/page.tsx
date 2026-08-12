import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicForm from "@/components/DynamicForm";
import Icon from "@/components/Icon";
import { erasmusMobilityRequest, erasmusHostingOffer } from "@/data/forms";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Mobilità Erasmus+",
    description:
      "Job shadowing, study visit, formazione e scambi per giovani, educatori, operatori, tecnici sportivi e personale.",
  },
  en: {
    title: "Erasmus+ mobility",
    description:
      "Job shadowing, study visits, training and exchanges for young people, educators, staff, sport instructors and personnel.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const copyByLocale = {
  it: {
    home: "Home",
    breadcrumb: "Mobilità Erasmus+",
    eyebrow: "02 · Mobilità Erasmus+",
    heroTitle: "Esperienze di scambio, formazione e apprendimento in Europa.",
    heroSubtitle:
      "Realizziamo programmi di mobilità Erasmus+ dedicati ai giovani e ai professionisti che lavorano con loro: educatori, operatori, tecnici sportivi e personale delle organizzazioni. Organizziamo job shadowing, study visit, percorsi formativi e opportunità di scambio, sia all'estero presso organizzazioni partner sia in Italia presso ECOS.",
    primaryAction: "Scopri le opportunità in uscita",
    secondaryAction: "Organizza una mobilità presso ECOS",
    outEyebrow: "Mobilità in uscita",
    outTitle: "Partire con un programma Erasmus+",
    outSubtitle:
      "Accompagniamo organizzazioni, professionisti, educatori, operatori e studenti nella realizzazione di esperienze formative all'estero.",
    activitiesLabel: "Possibili attività",
    supportLabel: "ECOS può supportare",
    inEyebrow: "Mobilità in entrata",
    inTitle: "Realizzare una mobilità Erasmus+ in Italia",
    inSubtitle:
      "Accogliamo in Italia gruppi, professionisti, studenti e organizzazioni europee interessati a conoscere progetti, servizi ed esperienze nel campo dell'inclusione, dell'educazione, delle politiche giovanili e dell'innovazione sociale.",
    requestTitle: "Vuoi organizzare un'esperienza Erasmus+?",
    requestSubtitle:
      "Raccontaci quali competenze vuoi sviluppare, chi parteciperà e quale tipo di esperienza stai cercando.",
    offerTitle: "La tua organizzazione può ospitare una mobilità?",
    offerSubtitle:
      "Entra nella nostra rete di enti, servizi, aziende e professionisti disponibili a condividere competenze ed esperienze con partecipanti europei.",
    outActivities: [
      "Job shadowing",
      "Visite studio",
      "Corsi di formazione",
      "Mobilità di gruppo",
      "Scambi di buone pratiche",
      "Percorsi di apprendimento presso organizzazioni partner",
      "Incontri con professionisti ed esperti europei",
    ],
    outSupport: [
      "Definizione degli obiettivi formativi",
      "Individuazione dell'organizzazione ospitante",
      "Progettazione del programma",
      "Organizzazione logistica",
      "Preparazione dei partecipanti",
      "Tutoraggio",
      "Valutazione dei risultati",
      "Documentazione dell'esperienza",
    ],
    inActivities: [
      "Visite a servizi e organizzazioni",
      "Incontri con professionisti",
      "Job shadowing",
      "Workshop",
      "Visite studio",
      "Attività formative",
      "Scambi con enti pubblici e realtà del territorio",
      "Partecipazione alle attività di ECOS e Happy Club",
    ],
  },
  en: {
    home: "Home",
    breadcrumb: "Erasmus+ mobility",
    eyebrow: "02 · Erasmus+ mobility",
    heroTitle: "Exchange, training and learning experiences across Europe.",
    heroSubtitle:
      "We run Erasmus+ mobility programmes for young people and for the professionals who work with them: educators, staff, sport instructors and organisation personnel. We organise job shadowing, study visits, training paths and exchange opportunities, both abroad with partner organisations and in Italy at ECOS.",
    primaryAction: "Discover outgoing opportunities",
    secondaryAction: "Host a mobility at ECOS",
    outEyebrow: "Outgoing mobility",
    outTitle: "Take part in an Erasmus+ programme",
    outSubtitle:
      "We support organisations, professionals, educators, staff and students in building training experiences abroad.",
    activitiesLabel: "Possible activities",
    supportLabel: "How ECOS can help",
    inEyebrow: "Incoming mobility",
    inTitle: "Running an Erasmus+ mobility in Italy",
    inSubtitle:
      "We welcome groups, professionals, students and European organisations to Italy who want to learn about projects, services and experiences in inclusion, education, youth policy and social innovation.",
    requestTitle: "Want to organise an Erasmus+ experience?",
    requestSubtitle:
      "Tell us which skills you want to develop, who will take part, and what kind of experience you're looking for.",
    offerTitle: "Can your organisation host a mobility?",
    offerSubtitle:
      "Join our network of organisations, services, companies and professionals available to share skills and experience with European participants.",
    outActivities: [
      "Job shadowing",
      "Study visits",
      "Training courses",
      "Group mobility",
      "Good practice exchanges",
      "Learning paths at partner organisations",
      "Meetings with European professionals and experts",
    ],
    outSupport: [
      "Defining learning objectives",
      "Identifying the host organisation",
      "Programme design",
      "Logistics",
      "Preparing participants",
      "Mentoring",
      "Evaluating results",
      "Documenting the experience",
    ],
    inActivities: [
      "Visits to services and organisations",
      "Meetings with professionals",
      "Job shadowing",
      "Workshops",
      "Study visits",
      "Training activities",
      "Exchanges with public bodies and local organisations",
      "Taking part in ECOS and Happy Club activities",
    ],
  },
} as const;

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-ink-soft">
          <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ErasmusPage({ params }: { params: { locale: Locale } }) {
  const t = copyByLocale[params.locale];
  const { locale } = params;

  return (
    <>
      <Breadcrumb
        items={[{ label: t.home, href: localeHref(locale, "/") }, { label: t.breadcrumb }]}
      />
      <Hero
        compact
        eyebrow={t.eyebrow}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primaryAction={{ label: t.primaryAction, href: localeHref(locale, "#richiedi") }}
        secondaryAction={{ label: t.secondaryAction, href: localeHref(locale, "#offri") }}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.outEyebrow} title={t.outTitle} subtitle={t.outSubtitle} />
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink">
                {t.activitiesLabel}
              </h3>
              <CheckList items={t.outActivities} />
            </div>
            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink">
                {t.supportLabel}
              </h3>
              <CheckList items={t.outSupport} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.inEyebrow} title={t.inTitle} subtitle={t.inSubtitle} />
          <div className="mt-8">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-ink">
              {t.activitiesLabel}
            </h3>
            <CheckList items={t.inActivities} />
          </div>
        </Container>
      </section>

      {/* NOTA: i moduli DynamicForm restano in italiano in questa fase. */}
      <section id="richiedi" className="scroll-mt-20 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={t.requestTitle} subtitle={t.requestSubtitle} />
          <div className="mt-8 rounded-xl2 border border-line bg-surface p-6 shadow-card sm:p-8">
            <DynamicForm config={erasmusMobilityRequest} sourcePage="/erasmus" />
          </div>
        </Container>
      </section>

      <section id="offri" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={t.offerTitle} subtitle={t.offerSubtitle} />
          <div className="mt-8 rounded-xl2 border border-line bg-mist p-6 shadow-card sm:p-8">
            <DynamicForm config={erasmusHostingOffer} sourcePage="/erasmus" />
          </div>
        </Container>
      </section>
    </>
  );
}
