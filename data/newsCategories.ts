// Elenco fisso delle categorie news — coerente con le aree operative ECOS.
// Usare sempre lo slug (non l'etichetta) nel frontmatter dei file .md.

export type NewsTone = "navy" | "purple" | "pink" | "orange" | "neutral";

export type NewsCategory = {
  slug: string;
  label: string;
  tone: NewsTone;
};

export const newsCategories: NewsCategory[] = [
  { slug: "cooperation-partnership", label: "Cooperation & Partnership", tone: "navy" },
  { slug: "formazione-mobilita", label: "Formazione e mobilità europea", tone: "purple" },
  { slug: "happy-club", label: "HAPPY Club", tone: "pink" },
  { slug: "cooperazione-sviluppo", label: "Cooperazione allo sviluppo", tone: "orange" },
  { slug: "generale", label: "Generale", tone: "neutral" },
];

export function getCategory(slug: string): NewsCategory {
  return (
    newsCategories.find((c) => c.slug === slug) ?? {
      slug,
      label: slug,
      tone: "neutral",
    }
  );
}

export const toneClasses: Record<NewsTone, string> = {
  navy: "bg-navy-light text-navy-dark",
  purple: "bg-purple-light text-purple-dark",
  pink: "bg-pink-light text-pink-dark",
  orange: "bg-orange-light text-orange-dark",
  neutral: "bg-mist-cool text-ink-soft",
};
