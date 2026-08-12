import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { labs } from "@/data/laboratories";

export function generateStaticParams() {
  return labs.map((lab) => ({ slug: lab.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const lab = labs.find((l) => l.slug === params.slug);
  return { title: lab ? lab.title : "Laboratorio" };
}

export default function LabDetailPage({ params }: { params: { slug: string } }) {
  const lab = labs.find((l) => l.slug === params.slug);
  if (!lab) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Laboratori", href: "/laboratori" },
          { label: lab.title },
        ]}
      />
      <Container className="py-16 sm:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-navy">
          {lab.category === "sport" ? "Sport" : "Cultura"}
        </p>
        <h1 className="font-display text-3xl text-ink sm:text-4xl">{lab.title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {lab.summary}
        </p>
        <p className="mt-8 max-w-2xl rounded-xl2 border border-dashed border-line bg-mist px-6 py-5 text-sm leading-relaxed text-ink-soft">
          [SEGNAPOSTO] Questa pagina di dettaglio è predisposta per ospitare
          contenuti più approfonditi su questo laboratorio (descrizione estesa,
          calendario, sede, fotografie e testimonianze) non appena disponibili.
        </p>
      </Container>
      <CTASection
        title="Vuoi partecipare a questo laboratorio?"
        text="Compila il modulo di iscrizione: il nostro team ti ricontatterà per verificare insieme le opportunità disponibili."
        primaryLabel="Iscriviti ai nostri laboratori"
        primaryHref="/laboratori#iscrizione"
      />
    </>
  );
}
