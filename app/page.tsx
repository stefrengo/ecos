import Link from "next/link";
import Hero from "@/components/Hero";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import { services } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <Hero
        title="Costruiamo opportunità, insieme."
        subtitle="ECOS crea percorsi educativi per bambini e giovani, esperienze europee, progetti di cooperazione e partnership ad impatto sociale."
        primaryAction={{ label: "Scopri come partecipare", href: "#aree" }}
        secondaryAction={{ label: "Conosci ECOS", href: "/chi-siamo" }}
        orientation="Che tu sia un giovane, una famiglia, un professionista, un&rsquo;organizzazione o un&rsquo;impresa, qui puoi trovare il percorso giusto per partecipare."
        imageAlt="Fotografia autentica di giovani, partecipazione e collaborazione"
      />

      <section id="aree" className="scroll-mt-20 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Le nostre aree"
            title="Scopri come partecipare"
            subtitle="Quattro aree di intervento per creare opportunità, rafforzare le comunità e generare un impatto sociale concreto."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 rounded-xl2 border border-line bg-mist px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[15px] leading-relaxed text-ink-soft">
              Non sai quale percorso scegliere? Raccontaci cosa stai cercando e ti
              aiuteremo a trovare l&rsquo;opportunità più adatta.
            </p>
            <Link
              href="/contatti"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-forest-dark"
            >
              Parla con il team ECOS
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 aspect-[4/3] overflow-hidden rounded-xl2 border border-line bg-gradient-to-br from-sun-light to-forest-light lg:order-1">
            {/* [SEGNAPOSTO IMMAGINE] fotografia autentica del team o delle attività */}
            <div className="flex h-full items-center justify-center">
              <Icon name="globe" className="h-10 w-10 text-forest-dark" />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Chi siamo"
              title="Persone, competenze e relazioni al servizio delle comunità"
              subtitle="ECOS progetta e realizza iniziative sociali, educative e internazionali mettendo in connessione giovani, enti, organizzazioni e imprese. Crediamo nella partecipazione, nell&rsquo;apprendimento e nella cooperazione come strumenti per creare un impatto duraturo."
            />
            <Link
              href="/chi-siamo"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:border-ink/30"
            >
              Scopri chi siamo
              <Icon name="arrowRight" className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Comitato scientifico"
            title="Il nostro Comitato scientifico"
            subtitle="Un gruppo multidisciplinare di professionisti ed esperti che accompagna ECOS nello sviluppo di metodologie, programmi e progetti ad alto impatto sociale."
          />
          <Link
            href="/comitato-scientifico"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-forest-dark"
          >
            Conosci il Comitato
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Network"
            title="Le reti di cui facciamo parte"
            subtitle="Collaboriamo con reti locali, nazionali ed europee per condividere competenze, costruire alleanze e moltiplicare l&rsquo;impatto dei nostri progetti."
          />
          <Link
            href="/network"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:border-ink/30"
          >
            Scopri i nostri network
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Pubblicazioni"
            title="Conoscenza aperta e strumenti condivisi"
            subtitle="Guide, ricerche, toolkit e materiali sviluppati attraverso i nostri progetti, disponibili per giovani, educatori, organizzazioni e professionisti."
          />
          <Link
            href="/pubblicazioni"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 text-[15px] font-semibold text-white hover:bg-forest-dark"
          >
            Esplora le pubblicazioni
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Lavora con noi"
            title="Porta le tue competenze in ECOS"
            subtitle="Cerchiamo persone curiose, responsabili e motivate a lavorare per i giovani, l&rsquo;inclusione e la cooperazione internazionale."
          />
          <Link
            href="/lavora-con-noi"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3.5 text-[15px] font-semibold text-ink hover:border-ink/30"
          >
            Scopri le opportunità
            <Icon name="arrowRight" className="h-4 w-4" />
          </Link>
        </Container>
      </section>

      <CTASection
        tone="ink"
        title="Hai un&rsquo;idea, una domanda o vuoi partecipare?"
        text="Scrivici. Ti aiuteremo a trovare l&rsquo;opportunità, il progetto o la collaborazione più adatta."
        primaryLabel="Contattaci"
        primaryHref="/contatti"
        secondaryLabel="Scrivici via email"
        secondaryHref="/contatti#form"
      />
    </>
  );
}
