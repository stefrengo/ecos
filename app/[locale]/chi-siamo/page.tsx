import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { getAbout, getValues } from "@/data/team";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Chi siamo",
    description:
      "La storia, la missione, la visione e i valori di ECOS: persone, competenze e relazioni al servizio delle comunità.",
  },
  en: {
    title: "About us",
    description:
      "ECOS's story, mission, vision and values: people, expertise and relationships at the service of communities.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const copyByLocale = {
  it: {
    home: "Home",
    breadcrumb: "Chi siamo",
    eyebrow: "Chi siamo",
    heroTitle: "Persone, competenze e relazioni al servizio delle comunità",
    heroSubtitle:
      "ECOS progetta e realizza iniziative sociali, educative e internazionali mettendo in connessione giovani, enti, organizzazioni e imprese. Crediamo nella partecipazione, nell'apprendimento e nella cooperazione come strumenti per creare un impatto duraturo.",
    missionTitle: "Missione",
    visionTitle: "Visione",
    methodTitle: "Metodo di lavoro",
    historyEyebrow: "La nostra storia",
    historyTitle: "Da dove veniamo",
    valuesEyebrow: "I nostri valori",
    valuesTitle: "Ciò in cui crediamo",
    teamEyebrow: "Il team",
    teamTitle: "Le persone di ECOS",
    teamPlaceholder:
      "[SEGNAPOSTO] Questa sezione ospiterà le fotografie e i profili reali del team ECOS non appena disponibili.",
    docsEyebrow: "Documenti istituzionali",
    docsTitle: "Trasparenza e dati principali",
    docsPlaceholder:
      "[SEGNAPOSTO] Statuto, bilancio sociale e altri documenti istituzionali ufficiali saranno collegati qui.",
    ctaTitle: "Vuoi conoscere meglio ECOS?",
    ctaText: "Scrivici per saperne di più sulla nostra organizzazione o per proporre una collaborazione.",
    ctaLabel: "Parla con il team ECOS",
  },
  en: {
    home: "Home",
    breadcrumb: "About us",
    eyebrow: "About us",
    heroTitle: "People, expertise and relationships at the service of communities",
    heroSubtitle:
      "ECOS designs and runs social, educational and international initiatives, connecting young people, bodies, organisations and companies. We believe in participation, learning and cooperation as tools to create lasting impact.",
    missionTitle: "Mission",
    visionTitle: "Vision",
    methodTitle: "How we work",
    historyEyebrow: "Our story",
    historyTitle: "Where we come from",
    valuesEyebrow: "Our values",
    valuesTitle: "What we believe in",
    teamEyebrow: "The team",
    teamTitle: "The people of ECOS",
    teamPlaceholder:
      "[PLACEHOLDER] This section will host the real photos and profiles of the ECOS team once available.",
    docsEyebrow: "Institutional documents",
    docsTitle: "Transparency and key information",
    docsPlaceholder:
      "[PLACEHOLDER] Statute, social report and other official institutional documents will be linked here.",
    ctaTitle: "Want to know more about ECOS?",
    ctaText: "Write to us to learn more about our organisation or to propose a collaboration.",
    ctaLabel: "Talk to the ECOS team",
  },
} as const;

export default function ChiSiamoPage({ params }: { params: { locale: Locale } }) {
  const t = copyByLocale[params.locale];
  const { locale } = params;
  const about = getAbout(locale);
  const values = getValues(locale);

  return (
    <>
      <Breadcrumb
        items={[{ label: t.home, href: localeHref(locale, "/") }, { label: t.breadcrumb }]}
      />
      <Hero compact eyebrow={t.eyebrow} title={t.heroTitle} subtitle={t.heroSubtitle} />

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-xl2 border border-line bg-surface p-7">
            <h2 className="font-display text-xl text-ink">{t.missionTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{about.mission}</p>
          </div>
          <div className="rounded-xl2 border border-line bg-surface p-7">
            <h2 className="font-display text-xl text-ink">{t.visionTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{about.vision}</p>
          </div>
          <div className="rounded-xl2 border border-line bg-surface p-7">
            <h2 className="font-display text-xl text-ink">{t.methodTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{about.method}</p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.historyEyebrow} title={t.historyTitle} />
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            {about.history}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.valuesEyebrow} title={t.valuesTitle} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl2 border border-line bg-surface p-6"
              >
                <h3 className="font-display text-lg text-navy-dark">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.teamEyebrow} title={t.teamTitle} />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {t.teamPlaceholder}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.docsEyebrow} title={t.docsTitle} />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">
            {t.docsPlaceholder}
          </p>
        </Container>
      </section>

      <CTASection
        title={t.ctaTitle}
        text={t.ctaText}
        primaryLabel={t.ctaLabel}
        primaryHref={localeHref(locale, "/contatti")}
      />
    </>
  );
}
