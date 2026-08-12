import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} (${project.acronym})` : "Progetto" };
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-line py-8 first:border-t-0 first:pt-0">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <div className="mt-3 text-[15px] leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Progetti", href: "/progetti" },
          { label: project.acronym },
        ]}
      />
      <Container className="py-14 sm:py-16">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              project.status === "in corso"
                ? "bg-navy-light text-navy-dark"
                : "bg-line text-ink-soft"
            }`}
          >
            {project.status === "in corso" ? "In corso" : "Concluso"}
          </span>
          <span className="text-xs font-medium text-ink-soft">
            {project.programme} · {project.year} · {project.duration}
          </span>
        </div>
        <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
          {project.title}{" "}
          <span className="text-ink-soft">({project.acronym})</span>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {project.summary}
        </p>

        <dl className="mt-8 grid gap-4 rounded-xl2 border border-line bg-mist p-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase text-ink-soft">Ruolo ECOS</dt>
            <dd className="mt-1 text-sm text-ink">{project.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-ink-soft">Paesi coinvolti</dt>
            <dd className="mt-1 text-sm text-ink">{project.countries.join(", ")}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase text-ink-soft">Programma</dt>
            <dd className="mt-1 text-sm text-ink">{project.programme}</dd>
          </div>
        </dl>

        <div className="mt-10 max-w-3xl">
          {project.context && <Block title="Contesto">{project.context}</Block>}
          {project.objectives && (
            <Block title="Obiettivi">
              <ul className="list-disc space-y-1 pl-5">
                {project.objectives.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Block>
          )}
          {project.activities && (
            <Block title="Attività">
              <ul className="list-disc space-y-1 pl-5">
                {project.activities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Block>
          )}
          {project.beneficiaries && (
            <Block title="Destinatari">{project.beneficiaries}</Block>
          )}
          {project.partners && (
            <Block title="Partner">
              <ul className="list-disc space-y-1 pl-5">
                {project.partners.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Block>
          )}
          {project.results && (
            <Block title="Risultati">
              <ul className="list-disc space-y-1 pl-5">
                {project.results.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </Block>
          )}
          <Block title="Finanziamento">
            [SEGNAPOSTO] Informazioni sul finanziamento e disclaimer obbligatori del
            programma europeo di riferimento da inserire qui.
          </Block>
        </div>
      </Container>
      <CTASection
        title="Vuoi collaborare a un progetto simile?"
        text="Entra nel nostro network e mettiamo in relazione le tue competenze con nuove opportunità europee."
        primaryLabel="Entra nel nostro network"
        primaryHref="/progetti#archivio"
      />
    </>
  );
}
