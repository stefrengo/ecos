import type { Locale } from "@/lib/i18n";

export type NavChild = {
  label: string;
  href: string;
  description: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

// Architettura di navigazione = "Architettura definitiva consigliata" del PDF
// strategico: le 4 aree operative (i "quadranti") restano il cuore del menu.
// Le pagine già presenti nel repo ma non previste nel PDF (chi-siamo, comitato
// scientifico, pubblicazioni, lavora con noi) sono mantenute come pagine
// istituzionali secondarie, fuori dal menu principale, solo nel footer.

const quadrantsByLocale: Record<Locale, NavChild[]> = {
  it: [
    {
      label: "Laboratori di emozioni",
      href: "/laboratori",
      description: "Laboratori sportivi e culturali certificati.",
    },
    {
      label: "Mobilità Erasmus+",
      href: "/erasmus",
      description: "Job shadowing, study visit, formazione e scambi.",
    },
    {
      label: "Progetti di cooperazione",
      href: "/progetti",
      description: "Progetti europei, ricerca e partnership internazionali.",
    },
    {
      label: "Responsabilità sociale e impatto",
      href: "/partnership",
      description: "Programmi strutturati per aziende.",
    },
  ],
  en: [
    {
      label: "Emotion workshops",
      href: "/laboratori",
      description: "Certified sport and cultural workshops.",
    },
    {
      label: "Erasmus+ mobility",
      href: "/erasmus",
      description: "Job shadowing, study visits, training and exchanges.",
    },
    {
      label: "Cooperation projects",
      href: "/progetti",
      description: "European projects, research and international partnerships.",
    },
    {
      label: "Social responsibility & impact",
      href: "/partnership",
      description: "Structured programmes for companies.",
    },
  ],
};

// Nav piatta, senza menu a tendina — fedele al mockup PDF ("ECOS | Laboratori |
// Mobilità Erasmus+ | Progetti europei | Aziende | Network | Contatti | Partecipa").
// Eventi e News sono state aggiunte in coda: non previste nel mockup originale,
// ma pagine reali costruite in seguito su richiesta di Stefano.
const mainNavByLocale: Record<Locale, NavItem[]> = {
  it: [
    { label: "Laboratori", href: "/laboratori" },
    { label: "Mobilità Erasmus+", href: "/erasmus" },
    { label: "Progetti europei", href: "/progetti" },
    { label: "Aziende", href: "/partnership" },
    { label: "Network", href: "/network" },
    { label: "Eventi", href: "/eventi" },
    { label: "News", href: "/news" },
    { label: "Contatti", href: "/contatti" },
  ],
  en: [
    { label: "Workshops", href: "/laboratori" },
    { label: "Erasmus+ mobility", href: "/erasmus" },
    { label: "European projects", href: "/progetti" },
    { label: "Companies", href: "/partnership" },
    { label: "Network", href: "/network" },
    { label: "Events", href: "/eventi" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contatti" },
  ],
};

const footerLinksByLocale: Record<
  Locale,
  {
    aree: NavChild[];
    istituzionale: NavItem[];
    legale: NavItem[];
  }
> = {
  it: {
    aree: quadrantsByLocale.it,
    istituzionale: [
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Comitato scientifico", href: "/comitato-scientifico" },
      { label: "Network", href: "/network" },
      { label: "Eventi", href: "/eventi" },
      { label: "News", href: "/news" },
      { label: "Pubblicazioni", href: "/pubblicazioni" },
      { label: "Lavora con noi", href: "/lavora-con-noi" },
    ],
    legale: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie policy", href: "/cookie-policy" },
    ],
  },
  en: {
    aree: quadrantsByLocale.en,
    istituzionale: [
      { label: "About us", href: "/chi-siamo" },
      { label: "Scientific committee", href: "/comitato-scientifico" },
      { label: "Network", href: "/network" },
      { label: "Events", href: "/eventi" },
      { label: "News", href: "/news" },
      { label: "Publications", href: "/pubblicazioni" },
      { label: "Work with us", href: "/lavora-con-noi" },
    ],
    legale: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie policy", href: "/cookie-policy" },
    ],
  },
};

export function getQuadrants(locale: Locale): NavChild[] {
  return quadrantsByLocale[locale];
}

export function getMainNav(locale: Locale): NavItem[] {
  return mainNavByLocale[locale];
}

export function getFooterLinks(locale: Locale) {
  return footerLinksByLocale[locale];
}

// Alias retro-compatibili (default italiano) per componenti/dati che non sono
// ancora stati aggiornati alla versione locale-aware.
export const quadrants = quadrantsByLocale.it;
export const whatWeDo = quadrants;
export const mainNav = mainNavByLocale.it;
export const footerLinks = footerLinksByLocale.it;
