import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import EmptyState from "@/components/EmptyState";
import NewsCard from "@/components/NewsCard";
import { getNewsByCategory } from "@/lib/news";
import { newsCategories, getCategory } from "@/data/newsCategories";

export function generateStaticParams() {
  return newsCategories.map((cat) => ({ category: cat.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { category: string };
}): Metadata {
  const category = getCategory(params.category);
  return {
    title: `News · ${category.label}`,
    description: `Tutte le news ECOS nella categoria ${category.label}.`,
  };
}

export default function NewsByCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const isKnown = newsCategories.some((c) => c.slug === params.category);
  if (!isKnown) notFound();

  const category = getCategory(params.category);
  const news = getNewsByCategory(params.category);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: category.label },
        ]}
      />
      <Hero
        compact
        eyebrow="News"
        title={`Categoria: ${category.label}`}
        subtitle="Tutte le notizie ECOS in questa categoria."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {news.length === 0 ? (
            <EmptyState
              title="Nessuna news in questa categoria"
              text="Torna presto per nuovi aggiornamenti."
            />
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
