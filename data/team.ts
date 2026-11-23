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

// Valori e missione dal documento di Valerio (ECOS): 6 valori, missione
// ufficiale. Visione, storia e metodo restano come prima / [SEGNAPOSTO].
const valuesByLocale: Record<Locale, { title: string; text: string }[]> = {
  it: [
    { title: "Inclusione", text: "Rendere sport, cultura ed educazione accessibili a tutti." },
    { title: "Pari opportunità", text: "Ridurre le barriere economiche e sociali che limitano la partecipazione." },
    { title: "Dignità e autonomia", text: "Valorizzare le capacità di ogni persona e favorirne l'indipendenza." },
    { title: "Cooperazione", text: "Unire persone, organizzazioni e culture per affrontare sfide comuni." },
    { title: "Innovazione sociale", text: "Sperimentare nuove metodologie per generare cambiamenti concreti." },
    { title: "Partecipazione", text: "Rendere le persone protagoniste delle attività e delle comunità in cui vivono." },
  ],
  en: [
    { title: "Inclusion", text: "Making sport, culture and education accessible to everyone." },
    { title: "Equal opportunities", text: "Reducing the economic and social barriers that limit participation." },
    { title: "Dignity & autonomy", text: "Valuing each person's abilities and fostering their independence." },
    { title: "Cooperation", text: "Bringing together people, organisations and cultures to tackle common challenges." },
    { title: "Social innovation", text: "Experimenting with new methodologies to generate concrete change." },
    { title: "Participation", text: "Making people protagonists of the activities and communities they live in." },
  ],
};

const aboutByLocale: Record<
  Locale,
  { mission: string; vision: string; history: string; method: string }
> = {
  it: {
    mission:
      "Trasformare sport, cultura, educazione e cooperazione internazionale in opportunità concrete di inclusione, crescita e partecipazione. Sviluppiamo progetti e iniziative che valorizzano le capacità delle persone, favoriscono il benessere e contribuiscono a costruire comunità più inclusive, con particolare attenzione a chi vive situazioni di vulnerabilità.",
    vision:
      "Immaginiamo società coese e inclusive, capaci di rimuovere le barriere e riconoscere in ogni persona risorse, talenti e possibilità di contribuire, crescere e partecipare.",
    history:
      "[SEGNAPOSTO] Racconto della storia dell'organizzazione da inserire a cura di ECOS.",
    method:
      "[SEGNAPOSTO] Descrizione del metodo di lavoro da inserire a cura di ECOS.",
  },
  en: {
    mission:
      "To turn sport, culture, education and international cooperation into concrete opportunities for inclusion, growth and participation. We develop projects and initiatives that value people's abilities, foster wellbeing and help build more inclusive communities, with particular attention to people in vulnerable situations.",
    vision:
      "We imagine cohesive, inclusive societies, able to remove barriers and recognise in every person the resources, talents and possibility to contribute, grow and take part.",
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
