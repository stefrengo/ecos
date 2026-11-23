import type { Metadata } from "next";
import AreaPageTemplate, { type AreaPageContent } from "@/components/AreaPageTemplate";
import type { Locale } from "@/lib/i18n";

const contentByLocale: Record<Locale, AreaPageContent> = {
  "it": {
    "breadcrumb": "Formazione e mobilità europea",
    "eyebrow": "Area 2",
    "title": "Competenze, esperienze internazionali e nuove opportunità di crescita professionale",
    "subtitle": "Percorsi di formazione e mobilità europea per giovani, adulti e professionisti.",
    "paragraphs": [
      "ECOS è accreditata Erasmus+ KA120 da INDIRE per l'educazione degli adulti e organizza esperienze di formazione e mobilità in Europa."
    ],
    "lists": [
      {
        "title": "Percorsi per giovani e adulti",
        "items": [
          "Esperienze di mobilità europea",
          "Formazione e apprendimento all'estero"
        ]
      },
      {
        "title": "Corsi per",
        "items": [
          "Docenti e personale scolastico",
          "Educatori",
          "Assistenti sociali",
          "Professionisti delle arti e dei mestieri",
          "Operatori dei settori educativo, culturale e sociale"
        ]
      }
    ],
    "placeholderTitle": "Contenuti in arrivo",
    "placeholderText": "[SEGNAPOSTO] Qui troveranno spazio i contenuti dell'area (progetti, esperienze, modalità di partecipazione) non appena forniti da ECOS.",
    "ctaTitle": "Parliamo del tuo progetto",
    "ctaText": "Scrivici per capire come collaborare con ECOS in quest'area.",
    "ctaLabel": "Contattaci"
  },
  "en": {
    "breadcrumb": "European training & mobility",
    "eyebrow": "Area 2",
    "title": "Skills, international experiences and new opportunities for professional growth",
    "subtitle": "European training and mobility pathways for young people, adults and professionals.",
    "paragraphs": [
      "ECOS holds the Erasmus+ KA120 accreditation from INDIRE for adult education and organises training and mobility experiences across Europe."
    ],
    "lists": [
      {
        "title": "Pathways for young people and adults",
        "items": [
          "European mobility experiences",
          "Training and learning abroad"
        ]
      },
      {
        "title": "Courses for",
        "items": [
          "Teachers and school staff",
          "Educators",
          "Social workers",
          "Arts and crafts professionals",
          "Operators in the educational, cultural and social sectors"
        ]
      }
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
