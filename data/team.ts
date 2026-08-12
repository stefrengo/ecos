import type { Locale } from "@/lib/i18n";

// Team — DATI SEGNAPOSTO. Sostituire con i membri reali del team ECOS.

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
};

export const team: TeamMember[] = [
  {
    name: "[SEGNAPOSTO] Nome Cognome",
    role: "[SEGNAPOSTO] Ruolo",
    bio: "[SEGNAPOSTO] Breve biografia professionale.",
  },
  {
    name: "[SEGNAPOSTO] Nome Cognome",
    role: "[SEGNAPOSTO] Ruolo",
    bio: "[SEGNAPOSTO] Breve biografia professionale.",
  },
  {
    name: "[SEGNAPOSTO] Nome Cognome",
    role: "[SEGNAPOSTO] Ruolo",
    bio: "[SEGNAPOSTO] Breve biografia professionale.",
  },
];

const valuesByLocale: Record<Locale, { title: string; text: string }[]> = {
  it: [
    {
      title: "Partecipazione",
      text: "Crediamo che ogni persona abbia competenze e potenziale da mettere in gioco.",
    },
    {
      title: "Cooperazione",
      text: "Lavoriamo in rete con enti, servizi, imprese e organizzazioni europee.",
    },
    {
      title: "Concretezza",
      text: "Ogni progetto nasce per generare un impatto misurabile nelle comunità.",
    },
    {
      title: "Rispetto",
      text: "Tuteliamo la dignità, la volontà e la privacy delle persone che accompagniamo.",
    },
  ],
  en: [
    {
      title: "Participation",
      text: "We believe every person has skills and potential to contribute.",
    },
    {
      title: "Cooperation",
      text: "We work as a network with bodies, services, companies and European organisations.",
    },
    {
      title: "Concreteness",
      text: "Every project is designed to generate a measurable impact in communities.",
    },
    {
      title: "Respect",
      text: "We safeguard the dignity, will and privacy of the people we support.",
    },
  ],
};

// [SEGNAPOSTO] Storia, missione e visione ufficiali da inserire a cura di ECOS.
const aboutByLocale: Record<
  Locale,
  { mission: string; vision: string; history: string; method: string }
> = {
  it: {
    mission:
      "[SEGNAPOSTO] Testo di missione ufficiale da inserire a cura di ECOS.",
    vision: "[SEGNAPOSTO] Testo di visione ufficiale da inserire a cura di ECOS.",
    history:
      "[SEGNAPOSTO] Racconto della storia dell'organizzazione da inserire a cura di ECOS.",
    method:
      "[SEGNAPOSTO] Descrizione del metodo di lavoro da inserire a cura di ECOS.",
  },
  en: {
    mission: "[PLACEHOLDER] Official mission statement to be provided by ECOS.",
    vision: "[PLACEHOLDER] Official vision statement to be provided by ECOS.",
    history: "[PLACEHOLDER] Organisation's history to be provided by ECOS.",
    method: "[PLACEHOLDER] Description of the working method to be provided by ECOS.",
  },
};

export function getValues(locale: Locale) {
  return valuesByLocale[locale];
}

export function getAbout(locale: Locale) {
  return aboutByLocale[locale];
}

export const values = valuesByLocale.it;
export const about = aboutByLocale.it;
