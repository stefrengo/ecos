export const locales = ["it", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "it";

/**
 * Costruisce un href locale-aware. L'italiano (lingua di default) non ha
 * prefisso in URL (es. /laboratori), l'inglese sì (es. /en/laboratori).
 * Da usare per TUTTI i link interni nelle pagine/componenti che devono
 * restare nella lingua corrente durante la navigazione.
 */
export function localeHref(locale: Locale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return clean;
  if (clean === "/") return "/en";
  return `/en${clean}`;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
