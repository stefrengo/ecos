import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import EmptyState from "@/components/EmptyState";
import NewsCard from "@/components/NewsCard";
import { getAllNews, getAllTags } from "@/lib/news";
import { newsCategories, toneClasses } from "@/data/newsCategories";

export const metadata: Metadata = {
  title: "News",
  description: "Aggiornamenti, eventi e novità dal mondo ECOS.",
};

export default function NewsPage() {
  const news = getAllNews();
  const tags = getAllTags().slice(0, 12);
  const categoriesInUse = newsCategories.filter((cat) =>
    news.some((post) => post.category === cat.slug)
  );

  return (
    <>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "News" }]} />
      <Hero
        compact
        eyebrow="News"
        title="Aggiornamenti dal mondo ECOS."
        subtitle="Progetti, eventi, laboratori e novità dalla nostra rete europea."
      />

      <section className="py-16 sm:py-20">
        <Container>
          {categoriesInUse.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categoriesInUse.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/news/categoria/${cat.slug}`}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-opacity hover:opacity-80 ${toneClasses[cat.tone]}`}
                >
                  {cat.label}
                </Link>
              ))}
            </div>
          )}

          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((t) => (
                <Link
                  key={t.slug}
                  href={`/news/tag/${t.slug}`}
                  className="inline-flex items-center rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink-soft hover:border-navy/30 hover:text-navy-dark"
                >
                  #{t.tag}
                </Link>
              ))}
            </div>
          )}

          <div className="mt-10">
            {news.length === 0 ? (
              <EmptyState
                title="Nessuna news pubblicata"
                text="Le prossime notizie di ECOS compariranno qui."
              />
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {news.map((post) => (
                  <NewsCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
