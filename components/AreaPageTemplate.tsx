import Container from "./Container";
import Hero from "./Hero";
import Breadcrumb from "./Breadcrumb";
import CTASection from "./CTASection";
import SectionHeading from "./SectionHeading";
import { localeHref, type Locale } from "@/lib/i18n";

export type AreaPageContent = {
  breadcrumb: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  // Paragrafi di testo ufficiale (da documento di Valerio).
  paragraphs: string[];
  // Eventuali elenchi (titolo + voci).
  lists?: { title: string; items: string[] }[];
  // Blocco segnaposto per i contenuti ancora da ricevere da ECOS.
  placeholderTitle: string;
  placeholderText: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export default function AreaPageTemplate({
  locale,
  content,
}: {
  locale: Locale;
  content: AreaPageContent;
}) {
  const home = locale === "it" ? "Home" : "Home";
  return (
    <>
      <Breadcrumb
        items={[{ label: home, href: localeHref(locale, "/") }, { label: content.breadcrumb }]}
      />
      <Hero
        compact
        eyebrow={content.eyebrow}
        title={content.title}
        subtitle={content.subtitle}
      />

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          {content.paragraphs.map((p) => (
            <p key={p} className="mb-5 text-[16px] leading-relaxed text-ink-soft">
              {p}
            </p>
          ))}
        </Container>
        {content.lists && (
          <Container className="mt-6 grid gap-6 lg:grid-cols-2">
            {content.lists.map((l) => (
              <div key={l.title} className="rounded-xl2 border border-line bg-surface p-7">
                <h2 className="font-display text-xl text-navy-dark">{l.title}</h2>
                <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-ink-soft">
                  {l.items.map((i) => (
                    <li key={i}>• {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Container>
        )}
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="" title={content.placeholderTitle} />
          <p className="mt-4 max-w-2xl rounded-xl2 border border-dashed border-line p-5 text-sm leading-relaxed text-ink-soft">
            {content.placeholderText}
          </p>
        </Container>
      </section>

      <CTASection
        title={content.ctaTitle}
        text={content.ctaText}
        primaryLabel={content.ctaLabel}
        primaryHref={localeHref(locale, "/contatti")}
      />
    </>
  );
}
