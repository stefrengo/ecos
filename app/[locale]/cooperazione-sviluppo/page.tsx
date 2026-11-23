import type { Metadata } from "next";
import AreaPageTemplate, { type AreaPageContent } from "@/components/AreaPageTemplate";
import type { Locale } from "@/lib/i18n";

const contentByLocale: Record<Locale, AreaPageContent> = {
  "it": {
    "breadcrumb": "Cooperazione allo sviluppo",
    "eyebrow": "Area 4",
    "title": "Cooperazione allo sviluppo",
    "subtitle": "Progetti in Africa per emancipazione femminile, inclusione sociale e sviluppo delle comunità locali.",
    "paragraphs": [
      "Sviluppiamo progetti di cooperazione in Africa, con particolare attenzione all'emancipazione femminile, all'inclusione sociale e allo sviluppo delle comunità locali. Attraverso la collaborazione con organizzazioni e partner del territorio, promuoviamo percorsi di formazione, autonomia economica e partecipazione, valorizzando le competenze e le risorse delle persone."
    ],
    "placeholderTitle": "Contenuti in arrivo",
    "placeholderText": "[SEGNAPOSTO] Qui troveranno spazio i contenuti dell'area (progetti, esperienze, modalità di partecipazione) non appena forniti da ECOS.",
    "ctaTitle": "Parliamo del tuo progetto",
    "ctaText": "Scrivici per capire come collaborare con ECOS in quest'area.",
    "ctaLabel": "Contattaci"
  },
  "en": {
    "breadcrumb": "Development cooperation",
    "eyebrow": "Area 4",
    "title": "Development cooperation",
    "subtitle": "Projects in Africa for women's empowerment, social inclusion and local community development.",
    "paragraphs": [
      "We develop cooperation projects in Africa, with particular attention to women's empowerment, social inclusion and local community development. Working with local organisations and partners, we promote training, economic autonomy and participation pathways, valuing people's skills and resources."
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
