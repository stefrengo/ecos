"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "ecos-cookie-consent-demo";

/**
 * Banner cookie dimostrativo, non invasivo.
 * Non installa alcuno strumento reale di analytics o tracciamento.
 * INTEGRAZIONE FUTURA: collegare qui la piattaforma di gestione del consenso (CMP),
 * le categorie di cookie reali e gli strumenti di terze parti da attivare dopo il consenso.
 */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function handleChoice(choice: "accepted" | "essential-only") {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // storage non disponibile: il banner potrà ripresentarsi, nessun impatto funzionale
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Informativa sui cookie"
      className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-xl rounded-2xl border border-line bg-surface p-5 shadow-soft sm:inset-x-auto sm:right-6"
    >
      <p className="text-sm leading-relaxed text-ink-soft">
        Utilizziamo cookie tecnici necessari al funzionamento del sito. Con il tuo
        consenso potremmo usare anche cookie di misurazione, descritti nella{" "}
        <Link href="/cookie-policy" className="font-semibold text-forest-dark">
          cookie policy
        </Link>
        .
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => handleChoice("accepted")}
          className="rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-white hover:bg-forest-dark"
        >
          Accetta tutti
        </button>
        <button
          type="button"
          onClick={() => handleChoice("essential-only")}
          className="rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink/30"
        >
          Solo cookie necessari
        </button>
      </div>
    </div>
  );
}
