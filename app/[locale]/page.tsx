import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { getServices } from "@/data/services";
import { getAllNews } from "@/lib/news";
import { getCategory, toneClasses } from "@/data/newsCategories";
import { localeHref, type Locale } from "@/lib/i18n";

// Nuova homepage — struttura, container e testi ripresi alla lettera dal
// mockup "Innovazione sociale per migliorare le comunità, insieme." fornito
// da Stefano, ma con l'identità visiva ECOS (navy/pink/purple/orange,
// Fraunces + Manrope, animazioni reveal/hover già in uso nel resto del sito)
// al posto dello stile grafico verde del mockup. La vecchia homepage è stata
// spostata su /landing (invariata).
//
// Contenuti volutamente segnaposto, come deciso con Stefano:
// - statistiche di impatto e claim "primo network europeo": [SEGNAPOSTO],
//   numeri del mockup non verificati, non riprodotti.
// - testimonial: nessun nome/età inventati per un minore, solo placeholder
//   esplicito in attesa di una testimonianza reale raccolta con consenso.
// La news grid usa le 3 news reali ECOS (non gli esempi del mockup).

const quadrantIcon: Record<string, IconName> = {
  laboratori: "ball",
  erasmus: "plane",
  progetti: "globe",
  partnership: "handshake",
};

const quadrantTone: Record<
  string,
  { badge: string; icon: string; fillHover: string; textHover: string }
> = {
  navy: {
    badge: "bg-navy-light",
    icon: "text-navy",
    fillHover: "group-hover:bg-navy",
    textHover: "group-hover:text-white",
  },
  purple: {
    badge: "bg-purple-light",
    icon: "text-purple",
    fillHover: "group-hover:bg-purple",
    textHover: "group-hover:text-white",
  },
  pink: {
    badge: "bg-pink-light",
    icon: "text-pink",
    fillHover: "group-hover:bg-pink",
    textHover: "group-hover:text-white",
  },
  orange: {
    badge: "bg-orange-light",
    icon: "text-orange-dark",
    fillHover: "group-hover:bg-orange",
    textHover: "group-hover:text-white",
  },
};

const cardPhotos: Record<string, { src: string; alt: string }> = {
  laboratori: {
    src: "https://images.pexels.com/photos/8941579/pexels-photo-8941579.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Bambini in divisa sportiva pronti per un allenamento",
  },
  erasmus: {
    src: "https://images.pexels.com/photos/37762503/pexels-photo-37762503.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Due studenti con zaino in viaggio verso un'esperienza di mobilità europea",
  },
  progetti: {
    src: "https://images.pexels.com/photos/8457972/pexels-photo-8457972.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Gruppo multiculturale di bambini che sorride abbracciato",
  },
  partnership: {
    src: "https://images.pexels.com/photos/7413864/pexels-photo-7413864.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Team diversificato durante un brainstorming in ufficio",
  },
};

const copy = {
  it: {
    heroTitle: "Innovazione sociale per migliorare le comunità, insieme.",
    heroText:
      "Mettiamo in relazione persone, competenze e territori per trasformare sport, cultura, formazione, ricerca e cooperazione europea in opportunità di partecipazione, benessere e cambiamento duraturo.",
    heroCta: "Scopri ECOS",
    cardsCta: "Scopri di più",
    splitTitleLine1: "Non realizziamo semplicemente progetti.",
    splitTitleLine2: "Costruiamo opportunità.",
    splitText:
      "ECOS è una piattaforma europea di innovazione sociale che mette in relazione sport, cultura, ricerca e cooperazione europea per generare cambiamento nelle comunità.",
    splitCta: "Chi siamo",
    mapAlt: "Vista dall'alto dell'Europa",
    impactEyebrow: "Il nostro impatto",
    impactPlaceholder: "[SEGNAPOSTO]",
    impactPlaceholderTag: "da confermare",
    impactProjects: "Progetti europei",
    impactTeams: "Squadre sportive",
    impactPeople: "Persone coinvolte ogni anno",
    impactCountries: "Paesi",
    impactPartners: "Partner internazionali",
    impactClaim: "Primo network europeo Sport & Salute Mentale",
    impactClaimTag: "claim da verificare",
    testimonialQuote:
      "[SEGNAPOSTO] — citazione di un partecipante o di una famiglia coinvolta in un laboratorio ECOS, da raccogliere e inserire con consenso esplicito.",
    testimonialAttribution: "[SEGNAPOSTO] Nome, ruolo — da confermare con consenso",
    newsTitle: "News",
    newsCtaAll: "Vedi tutte le news",
    newsCtaItem: "Leggi di più",
    ctaAziendeTitle: "Le imprese possono generare cambiamento.",
    ctaAziendeText:
      "Collaboriamo con aziende e fondazioni che vogliono trasformare il proprio impegno sociale in esperienze concrete e valore condiviso.",
    ctaAziendeCta: "Imprese & Partnership",
  },
  en: {
    heroTitle: "Social innovation to improve communities, together.",
    heroText:
      "We connect people, skills and territories to turn sport, culture, education, research and European cooperation into opportunities for participation, wellbeing and lasting change.",
    heroCta: "Discover ECOS",
    cardsCta: "Learn more",
    splitTitleLine1: "We don't just run projects.",
    splitTitleLine2: "We build opportunities.",
    splitText:
      "ECOS is a European social innovation platform that connects sport, culture, research and European cooperation to generate change in communities.",
    splitCta: "About us",
    mapAlt: "Aerial view of Europe",
    impactEyebrow: "Our impact",
    impactPlaceholder: "[PLACEHOLDER]",
    impactPlaceholderTag: "to be confirmed",
    impactProjects: "European projects",
    impactTeams: "Sport teams",
    impactPeople: "People involved every year",
    impactCountries: "Countries",
    impactPartners: "International partners",
    impactClaim: "First European Sport & Mental Health network",
    impactClaimTag: "claim to verify",
    testimonialQuote:
      "[PLACEHOLDER] — quote from a participant or family involved in an ECOS workshop, to be collected and added with explicit consent.",
    testimonialAttribution: "[PLACEHOLDER] Name, role — to be confirmed with consent",
    newsTitle: "News",
    newsCtaAll: "See all news",
    newsCtaItem: "Read more",
    ctaAziendeTitle: "Companies can drive change.",
    ctaAziendeText:
      "We work with companies and foundations who want to turn their social commitment into concrete experiences and shared value.",
    ctaAziendeCta: "Companies & Partnerships",
  },
} as const;

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = copy[locale];
  const services = getServices(locale);
  const latestNews = getAllNews().slice(0, 3);

  return (
    <>
      {/* Hero — foto stock Pexels in dissolvenza, overlay navy, identico
          pattern usato già in /landing. */}
      <section className="relative overflow-hidden bg-navy-dark">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/8941569/pexels-photo-8941569.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            fill
            priority
            sizes="100vw"
            className="animate-fade-in object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/85" />
        </div>
        <Container className="relative py-24 sm:py-32">
          <h1 className="max-w-2xl font-display text-4xl leading-[1.05] text-white sm:text-6xl">
            {t.heroTitle}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            {t.heroText}
          </p>
          <div className="mt-9">
            <Link
              href={localeHref(locale, "/#aree")}
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 text-[15px] font-semibold text-navy-dark transition-colors hover:bg-orange-dark hover:text-white"
            >
              {t.heroCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* 4 card categoria — icona + foto, testo alla lettera dal mockup. */}
      <section id="aree" className="scroll-mt-20 py-20 sm:py-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const tone = quadrantTone[service.tone];
              const photo = cardPhotos[service.id];
              return (
                <Reveal key={service.id} delay={i * 90}>
                  <Link
                    href={localeHref(locale, service.href)}
                    className={`group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-card transition-colors duration-300 ${tone.fillHover}`}
                  >
                    <div className="h-40 overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        width={700}
                        height={480}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="relative flex flex-1 flex-col p-6">
                      <div
                        className={`relative -mt-[3.35rem] mb-4 flex h-9 w-9 items-center justify-center rounded-full border-4 border-surface shadow-card ${tone.badge} ${tone.fillHover}`}
                      >
                        <Icon
                          name={quadrantIcon[service.id]}
                          className={`h-4 w-4 ${tone.icon} ${tone.textHover}`}
                        />
                      </div>
                      <h3 className={`font-display text-xl text-ink ${tone.textHover}`}>
                        {service.title}
                      </h3>
                      <p
                        className={`mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft ${tone.textHover} group-hover:text-white/85`}
                      >
                        {service.description}
                      </p>
                      <span
                        className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink ${tone.textHover}`}
                      >
                        {t.cardsCta}
                        <Icon
                          name="arrowRight"
                          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Split: foto (gruppo di spalle) + testo + foto satellitare dell'Europa. */}
      <section className="bg-mist-warm py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-xl2 shadow-soft">
              <Image
                src="https://images.pexels.com/photos/8457972/pexels-photo-8457972.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Gruppo di persone unite, braccia sulle spalle l'uno dell'altro"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2">
            <h2 className="font-display text-3xl text-navy-dark sm:text-4xl">
              {t.splitTitleLine1}
            </h2>
            <h2 className="mb-5 font-display text-3xl text-pink-dark sm:text-4xl">
              {t.splitTitleLine2}
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-ink-soft">
              {t.splitText}
            </p>
            <Link
              href={localeHref(locale, "/chi-siamo")}
              className="inline-flex items-center gap-2 rounded-full border border-navy-dark/30 px-6 py-3 text-[15px] font-semibold text-navy-dark transition-colors hover:border-navy-dark"
            >
              {t.splitCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>

            <div className="mt-10 overflow-hidden rounded-xl2 shadow-soft">
              <Image
                src="https://images.pexels.com/photos/30596258/pexels-photo-30596258.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt={t.mapAlt}
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Banda statistiche — struttura del mockup ("Il nostro impatto"),
          numeri e claim in segnaposto esplicito perché non ancora verificati. */}
      <section className="border-y border-line bg-mist-cool py-14">
        <Container>
          <Reveal>
            <p className="mb-8 text-sm font-semibold uppercase tracking-[0.15em] text-navy">
              {t.impactEyebrow}
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: t.impactProjects, value: t.impactPlaceholder },
              { label: t.impactTeams, value: t.impactPlaceholder },
              { label: t.impactPeople, value: `${t.impactPlaceholder}+` },
              { label: t.impactCountries, value: `${t.impactPlaceholder}+` },
              { label: t.impactPartners, value: `${t.impactPlaceholder}+` },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 60}>
                <p className="font-display text-3xl text-navy-dark">{stat.value}</p>
                <p className="mt-1 text-[13px] text-ink-soft">
                  {stat.label}
                  <span className="ml-1.5 inline-block whitespace-nowrap rounded-full bg-orange-light px-2 py-0.5 text-[11px] font-bold text-orange-dark">
                    {t.impactPlaceholderTag}
                  </span>
                </p>
              </Reveal>
            ))}
            <Reveal delay={300}>
              <p className="font-display text-lg leading-snug text-navy-dark">
                {t.impactClaim}
              </p>
              <span className="mt-1 inline-block whitespace-nowrap rounded-full bg-orange-light px-2 py-0.5 text-[11px] font-bold text-orange-dark">
                {t.impactClaimTag}
              </span>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Testimonial — placeholder esplicito, nessun nome/età inventati. */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-xl2 bg-navy-dark px-8 py-12 text-center text-white sm:px-16 sm:py-16">
              <p className="font-display text-2xl leading-snug sm:text-3xl">
                &ldquo;{t.testimonialQuote}&rdquo;
              </p>
              <p className="mt-6 text-sm font-semibold text-white/70">
                {t.testimonialAttribution}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* News — 3 news reali ECOS (non gli esempi del mockup). */}
      <section className="bg-mist-cool py-20 sm:py-24">
        <Container>
          <Reveal className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-3xl text-navy-dark sm:text-4xl">
              {t.newsTitle}
            </h2>
            <Link
              href={localeHref(locale, "/news")}
              className="border-b border-navy/40 text-sm font-semibold text-navy"
            >
              {t.newsCtaAll} →
            </Link>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {latestNews.map((post, i) => {
              const category = getCategory(post.category);
              return (
                <Reveal key={post.slug} delay={i * 90}>
                  <Link
                    href={localeHref(locale, `/news/${post.slug}`)}
                    className="group flex h-full flex-col rounded-xl2 border border-line bg-surface p-6 shadow-card transition-colors duration-300 hover:bg-navy"
                  >
                    <span
                      className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${toneClasses[category.tone]}`}
                    >
                      {category.label}
                    </span>
                    <p className="mt-3 text-xs font-medium text-ink-soft group-hover:text-white/70">
                      {new Date(post.date).toLocaleDateString(locale === "it" ? "it-IT" : "en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-ink group-hover:text-white">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-ink-soft group-hover:text-white/85">
                      {post.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-white">
                      {t.newsCtaItem}
                      <Icon
                        name="arrowRight"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA aziende. */}
      <section className="bg-orange-light py-16">
        <Container className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <Reveal className="flex max-w-xl items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange">
              <Icon name="handshake" className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="mb-2 font-display text-2xl text-navy-dark sm:text-3xl">
                {t.ctaAziendeTitle}
              </h2>
              <p className="text-[15px] leading-relaxed text-ink-soft">
                {t.ctaAziendeText}
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <Link
              href={localeHref(locale, "/partnership")}
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[15px] font-semibold text-navy-dark transition-colors hover:bg-orange-dark hover:text-white"
            >
              {t.ctaAziendeCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
