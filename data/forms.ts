import type { FormConfig } from "./formTypes";

const privacyField = {
  name: "consensoPrivacy",
  label: "Ho letto e accetto l'informativa sulla privacy",
  type: "checkbox" as const,
  required: true,
};

const messageField = {
  name: "messaggio",
  label: "Messaggio",
  type: "textarea" as const,
  required: false,
  fullWidth: true,
};

export const laboratoryRegistration: FormConfig = {
  id: "laboratoryRegistration",
  title: "Iscriviti ai nostri laboratori",
  description:
    "Compila il modulo e raccontaci quale attività ti interessa. Il nostro team ti ricontatterà per verificare insieme le opportunità disponibili.",
  submitLabel: "Invia la richiesta di iscrizione",
  minorNotice:
    "Per i minorenni sarà necessario il coinvolgimento di un genitore, di un tutore o del servizio responsabile.",
  fields: [
    { name: "nome", label: "Nome", type: "text", required: true },
    { name: "cognome", label: "Cognome", type: "text", required: true },
    { name: "eta", label: "Età", type: "number", required: true },
    { name: "citta", label: "Città", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefono", label: "Telefono", type: "tel", required: true },
    {
      name: "laboratorioInteresse",
      label: "Laboratorio di interesse",
      type: "select",
      required: true,
      options: [
        "Scuola calcio",
        "Squadra con la Giustizia Minorile",
        "Squadra Salute Mentale",
        "Equitazione sportiva",
        "Cinema partecipativo",
        "Fotografia",
        "Educazione digitale",
        "Non so ancora, vorrei essere consigliato/a",
      ],
    },
    {
      name: "servizioRiferimento",
      label: "Servizio o organizzazione di riferimento",
      type: "text",
      required: false,
    },
    {
      name: "operatoreSociale",
      label: "Nome dell'operatore sociale, se presente",
      type: "text",
      required: false,
    },
    { ...messageField },
    { ...privacyField },
  ],
};

export const happyClubProfessionals: FormConfig = {
  id: "happyClubProfessionals",
  title: "Entra nel network dei professionisti Happy Club",
  description:
    "Entra nell'elenco dei professionisti Happy Club e metti le tue competenze a disposizione dei nostri programmi.",
  submitLabel: "Invia la candidatura",
  fields: [
    { name: "nomeCognome", label: "Nome e cognome", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefono", label: "Telefono", type: "tel", required: true },
    { name: "citta", label: "Città", type: "text", required: true },
    {
      name: "disponibilitaGeografica",
      label: "Disponibilità geografica",
      type: "text",
      required: false,
    },
    { name: "professione", label: "Professione", type: "text", required: true },
    {
      name: "areaCompetenza",
      label: "Area di competenza",
      type: "select",
      required: true,
      options: ["Sport", "Cultura", "Educazione", "Salute mentale", "Altro"],
    },
    {
      name: "qualifiche",
      label: "Qualifiche e certificazioni",
      type: "textarea",
      required: false,
      fullWidth: true,
    },
    {
      name: "esperienzaBambini",
      label: "Esperienza con bambini e giovani",
      type: "textarea",
      required: false,
      fullWidth: true,
    },
    {
      name: "esperienzaVulnerabilita",
      label: "Esperienza con persone in condizioni di vulnerabilità",
      type: "textarea",
      required: false,
      fullWidth: true,
    },
    { name: "disponibilita", label: "Disponibilità", type: "text", required: false },
    {
      name: "curriculum",
      label: "Curriculum",
      type: "file",
      required: false,
      helpText: "[SEGNAPOSTO] Il caricamento file sarà attivato in una fase successiva.",
    },
    { name: "portfolio", label: "Portfolio o sito", type: "text", required: false },
    { ...messageField },
    { ...privacyField },
  ],
};

export const erasmusMobilityRequest: FormConfig = {
  id: "erasmusMobilityRequest",
  title: "Richiedi un programma di mobilità Erasmus+",
  description:
    "Raccontaci quali competenze vuoi sviluppare, chi parteciperà e quale tipo di esperienza stai cercando.",
  submitLabel: "Invia la richiesta",
  fields: [
    { name: "nomeCognome", label: "Nome e cognome", type: "text", required: true },
    { name: "organizzazione", label: "Organizzazione", type: "text", required: true },
    { name: "ruolo", label: "Ruolo", type: "text", required: true },
    { name: "paese", label: "Paese", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefono", label: "Telefono", type: "tel", required: false },
    {
      name: "numeroPartecipanti",
      label: "Numero indicativo di partecipanti",
      type: "number",
      required: false,
    },
    {
      name: "profiloPartecipanti",
      label: "Profilo dei partecipanti",
      type: "textarea",
      required: false,
      fullWidth: true,
    },
    {
      name: "direzioneMobilita",
      label: "Mobilità in entrata o in uscita",
      type: "radio",
      required: true,
      options: ["In uscita (partire con ECOS)", "In entrata (venire in Italia)"],
    },
    { name: "periodoDesiderato", label: "Periodo desiderato", type: "text", required: false },
    { name: "durataIndicativa", label: "Durata indicativa", type: "text", required: false },
    {
      name: "obiettiviFormativi",
      label: "Obiettivi formativi",
      type: "textarea",
      required: false,
      fullWidth: true,
    },
    { name: "temiInteresse", label: "Temi di interesse", type: "text", required: false },
    {
      name: "progettoApprovato",
      label: "Progetto Erasmus+ già approvato",
      type: "radio",
      required: false,
      options: ["Sì", "No"],
    },
    { ...messageField },
    { ...privacyField },
  ],
};

export const erasmusHostingOffer: FormConfig = {
  id: "erasmusHostingOffer",
  title: "Offri un programma di mobilità Erasmus+",
  description:
    "Entra nella nostra rete di enti, servizi, aziende e professionisti disponibili a condividere competenze ed esperienze con partecipanti europei.",
  submitLabel: "Invia la disponibilità",
  fields: [
    { name: "organizzazione", label: "Organizzazione", type: "text", required: true },
    { name: "referente", label: "Referente", type: "text", required: true },
    { name: "ruolo", label: "Ruolo", type: "text", required: false },
    { name: "paese", label: "Paese", type: "text", required: true },
    { name: "citta", label: "Città", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefono", label: "Telefono", type: "tel", required: false },
    { name: "settoreAttivita", label: "Settore di attività", type: "text", required: false },
    {
      name: "competenzeDisponibili",
      label: "Competenze disponibili",
      type: "textarea",
      required: false,
      fullWidth: true,
    },
    {
      name: "tipologieAttivita",
      label: "Tipologie di attività proposte",
      type: "textarea",
      required: false,
      fullWidth: true,
    },
    {
      name: "numeroMassimoPartecipanti",
      label: "Numero massimo di partecipanti",
      type: "number",
      required: false,
    },
    { name: "lingueDisponibili", label: "Lingue disponibili", type: "text", required: false },
    { name: "periodiDisponibilita", label: "Periodi di disponibilità", type: "text", required: false },
    { ...messageField },
    { ...privacyField },
  ],
};

export const networkExpertise: FormConfig = {
  id: "networkExpertise",
  title: "Entra nel nostro network e offri la tua expertise",
  description:
    "Cerchiamo organizzazioni e professionisti con competenze specifiche interessati a partecipare a nuovi progetti e partenariati internazionali.",
  submitLabel: "Invia la tua candidatura",
  fields: [
    { name: "nomeCognome", label: "Nome e cognome", type: "text", required: true },
    { name: "organizzazione", label: "Organizzazione", type: "text", required: false },
    { name: "ruolo", label: "Ruolo", type: "text", required: false },
    { name: "paese", label: "Paese", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "sitoWeb", label: "Sito web", type: "text", required: false },
    {
      name: "tipologiaOrganizzazione",
      label: "Tipologia di organizzazione",
      type: "select",
      required: false,
      options: ["Ente pubblico", "ONG / Terzo settore", "Università", "Impresa", "Libero professionista", "Altro"],
    },
    { name: "areeCompetenza", label: "Aree di competenza", type: "textarea", required: false, fullWidth: true },
    { name: "programmiEuropei", label: "Programmi europei di esperienza", type: "text", required: false },
    { name: "paesiReti", label: "Paesi e reti di riferimento", type: "text", required: false },
    { name: "progettiPrecedenti", label: "Progetti precedenti", type: "textarea", required: false, fullWidth: true },
    { name: "tipoCollaborazione", label: "Tipo di collaborazione ricercata", type: "text", required: false },
    {
      name: "curriculumProfile",
      label: "Curriculum o company profile",
      type: "file",
      required: false,
      helpText: "[SEGNAPOSTO] Il caricamento file sarà attivato in una fase successiva.",
    },
    { ...messageField },
    { ...privacyField },
  ],
};

export const projectPartnership: FormConfig = {
  id: "projectPartnership",
  title: "Richiedi una partnership per il tuo progetto",
  description:
    "Presentaci la tua idea e scopri se ECOS può contribuire come partner, coordinatore o organizzazione esperta.",
  submitLabel: "Invia la proposta",
  fields: [
    { name: "referente", label: "Nome del referente", type: "text", required: true },
    { name: "organizzazione", label: "Organizzazione", type: "text", required: true },
    { name: "paese", label: "Paese", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "programmaEuropeo", label: "Programma europeo", type: "text", required: false },
    { name: "callBando", label: "Call o bando di riferimento", type: "text", required: false },
    { name: "scadenza", label: "Scadenza", type: "text", required: false },
    { name: "titoloProvvisorio", label: "Titolo provvisorio", type: "text", required: false },
    { name: "obiettivi", label: "Obiettivi", type: "textarea", required: false, fullWidth: true },
    { name: "destinatari", label: "Destinatari", type: "text", required: false },
    { name: "ruoloProposto", label: "Ruolo proposto per ECOS", type: "text", required: false },
    { name: "partenariatoAttuale", label: "Partenariato attuale", type: "textarea", required: false, fullWidth: true },
    { name: "budgetIndicativo", label: "Budget indicativo", type: "text", required: false },
    {
      name: "documentiAllegati",
      label: "Documenti allegati",
      type: "file",
      required: false,
      helpText: "[SEGNAPOSTO] Il caricamento file sarà attivato in una fase successiva.",
    },
    { ...messageField },
    { ...privacyField },
  ],
};

export const corporatePartnership: FormConfig = {
  id: "corporatePartnership",
  title: "Richiedi informazioni",
  description:
    "Raccontaci gli obiettivi della tua organizzazione, i temi di interesse e il tipo di coinvolgimento che desideri offrire ai dipendenti.",
  submitLabel: "Invia la richiesta",
  fields: [
    { name: "nomeCognome", label: "Nome e cognome", type: "text", required: true },
    { name: "azienda", label: "Azienda", type: "text", required: true },
    { name: "ruolo", label: "Ruolo", type: "text", required: false },
    { name: "emailAziendale", label: "Email aziendale", type: "email", required: true },
    { name: "telefono", label: "Telefono", type: "tel", required: false },
    { name: "numeroDipendenti", label: "Numero indicativo di dipendenti", type: "number", required: false },
    { name: "sediTerritori", label: "Sedi o territori interessati", type: "text", required: false },
    { name: "obiettiviPartnership", label: "Obiettivi della partnership", type: "textarea", required: false, fullWidth: true },
    { name: "temiSociali", label: "Temi sociali di interesse", type: "text", required: false },
    {
      name: "attivitaDesiderate",
      label: "Attività desiderate",
      type: "select",
      required: false,
      options: [
        "Knowledge building",
        "Volontariato aziendale",
        "Eventi a impatto sociale",
        "Sponsorship",
        "Sostegno economico",
        "Co-progettazione",
      ],
    },
    { name: "periodoIndicativo", label: "Periodo indicativo", type: "text", required: false },
    { name: "budgetIndicativo", label: "Budget indicativo", type: "text", required: false },
    {
      name: "relazioneImpatto",
      label: "Necessità di una relazione di impatto",
      type: "radio",
      required: false,
      options: ["Sì", "No", "Da valutare insieme"],
    },
    { ...messageField },
    { ...privacyField },
  ],
};

export const generalContact: FormConfig = {
  id: "generalContact",
  title: "Scrivici",
  description:
    "Ti aiuteremo a trovare l'opportunità, il progetto o la collaborazione più adatta.",
  submitLabel: "Invia il messaggio",
  fields: [
    { name: "nome", label: "Nome", type: "text", required: true },
    { name: "cognome", label: "Cognome", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "telefono", label: "Telefono", type: "tel", required: false },
    {
      name: "tipologiaRichiesta",
      label: "Tipologia di richiesta",
      type: "select",
      required: true,
      options: [
        "Partecipare a un laboratorio",
        "Mobilità Erasmus+",
        "Cooperazione europea",
        "Partnership aziendale",
        "Lavora con noi",
        "Comunicazione e stampa",
        "Altro",
      ],
    },
    { name: "messaggio", label: "Messaggio", type: "textarea", required: true, fullWidth: true },
    { ...privacyField },
  ],
};

export const formsById: Record<string, FormConfig> = {
  laboratoryRegistration,
  happyClubProfessionals,
  erasmusMobilityRequest,
  erasmusHostingOffer,
  networkExpertise,
  projectPartnership,
  corporatePartnership,
  generalContact,
};
