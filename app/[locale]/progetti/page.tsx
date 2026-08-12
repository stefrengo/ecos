import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicForm from "@/components/DynamicForm";
import ProjectsArchive from "@/components/ProjectsArchive";
import { networkExpertise, projectPartnership } from "@/data/forms";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Progetti di cooperazione",
    description:
      "Progetti europei, ricerca, sperimentazione e partnership internazionali sui temi del disagio giovanile e dell'inclusione.",
  },
  en: {
    title: "Cooperation projects",
    description:
      "European projects, research, experimentation and international partnerships on youth hardship and inclusion.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const copyByLocale = {
  it: {
    home: "Home",
    breadcrumb: "Progetti di cooperazione",
    eyebrow: "03 · Progetti di cooperazione",
    heroTitle: "Costruiamo progetti europei insieme.",
    heroSubtitle:
      "Sviluppiamo e coordiniamo progetti di cooperazione con organizzazioni europee, enti pubblici, università e realtà del terzo settore. Mettiamo in rete esperienza sul campo, ricerca, sperimentazione e nuovi modelli di intervento a favore dei giovani.",
    primaryAction: "Scopri i nostri progetti",
    secondaryAction: "Proponi un progetto",
    archiveTitle: "Archivio progetti",
    archiveSubtitle: "Progetti in corso e conclusi, filtrabili per programma, tema, paese e stato.",
    expertiseTitle: "Porta le tue competenze nella nostra rete europea",
    expertiseSubtitle:
      "Cerchiamo organizzazioni e professionisti con competenze specifiche interessati a partecipare a nuovi progetti e partenariati internazionali.",
    proposeTitle: "Stai costruendo un progetto europeo?",
    proposeSubtitle:
      "Presentaci la tua idea e scopri se ECOS può contribuire come partner, coordinatore o organizzazione esperta.",
  },
  en: {
    home: "Home",
    breadcrumb: "Cooperation projects",
    eyebrow: "03 · Cooperation projects",
    heroTitle: "Building European projects together.",
    heroSubtitle:
      "We develop and coordinate cooperation projects with European organisations, public bodies, universities and third-sector organisations. We connect field experience, research, experimentation and new intervention models for young people.",
    primaryAction: "Discover our projects",
    secondaryAction: "Propose a project",
    archiveTitle: "Projects archive",
    archiveSubtitle: "Ongoing and completed projects, filterable by programme, topic, country and status.",
    expertiseTitle: "Bring your expertise to our European network",
    expertiseSubtitle:
      "We're looking for organisations and professionals with specific expertise interested in taking part in new projects and international partnerships.",
    proposeTitle: "Are you building a European project?",
    proposeSubtitle:
      "Tell us about your idea and find out how ECOS can contribute as a partner, coordinator or expert organisation.",
  },
} as const;

export default function ProgettiPage({ params }: { params: { locale: Locale } }) {
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
        primaryAction={{ label: t.primaryAction, href: localeHref(locale, "#archivio") }}
        secondaryAction={{ label: t.secondaryAction, href: localeHref(locale, "#proponi") }}
      />

      {/* NOTA: ProjectsArchive e i moduli DynamicForm restano in italiano in questa fase. */}
      <section id="archivio" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <SectionHeading title={t.archiveTitle} subtitle={t.archiveSubtitle} />
          <div className="mt-8">
            <ProjectsArchive />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={t.expertiseTitle} subtitle={t.expertiseSubtitle} />
          <div className="mt-8 rounded-xl2 border border-line bg-mist p-6 shadow-card sm:p-8">
            <DynamicForm config={networkExpertise} sourcePage="/progetti" />
          </div>
        </Container>
      </section>

      <section id="proponi" className="scroll-mt-20 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={t.proposeTitle} subtitle={t.proposeSubtitle} />
          <div className="mt-8 rounded-xl2 border border-line bg-surface p-6 shadow-card sm:p-8">
            <DynamicForm config={projectPartnership} sourcePage="/progetti" />
          </div>
        </Container>
      </section>
    </>
  );
}
