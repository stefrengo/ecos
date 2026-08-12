import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import EmptyState from "@/components/EmptyState";
import CTASection from "@/components/CTASection";
import { jobs } from "@/data/jobs";

export const metadata: Metadata = {
  title: "Lavora con noi",
  description:
    "Posizioni aperte, tirocini, collaborazioni e volontariato in ECOS: porta le tue competenze al servizio dei giovani e delle comunità.",
};

const categories = [
  { title: "Posizioni aperte", text: "Ruoli stabili all'interno del team ECOS." },
  { title: "Tirocini", text: "Percorsi formativi guidati per studenti e neolaureati." },
  { title: "Collaborazioni", text: "Incarichi professionali su progetti specifici." },
  { title: "Volontariato", text: "Opportunità di volontariato nei nostri programmi." },
];

export default function LavoraConNoiPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Lavora con noi" }]}
      />
      <Hero
        compact
        eyebrow="Lavora con noi"
        title="Porta le tue competenze in ECOS"
        subtitle="Cerchiamo persone curiose, responsabili e motivate a lavorare per i giovani, l&rsquo;inclusione e la cooperazione internazionale."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Come puoi collaborare con noi" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <div key={c.title} className="rounded-xl2 border border-line bg-surface p-6">
                <h3 className="font-display text-lg text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            {jobs.length === 0 ? (
              <EmptyState
                icon="search"
                title="Al momento non ci sono posizioni aperte"
                text="Non è il momento giusto, ma potrebbe esserlo presto. Scrivici comunque: raccogliamo le candidature spontanee e ti ricontatteremo quando ci sarà un&rsquo;opportunità in linea con il tuo profilo."
                action={
                  <a
                    href="/contatti?tipo=lavora-con-noi"
                    className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white hover:bg-coral-dark"
                  >
                    Invia una candidatura spontanea
                  </a>
                }
              />
            ) : (
              <ul className="grid gap-4 sm:grid-cols-2">
                {jobs.map((job) => (
                  <li key={job.slug} className="rounded-xl2 border border-line bg-surface p-6">
                    <h3 className="font-display text-lg text-ink">{job.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{job.summary}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>

      <CTASection
        title="Hai una domanda sulle opportunità di ECOS?"
        text="Scrivici: ti aiuteremo a capire quale percorso è più adatto al tuo profilo."
        primaryLabel="Contattaci"
        primaryHref="/contatti"
      />
    </>
  );
}
