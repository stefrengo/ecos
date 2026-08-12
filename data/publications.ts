// Pubblicazioni — DATI SEGNAPOSTO.
// Nessuna pubblicazione reale è stata inventata: sostituire con i materiali ufficiali.

export type Publication = {
  slug: string;
  title: string;
  year: number;
  language: string;
  project?: string;
  summary: string;
  fileUrl?: string; // [SEGNAPOSTO] collegare al file reale (PDF, CMS, ecc.)
};

export const publications: Publication[] = [
  {
    slug: "guida-esempio",
    title: "[SEGNAPOSTO] Titolo pubblicazione",
    year: 2024,
    language: "Italiano",
    project: "[SEGNAPOSTO] Progetto collegato",
    summary:
      "[SEGNAPOSTO] Breve descrizione della guida, ricerca o toolkit da sostituire con i contenuti reali.",
  },
  {
    slug: "toolkit-esempio",
    title: "[SEGNAPOSTO] Titolo pubblicazione",
    year: 2023,
    language: "English",
    project: "[SEGNAPOSTO] Progetto collegato",
    summary:
      "[SEGNAPOSTO] Breve descrizione della guida, ricerca o toolkit da sostituire con i contenuti reali.",
  },
];

export const publicationYears = Array.from(
  new Set(publications.map((p) => p.year))
).sort((a, b) => b - a);
export const publicationLanguages = Array.from(
  new Set(publications.map((p) => p.language))
);
