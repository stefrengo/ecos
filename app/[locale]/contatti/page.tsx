import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Contatti",
    description:
      "Scrivi al team ECOS: ti aiuteremo a trovare l'opportunità, il progetto o la collaborazione più adatta.",
  },
  en: {
    title: "Contact",
    description:
      "Write to the ECOS team: we'll help you find the right opportunity, project or collaboration.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const copyByLocale = {
  it: {
    home: "Home",
    breadcrumb: "Contatti",
    title: "Hai un'idea, una domanda o vuoi partecipare?",
  },
  en: {
    home: "Home",
    breadcrumb: "Contact",
    title: "Have an idea, a question, or want to get involved?",
  },
} as const;

export default function ContattiPage({ params }: { params: { locale: Locale } }) {
  const t = copyByLocale[params.locale];
  const { locale } = params;

  return (
    <>
      <Breadcrumb
        items={[{ label: t.home, href: localeHref(locale, "/") }, { label: t.breadcrumb }]}
      />
      <Container className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl text-ink sm:text-4xl">{t.title}</h1>
        </div>
        {/* NOTA: ContactForm resta in italiano in questa fase. */}
        <div id="form" className="mt-10 scroll-mt-20">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
