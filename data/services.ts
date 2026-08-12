export type ServiceArea = {
  id: string;
  number: string;
  audience: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: "ball" | "plane" | "globe" | "handshake";
  tone: "navy" | "purple" | "pink" | "orange";
};

// I 4 "quadranti" della homepage — testo ripreso alla lettera dai mockup PDF.
export const services: ServiceArea[] = [
  {
    id: "laboratori",
    number: "01",
    audience: "Per servizi, professionisti, giovani e famiglie",
    title: "Laboratori di emozioni",
    description:
      "Laboratori sportivi e culturali certificati, accompagnati da un'équipe multidisciplinare e rivolti a minori e giovani adulti.",
    cta: "Scopri i laboratori",
    href: "/laboratori",
    icon: "ball",
    tone: "navy",
  },
  {
    id: "erasmus",
    number: "02",
    audience: "Per educatori, operatori, tecnici sportivi e personale",
    title: "Mobilità Erasmus+",
    description:
      "Job shadowing, study visit, formazione e scambi per giovani, educatori, operatori, tecnici sportivi e personale.",
    cta: "Esplora la mobilità",
    href: "/erasmus",
    icon: "plane",
    tone: "purple",
  },
  {
    id: "progetti",
    number: "03",
    audience: "Per organizzazioni e partner europei",
    title: "Progetti di cooperazione",
    description:
      "Progetti europei, ricerca, sperimentazione e partnership internazionali sui temi del disagio giovanile e dell'inclusione.",
    cta: "Scopri i progetti",
    href: "/progetti",
    icon: "globe",
    tone: "pink",
  },
  {
    id: "partnership",
    number: "04",
    audience: "Per imprese e fondazioni",
    title: "Responsabilità sociale e impatto",
    description:
      "Programmi strutturati per aziende: volontariato, partecipazione dei dipendenti e sostegno diretto ai laboratori.",
    cta: "Costruiamo una partnership",
    href: "/partnership",
    icon: "handshake",
    tone: "orange",
  },
];
