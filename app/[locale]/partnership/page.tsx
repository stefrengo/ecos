import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicForm from "@/components/DynamicForm";
import CTASection from "@/components/CTASection";
import { corporatePartnership } from "@/data/forms";
import { site } from "@/data/site";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Responsabilità sociale e impatto",
    description:
      "Programmi strutturati per aziende: volontariato, partecipazione dei dipendenti e sostegno diretto ai laboratori.",
  },
  en: {
    title: "Social responsibility & impact",
    description:
      "Structured programmes for companies: volunteering, employee involvement and direct support to the workshops.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const copyByLocale = {
  it: {
    home: "Home",
    breadcrumb: "Responsabilità sociale e impatto",
    eyebrow: "04 · Responsabilità sociale e impatto",
    heroTitle: "Programmi strutturati per le aziende.",
    heroSubtitle:
      "Costruiamo partnership che permettono alle imprese di partecipare concretamente alle nostre attività: programmi di volontariato aziendale, coinvolgimento dei dipendenti e sostegno diretto ai laboratori rivolti ai giovani.",
    primaryAction: "Costruiamo una partnership",
    intro:
      "ECOS progetta programmi strutturati di cooperazione tra imprese, professionisti, organizzazioni sociali e beneficiari: non proponiamo soltanto attività occasionali.",
    methodEyebrow: "Metodo di lavoro",
    methodTitle: "Un percorso in sette passaggi",
    steps: [
      "Ascolto dei bisogni e degli obiettivi dell'impresa",
      "Definizione dei temi e dei destinatari",
      "Co-progettazione del programma",
      "Coinvolgimento dei dipendenti",
      "Realizzazione delle attività",
      "Raccolta di dati, testimonianze e risultati",
      "Produzione di una relazione di impatto",
    ],
    impactEyebrow: "Misurazione dell'impatto",
    impactTitle: "Rendere visibile il valore generato",
    impactSubtitle:
      "Ogni percorso di partnership può essere accompagnato da una relazione di impatto che documenta attività, partecipazione, risultati e valore sociale generato. La relazione può contribuire alla comunicazione istituzionale e al bilancio sociale dell'impresa.",
    impactNote:
      "L'utilizzo dei dati nel bilancio sociale deve essere verificato dall'impresa con i propri consulenti; ECOS non garantisce automaticamente conformità normativa o certificazioni.",
    requestTitle: "Costruiamo il programma giusto per la tua impresa",
    requestSubtitle:
      "Raccontaci gli obiettivi della tua organizzazione, i temi di interesse e il tipo di coinvolgimento che desideri offrire ai dipendenti.",
    ctaTitle: "Scopri un progetto concreto",
    ctaText:
      "Conosci Happy Club, il programma di ECOS che utilizza sport, cultura e partecipazione per accompagnare bambini e giovani in condizioni di vulnerabilità.",
    ctaLabel: "Scopri Happy Club",
    programs: [
      {
        title: "Conoscere la fragilità giovanile",
        kicker: "Knowledge building",
        text: "Il team di ECOS realizza incontri di approfondimento e formazione per aiutare aziende e dipendenti a comprendere le condizioni di vulnerabilità vissute da molti giovani.",
        items: [
          "Giustizia minorile",
          "Salute mentale",
          "Giovani migranti",
          "Rifugiati",
          "Povertà educativa",
          "Esclusione sociale",
          "Accesso alle opportunità",
          "Partecipazione",
          "Autonomia",
        ],
      },
      {
        title: "Agire direttamente nei progetti",
        kicker: "Volontariato aziendale",
        text: "Coinvolgiamo i dipendenti in azioni di volontariato strutturate e certificate, realizzate all'interno dei nostri progetti nazionali e internazionali. Ogni esperienza viene preparata e accompagnata dal team ECOS, nel rispetto dei beneficiari, dei servizi responsabili e delle procedure di tutela.",
        items: [
          "Supporto ai laboratori",
          "Mentoring",
          "Accompagnamento durante eventi",
          "Attività sportive e culturali",
          "Condivisione di competenze professionali",
          "Supporto organizzativo",
          "Partecipazione a iniziative internazionali",
          "Volontariato di gruppo",
        ],
      },
      {
        title: "Co-progettare eventi che creano relazioni",
        kicker: "Eventi a impatto sociale",
        text: "Progettiamo insieme alle imprese eventi che permettono ai dipendenti di conoscere direttamente i progetti, incontrare operatori e partecipanti e contribuire ad attività concrete. La partecipazione dei beneficiari avviene sempre nel rispetto della loro volontà, privacy, sicurezza e dignità.",
        items: [
          "Giornate aziendali",
          "Tornei sportivi",
          "Eventi culturali",
          "Workshop",
          "Team building sociale",
          "Campagne territoriali",
          "Incontri di sensibilizzazione",
          "Raccolte fondi",
          "Iniziative collegate ai progetti europei",
        ],
      },
    ],
  },
  en: {
    home: "Home",
    breadcrumb: "Social responsibility & impact",
    eyebrow: "04 · Social responsibility & impact",
    heroTitle: "Structured programmes for companies.",
    heroSubtitle:
      "We build partnerships that let companies take part concretely in our activities: corporate volunteering programmes, employee involvement, and direct support to the workshops for young people.",
    primaryAction: "Let's build a partnership",
    intro:
      "ECOS designs structured cooperation programmes between companies, professionals, social organisations and beneficiaries: we don't just offer occasional activities.",
    methodEyebrow: "How we work",
    methodTitle: "A seven-step process",
    steps: [
      "Listening to the company's needs and goals",
      "Defining the themes and audiences",
      "Co-designing the programme",
      "Involving employees",
      "Running the activities",
      "Collecting data, testimonials and results",
      "Producing an impact report",
    ],
    impactEyebrow: "Measuring impact",
    impactTitle: "Making the generated value visible",
    impactSubtitle:
      "Every partnership can be accompanied by an impact report documenting activities, participation, results and the social value generated. The report can support the company's institutional communication and social reporting.",
    impactNote:
      "The use of this data in social reporting must be verified by the company with its own advisors; ECOS does not automatically guarantee regulatory compliance or certifications.",
    requestTitle: "Let's build the right programme for your company",
    requestSubtitle:
      "Tell us about your organisation's goals, the themes you're interested in, and the kind of involvement you'd like to offer your employees.",
    ctaTitle: "Discover a concrete project",
    ctaText:
      "Meet Happy Club, the ECOS programme that uses sport, culture and participation to support children and young people in vulnerable conditions.",
    ctaLabel: "Discover Happy Club",
    programs: [
      {
        title: "Understanding youth vulnerability",
        kicker: "Knowledge building",
        text: "The ECOS team runs in-depth sessions and training to help companies and employees understand the conditions of vulnerability experienced by many young people.",
        items: [
          "Juvenile justice",
          "Mental health",
          "Young migrants",
          "Refugees",
          "Educational poverty",
          "Social exclusion",
          "Access to opportunities",
          "Participation",
          "Autonomy",
        ],
      },
      {
        title: "Taking direct action in projects",
        kicker: "Corporate volunteering",
        text: "We involve employees in structured, certified volunteering activities, carried out within our national and international projects. Every experience is prepared and supported by the ECOS team, respecting beneficiaries, the services responsible for them, and safeguarding procedures.",
        items: [
          "Supporting the workshops",
          "Mentoring",
          "Accompanying participants at events",
          "Sport and cultural activities",
          "Sharing professional skills",
          "Organisational support",
          "Taking part in international initiatives",
          "Group volunteering",
        ],
      },
      {
        title: "Co-designing events that build relationships",
        kicker: "Social-impact events",
        text: "We design events together with companies that let employees directly experience the projects, meet staff and participants, and contribute to concrete activities. Beneficiaries always take part in a way that respects their will, privacy, safety and dignity.",
        items: [
          "Company days",
          "Sport tournaments",
          "Cultural events",
          "Workshops",
          "Social team building",
          "Local campaigns",
          "Awareness events",
          "Fundraising",
          "Initiatives linked to European projects",
        ],
      },
    ],
  },
} as const;

export default function PartnershipPage({ params }: { params: { locale: Locale } }) {
  const t = copyByLocale[params.locale];
  const { locale } = params;

  return (
    <>
      <Breadcrumb
        items={[{ label: t.home, href: localeHref(locale, "/") }, { label: t.breadcrumb }]}
      />
      <Hero
        compact
        eyebrow={t.eyebrow}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primaryAction={{ label: t.primaryAction, href: localeHref(locale, "#richiedi") }}
      />

      <section className="py-4">
        <Container>
          <p className="rounded-xl2 border-l-4 border-navy bg-navy-light/50 px-6 py-5 text-[15px] leading-relaxed text-ink">
            {t.intro}
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow={t.methodEyebrow} title={t.methodTitle} />
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, i) => (
              <li
                key={step}
                className="rounded-xl2 border border-line bg-surface p-5"
              >
                <span className="font-display text-2xl text-navy-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {t.programs.map((program, i) => (
        <section
          key={program.title}
          className={i % 2 === 0 ? "bg-white py-16 sm:py-20" : "py-16 sm:py-20"}
        >
          <Container>
            <SectionHeading
              eyebrow={program.kicker}
              title={program.title}
              subtitle={program.text}
            />
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {program.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-mist px-4 py-2 text-sm text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={t.impactEyebrow}
            title={t.impactTitle}
            subtitle={t.impactSubtitle}
          />
          <p className="mt-4 max-w-2xl text-sm text-ink-soft">{t.impactNote}</p>
        </Container>
      </section>

      {/* NOTA: il modulo DynamicForm resta in italiano in questa fase. */}
      <section id="richiedi" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={t.requestTitle} subtitle={t.requestSubtitle} />
          <div className="mt-8 rounded-xl2 border border-line bg-mist p-6 shadow-card sm:p-8">
            <DynamicForm config={corporatePartnership} sourcePage="/partnership" />
          </div>
        </Container>
      </section>

      <CTASection
        title={t.ctaTitle}
        text={t.ctaText}
        primaryLabel={t.ctaLabel}
        primaryHref={site.happyClubUrl}
        external
      />
    </>
  );
}
