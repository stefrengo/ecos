export type ServiceArea = {
  id: string;
  audience: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: "ball" | "plane" | "globe" | "handshake";
  tone: "forest" | "coral" | "sky" | "sun";
};

export const services: ServiceArea[] = [
  {
    id: "laboratori",
    audience: "Per bambini, giovani, famiglie e servizi",
    title: "Sport, cultura e inclusione",
    description:
      "Realizziamo programmi educativi e laboratori sportivi e culturali dedicati a bambini, adolescenti e giovani adulti in condizioni di vulnerabilità. Attraverso Happy Club e i nostri progetti accompagniamo ragazzi seguiti dai Servizi Sociali, dai Servizi territoriali di Salute Mentale e dalla Giustizia Minorile in percorsi di crescita, autonomia e partecipazione.",
    cta: "Scopri i laboratori",
    href: "/laboratori",
    icon: "ball",
    tone: "forest",
  },
  {
    id: "erasmus",
    audience: "Per organizzazioni, professionisti e studenti",
    title: "Mobilità e formazione Erasmus+",
    description:
      "Sviluppiamo programmi di mobilità Erasmus+ per organizzazioni, professionisti, educatori e studenti. Organizziamo job shadowing, visite studio, mobilità di gruppo e percorsi di apprendimento in Italia e all'estero.",
    cta: "Scopri le opportunità Erasmus+",
    href: "/erasmus",
    icon: "plane",
    tone: "sky",
  },
  {
    id: "progetti",
    audience: "Per organizzazioni e partner europei",
    title: "Cooperazione europea e internazionale",
    description:
      "Sviluppiamo e coordiniamo progetti europei insieme a una rete internazionale di organizzazioni, enti pubblici, università, professionisti e imprese. Offriamo opportunità di cooperazione e co-progettazione nell'ambito dei programmi Erasmus+, CERV, Justice, Horizon Europe e Fondo Sociale Europeo.", // [SEGNAPOSTO] verificare denominazione ufficiale dei programmi
    cta: "Esplora i progetti",
    href: "/progetti",
    icon: "globe",
    tone: "sun",
  },
  {
    id: "partnership",
    audience: "Per imprese e fondazioni",
    title: "Partnership per l'impatto sociale",
    description:
      "Collaboriamo con imprese che desiderano trasformare il proprio impegno sociale in esperienze concrete, strutturate e misurabili. Offriamo ai dipendenti occasioni di formazione, volontariato aziendale e partecipazione attiva, creando valore condiviso per l'impresa, le persone e la comunità.",
    cta: "Costruiamo una partnership",
    href: "/partnership",
    icon: "handshake",
    tone: "coral",
  },
];
