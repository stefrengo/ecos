import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import PersonCard from "@/components/PersonCard";
import CTASection from "@/components/CTASection";
import { scientificCommittee } from "@/data/scientificCommittee";

export const metadata: Metadata = {
  title: "Comitato scientifico",
  description:
    "Il Comitato scientifico di ECOS: professionisti ed esperti multidisciplinari a supporto di metodologie, programmi e progetti.",
};

export default function ComitatoScientificoPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Comitato scientifico" }]}
      />
      <Hero
        compact
        eyebrow="Comitato scientifico"
        title="Un gruppo multidisciplinare a sostegno dei nostri progetti"
        subtitle="Il Comitato scientifico accompagna ECOS nello sviluppo di metodologie, programmi e progetti ad alto impatto sociale, mettendo a disposizione competenze diverse e complementari."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {scientificCommittee.map((member) => (
              <PersonCard key={member.name} {...member} />
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-soft">
            [SEGNAPOSTO] I profili mostrati sono segnaposto: sostituire con i membri
            reali del Comitato scientifico, fotografie e biografie ufficiali.
          </p>
        </Container>
      </section>

      <CTASection
        title="Fai parte del mondo accademico o professionale?"
        text="Se lavori nei settori dell'inclusione, dell'educazione o della cooperazione internazionale, raccontaci il tuo interesse a collaborare con ECOS."
        primaryLabel="Parla con il team ECOS"
        primaryHref="/contatti"
      />
    </>
  );
}
