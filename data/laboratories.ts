import type { Locale } from "@/lib/i18n";

export type LabStat = {
  id: string;
  value: string;
  label: string;
  note?: string;
};

export type Lab = {
  slug: string;
  category: "sport" | "cultura";
  title: string;
  summary: string;
};

// Numeri di sintesi utilizzati nella pagina /laboratori.
// Aggiornare qui, senza toccare i componenti.
const sportStatsByLocale: Record<Locale, LabStat[]> = {
  it: [
    { id: "squadre-calcio", value: "4", label: "squadre di calcio" },
    {
      id: "scuole-calcio",
      value: "2",
      label: "scuole calcio per bambini dai 6 ai 12 anni",
    },
    {
      id: "squadra-giustizia",
      value: "1",
      label: "squadra per minori autori di reato",
      note: "in collaborazione con il Ministero della Giustizia",
    },
    {
      id: "squadra-salute-mentale",
      value: "1",
      label: "squadra dedicata alla salute mentale",
      note: "in collaborazione con i servizi territoriali di Salute Mentale",
    },
  ],
  en: [
    { id: "squadre-calcio", value: "4", label: "football teams" },
    {
      id: "scuole-calcio",
      value: "2",
      label: "football schools for children aged 6 to 12",
    },
    {
      id: "squadra-giustizia",
      value: "1",
      label: "team for young offenders",
      note: "in partnership with the Ministry of Justice",
    },
    {
      id: "squadra-salute-mentale",
      value: "1",
      label: "team dedicated to mental health",
      note: "in partnership with local mental health services",
    },
  ],
};

const cultureStatsByLocale: Record<Locale, LabStat[]> = {
  it: [
    { id: "equitazione", value: "1", label: "corso di equitazione" },
    {
      id: "equitazione-minori",
      value: "3",
      label: "minori coinvolti ogni anno in un percorso di equitazione sportiva",
    },
    { id: "cinema", value: "1", label: "laboratorio di cinema partecipativo" },
    { id: "fotografia", value: "1", label: "laboratorio di fotografia" },
    {
      id: "digitale",
      value: "1",
      label: "laboratorio di educazione digitale",
    },
  ],
  en: [
    { id: "equitazione", value: "1", label: "horse-riding course" },
    {
      id: "equitazione-minori",
      value: "3",
      label: "minors involved every year in a sport horse-riding programme",
    },
    { id: "cinema", value: "1", label: "participatory film workshop" },
    { id: "fotografia", value: "1", label: "photography workshop" },
    {
      id: "digitale",
      value: "1",
      label: "digital literacy workshop",
    },
  ],
};

const labsByLocale: Record<Locale, Lab[]> = {
  it: [
    {
      slug: "scuola-calcio",
      category: "sport",
      title: "Scuola calcio",
      summary:
        "Percorsi sportivi per bambini dai 6 ai 12 anni, tra gioco, regole condivise e crescita di gruppo.",
    },
    {
      slug: "squadra-giustizia-minorile",
      category: "sport",
      title: "Squadra con la Giustizia Minorile",
      summary:
        "Un progetto sportivo realizzato insieme al Ministero della Giustizia per accompagnare minori autori di reato.",
    },
    {
      slug: "squadra-salute-mentale",
      category: "sport",
      title: "Squadra Salute Mentale",
      summary:
        "Attività sportiva realizzata con i servizi territoriali di Salute Mentale.",
    },
    {
      slug: "equitazione",
      category: "cultura",
      title: "Equitazione sportiva",
      summary: "Un percorso educativo a contatto con gli animali e la natura.",
    },
    {
      slug: "cinema-partecipativo",
      category: "cultura",
      title: "Cinema partecipativo",
      summary: "I ragazzi raccontano le proprie storie attraverso il video.",
    },
    {
      slug: "fotografia",
      category: "cultura",
      title: "Fotografia",
      summary: "Sguardi nuovi sul proprio quartiere e sulla propria comunità.",
    },
    {
      slug: "educazione-digitale",
      category: "cultura",
      title: "Educazione digitale",
      summary: "Competenze digitali di base per orientarsi in sicurezza online.",
    },
  ],
  en: [
    {
      slug: "scuola-calcio",
      category: "sport",
      title: "Football school",
      summary:
        "Sport programmes for children aged 6 to 12, through play, shared rules and group growth.",
    },
    {
      slug: "squadra-giustizia-minorile",
      category: "sport",
      title: "Team with the Juvenile Justice service",
      summary:
        "A sport project run together with the Ministry of Justice to support young offenders.",
    },
    {
      slug: "squadra-salute-mentale",
      category: "sport",
      title: "Mental Health team",
      summary: "Sport activity run with local mental health services.",
    },
    {
      slug: "equitazione",
      category: "cultura",
      title: "Sport horse-riding",
      summary: "An educational path in contact with animals and nature.",
    },
    {
      slug: "cinema-partecipativo",
      category: "cultura",
      title: "Participatory film",
      summary: "Young people tell their own stories through video.",
    },
    {
      slug: "fotografia",
      category: "cultura",
      title: "Photography",
      summary: "New perspectives on your own neighbourhood and community.",
    },
    {
      slug: "educazione-digitale",
      category: "cultura",
      title: "Digital literacy",
      summary: "Basic digital skills to navigate safely online.",
    },
  ],
};

export function getSportStats(locale: Locale): LabStat[] {
  return sportStatsByLocale[locale];
}

export function getCultureStats(locale: Locale): LabStat[] {
  return cultureStatsByLocale[locale];
}

export function getLabs(locale: Locale): Lab[] {
  return labsByLocale[locale];
}

export const sportStats = sportStatsByLocale.it;
export const cultureStats = cultureStatsByLocale.it;
export const labs = labsByLocale.it;
