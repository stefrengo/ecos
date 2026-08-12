import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import Icon from "@/components/Icon";
import { networks } from "@/data/networks";

export const metadata: Metadata = {
  title: "Network",
  description:
    "ECOS fa parte di network internazionali che permettono di condividere pratiche, costruire nuove collaborazioni e contribuire al dibattito europeo su sport, inclusione e salute mentale.",
};

export default function NetworkPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Network" }]} />
      <Hero
        compact
        eyebrow="I nostri network"
        title="Una rete europea di competenze e organizzazioni."
        subtitle="ECOS fa parte di network internazionali che ci permettono di condividere pratiche, costruire nuove collaborazioni e contribuire al dibattito europeo su sport, inclusione e salute mentale."
      />

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
                  Scopri il sito {network.name}
                  <Icon name="arrowRight" className="h-4 w-4" />
                </Link>
              </div>
            ))}

            <div className="flex h-full flex-col justify-between rounded-xl2 bg-navy p-7 text-white">
              <div>
                <h2 className="font-display text-2xl">Collabora con ECOS</h2>
                <p className="mt-3 text-[15px] leading-relaxed text-white/80">
                  Se rappresenti un&rsquo;organizzazione interessata a entrare
                  in contatto con la nostra rete europea, raccontaci chi sei.
                </p>
              </div>
              <Link
                href="/contatti"
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-navy-dark"
              >
                Contattaci
                <Icon name="arrowRight" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <p className="mt-10 text-sm text-ink-soft">
            [SEGNAPOSTO] Loghi ufficiali di EWOS ed EASMH e link ai rispettivi
            siti da inserire; il PDF prevede inoltre lo spazio per
            &ldquo;altre reti future&rdquo;.
          </p>
        </Container>
      </section>
    </>
  );
}
