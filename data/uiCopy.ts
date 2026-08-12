import type { Locale } from "@/lib/i18n";

export const uiCopy = {
  it: {
    skipToContent: "Vai al contenuto principale",
    mainNavLabel: "Menu principale",
    mobileNavLabel: "Menu di navigazione",
    mobileNavLabelInner: "Menu principale mobile",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    participate: "Partecipa",
    languageSwitch: "English",
    footer: {
      talkTitle: "Parliamo.",
      talkText:
        "Compila il form per avere informazioni, segnalare un ragazzo, proporre una collaborazione, una mobilità, un progetto europeo o una partnership aziendale.",
      formCta: "Compila il form",
      workWithUsTitle: "Vuoi lavorare con noi?",
      workWithUsText:
        "Invia una candidatura spontanea e raccontaci le tue competenze e la tua esperienza.",
      applyCta: "Candidatura spontanea",
      whatWeDoLabel: "Cosa facciamo",
      ecosLabel: "ECOS",
      contactsLabel: "Contatti",
      areasLabel: "Le nostre aree",
      rights: "Tutti i diritti riservati.",
    },
    cookieBanner: {
      label: "Informativa sui cookie",
      text: "Utilizziamo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso potremmo usare anche cookie di misurazione, descritti nella",
      textLinkLabel: "cookie policy",
      acceptAll: "Accetta tutti",
      essentialOnly: "Solo cookie necessari",
    },
  },
  en: {
    skipToContent: "Skip to main content",
    mainNavLabel: "Main menu",
    mobileNavLabel: "Navigation menu",
    mobileNavLabelInner: "Mobile main menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    participate: "Get involved",
    languageSwitch: "Italiano",
    footer: {
      talkTitle: "Let's talk.",
      talkText:
        "Fill in the form for information, to refer a young person, or to propose a collaboration, a mobility project, a European project or a corporate partnership.",
      formCta: "Fill in the form",
      workWithUsTitle: "Want to work with us?",
      workWithUsText: "Send us a spontaneous application and tell us about your skills and experience.",
      applyCta: "Send application",
      whatWeDoLabel: "What we do",
      ecosLabel: "ECOS",
      contactsLabel: "Contact",
      areasLabel: "Our areas",
      rights: "All rights reserved.",
    },
    cookieBanner: {
      label: "Cookie notice",
      text: "We use technical cookies necessary for the site to work. With your consent we may also use measurement cookies, described in our",
      textLinkLabel: "cookie policy",
      acceptAll: "Accept all",
      essentialOnly: "Essential cookies only",
    },
  },
} as const;

export function getUiCopy(locale: Locale) {
  return uiCopy[locale];
}
