import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

// Italiano (lingua di default) resta senza prefisso in URL, per non rompere
// i link/backlink esistenti (es. ecos-europe.com/laboratori). L'inglese vive
// sotto /en/*. Le richieste senza prefisso vengono riscritte internamente
// su /it/* (rewrite, non redirect: l'URL visibile all'utente non cambia).
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocalePrefix = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
