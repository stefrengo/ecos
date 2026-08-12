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

export const quadrants: NavChild[] = [
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
];

// Alias retro-compatibile: alcuni componenti esistenti importano ancora "whatWeDo".
export const whatWeDo = quadrants;

export const mainNav: NavItem[] = [
  { label: "Cosa facciamo", href: "/#aree", children: quadrants },
  { label: "Network", href: "/network" },
  { label: "Eventi", href: "/eventi" },
  { label: "News", href: "/news" },
  { label: "Contatti", href: "/contatti" },
];

export const footerLinks = {
  aree: quadrants,
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
};
