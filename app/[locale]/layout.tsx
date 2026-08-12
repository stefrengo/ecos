import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { site, getSiteCopy } from "@/data/site";
import { locales, isLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale: Locale = isLocale(params.locale) ? params.locale : "it";
  const copy = getSiteCopy(locale);
  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${site.name} — ${copy.tagline}`,
      template: `%s — ${site.name}`,
    },
    description: copy.description,
    alternates: {
      languages: { it: "/", en: "/en" },
    },
    openGraph: {
      type: "website",
      locale: locale === "it" ? "it_IT" : "en_US",
      siteName: site.name,
      title: `${site.name} — ${copy.tagline}`,
      description: copy.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} — ${copy.tagline}`,
      description: copy.description,
    },
    icons: {
      icon: "/favicon.svg", // [SEGNAPOSTO] sostituire con favicon definitiva
    },
  };
}

function organizationJsonLd(locale: Locale) {
  const copy = getSiteCopy(locale);
  return {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    url: site.url,
    description: copy.description,
    // [SEGNAPOSTO] aggiornare con dati ufficiali (logo, contatti, sedi) prima della pubblicazione
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale;

  return (
    <html lang={locale}>
      <body>
        <a href="#main-content" className="skip-link">
          {locale === "it" ? "Vai al contenuto principale" : "Skip to main content"}
        </a>
        <Header locale={locale} />
        <main id="main-content">{children}</main>
        <Footer locale={locale} />
        <CookieBanner locale={locale} />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(locale)) }}
        />
      </body>
    </html>
  );
}
