"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";
import { mainNav, whatWeDo } from "@/data/navigation";
import { site } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-surface/90 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl font-semibold tracking-tight text-ink"
        >
          {site.name}
        </Link>

        <nav
          aria-label="Menu principale"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNav.map((item) =>
            item.children ? (
              <div className="relative" ref={dropdownRef} key={item.label}>
                <button
                  type="button"
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                  onClick={() => setDropdownOpen((v) => !v)}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-navy-light hover:text-navy-dark"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 12"
                    className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M2 4l4 4 4-4" stroke="currentColor" fill="none" strokeWidth="1.5" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div
                    role="menu"
                    className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 rounded-2xl border border-line bg-surface p-2 shadow-soft"
                  >
                    {whatWeDo.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        role="menuitem"
                        onClick={() => setDropdownOpen(false)}
                        className="block rounded-xl px-4 py-3 hover:bg-mist"
                      >
                        <span className="block text-sm font-semibold text-ink">
                          {child.label}
                        </span>
                        <span className="block text-xs text-ink-soft">
                          {child.description}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-navy-light hover:text-navy-dark"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#aree"
            className="hidden rounded-full bg-pink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-pink-dark sm:inline-flex"
          >
            Partecipa
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink hover:bg-mist lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Chiudi il menu" : "Apri il menu"}
            onClick={() => setMobileOpen(true)}
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
