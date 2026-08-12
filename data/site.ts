// Dati generali dell'organizzazione.
// Valori allineati alla strategia PDF (hero, claim) e al sito live ecos-europe.com
// (indirizzo, email, social). Restano da confermare con ECOS: telefono e orari.

export const site = {
  name: "ECOS",
  legalName: "ECOS – European Culture and Sport Organization",
  tagline: "Un hub europeo di servizi sportivi e culturali per i giovani.",
  pillars: "ENGAGE · CONNECT · EMPOWER",
  description:
    "ECOS crea opportunità per minori e giovani adulti attraverso laboratori sportivi e culturali, mobilità europea e progetti di cooperazione. Lavoriamo con servizi, scuole, professionisti, organizzazioni europee e imprese per trasformare attività concrete in percorsi di crescita, relazione e autonomia.",
  // [SEGNAPOSTO] impostare prima il dominio di prova su tophost, poi passare a
  // https://www.ecos-europe.com al momento della migrazione definitiva (vedi skill,
  // sezione "Migrazione a ecos-europe.com").
  url: "https://ecos-europe-trial.example",
  email: "info@ecos-europe.com",
  phone: "+39 000 000 0000", // [SEGNAPOSTO] verificare numero ufficiale attuale
  address: {
    line1: "Via Britannia 54",
    city: "Roma",
    postalCode: "00183",
    country: "Italia",
  },
  hours: "Lun–Ven, 9:00–18:00", // [SEGNAPOSTO] confermare orari ufficiali
  social: {
    facebook: "https://www.facebook.com/ecosorg/",
    instagram: "https://www.instagram.com/ecos_europe",
    linkedin: "https://www.linkedin.com/company/ecosorg/",
    twitter: "https://twitter.com/ecos_europe",
  },
  happyClubUrl: "https://ecos-europe.com/happy/",
} as const;
