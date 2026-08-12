import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import PartnerLogoGrid from "@/components/PartnerLogoGrid";
import CTASection from "@/components/CTASection";
import { networks } from "@/data/networks";

export const metadata: Metadata = {
  title: "Network",
  description:
    "Le reti locali, nazionali ed europee di cui ECOS fa parte per condividere competenze e moltiplicare l'impatto dei progetti.",
};

const scopes: { key: "locale" | "nazionale" | "europeo"; label: string }[] = [
  { key: "locale", label: "Reti locali" },
  { key: "nazionale", label: "Reti nazionali" },
  { key: "europeo", label: "Reti europee" },
];

export default function NetworkPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Network" }]} />
      <Hero
        compact
        eyebrow="Network"
        title="Le reti di cui facciamo parte"
        subtitle="Collaboriamo con reti locali, nazionali ed europee per condividere competenze, costruire alleanze e moltiplicare l&rsquo;impatto dei nostri progetti."
      />

      <section className="py-16 sm:py-20">
        <Container className="space-y-14">
          {scopes.map((scope) => {
            const items = networks.filter((n) => n.scope === scope.key);
            if (items.length === 0) return null;
            return (
              <div key={scope.key}>
                <SectionHeading title={scope.label} />
                <div className="mt-6">
                  <PartnerLogoGrid partners={items} />
                </div>
              </div>
            );
          })}
          <p className="text-sm text-ink-soft">
            [SEGNAPOSTO] I nomi e i loghi mostrati sono segnaposto: sostituire con le
            reti e i partner reali di ECOS.
          </p>
        </Container>
      </section>

      <CTASection
        title="Rappresenti una rete o un&rsquo;organizzazione?"
        text="Se condividi i nostri obiettivi e vuoi collaborare, raccontaci la tua rete e i temi di interesse comune."
        primaryLabel="Parla con il team ECOS"
        primaryHref="/contatti"
      />
    </>
  );
}
