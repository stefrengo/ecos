import type { Metadata } from "next";
import Container from "@/components/Container";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Area riservata",
  robots: { index: false, follow: false },
};

// [SEGNAPOSTO] Area riservata: funzionamento e accessi da definire con ECOS.
export default function AreaRiservataPage({ params }: { params: { locale: Locale } }) {
  const en = params.locale === "en";
  return (
    <Container className="py-24">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">
        {en ? "Members' area" : "Area riservata"}
      </h1>
      <p className="mt-4 max-w-xl rounded-xl2 border border-dashed border-line p-5 text-sm text-ink-soft">
        {en
          ? "[PLACEHOLDER] The members' area is under construction."
          : "[SEGNAPOSTO] L'area riservata è in costruzione."}
      </p>
    </Container>
  );
}
