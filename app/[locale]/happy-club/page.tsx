import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import SectionHeading from "@/components/SectionHeading";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { localeHref, type Locale } from "@/lib/i18n";

// Testi ricavati dal sito attuale ecos-europe.com/happy (descrizione generale,
// elenco laboratori, regole di partecipazione). Date, sedi e orari non sono
// riportati: cambiano e restano sulla piattaforma.

const copyByLocale = {
  it: {
    breadcrumb: "HAPPY Club",
    eyebrow: "Area 3",
    title: "HAPPY Club",
    subtitle:
      "Laboratori sportivi e culturali gratuiti per minori e giovani adulti che vivono situazioni di fragilità o percorsi di reinserimento.",
    cta: "Vai alla piattaforma HAPPY Club",
    ctaNote: "Ti porta al sito dove trovi il programma aggiornato e il modulo di iscrizione.",
    introTitle: "Dalle politiche europee alle attività sul territorio",
    intro: [
      "HAPPY Club è lo spazio diffuso con cui ECOS porta sul territorio ciò che impara e costruisce in Europa: attività concrete, completamente gratuite, rivolte a giovani che vivono situazioni di vulnerabilità economica e sociale.",
      "I laboratori sono seguiti dai Servizi Sociali, Sanitari e della Giustizia minorile, attivi in diverse sedi con cadenza periodica, condotti da professionisti qualificati. Al termine del percorso viene rilasciato un attestato di partecipazione.",
    ],
    labsTitle: "Cosa si fa all'HAPPY Club",
    labs: [
      "Educazione civica digitale",
      "Cinema e video partecipativo",
      "Calcio e scuola calcio",
      "Camminata sportiva",
      "Equitazione",
      "Fotografia",
      "Incontri sul benessere e lo sport",
      "Sportello di empowerment e orientamento al lavoro",
    ],
    labsNote: "L'elenco dei laboratori attivi cambia nel tempo: il programma aggiornato è sulla piattaforma.",
    howTitle: "Come partecipare",
    how: [
      "Le attività sono gratuite per minori e giovani adulti in carico ai servizi sociali, della giustizia minorile e della salute mentale.",
      "L'iscrizione si fa online, indicando il servizio e l'assistente sociale di riferimento.",
      "Se i posti sono esauriti si entra in lista d'attesa, in ordine di iscrizione.",
      "Le presenze sono monitorate e ai servizi di riferimento arrivano report periodici.",
    ],
    ctaTitle: "Sei un servizio o un'organizzazione?",
    ctaText: "Se vuoi segnalare un ragazzo o costruire una collaborazione con HAPPY Club, scrivici.",
    ctaLabel: "Contattaci",
    home: "Home",
  },
  en: {
    breadcrumb: "HAPPY Club",
    eyebrow: "Area 3",
    title: "HAPPY Club",
    subtitle:
      "Free sport and cultural workshops for minors and young adults in situations of fragility or reintegration pathways.",
    cta: "Go to the HAPPY Club platform",
    ctaNote: "Takes you to the site with the up-to-date programme and the enrolment form (in Italian).",
    introTitle: "From European policies to local activities",
    intro: [
      "HAPPY Club is the widespread space through which ECOS brings what it learns and builds in Europe to the local level: concrete, completely free activities for young people living in economic and social vulnerability.",
      "The workshops are followed by Social, Health and Juvenile Justice services, run in different venues on a regular basis by qualified professionals. A certificate of participation is issued at the end of each path.",
    ],
    labsTitle: "What happens at HAPPY Club",
    labs: [
      "Digital civic education",
      "Participatory film and video",
      "Football and football school",
      "Sport walking",
      "Horse riding",
      "Photography",
      "Meetings on wellbeing and sport",
      "Empowerment and career guidance desk",
    ],
    labsNote: "The list of active workshops changes over time: the up-to-date programme is on the platform.",
    howTitle: "How to take part",
    how: [
      "Activities are free for minors and young adults in the care of social, juvenile justice and mental health services.",
      "Enrolment is online, stating the service and the reference social worker.",
      "If places run out, participants join a waiting list in order of enrolment.",
      "Attendance is monitored and periodic reports are sent to the reference services.",
    ],
    ctaTitle: "Are you a service or an organisation?",
    ctaText: "To refer a young person or build a collaboration with HAPPY Club, write to us.",
    ctaLabel: "Contact us",
    home: "Home",
  },
} as const;

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  const t = copyByLocale[params.locale];
  return { title: t.title, description: t.subtitle };
}

export default function HappyClubPage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = copyByLocale[locale];

  return (
    <>
      <Breadcrumb
        items={[{ label: t.home, href: localeHref(locale, "/") }, { label: t.breadcrumb }]}
      />
      <Hero
        compact
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
        primaryAction={{ label: t.cta, href: site.happyClubUrl }}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="mb-5 font-display text-2xl text-navy-dark sm:text-3xl">{t.introTitle}</h2>
          {t.intro.map((p) => (
            <p key={p} className="mb-5 text-[16px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="" title={t.labsTitle} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.labs.map((l, i) => (
              <Reveal key={l} delay={i * 50}>
                <li className="h-full rounded-xl2 border border-line bg-surface p-5 font-semibold text-ink">
                  {l}
                </li>
              </Reveal>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-soft">{t.labsNote}</p>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl text-navy-dark sm:text-3xl">{t.howTitle}</h2>
            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-ink-soft">
              {t.how.map((h) => (
                <li key={h} className="flex gap-2">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-pink" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl2 bg-navy-dark p-8 text-white">
            <a
              href={site.happyClubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-[15px] font-semibold text-navy-dark transition-colors hover:bg-orange-dark hover:text-white"
            >
              {t.cta}
              <Icon name="external" className="h-4 w-4" />
            </a>
            <p className="mt-4 text-sm text-white/80">{t.ctaNote}</p>
          </div>
        </Container>
      </section>

      <section className="bg-orange-light py-16">
        <Container className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 className="font-display text-2xl text-navy-dark sm:text-3xl">{t.ctaTitle}</h2>
            <p className="mt-2 text-[15px] text-ink-soft">{t.ctaText}</p>
          </div>
          <Link
            href={localeHref(locale, "/contatti")}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[15px] font-semibold text-navy-dark transition-colors hover:bg-orange-dark hover:text-white"
          >
            {t.ctaLabel}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
