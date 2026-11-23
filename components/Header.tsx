"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";
import { getMainNav, isExternalHref } from "@/data/navigation";
import { site } from "@/data/site";
import { getUiCopy } from "@/data/uiCopy";
import { localeHref, type Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainNav = getMainNav(locale);
  const t = getUiCopy(locale);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/90 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <Link href={localeHref(locale, "/")} className="shrink-0">
          <Image
            src="/images/ecos-logo.png"
            alt={site.name}
            width={1757}
            height={480}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav aria-label={t.mainNavLabel} className="hidden items-center gap-0.5 xl:flex">
          {mainNav.map((item) => {
            const cls =
              "rounded-full px-2.5 py-2 text-[13px] font-medium text-ink-soft transition-colors hover:bg-navy-light hover:text-navy-dark";
            return isExternalHref(item.href) ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={localeHref(locale, item.href)} className={cls}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={locale === "en" ? "/" : "/en"}
            className="hidden rounded-full border border-line px-3.5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-navy hover:text-navy-dark xl:inline-flex"
          >
            {t.languageSwitch}
          </Link>
          {/* [TEMPORANEO] bottone "Partecipa" sostituito da "Landing" su richiesta di
              Stefano, finché la vecchia home (ora spostata su /landing) resta online
              per confronto. Ripristinare {t.participate} + href "/#aree" quando la
              landing verrà rimossa. */}
          <Link
            href={localeHref(locale, "/landing")}
            className="hidden rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-pink-dark xl:inline-flex"
          >
            Landing
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-mist xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            onClick={() => setMobileOpen(true)}
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} locale={locale} />
    </header>
  );
}
