import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { getAbout, getValues } from "@/data/team";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Chi siamo",
    description:
      "ECOS: accreditamenti, numeri, missione, valori e reti nazionali ed europee con cui lavoriamo ogni giorno.",
  },
  en: {
    title: "About us",
    description:
      "ECOS: accreditations, figures, mission, values and the national and European networks we work with every day.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

// Struttura e testi dal documento "CHI SIAMO, mission, reti" di Valerio.
// Segnaposto espliciti: documenti istituzionali e "Link ai nostri progetti".
const copyByLocale = {
  it: {
    home: "Home",
    breadcrumb: "Chi siamo",
    eyebrow: "Chi siamo",
    heroTitle: "Inclusione sociale attraverso sport, cultura, formazione e cooperazione",
    heroSubtitle:
      "ECOS sviluppa progetti di cooperazione internazionale ad alto impatto sociale, lavorando con enti pubblici, organizzazioni del Terzo Settore e reti europee.",
    credEyebrow: "Chi siamo in breve",
    credTitle: "Accreditamenti e numeri",
    credentials: [
      { title: "RUNTS", text: "Iscritti al Registro Unico Nazionale del Terzo Settore." },
      { title: "RASD", text: "Iscritti al Registro delle Associazioni Sportive Dilettantistiche." },
      {
        title: "Accreditamento Erasmus+ KA120",
        text: "Accreditamento INDIRE per l'educazione degli adulti.",
      },
    ],
    stats: [
      { value: "25+", label: "progetti realizzati" },
      { value: "200+", label: "accordi di partenariato" },
    ],
    areasEyebrow: "Le nostre aree",
    areasTitle: "Quattro aree di lavoro",
    areas: [
      "Cooperation & Partnership",
      "Formazione e mobilità europea",
      "HAPPY Club",
      "Cooperazione allo sviluppo",
    ],
    docsEyebrow: "Trasparenza",
    docsTitle: "Documenti istituzionali",
    docs: ["Statuto", "Bilanci e relazione di missione", "Elenco fondi pubblici"],
    docsPlaceholder: "[SEGNAPOSTO] documento da collegare",
    missionEyebrow: "Mission & Values",
    missionTitle: "Missione",
    valuesTitle: "I nostri valori",
    projectsTitle: "I nostri progetti",
    projectsPlaceholder:
      "[SEGNAPOSTO] Qui comparirà il link ai progetti di ECOS, non appena sarà disponibile.",
    retiEyebrow: "Reti internazionali",
    retiTitle: "Lavoriamo in rete, in Italia e in Europa",
    nationalTitle: "Accordi nazionali",
    national: [
      "Centro Giustizia Minorile e USSM di Roma",
      "ASL e servizi di salute mentale",
      "Organizzazioni sportive e del Terzo Settore",
    ],
    europeanTitle: "Reti europee",
    european: [
      "Partner ufficiale della European Week of Sport (EWOS)",
      "Promotore di EASMH",
      "Oltre 200 accordi di partenariato",
      "Accreditamento Erasmus+",
      "Lead partner di progetti europei",
    ],
    ctaTitle: "Costruiamo nuove collaborazioni",
    ctaText:
      "Se la tua organizzazione vuole lavorare con noi su progetti, formazione o cooperazione, scrivici.",
    ctaLabel: "Collabora con noi",
  },
  en: {
    home: "Home",
    breadcrumb: "About us",
    eyebrow: "About us",
    heroTitle: "Social inclusion through sport, culture, education and cooperation",
    heroSubtitle:
      "ECOS develops high social-impact international cooperation projects, working with public bodies, Third Sector organisations and European networks.",
    credEyebrow: "At a glance",
    credTitle: "Accreditations and figures",
    credentials: [
      { title: "RUNTS", text: "Registered in the National Single Register of the Third Sector." },
      { title: "RASD", text: "Registered in the Register of Amateur Sports Associations." },
      {
        title: "Erasmus+ KA120 accreditation",
        text: "INDIRE accreditation for adult education.",
      },
    ],
    stats: [
      { value: "25+", label: "projects delivered" },
      { value: "200+", label: "partnership agreements" },
    ],
    areasEyebrow: "Our areas",
    areasTitle: "Four areas of work",
    areas: [
      "Cooperation & Partnership",
      "European training & mobility",
      "HAPPY Club",
      "Development cooperation",
    ],
    docsEyebrow: "Transparency",
    docsTitle: "Institutional documents",
    docs: ["Statute", "Financial statements and mission report", "List of public funds"],
    docsPlaceholder: "[PLACEHOLDER] document to be linked",
    missionEyebrow: "Mission & Values",
    missionTitle: "Mission",
    valuesTitle: "Our values",
    projectsTitle: "Our projects",
    projectsPlaceholder:
      "[PLACEHOLDER] The link to ECOS projects will appear here as soon as it is available.",
    retiEyebrow: "International networks",
    retiTitle: "We work in networks, in Italy and in Europe",
    nationalTitle: "National agreements",
    national: [
      "Juvenile Justice Centre and USSM Rome",
      "Local health authorities (ASL) and mental health services",
      "Sports organisations and Third Sector",
    ],
    europeanTitle: "European networks",
    european: [
      "Official partner of the European Week of Sport (EWOS)",
      "Promoter of EASMH",
      "200+ partnership agreements",
      "Erasmus+ accreditation",
      "Lead partner of European projects",
    ],
    ctaTitle: "Let's build new collaborations",
    ctaText:
      "If your organisation wants to work with us on projects, training or cooperation, write to us.",
    ctaLabel: "Work with us",
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
        <Container>
          <SectionHeading eyebrow={t.credEyebrow} title={t.credTitle} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {t.credentials.map((c) => (
              <div key={c.title} className="rounded-xl2 border border-line bg-surface p-6">
                <h3 className="font-display text-lg text-navy-dark">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {t.stats.map((s) => (
              <div key={s.label} className="rounded-xl2 bg-navy-dark p-6 text-white">
                <p className="font-display text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.areasEyebrow} title={t.areasTitle} />
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.areas.map((a, i) => (
              <li
                key={a}
                className="rounded-xl2 border border-line bg-surface p-5 font-display text-lg text-ink"
              >
                <span className="mr-2 text-sm font-semibold text-pink">0{i + 1}</span>
                {a}
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.docsEyebrow} title={t.docsTitle} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.docs.map((d) => (
              <li key={d} className="rounded-xl2 border border-dashed border-line bg-surface p-5">
                <p className="font-semibold text-ink">{d}</p>
                <p className="mt-1 text-xs text-ink-soft">{t.docsPlaceholder}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="mission" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.missionEyebrow} title={t.missionTitle} />
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-soft">
            {about.mission}
          </p>
          <h3 className="mt-12 font-display text-2xl text-navy-dark">{t.valuesTitle}</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 60}>
                <div className="h-full rounded-xl2 border border-line bg-surface p-6">
                  <h4 className="font-display text-lg text-navy-dark">{value.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 rounded-xl2 border border-dashed border-line p-6">
            <h3 className="font-display text-lg text-navy-dark">{t.projectsTitle}</h3>
            <p className="mt-2 text-sm text-ink-soft">{t.projectsPlaceholder}</p>
          </div>
        </Container>
      </section>

      <section id="reti" className="scroll-mt-20 py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.retiEyebrow} title={t.retiTitle} />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-xl2 border border-line bg-surface p-7">
              <h3 className="font-display text-xl text-navy-dark">{t.nationalTitle}</h3>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-soft">
                {t.national.map((n) => (
                  <li key={n}>• {n}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl2 border border-line bg-surface p-7">
              <h3 className="font-display text-xl text-navy-dark">{t.europeanTitle}</h3>
              <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-soft">
                {t.european.map((n) => (
                  <li key={n}>• {n}</li>
                ))}
              </ul>
            </div>
          </div>
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
