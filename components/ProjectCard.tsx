import Link from "next/link";
import type { Project } from "@/data/projects";
import Icon from "./Icon";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/progetti/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-navy-light via-orange-light to-purple-light">
        {/* [SEGNAPOSTO] immagine/logo reale del progetto */}
        <Icon name="globe" className="h-8 w-8 text-navy-dark opacity-70" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              project.status === "in corso"
                ? "bg-navy-light text-navy-dark"
                : "bg-line text-ink-soft"
            }`}
          >
            {project.status === "in corso" ? "In corso" : "Concluso"}
          </span>
          <span className="text-xs font-medium text-ink-soft">{project.year}</span>
        </div>
        <h3 className="font-display text-lg text-ink">
          {project.title}
          <span className="ml-2 text-sm font-normal text-ink-soft">
            {project.acronym}
          </span>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {project.summary}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs text-ink-soft">
          <div>
            <dt className="font-semibold text-ink">Programma</dt>
            <dd>{project.programme}</dd>
          </div>
          <div>
            <dt className="font-semibold text-ink">Ruolo ECOS</dt>
            <dd>{project.role}</dd>
          </div>
        </dl>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-dark">
          Scheda progetto
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
