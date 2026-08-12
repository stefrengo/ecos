// Elenco fisso delle categorie news — coerente con le aree operative ECOS.
// Usare sempre lo slug (non l'etichetta) nel frontmatter dei file .md.

export type NewsTone = "navy" | "purple" | "pink" | "orange" | "neutral";

export type NewsCategory = {
  slug: string;
  label: string;
  tone: NewsTone;
};

export const newsCategories: NewsCategory[] = [
  { slug: "laboratori", label: "Laboratori", tone: "navy" },
  { slug: "erasmus", label: "Erasmus+", tone: "purple" },
  { slug: "progetti", label: "Progetti", tone: "pink" },
  { slug: "aziende", label: "Aziende", tone: "orange" },
  { slug: "network", label: "Network", tone: "navy" },
  { slug: "eventi", label: "Eventi", tone: "purple" },
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
