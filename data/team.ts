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

// Valori reali ECOS — dal documento "Vision, Mission, Valori" fornito da
// Stefano (conoscenza di progetto), non più segnaposto.
const valuesByLocale: Record<Locale, { title: string; text: string }[]> = {
  it: [
    {
      title: "Inclusione",
      text: "Costruiamo contesti accessibili e accoglienti, in cui le differenze sono una risorsa e ogni persona può partecipare pienamente, senza etichette.",
    },
    {
      title: "Partecipazione",
      text: "Creiamo le condizioni perché ogni persona possa riconoscere i propri talenti, esprimere la propria voce e contribuire attivamente alla vita della comunità.",
    },
    {
      title: "Dignità e autodeterminazione",
      text: "Mettiamo al centro l'unicità, i diritti e le aspirazioni di ogni persona, promuovendo relazioni fondate sull'ascolto, sulla fiducia e sulla libertà di scegliere il proprio percorso.",
    },
    {
      title: "Innovazione sociale",
      text: "Sperimentiamo approcci che intrecciano sport, cultura, formazione, ricerca e cooperazione per rispondere ai bisogni emergenti con soluzioni efficaci, durature e replicabili.",
    },
    {
      title: "Comunità e collaborazione",
      text: "Co-progettiamo con persone, famiglie, istituzioni, organizzazioni, imprese e territori, perché la trasformazione sociale nasce da responsabilità condivise e alleanze capaci di durare.",
    },
  ],
  en: [
    {
      title: "Inclusion",
      text: "We build accessible, welcoming environments where differences are a resource and everyone can take part fully, without labels.",
    },
    {
      title: "Participation",
      text: "We create the conditions for everyone to recognise their own talents, express their voice and actively contribute to community life.",
    },
    {
      title: "Dignity & self-determination",
      text: "We put each person's uniqueness, rights and aspirations at the centre, fostering relationships built on listening, trust and the freedom to choose one's own path.",
    },
    {
      title: "Social innovation",
      text: "We experiment with approaches that combine sport, culture, education, research and cooperation to respond to emerging needs with effective, lasting and replicable solutions.",
    },
    {
      title: "Community & collaboration",
      text: "We co-design with people, families, institutions, organisations, businesses and territories, because social transformation is born from shared responsibility and alliances built to last.",
    },
  ],
};

// Missione e visione reali ECOS — stesso documento. Storia e metodo restano
// [SEGNAPOSTO]: non c'è ancora un testo ufficiale da usare.
const aboutByLocale: Record<
  Locale,
  { mission: string; vision: string; history: string; method: string }
> = {
  it: {
    mission:
      "Promuoviamo innovazione e trasformazione sociale attraverso lo sport, la cultura e la formazione. Progettiamo e realizziamo percorsi che rafforzano competenze, relazioni e partecipazione, con particolare attenzione alle persone e ai gruppi che incontrano maggiori ostacoli nella propria esistenza. Insieme alle comunità locali e ai partner europei, promuoviamo la coesione sociale e il benessere generale.",
    vision:
      "Immaginiamo società coese e inclusive, capaci di rimuovere le barriere e riconoscere in ogni persona risorse, talenti e possibilità di contribuire, crescere e partecipare.",
    history:
      "[SEGNAPOSTO] Racconto della storia dell'organizzazione da inserire a cura di ECOS.",
    method:
      "[SEGNAPOSTO] Descrizione del metodo di lavoro da inserire a cura di ECOS.",
  },
  en: {
    mission:
      "We promote social innovation and transformation through sport, culture and education. We design and deliver pathways that strengthen skills, relationships and participation, with particular attention to people and groups who face greater obstacles in their lives. Together with local communities and European partners, we promote social cohesion and general wellbeing.",
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
