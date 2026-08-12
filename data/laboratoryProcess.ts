// Percorso ECOS nei laboratori di emozioni — testo ripreso alla lettera dal PDF
// strategico (sezione "La pagina Laboratori: dove raccontare il vero modello ECOS").

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const laboratoryProcess: ProcessStep[] = [
  {
    number: "01",
    title: "Segnalazione",
    description:
      "Il servizio o il professionista introduce il ragazzo e condivide obiettivi e bisogni del percorso.",
  },
  {
    number: "02",
    title: "Individuazione dell'attività",
    description:
      "La scelta viene fatta direttamente con il ragazzo, partendo da interessi, motivazioni e possibilità concrete.",
  },
  {
    number: "03",
    title: "Partecipazione",
    description:
      "Il ragazzo entra nel laboratorio sportivo, culturale o educativo individuato.",
  },
  {
    number: "04",
    title: "Osservazione",
    description:
      "Durante le attività, l'équipe multidisciplinare osserva relazioni, continuità, difficoltà, interessi, capacità e potenzialità.",
  },
  {
    number: "05",
    title: "Feedback",
    description:
      "Le osservazioni utili vengono restituite ai professionisti che seguono il ragazzo.",
  },
  {
    number: "06",
    title: "Empowerment",
    description:
      "Quando appropriato, ECOS lavora con il ragazzo su orientamento, CV, competenze, opportunità e possibili percorsi verso maggiore autonomia.",
  },
];
