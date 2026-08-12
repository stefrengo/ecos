import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import { getAllNews, getNewsBySlug } from "@/lib/news";

export function generateStaticParams() {
  return getAllNews().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getNewsBySlug(params.slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getNewsBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: post.title },
        ]}
      />
      <Container className="max-w-2xl py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-wide text-navy">
          {post.category} · {formatDate(post.date)}
        </p>
        <h1 className="mt-3 font-display text-3xl text-ink sm:text-4xl">
          {post.title}
        </h1>
        <div
          className="prose-body mt-8 text-[15px] leading-relaxed text-ink-soft [&_a]:text-navy-dark [&_a]:underline [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink [&_strong]:text-ink"
          // Contenuto generato da Markdown locale (content/news/*.md), non da input utente.
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Container>

      <CTASection
        title="Vuoi restare aggiornato su ECOS?"
        text="Scopri tutte le nostre attività, i progetti e le opportunità di collaborazione."
        primaryLabel="Torna alle news"
        primaryHref="/news"
      />
    </>
  );
}
