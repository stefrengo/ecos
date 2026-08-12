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

export const whatWeDo: NavChild[] = [
  {
    label: "Laboratori",
    href: "/laboratori",
    description: "Sport, cultura e inclusione per bambini e giovani.",
  },
  {
    label: "Erasmus+",
    href: "/erasmus",
    description: "Mobilità e formazione internazionale.",
  },
  {
    label: "Cooperazione europea",
    href: "/progetti",
    description: "Progetti e partenariati internazionali.",
  },
  {
    label: "Corporate e partnership",
    href: "/partnership",
    description: "Programmi di responsabilità sociale d'impresa.",
  },
];

export const mainNav: NavItem[] = [
  { label: "Cosa facciamo", href: "/#aree", children: whatWeDo },
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Comitato scientifico", href: "/comitato-scientifico" },
  { label: "Network", href: "/network" },
  { label: "Pubblicazioni", href: "/pubblicazioni" },
  { label: "Lavora con noi", href: "/lavora-con-noi" },
  { label: "Contatti", href: "/contatti" },
];

export const footerLinks = {
  aree: whatWeDo,
  istituzionale: [
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Comitato scientifico", href: "/comitato-scientifico" },
    { label: "Network", href: "/network" },
    { label: "Pubblicazioni", href: "/pubblicazioni" },
    { label: "Lavora con noi", href: "/lavora-con-noi" },
  ],
  legale: [
    { label: "Privacy", href: "/privacy" },
    { label: "Cookie policy", href: "/cookie-policy" },
  ],
};
