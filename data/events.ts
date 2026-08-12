// Eventi e comunicazione sociale — testo ripreso dal PDF strategico ECOS.
// I nomi dei singoli eventi sono reali (citati nel PDF); mancano ancora le pagine
// di dettaglio/i link ufficiali: da collegare quando disponibili.

export type EventItem = {
  name: string;
  href?: string;
};

export const sportEvents: EventItem[] = [
  { name: "Dream World Cup" },
  { name: "Dream Euro Cup" },
  { name: "Nazionale Crazy for Football" },
  { name: "Ovidio Running" },
];

export const cinemaEvents: EventItem[] = [
  { name: "Cinemind" },
  { name: "Idea Cinema Lab" },
  { name: "The Mad Men Coach" },
];
