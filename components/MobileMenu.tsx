"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { mainNav } from "@/data/navigation";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
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
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu di navigazione"
        className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-surface p-6 shadow-soft"
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-xl font-semibold text-ink">ECOS</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-mist"
            aria-label="Chiudi il menu"
          >
            <Icon name="close" className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label="Menu principale mobile" className="flex flex-col gap-1">
          {mainNav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
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
                      href={child.href}
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
          href="/#aree"
          onClick={onClose}
          className="mt-6 inline-flex justify-center rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white hover:bg-coral-dark"
        >
          Partecipa
        </Link>
      </div>
    </div>
  );
}
