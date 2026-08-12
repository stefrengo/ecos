import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import EmptyState from "@/components/EmptyState";
import NewsCard from "@/components/NewsCard";
import { getNewsByTag, getAllTags, getTagLabel } from "@/lib/news";

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Metadata {
  const label = getTagLabel(params.tag);
  return {
    title: `News · #${label}`,
    description: `Tutte le news ECOS con il tag ${label}.`,
  };
}

export default function NewsByTagPage({
  params,
}: {
  params: { tag: string };
}) {
  const news = getNewsByTag(params.tag);
  if (news.length === 0) notFound();

  const label = getTagLabel(params.tag);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: `#${label}` },
        ]}
      />
      <Hero
        compact
        eyebrow="News"
        title={`Tag: #${label}`}
        subtitle="Tutte le notizie ECOS con questo tag."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {news.length === 0 ? (
            <EmptyState title="Nessuna news con questo tag" text="Torna presto per nuovi aggiornamenti." />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((post) => (
                <NewsCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
