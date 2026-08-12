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
export const sportStats: LabStat[] = [
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
];

export const cultureStats: LabStat[] = [
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
];

export const labs: Lab[] = [
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
];
