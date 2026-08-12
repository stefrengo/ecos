import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: "Informativa sui cookie utilizzati dal sito ECOS.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "Home", href: "/" }, { label: "Cookie policy" }]}
      />
      <Container className="max-w-3xl py-16 sm:py-20">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          Cookie policy
        </h1>
        <div className="prose-body mt-8 space-y-6 text-[15px] leading-relaxed text-ink-soft">
          <p>
            [SEGNAPOSTO TESTO LEGALE] Questa pagina contiene una cookie policy
            dimostrativa. Il sito, allo stato attuale, non installa alcuno
            strumento reale di analytics o tracciamento: il banner mostrato è
            puramente dimostrativo.
          </p>
          <div>
            <h2 className="font-display text-xl text-ink">Cosa sono i cookie</h2>
            <p className="mt-2">
              [SEGNAPOSTO] Breve spiegazione generale sui cookie e sulle tecnologie
              simili, da integrare con il testo legale definitivo.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Categorie di cookie previste</h2>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>
                <strong className="text-ink">Cookie tecnici necessari</strong> —
                indispensabili al funzionamento del sito.
              </li>
              <li>
                <strong className="text-ink">Cookie di misurazione</strong> —{" "}
                [SEGNAPOSTO] da attivare solo previo consenso, con indicazione dello
                strumento di analytics prescelto.
              </li>
              <li>
                <strong className="text-ink">Cookie di terze parti</strong> —{" "}
                [SEGNAPOSTO] da elencare singolarmente se e quando integrati (es.
                mappe, video, pixel di terze parti).
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Gestione del consenso</h2>
            <p className="mt-2">
              [SEGNAPOSTO] Istruzioni su come modificare o revocare il consenso
              prestato, una volta integrata una piattaforma di gestione del
              consenso (CMP) reale.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
