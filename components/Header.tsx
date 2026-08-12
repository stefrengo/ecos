"use client";

import Link from "next/link";
import { useState } from "react";
import Container from "./Container";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";
import { mainNav } from "@/data/navigation";
import { site } from "@/data/site";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          className="hidden items-center gap-0.5 lg:flex"
        >
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-navy-light hover:text-navy-dark"
            >
              {item.label}
            </Link>
          ))}
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
