import type { Locale } from "@/lib/i18n";

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
const servicesByLocale: Record<Locale, ServiceArea[]> = {
  it: [
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
  ],
  en: [
    {
      id: "laboratori",
      number: "01",
      audience: "For services, professionals, young people and families",
      title: "Emotion workshops",
      description:
        "Certified sport and cultural workshops, supported by a multidisciplinary team and aimed at minors and young adults.",
      cta: "Discover the workshops",
      href: "/laboratori",
      icon: "ball",
      tone: "navy",
    },
    {
      id: "erasmus",
      number: "02",
      audience: "For educators, staff, sport instructors and personnel",
      title: "Erasmus+ mobility",
      description:
        "Job shadowing, study visits, training and exchanges for young people, educators, staff, sport instructors and personnel.",
      cta: "Explore mobility",
      href: "/erasmus",
      icon: "plane",
      tone: "purple",
    },
    {
      id: "progetti",
      number: "03",
      audience: "For organisations and European partners",
      title: "Cooperation projects",
      description:
        "European projects, research, experimentation and international partnerships on youth hardship and inclusion.",
      cta: "Discover the projects",
      href: "/progetti",
      icon: "globe",
      tone: "pink",
    },
    {
      id: "partnership",
      number: "04",
      audience: "For companies and foundations",
      title: "Social responsibility & impact",
      description:
        "Structured programmes for companies: volunteering, employee involvement and direct support to the workshops.",
      cta: "Let's build a partnership",
      href: "/partnership",
      icon: "handshake",
      tone: "orange",
    },
  ],
};

export function getServices(locale: Locale): ServiceArea[] {
  return servicesByLocale[locale];
}

// Alias retro-compatibile (italiano di default).
export const services = servicesByLocale.it;
