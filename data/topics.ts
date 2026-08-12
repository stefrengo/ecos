import type { Locale } from "@/lib/i18n";

// Aree tematiche — testo ripreso alla lettera dal PDF strategico ECOS.
// Risponde alla domanda implicita: "su quali bisogni e contesti avete esperienza?"

const topicsByLocale: Record<Locale, string[]> = {
  it: [
    "Salute mentale",
    "Minori autori di reato",
    "Minori stranieri non accompagnati",
    "Rifugiati e richiedenti asilo",
    "Giovani in condizione di disagio",
    "Scuole",
  ],
  en: [
    "Mental health",
    "Young offenders",
    "Unaccompanied foreign minors",
    "Refugees and asylum seekers",
    "Young people facing hardship",
    "Schools",
  ],
};

export function getTopics(locale: Locale): string[] {
  return topicsByLocale[locale];
}

export const topics = topicsByLocale.it;
