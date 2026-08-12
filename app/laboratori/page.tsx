import type { Metadata } from "next";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import Breadcrumb from "@/components/Breadcrumb";
import DynamicForm from "@/components/DynamicForm";
import Icon from "@/components/Icon";
import { sportStats, cultureStats } from "@/data/laboratories";
import { laboratoryRegistration, happyClubProfessionals } from "@/data/forms";
import { laboratoryProcess } from "@/data/laboratoryProcess";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Laboratori di emozioni",
  description:
    "Laboratori sportivi e culturali certificati, accompagnati da un'équipe multidisciplinare e rivolti a minori e giovani adulti.",
};

export default function LaboratoriPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Laboratori" }]} />
      <Hero
        compact
        eyebrow="01 · Laboratori di emozioni"
        title="Laboratori certificati, accompagnati da un'équipe multidisciplinare."
        subtitle="Una équipe composta da operatori, educatori, tecnici sportivi e professionisti accompagna ogni ragazzo durante l'attività. I laboratori diventano spazi di relazione, espressione, osservazione e crescita e, al termine, prevedono il rilascio di un attestato. Quando il ragazzo è già seguito da un servizio, il percorso si integra con il lavoro dei professionisti di riferimento."
        primaryAction={{ label: "Iscriviti ai nostri laboratori", href: "#iscrizione" }}
        secondaryAction={{ label: "Scopri Happy Club", href: site.happyClubUrl }}
      />

      {/* Percorso in 6 tappe — modello ECOS, testo dal PDF strategico. */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading title="Il percorso del ragazzo nei laboratori ECOS" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {laboratoryProcess.map((step) => (
              <div
                key={step.number}
                className="rounded-xl2 border border-line bg-surface p-6"
              >
                <p className="text-sm font-semibold text-navy">{step.number}</p>
                <h3 className="mt-2 font-display text-lg text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-soft">
            <strong className="text-ink">Équipe multidisciplinare:</strong>{" "}
            operatori, educatori, tecnici sportivi e professionisti
            accompagnano l&rsquo;intero percorso.{" "}
            <strong className="text-ink">Laboratori certificati:</strong> i
            percorsi sono presentati come esperienze strutturate e
            certificate, con rilascio di attestato.
          </p>
        </Container>
      </section>

      <section className="bg-white py-4">
        <Container>
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl2 border border-line bg-navy-light/50 px-7 py-6 sm:flex-row sm:items-center">
            <p className="text-[15px] leading-relaxed text-ink">
              Happy Club è il progetto ECOS dedicato allo sport e alla cultura come
              strumenti di inclusione: scopri tutte le attività.
            </p>
            <a
              href={site.happyClubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark"
            >
              Scopri Happy Club
              <Icon name="external" className="h-4 w-4" />
            </a>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Sport"
            title="Lo sport come spazio educativo"
            subtitle="Utilizziamo lo sport per favorire partecipazione, benessere, responsabilità e costruzione di relazioni positive."
          />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sportStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl2 border border-line bg-surface p-6"
              >
                <dt className="font-display text-3xl text-navy-dark">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {stat.label}
                  {stat.note && (
                    <span className="mt-1 block text-xs text-ink-soft/80">
                      {stat.note}
                    </span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Cultura"
            title="Cultura, creatività e scoperta"
            subtitle="Attraverso esperienze artistiche, culturali e digitali aiutiamo i giovani a sviluppare capacità espressive, relazionali e personali."
          />
          <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cultureStats.map((stat) => (
              <div
                key={stat.id}
                className="rounded-xl2 border border-line bg-mist p-6"
              >
                <dt className="font-display text-3xl text-navy-dark">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="iscrizione" className="scroll-mt-20 py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Vuoi partecipare a uno dei nostri laboratori?"
            subtitle="Compila il modulo e raccontaci quale attività ti interessa. Il nostro team ti ricontatterà per verificare insieme le opportunità disponibili."
          />
          <div className="mt-8 rounded-xl2 border border-line bg-surface p-6 shadow-card sm:p-8">
            <DynamicForm config={laboratoryRegistration} sourcePage="/laboratori" />
          </div>
        </Container>
      </section>

      <section id="professionisti" className="scroll-mt-20 bg-white py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading
            title="Sei un professionista dello sport, della cultura o dell&rsquo;educazione?"
            subtitle="Entra nell&rsquo;elenco dei professionisti Happy Club e metti le tue competenze a disposizione dei nostri programmi."
          />
          <div className="mt-8 rounded-xl2 border border-line bg-mist p-6 shadow-card sm:p-8">
            <DynamicForm config={happyClubProfessionals} sourcePage="/laboratori" />
          </div>
        </Container>
      </section>
    </>
  );
}
