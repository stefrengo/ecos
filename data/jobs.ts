// Posizioni aperte — DATI SEGNAPOSTO.
// L'elenco è vuoto di default: la pagina /lavora-con-noi mostra uno stato vuoto accogliente.
// Aggiungere qui le posizioni reali quando disponibili.

export type JobOpening = {
  slug: string;
  title: string;
  type: "posizione aperta" | "tirocinio" | "collaborazione" | "volontariato";
  location: string;
  summary: string;
};

export const jobs: JobOpening[] = [];
