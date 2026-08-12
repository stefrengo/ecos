import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PublicationsArchive from "@/components/PublicationsArchive";

export const metadata: Metadata = {
  title: "Pubblicazioni",
  description:
    "Guide, ricerche, toolkit e materiali sviluppati da ECOS attraverso i propri progetti, disponibili per giovani, educatori, organizzazioni e professionisti.",
};

export default function PubblicazioniPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pubblicazioni" }]} />
      <Hero
        compact
        eyebrow="Pubblicazioni"
        title="Conoscenza aperta e strumenti condivisi"
        subtitle="Guide, ricerche, toolkit e materiali sviluppati attraverso i nostri progetti, disponibili per giovani, educatori, organizzazioni e professionisti."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <PublicationsArchive />
          <p className="mt-8 text-sm text-ink-soft">
            [SEGNAPOSTO] Le pubblicazioni mostrate sono segnaposto: sostituire con i
            materiali reali di ECOS.
          </p>
        </Container>
      </section>
    </>
  );
}
