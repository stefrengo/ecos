import type { Locale } from "@/lib/i18n";

// Reti europee di cui ECOS fa parte — testo ripreso dal PDF strategico ECOS.
// [SEGNAPOSTO] loghi: sostituire l'icona segnaposto con i loghi ufficiali EWOS/EASMH
// e aggiungere eventuali altre reti quando disponibili (il PDF lo prevede: "EWOS,
// EASMH e altre reti future").

export type NetworkPartner = {
  name: string;
  description: string;
  href: string;
  logoAlt: string;
};

const networksByLocale: Record<Locale, NetworkPartner[]> = {
  it: [
    {
      name: "EWOS",
      description:
        "European Week of Sport: una rete europea che promuove sport, partecipazione e stili di vita attivi.",
      href: "#", // [SEGNAPOSTO] link ufficiale EWOS
      logoAlt: "Logo EWOS – European Week of Sport",
    },
    {
      name: "EASMH",
      description:
        "Una rete europea dedicata alla salute mentale e alla condivisione di conoscenze, pratiche e collaborazioni.",
      href: "#", // [SEGNAPOSTO] link ufficiale EASMH
      logoAlt: "Logo EASMH",
    },
  ],
  en: [
    {
      name: "EWOS",
      description:
        "European Week of Sport: a European network promoting sport, participation and active lifestyles.",
      href: "#", // [SEGNAPOSTO] link ufficiale EWOS
      logoAlt: "EWOS logo – European Week of Sport",
    },
    {
      name: "EASMH",
      description:
        "A European network dedicated to mental health and to sharing knowledge, practices and collaborations.",
      href: "#", // [SEGNAPOSTO] link ufficiale EASMH
      logoAlt: "EASMH logo",
    },
  ],
};

export function getNetworks(locale: Locale): NetworkPartner[] {
  return networksByLocale[locale];
}

export const networks = networksByLocale.it;
