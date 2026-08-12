import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import Icon from "./Icon";
import SocialIcon, { type SocialPlatform } from "./SocialIcon";
import { getFooterLinks } from "@/data/navigation";
import { site, getSiteCopy } from "@/data/site";
import { getUiCopy } from "@/data/uiCopy";
import { localeHref, type Locale } from "@/lib/i18n";

// Chiavi di data/site.ts → piattaforma icona + etichetta leggibile.
const socialMeta: Record<string, { platform: SocialPlatform; label: string }> = {
  facebook: { platform: "facebook", label: "Facebook" },
  instagram: { platform: "instagram", label: "Instagram" },
  linkedin: { platform: "linkedin", label: "LinkedIn" },
  twitter: { platform: "twitter", label: "X" },
};

export default function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();
  const footerLinks = getFooterLinks(locale);
  const copy = getSiteCopy(locale);
  const t = getUiCopy(locale).footer;

  return (
    <footer className="border-t border-line">
      {/* Banda "Parliamo." — presente in fondo a ogni pagina nei mockup PDF. */}
      <div className="bg-orange">
        <Container className="grid gap-8 py-14 sm:grid-cols-2 sm:items-center">
          <h2 className="font-display text-4xl text-navy-dark sm:text-5xl">
            {t.talkTitle}
          </h2>
          <div className="space-y-6">
            <div>
              <p className="max-w-sm text-[15px] leading-relaxed text-navy-dark/90">
                {t.talkText}
              </p>
              <Link
                href={localeHref(locale, "/contatti")}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-navy-dark"
              >
                {t.formCta}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
            <div>
              <p className="text-[15px] font-semibold text-navy-dark">
                {t.workWithUsTitle}
              </p>
              <p className="mt-1 max-w-sm text-[15px] leading-relaxed text-navy-dark/90">
                {t.workWithUsText}
              </p>
              <Link
                href={localeHref(locale, "/lavora-con-noi")}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-navy-dark/40 px-6 py-3.5 text-[15px] font-semibold text-navy-dark hover:border-navy-dark"
              >
                {t.applyCta}
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-navy-dark text-white">
        <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href={localeHref(locale, "/")} className="inline-block">
              <Image
                src="/images/ecos-logo-white.png"
                alt={site.name}
                width={1757}
                height={480}
                className="h-9 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              {copy.description}
            </p>
            <div className="mt-6 flex gap-3">
              {Object.entries(site.social).map(([key, href]) => {
                const meta = socialMeta[key];
                if (!meta) return null;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white hover:bg-white/10 hover:text-white"
                    aria-label={`ECOS su ${meta.label}`}
                  >
                    <SocialIcon platform={meta.platform} className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label={t.areasLabel}>
            <h2 className="mb-4 text-sm font-semibold text-white">{t.whatWeDoLabel}</h2>
            <ul className="space-y-2.5">
              {footerLinks.aree.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localeHref(locale, item.href)}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="ECOS">
            <h2 className="mb-4 text-sm font-semibold text-white">{t.ecosLabel}</h2>
            <ul className="space-y-2.5">
              {footerLinks.istituzionale.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localeHref(locale, item.href)}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">{t.contactsLabel}</h2>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {site.address.line1}, {site.address.city}
                </span>
              </li>
            </ul>
          </div>
        </Container>

        <div className="border-t border-white/10 py-6">
          <Container className="flex flex-col items-center justify-between gap-3 text-xs text-white/60 sm:flex-row">
            <p>
              © {year} {site.legalName}. {t.rights}
            </p>
            <div className="flex gap-5">
              {footerLinks.legale.map((item) => (
                <Link
                  key={item.href}
                  href={localeHref(locale, item.href)}
                  className="hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
