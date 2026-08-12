import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicForm from "@/components/DynamicForm";
import Icon from "@/components/Icon";
import { getSportStats, getCultureStats } from "@/data/laboratories";
import { laboratoryRegistration, happyClubProfessionals } from "@/data/forms";
import { getLaboratoryProcess } from "@/data/laboratoryProcess";
import { site } from "@/data/site";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Laboratori di emozioni",
    description:
      "Laboratori sportivi e culturali certificati, accompagnati da un'équipe multidisciplinare e rivolti a minori e giovani adulti.",
  },
  en: {
    title: "Emotion workshops",
    description:
      "Certified sport and cultural workshops, supported by a multidisciplinary team and aimed at minors and young adults.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const copy = {
  it: {
    home: "Home",
    breadcrumb: "Laboratori",
    eyebrow: "01 · Laboratori di emozioni",
    heroTitle: "Laboratori certificati, accompagnati da un'équipe multidisciplinare.",
    heroSubtitle:
      "Una équipe composta da operatori, educatori, tecnici sportivi e professionisti accompagna ogni ragazzo durante l'attività. I laboratori diventano spazi di relazione, espressione, osservazione e crescita e, al termine, prevedono il rilascio di un attestato. Quando il ragazzo è già seguito da un servizio, il percorso si integra con il lavoro dei professionisti di riferimento.",
    primaryAction: "Iscriviti ai nostri laboratori",
    secondaryAction: "Scopri Happy Club",
    processTitle: "Il percorso del ragazzo nei laboratori ECOS",
    equipeStrong: "Équipe multidisciplinare:",
    equipeText:
      "operatori, educatori, tecnici sportivi e professionisti accompagnano l'intero percorso.",
    certifiedStrong: "Laboratori certificati:",
    certifiedText:
      "i percorsi sono presentati come esperienze strutturate e certificate, con rilascio di attestato.",
    happyClubBanner:
      "Happy Club è il progetto ECOS dedicato allo sport e alla cultura come strumenti di inclusione: scopri tutte le attività.",
    happyClubCta: "Scopri Happy Club",
    sportEyebrow: "Sport",
    sportTitle: "Lo sport come spazio educativo",
    sportSubtitle:
      "Utilizziamo lo sport per favorire partecipazione, benessere, responsabilità e costruzione di relazioni positive.",
    cultureEyebrow: "Cultura",
    cultureTitle: "Cultura, creatività e scoperta",
    cultureSubtitle:
      "Attraverso esperienze artistiche, culturali e digitali aiutiamo i giovani a sviluppare capacità espressive, relazionali e personali.",
    registrationTitle: "Vuoi partecipare a uno dei nostri laboratori?",
    registrationSubtitle:
      "Compila il modulo e raccontaci quale attività ti interessa. Il nostro team ti ricontatterà per verificare insieme le opportunità disponibili.",
    proTitle: "Sei un professionista dello sport, della cultura o dell'educazione?",
    proSubtitle:
      "Entra nell'elenco dei professionisti Happy Club e metti le tue competenze a disposizione dei nostri programmi.",
  },
  en: {
    home: "Home",
    breadcrumb: "Workshops",
    eyebrow: "01 · Emotion workshops",
    heroTitle: "Certified workshops, supported by a multidisciplinary team.",
    heroSubtitle:
      "A team of youth workers, educators, sport instructors and professionals supports each young person throughout the activity. The workshops become spaces for relationships, expression, observation and growth, and end with a certificate. When the young person is already followed by a service, the path is integrated with the work of their reference professionals.",
    primaryAction: "Join our workshops",
    secondaryAction: "Discover Happy Club",
    processTitle: "The young person's journey through ECOS workshops",
    equipeStrong: "Multidisciplinary team:",
    equipeText:
      "youth workers, educators, sport instructors and professionals support the whole journey.",
    certifiedStrong: "Certified workshops:",
    certifiedText:
      "the programmes are structured, certified experiences that end with a certificate.",
    happyClubBanner:
      "Happy Club is the ECOS project dedicated to sport and culture as tools for inclusion: discover all the activities.",
    happyClubCta: "Discover Happy Club",
    sportEyebrow: "Sport",
    sportTitle: "Sport as an educational space",
    sportSubtitle:
      "We use sport to foster participation, wellbeing, responsibility and positive relationships.",
    cultureEyebrow: "Culture",
    cultureTitle: "Culture, creativity and discovery",
    cultureSubtitle:
      "Through artistic, cultural and digital experiences, we help young people develop expressive, relational and personal skills.",
    registrationTitle: "Want to join one of our workshops?",
    registrationSubtitle:
      "Fill in the form and tell us which activity interests you. Our team will get back to you to explore the options together.",
    proTitle: "Are you a sport, culture or education professional?",
    proSubtitle:
      "Join the Happy Club professionals list and put your skills at the service of our programmes.",
  },
} as const;

export default function LaboratoriPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = copy[locale];
  const sportStats = getSportStats(locale);
  const cultureStats = getCultureStats(locale);
  const laboratoryProcess = getLaboratoryProcess(locale);

  return (
    <>
      <Breadcrumb
        items={[
          { label: t.home, href: localeHref(locale, "/") },
          { label: t.breadcrumb },
        ]}
      />
      <Hero
        compact
        eyebrow={t.eyebrow}
        title={t.heroTitle}
        subtitle={t.heroSubtitle}
        primaryAction={{ label: t.primaryAction, href: localeHref(locale, "#iscrizione") }}
        secondaryAction={{ label: t.secondaryAction, href: site.happyClubUrl }}
      />

      {/* Percorso in 6 tappe — modello ECOS, testo dal PDF strategico. */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title={t.processTitle} />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {laboratoryProcess.map((step) => (
              <div
                key={step.number}
                className="rounded-xl2 border border-line bg-surface p-6"
              >
                <p className="text-sm font-semibold text-navy">{step.number}</p>
                <h3 className="mt-2 font-display text-lg text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
            <strong className="text-ink">{t.equipeStrong}</strong> {t.equipeText}{" "}
            <strong className="text-ink">{t.certifiedStrong}</strong> {t.certifiedText}
          </p>
        </Container>
      </section>

      <section className="bg-white py-4">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl2 border border-line bg-navy-light/50 px-7 py-6 sm:flex-row sm:items-center">
            <p className="text-[15px] leading-relaxed text-ink">
              {t.happyClubBanner}
            </p>
            <a
              href={site.happyClubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark"
            >
              {t.happyClubCta}
              <Icon name="external" className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={t.sportEyebrow}
            title={t.sportTitle}
            subtitle={t.sportSubtitle}
          />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sportStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl2 border border-line bg-surface p-6"
              >
                <dt className="font-display text-3xl text-navy-dark">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {stat.label}
                  {stat.note && (
                    <span className="mt-1 block text-xs text-ink-soft/80">
                      {stat.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow={t.cultureEyebrow}
            title={t.cultureTitle}
            subtitle={t.cultureSubtitle}
          />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cultureStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl2 border border-line bg-mist p-6"
              >
                <dt className="font-display text-3xl text-navy-dark">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* NOTA: i moduli DynamicForm restano in italiano in questa fase (fase 2
          del bilingue riguarderà anche i form, vedi data/forms.ts). */}
      <section id="iscrizione" className="scroll-mt-20 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title={t.registrationTitle}
            subtitle={t.registrationSubtitle}
          />
          <div className="mt-8 rounded-xl2 border border-line bg-surface p-6 shadow-card sm:p-8">
            <DynamicForm config={laboratoryRegistration} sourcePage="/laboratori" />
          </div>
        </Container>
      </section>

      <section id="professionisti" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={t.proTitle} subtitle={t.proSubtitle} />
          <div className="mt-8 rounded-xl2 border border-line bg-mist p-6 shadow-card sm:p-8">
            <DynamicForm config={happyClubProfessionals} sourcePage="/laboratori" />
          </div>
        </Container>
      </section>
    </>
  );
}
