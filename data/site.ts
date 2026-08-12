// Dati generali dell'organizzazione.
// ATTENZIONE: i valori contrassegnati con [SEGNAPOSTO] sono provvisori e devono
// essere sostituiti con le informazioni ufficiali di ECOS prima della pubblicazione.

export const site = {
  name: "ECOS",
  legalName: "[SEGNAPOSTO] ECOS – Ente per la Cooperazione e l'Opportunità Sociale",
  tagline: "Costruiamo opportunità, insieme.",
  description:
    "ECOS crea percorsi educativi per bambini e giovani, esperienze europee, progetti di cooperazione e partnership ad impatto sociale.",
  url: "https://www.ecos-europe.example", // [SEGNAPOSTO] dominio definitivo
  email: "info@[SEGNAPOSTO-DOMINIO].it",
  phone: "+39 000 000 0000", // [SEGNAPOSTO]
  address: {
    line1: "[SEGNAPOSTO] Via da definire, 1",
    city: "[SEGNAPOSTO] Città",
    postalCode: "00000",
    country: "Italia",
  },
  hours: "Lun–Ven, 9:00–18:00 [SEGNAPOSTO orari ufficiali]",
  social: {
    facebook: "https://facebook.com/[segnaposto]",
    instagram: "https://instagram.com/[segnaposto]",
    linkedin: "https://linkedin.com/company/[segnaposto]",
    youtube: "https://youtube.com/@[segnaposto]",
  },
  happyClubUrl: "https://ecos-europe.com/happy/",
} as const;
