import type { Publication } from "@/data/publications";
import Icon from "./Icon";

export default function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-card">
      <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-purple-light to-navy-light text-purple">
        {/* [SEGNAPOSTO] copertina reale della pubblicazione */}
        <Icon name="mail" className="h-8 w-8 opacity-60" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex flex-wrap gap-2 text-xs font-medium text-ink-soft">
          <span>{publication.year}</span>
          <span aria-hidden="true">·</span>
          <span>{publication.language}</span>
          {publication.project && (
            <>
              <span aria-hidden="true">·</span>
              <span>{publication.project}</span>
            </>
          )}
        </div>
        <h3 className="font-display text-lg text-ink">{publication.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {publication.summary}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-dark">
          Visualizza la pubblicazione
          <Icon name="arrowRight" className="h-4 w-4" />
        </span>
      </div>
    </div>
  );
}
