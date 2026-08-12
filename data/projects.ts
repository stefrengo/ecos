// Archivio progetti — DATI SEGNAPOSTO.
// Nessun progetto, partner, budget o risultato reale è stato inventato:
// sostituire integralmente questa lista con i dati ufficiali di ECOS.

export type Project = {
  slug: string;
  title: string;
  acronym: string;
  year: number;
  duration: string;
  programme: string;
  status: "in corso" | "concluso";
  role: string;
  countries: string[];
  summary: string;
  context?: string;
  objectives?: string[];
  activities?: string[];
  beneficiaries?: string;
  partners?: string[];
  results?: string[];
  officialSite?: string;
};

export const projects: Project[] = [
  {
    slug: "esempio-progetto-2024",
    title: "[SEGNAPOSTO] Titolo del progetto",
    acronym: "[ACRO]",
    year: 2024,
    duration: "[SEGNAPOSTO] 24 mesi",
    programme: "[SEGNAPOSTO] Erasmus+",
    status: "in corso",
    role: "[SEGNAPOSTO] Partner",
    countries: ["Italia", "[SEGNAPOSTO]"],
    summary:
      "[SEGNAPOSTO] Breve descrizione del progetto da sostituire con i contenuti ufficiali forniti da ECOS.",
    context: "[SEGNAPOSTO] Contesto del progetto.",
    objectives: ["[SEGNAPOSTO] Obiettivo 1", "[SEGNAPOSTO] Obiettivo 2"],
    activities: ["[SEGNAPOSTO] Attività 1", "[SEGNAPOSTO] Attività 2"],
    beneficiaries: "[SEGNAPOSTO] Destinatari del progetto.",
    partners: ["[SEGNAPOSTO] Partner 1", "[SEGNAPOSTO] Partner 2"],
    results: ["[SEGNAPOSTO] Risultato atteso"],
    officialSite: undefined,
  },
  {
    slug: "esempio-progetto-2023",
    title: "[SEGNAPOSTO] Titolo del progetto",
    acronym: "[ACRO]",
    year: 2023,
    duration: "[SEGNAPOSTO] 18 mesi",
    programme: "[SEGNAPOSTO] CERV",
    status: "concluso",
    role: "[SEGNAPOSTO] Coordinatore",
    countries: ["Italia", "[SEGNAPOSTO]", "[SEGNAPOSTO]"],
    summary:
      "[SEGNAPOSTO] Breve descrizione del progetto da sostituire con i contenuti ufficiali forniti da ECOS.",
  },
];

export const programmes = Array.from(new Set(projects.map((p) => p.programme)));
export const countriesList = Array.from(
  new Set(projects.flatMap((p) => p.countries))
);
export const years = Array.from(new Set(projects.map((p) => p.year))).sort(
  (a, b) => b - a
);
