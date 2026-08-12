import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import Icon from "@/components/Icon";
import { publications } from "@/data/publications";

export function generateStaticParams() {
  return publications.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const pub = publications.find((p) => p.slug === params.slug);
  return { title: pub ? pub.title : "Pubblicazione" };
}

export default function PublicationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const pub = publications.find((p) => p.slug === params.slug);
  if (!pub) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Pubblicazioni", href: "/pubblicazioni" },
          { label: pub.title },
        ]}
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr,1.3fr]">
          <div className="flex aspect-[4/3] items-center justify-center rounded-xl2 border border-line bg-gradient-to-br from-purple-light to-navy-light">
            <Icon name="mail" className="h-10 w-10 text-purple opacity-60" />
          </div>
          <div>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-ink-soft">
              <span>{pub.year}</span>
              <span aria-hidden="true">·</span>
              <span>{pub.language}</span>
              {pub.project && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{pub.project}</span>
                </>
              )}
            </div>
            <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
              {pub.title}
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              {pub.summary}
            </p>
            <button
              type="button"
              disabled
              title="Il file reale sarà collegato in una fase successiva"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[15px] font-semibold text-white opacity-60"
            >
              Scarica la pubblicazione
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
            <p className="mt-3 text-xs text-ink-soft">
              [SEGNAPOSTO] Collegare qui il file reale della pubblicazione.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}
