import type { Locale } from "@/lib/i18n";

// Percorso ECOS nei laboratori di emozioni — testo ripreso alla lettera dal PDF
// strategico (sezione "La pagina Laboratori: dove raccontare il vero modello ECOS").

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

const laboratoryProcessByLocale: Record<Locale, ProcessStep[]> = {
  it: [
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
  ],
  en: [
    {
      number: "01",
      title: "Referral",
      description:
        "The service or professional introduces the young person and shares the goals and needs of the journey.",
    },
    {
      number: "02",
      title: "Choosing the activity",
      description:
        "The choice is made together with the young person, starting from their interests, motivations and concrete possibilities.",
    },
    {
      number: "03",
      title: "Participation",
      description:
        "The young person joins the chosen sport, cultural or educational workshop.",
    },
    {
      number: "04",
      title: "Observation",
      description:
        "During the activities, the multidisciplinary team observes relationships, continuity, difficulties, interests, abilities and potential.",
    },
    {
      number: "05",
      title: "Feedback",
      description:
        "Useful observations are shared back with the professionals following the young person.",
    },
    {
      number: "06",
      title: "Empowerment",
      description:
        "When appropriate, ECOS works with the young person on guidance, CV, skills, opportunities and possible paths towards greater autonomy.",
    },
  ],
};

export function getLaboratoryProcess(locale: Locale): ProcessStep[] {
  return laboratoryProcessByLocale[locale];
}

export const laboratoryProcess = laboratoryProcessByLocale.it;
