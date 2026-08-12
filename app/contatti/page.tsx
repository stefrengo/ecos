import type { Metadata } from "next";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Scrivi al team ECOS: ti aiuteremo a trovare l'opportunità, il progetto o la collaborazione più adatta.",
};

export default function ContattiPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contatti" }]} />
      <Container className="py-16 sm:py-20">
        <div className="max-w-2xl">
          <h1 className="font-display text-3xl text-ink sm:text-4xl">
            Hai un&rsquo;idea, una domanda o vuoi partecipare?
          </h1>
        </div>
        <div id="form" className="mt-10 scroll-mt-20">
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
