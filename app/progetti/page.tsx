import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicForm from "@/components/DynamicForm";
import ProjectsArchive from "@/components/ProjectsArchive";
import { networkExpertise, projectPartnership } from "@/data/forms";

export const metadata: Metadata = {
  title: "Cooperazione europea e internazionale",
  description:
    "Progetti e partenariati europei coordinati da ECOS nei settori dell'inclusione, dell'educazione e dell'innovazione sociale.",
};

export default function ProgettiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Progetti" }]} />
      <Hero
        compact
        eyebrow="Cooperazione europea"
        title="Progettiamo soluzioni europee per sfide condivise"
        subtitle="Costruiamo partenariati internazionali per sviluppare nuovi strumenti, metodologie e modelli di intervento nei settori dell'inclusione, dell'educazione, della partecipazione e dell'innovazione sociale. Collaboriamo con organizzazioni che condividono la volontà di sperimentare, apprendere e generare un impatto concreto nei territori."
        primaryAction={{ label: "Esplora l'archivio", href: "#archivio" }}
      />

      <section id="archivio" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <SectionHeading title="Archivio progetti" subtitle="Progetti in corso e conclusi, filtrabili per programma, tema, paese e stato." />
          <div className="mt-8">
            <ProjectsArchive />
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Porta le tue competenze nella nostra rete europea"
            subtitle="Cerchiamo organizzazioni e professionisti con competenze specifiche interessati a partecipare a nuovi progetti e partenariati internazionali."
          />
          <div className="mt-8 rounded-xl2 border border-line bg-mist p-6 shadow-card sm:p-8">
            <DynamicForm config={networkExpertise} sourcePage="/progetti" />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Stai costruendo un progetto europeo?"
            subtitle="Presentaci la tua idea e scopri se ECOS può contribuire come partner, coordinatore o organizzazione esperta."
          />
          <div className="mt-8 rounded-xl2 border border-line bg-surface p-6 shadow-card sm:p-8">
            <DynamicForm config={projectPartnership} sourcePage="/progetti" />
          </div>
        </Container>
      </section>
    </>
  );
}
