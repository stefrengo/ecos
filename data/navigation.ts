import type { Locale } from "@/lib/i18n";
import { site } from "@/data/site";

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

// Architettura secondo i documenti di Valerio (ECOS): 4 aree, sempre in
// quest'ordine — HAPPY Club è sempre terzo e resta un link esterno
// (site.happyClubUrl), senza pagina interna. Un href che inizia con "http" è
// esterno: i componenti lo rendono con <a target="_blank">.

export function isExternalHref(href: string): boolean {
  return href.startsWith("http");
}

const quadrantsByLocale: Record<Locale, NavChild[]> = {
  it: [
    {
      label: "Cooperation & Partnership",
      href: "/cooperation-partnership",
      description: "Progetti europei, cooperazione internazionale e reti di collaborazione.",
    },
    {
      label: "Formazione e mobilità europea",
      href: "/formazione-mobilita-europea",
      description: "Competenze, esperienze internazionali e nuove opportunità di crescita professionale.",
    },
    {
      label: "HAPPY Club",
      href: site.happyClubUrl,
      description: "Attività gratuite sul territorio per giovani in situazioni di vulnerabilità.",
    },
    {
      label: "Cooperazione allo sviluppo",
      href: "/cooperazione-sviluppo",
      description: "Progetti in Africa per emancipazione femminile, inclusione e sviluppo delle comunità.",
    },
  ],
  en: [
    {
      label: "Cooperation & Partnership",
      href: "/cooperation-partnership",
      description: "European projects, international cooperation and collaboration networks.",
    },
    {
      label: "European training & mobility",
      href: "/formazione-mobilita-europea",
      description: "Skills, international experiences and new opportunities for professional growth.",
    },
    {
      label: "HAPPY Club",
      href: site.happyClubUrl,
      description: "Free local activities for young people in vulnerable situations.",
    },
    {
      label: "Development cooperation",
      href: "/cooperazione-sviluppo",
      description: "Projects in Africa for women's empowerment, inclusion and community development.",
    },
  ],
};

const mainNavByLocale: Record<Locale, NavItem[]> = {
  it: [
    ...quadrantsByLocale.it.map(({ label, href }) => ({ label, href })),
    { label: "News", href: "/news" },
    { label: "Chi siamo", href: "/chi-siamo" },
    { label: "Contatti", href: "/contatti" },
  ],
  en: [
    ...quadrantsByLocale.en.map(({ label, href }) => ({ label, href })),
    { label: "News", href: "/news" },
    { label: "About us", href: "/chi-siamo" },
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
      // [TEMPORANEO] link alla vecchia home, spostata su /landing per confronto.
      { label: "Landing", href: "/landing" },
      { label: "Chi siamo", href: "/chi-siamo" },
      { label: "Reti internazionali", href: "/chi-siamo#reti" },
      { label: "Comitato scientifico", href: "/comitato-scientifico" },
      { label: "News", href: "/news" },
      { label: "Area riservata", href: "/area-riservata" },
    ],
    legale: [
      { label: "Privacy", href: "/privacy" },
      { label: "Cookie policy", href: "/cookie-policy" },
    ],
  },
  en: {
    aree: quadrantsByLocale.en,
    istituzionale: [
      { label: "Landing", href: "/landing" },
      { label: "About us", href: "/chi-siamo" },
      { label: "International networks", href: "/chi-siamo#reti" },
      { label: "Scientific committee", href: "/comitato-scientifico" },
      { label: "News", href: "/news" },
      { label: "Members' area", href: "/area-riservata" },
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

// Alias retro-compatibili (default italiano).
export const quadrants = quadrantsByLocale.it;
export const whatWeDo = quadrants;
export const mainNav = mainNavByLocale.it;
export const footerLinks = footerLinksByLocale.it;
