import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Informativa sulla privacy di ECOS.",
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy" }]} />
      <Container className="max-w-3xl py-16 sm:py-20">
        <h1 className="font-display text-3xl text-ink sm:text-4xl">
          Informativa sulla privacy
        </h1>
        <div className="prose-body mt-8 space-y-6 text-[15px] leading-relaxed text-ink-soft">
          <p>
            [SEGNAPOSTO TESTO LEGALE] Questa pagina contiene un&rsquo;informativa
            dimostrativa. Il testo legale definitivo, conforme al Regolamento (UE)
            2016/679 (GDPR) e alla normativa italiana applicabile, dovrà essere
            redatto e validato da un consulente legale prima della pubblicazione.
          </p>
          <div>
            <h2 className="font-display text-xl text-ink">Titolare del trattamento</h2>
            <p className="mt-2">
              [SEGNAPOSTO] {site.legalName}, con sede in {site.address.line1},{" "}
              {site.address.city}. Contatti: {site.email}.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Dati raccolti</h2>
            <p className="mt-2">
              [SEGNAPOSTO] Elenco dettagliato delle categorie di dati raccolti
              attraverso i moduli del sito (es. dati anagrafici, di contatto,
              professionali) da definire con il consulente privacy.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Finalità e base giuridica</h2>
            <p className="mt-2">
              [SEGNAPOSTO] Descrizione delle finalità del trattamento (es. gestione
              delle richieste, iscrizione ai laboratori, partnership) e della relativa
              base giuridica.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Dati relativi a minori</h2>
            <p className="mt-2">
              [SEGNAPOSTO] I moduli rivolti a minorenni richiedono il coinvolgimento
              di un genitore, tutore o servizio responsabile; nessun dato sanitario o
              giudiziario viene raccolto tramite i moduli pubblici del sito.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Diritti dell&rsquo;interessato</h2>
            <p className="mt-2">
              [SEGNAPOSTO] Informazioni su come esercitare i diritti previsti dagli
              articoli 15-22 del GDPR (accesso, rettifica, cancellazione,
              limitazione, portabilità, opposizione).
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Conservazione dei dati</h2>
            <p className="mt-2">
              [SEGNAPOSTO] Tempi e criteri di conservazione dei dati raccolti.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
