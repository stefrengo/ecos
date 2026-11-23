import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { getQuadrants, isExternalHref } from "@/data/navigation";
import { getAllNews } from "@/lib/news";
import { getCategory, toneClasses } from "@/data/newsCategories";
import { localeHref, type Locale } from "@/lib/i18n";

// Home secondo il documento di Valerio (ECOS): claim, 4 aree (HAPPY Club
// sempre terzo, link esterno), credenziali, reti, ultime news, newsletter
// (solo segnaposto, nessun form attivo). Niente statistiche inventate né
// testimonial. Foto stock Pexels da sostituire con foto autentiche ECOS;
// mai pubblicare foto riconoscibili di minori.

const areaIcons: IconName[] = ["handshake", "plane", "ball", "globe"];
const areaTones = ["navy", "purple", "pink", "orange"] as const;

const quadrantTone: Record<
  string,
  { badge: string; icon: string; hoverBg: string; textHover: string }
> = {
  // hoverBg va sulla card stessa: deve essere "hover:", non "group-hover:"
  // (una "group-hover:" sullo stesso elemento che porta la classe "group"
  // non scatta mai — funziona solo sui discendenti. Era questo il bug per
  // cui lo sfondo restava bianco e il testo, diventato bianco, spariva).
  navy: {
    badge: "bg-navy-light",
    icon: "text-navy",
    hoverBg: "hover:bg-navy",
    textHover: "group-hover:text-white",
  },
  purple: {
    badge: "bg-purple-light",
    icon: "text-purple",
    hoverBg: "hover:bg-purple",
    textHover: "group-hover:text-white",
  },
  pink: {
    badge: "bg-pink-light",
    icon: "text-pink",
    hoverBg: "hover:bg-pink",
    textHover: "group-hover:text-white",
  },
  orange: {
    badge: "bg-orange-light",
    icon: "text-orange-dark",
    hoverBg: "hover:bg-orange",
    textHover: "group-hover:text-white",
  },
};

const cardPhotos = [
  {
    src: "https://images.pexels.com/photos/7413864/pexels-photo-7413864.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Team diversificato durante un brainstorming in ufficio",
  },
  {
    src: "https://images.pexels.com/photos/37762503/pexels-photo-37762503.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Due studenti con zaino in viaggio verso un'esperienza di mobilità europea",
  },
  {
    src: "https://images.pexels.com/photos/8941579/pexels-photo-8941579.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Bambini in divisa sportiva pronti per un allenamento",
  },
  {
    src: "https://images.pexels.com/photos/8457972/pexels-photo-8457972.jpeg?auto=compress&cs=tinysrgb&w=700",
    alt: "Gruppo multiculturale di persone che sorridono insieme",
  },
];

const copy = {
  it: {
    heroTitle: "Sport e cultura per una società più inclusiva",
    heroSubtitle: "Cooperazione internazionale e progetti ad alto impatto sociale",
    heroText:
      "ECOS promuove l'inclusione sociale attraverso lo sport, la cultura, la formazione e la cooperazione internazionale.",
    heroCta: "Scopri le nostre aree",
    cardsCta: "Scopri di più",
    proof: ["Iscritti al RUNTS", "Accreditamento Erasmus+ KA120 INDIRE", "Partner ufficiale European Week of Sport", "Promotore di EASMH"],
    stats: [
      { value: "25+", label: "progetti" },
      { value: "200+", label: "accordi di partenariato" },
    ],
    retiTitle: "Una rete di collaborazioni in Italia e in Europa",
    retiText:
      "Lavoriamo con servizi pubblici, organizzazioni sportive e del Terzo Settore e con reti europee per trasformare i progetti in opportunità concrete.",
    retiCta: "Le nostre reti",
    mapAlt: "Vista dall'alto dell'Europa",
    newsTitle: "News",
    newsCtaAll: "Vedi tutte le news",
    newsCtaItem: "Leggi di più",
    newsletterTitle: "Newsletter mensile",
    newsletterText:
      "[SEGNAPOSTO] L'iscrizione alla newsletter mensile di ECOS sarà disponibile qui a breve.",
    ctaTitle: "Costruiamo nuove collaborazioni",
    ctaCta: "Collabora con noi",
  },
  en: {
    heroTitle: "Sport and culture for a more inclusive society",
    heroSubtitle: "International cooperation and high social-impact projects",
    heroText:
      "ECOS promotes social inclusion through sport, culture, education and international cooperation.",
    heroCta: "Discover our areas",
    cardsCta: "Learn more",
    proof: ["Registered in RUNTS", "Erasmus+ KA120 accreditation (INDIRE)", "Official partner of the European Week of Sport", "Promoter of EASMH"],
    stats: [
      { value: "25+", label: "projects" },
      { value: "200+", label: "partnership agreements" },
    ],
    retiTitle: "A network of collaborations in Italy and in Europe",
    retiText:
      "We work with public services, sports and Third Sector organisations and European networks to turn projects into concrete opportunities.",
    retiCta: "Our networks",
    mapAlt: "Aerial view of Europe",
    newsTitle: "News",
    newsCtaAll: "See all news",
    newsCtaItem: "Read more",
    newsletterTitle: "Monthly newsletter",
    newsletterText:
      "[PLACEHOLDER] Signing up to the ECOS monthly newsletter will be available here soon.",
    ctaTitle: "Let's build new collaborations",
    ctaCta: "Work with us",
  },
} as const;

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const { locale } = params;
  const t = copy[locale];
  const services = getQuadrants(locale);
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
          <p className="mt-4 max-w-xl text-lg font-semibold text-orange">{t.heroSubtitle}</p>
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

      {/* 4 aree — HAPPY Club (terza) è un link esterno. Le card si
          sovrappongono al bordo inferiore della foto hero. */}
      <section id="aree" className="relative z-10 -mt-20 scroll-mt-20 pb-20 sm:-mt-28 sm:pb-28">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const tone = quadrantTone[areaTones[i]];
              const photo = cardPhotos[i];
              const cls = `group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-surface shadow-card transition-colors duration-300 ${tone.hoverBg}`;
              const inner = (
                <>
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
                      className={`relative -mt-[3.35rem] mb-4 flex h-9 w-9 items-center justify-center rounded-full border-4 border-surface shadow-card transition-colors duration-300 ${tone.badge} group-hover:bg-white/20`}
                    >
                      <Icon
                        name={areaIcons[i]}
                        className={`h-4 w-4 transition-colors duration-300 ${tone.icon} ${tone.textHover}`}
                      />
                    </div>
                    <h3 className={`font-display text-xl text-ink transition-colors duration-300 ${tone.textHover}`}>
                      {service.label}
                    </h3>
                    <p className="mt-2 flex-1 text-[14px] leading-relaxed text-ink-soft transition-colors duration-300 group-hover:text-white/85">
                      {service.description}
                    </p>
                    <span
                      className={`mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors duration-300 ${tone.textHover}`}
                    >
                      {t.cardsCta}
                      <Icon
                        name="arrowRight"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </>
              );
              return (
                <Reveal key={service.href} delay={i * 90}>
                  {isExternalHref(service.href) ? (
                    <a href={service.href} target="_blank" rel="noopener noreferrer" className={cls}>
                      {inner}
                    </a>
                  ) : (
                    <Link href={localeHref(locale, service.href)} className={cls}>
                      {inner}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Credenziali e numeri (dal documento di Valerio). */}
      <section className="border-y border-line bg-mist-cool py-12">
        <Container className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
          <ul className="grid gap-3 sm:grid-cols-2">
            {t.proof.map((p) => (
              <li key={p} className="flex items-center gap-2 text-[15px] font-semibold text-navy-dark">
                <Icon name="check" className="h-4 w-4 shrink-0 text-pink" />
                {p}
              </li>
            ))}
          </ul>
          <div className="flex gap-10">
            {t.stats.map((st) => (
              <div key={st.label}>
                <p className="font-display text-4xl text-navy-dark">{st.value}</p>
                <p className="text-[13px] text-ink-soft">{st.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Reti: teaser verso /chi-siamo#reti con foto dell'Europa. */}
      <section className="bg-mist-warm py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <h2 className="mb-5 font-display text-3xl text-navy-dark sm:text-4xl">{t.retiTitle}</h2>
            <p className="mb-8 text-[15px] leading-relaxed text-ink-soft">{t.retiText}</p>
            <Link
              href={localeHref(locale, "/chi-siamo#reti")}
              className="inline-flex items-center gap-2 rounded-full border border-navy-dark/30 px-6 py-3 text-[15px] font-semibold text-navy-dark transition-colors hover:border-navy-dark"
            >
              {t.retiCta}
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={90}>
            <div className="overflow-hidden rounded-xl2 shadow-soft">
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

      {/* Newsletter — solo segnaposto, nessun form attivo. */}
      <section className="py-14">
        <Container>
          <div className="rounded-xl2 border border-dashed border-line p-6">
            <h2 className="font-display text-xl text-navy-dark">{t.newsletterTitle}</h2>
            <p className="mt-2 text-sm text-ink-soft">{t.newsletterText}</p>
          </div>
        </Container>
      </section>

      {/* CTA collaborazioni. */}
      <section className="bg-orange-light py-16">
        <Container className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <h2 className="font-display text-2xl text-navy-dark sm:text-3xl">{t.ctaTitle}</h2>
          <Link
            href={localeHref(locale, "/contatti")}
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-orange px-6 py-3.5 text-[15px] font-semibold text-navy-dark transition-colors hover:bg-orange-dark hover:text-white"
          >
            {t.ctaCta}
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
