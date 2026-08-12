"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Icon from "./Icon";
import { getMainNav } from "@/data/navigation";
import { getUiCopy } from "@/data/uiCopy";
import { localeHref, type Locale } from "@/lib/i18n";

export default function MobileMenu({
  open,
  onClose,
  locale,
}: {
  open: boolean;
  onClose: () => void;
  locale: Locale;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mainNav = getMainNav(locale);
  const t = getUiCopy(locale);

  // Il menu va montato via portal direttamente su <body>: l'header è
  // "sticky" con "backdrop-blur", e backdrop-filter genera un nuovo
  // containing block per gli elementi "fixed". Senza portal, il pannello
  // "fixed inset-0" resta ancorato al riquadro dell'header (72px) invece
  // di coprire tutto lo schermo — questo era il bug del menu mobile.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    // Blocco scroll robusto anche su iOS Safari: overflow:hidden da solo non
    // impedisce lo scroll/rimbalzo della pagina sotto un overlay fixed su iOS,
    // serve anche bloccare il body in position:fixed.
    const scrollY = window.scrollY;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    closeButtonRef.current?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open || !mounted) return null;

  return createPortal(
    // z-[80]: deve stare sopra il cookie banner (z-[70]), altrimenti su schermi
    // piccoli il banner può sovrapporsi e bloccare i tap sui pulsanti in fondo
    // al pannello.
    <div className="fixed inset-0 z-[80] lg:hidden">
      <div
        className="absolute inset-0 animate-fade-in-fast bg-ink/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={t.mobileNavLabel}
        className="animate-slide-in absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col overflow-y-auto overscroll-contain bg-surface p-6 shadow-soft"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-ink">ECOS</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-mist"
            aria-label={t.closeMenu}
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label={t.mobileNavLabelInner} className="flex flex-col gap-1">
          {mainNav.map((item) => (
            <div key={item.href}>
              <Link
                href={localeHref(locale, item.href)}
                onClick={onClose}
                className="block rounded-xl px-3 py-3 text-base font-semibold text-ink hover:bg-mist"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ml-3 flex flex-col border-l border-line pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={localeHref(locale, child.href)}
                      onClick={onClose}
                      className="rounded-lg px-3 py-2.5 text-sm text-ink-soft hover:bg-mist hover:text-ink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          href={locale === "en" ? "/" : "/en"}
          onClick={onClose}
          className="mt-4 inline-flex justify-center rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink hover:border-navy"
        >
          {t.languageSwitch}
        </Link>

        <Link
          href={localeHref(locale, "/#aree")}
          onClick={onClose}
          className="mt-3 inline-flex justify-center rounded-full bg-pink px-5 py-3 text-sm font-semibold text-white hover:bg-pink-dark"
        >
          {t.participate}
        </Link>
      </div>
    </div>,
    document.body
  );
}
