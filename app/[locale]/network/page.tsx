import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Icon from "@/components/Icon";
import { getNetworks } from "@/data/networks";
import { localeHref, type Locale } from "@/lib/i18n";

const metadataByLocale: Record<Locale, Metadata> = {
  it: {
    title: "Network",
    description:
      "ECOS fa parte di network internazionali che permettono di condividere pratiche, costruire nuove collaborazioni e contribuire al dibattito europeo su sport, inclusione e salute mentale.",
  },
  en: {
    title: "Network",
    description:
      "ECOS is part of international networks that let us share practices, build new collaborations and contribute to the European debate on sport, inclusion and mental health.",
  },
};

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return metadataByLocale[params.locale];
}

const copyByLocale = {
  it: {
    home: "Home",
    breadcrumb: "Network",
    eyebrow: "I nostri network",
    heroTitle: "Una rete europea di competenze e organizzazioni.",
    heroSubtitle:
      "ECOS fa parte di network internazionali che ci permettono di condividere pratiche, costruire nuove collaborazioni e contribuire al dibattito europeo su sport, inclusione e salute mentale.",
    visitPrefix: "Scopri il sito",
    collabTitle: "Collabora con ECOS",
    collabText:
      "Se rappresenti un'organizzazione interessata a entrare in contatto con la nostra rete europea, raccontaci chi sei.",
    collabCta: "Contattaci",
    placeholder:
      "[SEGNAPOSTO] Loghi ufficiali di EWOS ed EASMH e link ai rispettivi siti da inserire; il PDF prevede inoltre lo spazio per “altre reti future”.",
  },
  en: {
    home: "Home",
    breadcrumb: "Network",
    eyebrow: "Our networks",
    heroTitle: "A European network of expertise and organisations.",
    heroSubtitle:
      "ECOS is part of international networks that let us share practices, build new collaborations and contribute to the European debate on sport, inclusion and mental health.",
    visitPrefix: "Visit the",
    collabTitle: "Work with ECOS",
    collabText:
      "If you represent an organisation interested in connecting with our European network, tell us about yourselves.",
    collabCta: "Contact us",
    placeholder:
      "[PLACEHOLDER] Official EWOS and EASMH logos and links to their websites to be added; the strategy PDF also leaves space for “other future networks”.",
  },
} as const;

export default function NetworkPage({ params }: { params: { locale: Locale } }) {
  const t = copyByLocale[params.locale];
  const { locale } = params;
  const networks = getNetworks(locale);

  return (
    <>
      <Breadcrumb
        items={[{ label: t.home, href: localeHref(locale, "/") }, { label: t.breadcrumb }]}
      />
      <Hero compact eyebrow={t.eyebrow} title={t.heroTitle} subtitle={t.heroSubtitle} />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {networks.map((network) => (
              <div
                key={network.name}
                className="flex h-full flex-col justify-between rounded-xl2 border border-line bg-surface p-7"
              >
                <div>
                  <h2 className="font-display text-2xl text-ink">{network.name}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {network.description}
                  </p>
                </div>
                <Link
                  href={network.href}
                  className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink/30"
                >
                  {t.visitPrefix} {network.name}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </div>
            ))}

            <div className="flex h-full flex-col justify-between rounded-xl2 bg-navy p-7 text-white">
              <div>
                <h2 className="font-display text-2xl">{t.collabTitle}</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  {t.collabText}
                </p>
              </div>
              <Link
                href={localeHref(locale, "/contatti")}
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-dark"
              >
                {t.collabCta}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mt-10 text-sm text-ink-soft">{t.placeholder}</p>
        </Container>
      </section>
    </>
  );
}
