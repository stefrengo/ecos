import type { Metadata } from "next";
import AreaPageTemplate, { type AreaPageContent } from "@/components/AreaPageTemplate";
import type { Locale } from "@/lib/i18n";

const contentByLocale: Record<Locale, AreaPageContent> = {
  "it": {
    "breadcrumb": "Cooperation & Partnership",
    "eyebrow": "Area 1",
    "title": "Progetti europei, cooperazione internazionale e reti di collaborazione",
    "subtitle": "Progetti di cooperazione europea e internazionale nei settori di sport, cultura e inclusione sociale.",
    "paragraphs": [
      "Ideiamo e realizziamo progetti di cooperazione europea e internazionale, partecipando prevalentemente ai programmi e ai bandi della Commissione Europea. Siamo partner ufficiali della European Week of Sport e partecipiamo a numerosi network europei nei settori dello sport, della cultura e dell'inclusione sociale."
    ],
    "placeholderTitle": "Contenuti in arrivo",
    "placeholderText": "[SEGNAPOSTO] Qui troveranno spazio i contenuti dell'area (progetti, esperienze, modalità di partecipazione) non appena forniti da ECOS.",
    "ctaTitle": "Parliamo del tuo progetto",
    "ctaText": "Scrivici per capire come collaborare con ECOS in quest'area.",
    "ctaLabel": "Contattaci"
  },
  "en": {
    "breadcrumb": "Cooperation & Partnership",
    "eyebrow": "Area 1",
    "title": "European projects, international cooperation and collaboration networks",
    "subtitle": "European and international cooperation projects in sport, culture and social inclusion.",
    "paragraphs": [
      "We design and run European and international cooperation projects, mainly through European Commission programmes and calls. We are an official partner of the European Week of Sport and take part in numerous European networks in sport, culture and social inclusion."
    ],
    "placeholderTitle": "Content coming soon",
    "placeholderText": "[PLACEHOLDER] The area's content (projects, experiences, how to take part) will be added here as soon as ECOS provides it.",
    "ctaTitle": "Let's talk about your project",
    "ctaText": "Write to us to find out how to work with ECOS in this area.",
    "ctaLabel": "Contact us"
  }
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const c = contentByLocale[params.locale];
  return { title: c.breadcrumb, description: c.subtitle };
}

export default function Page({ params }: { params: { locale: Locale } }) {
  return <AreaPageTemplate locale={params.locale} content={contentByLocale[params.locale]} />;
}
