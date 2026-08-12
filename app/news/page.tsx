import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Breadcrumb from "@/components/Breadcrumb";
import EmptyState from "@/components/EmptyState";
import { getAllNews } from "@/lib/news";

export const metadata: Metadata = {
  title: "News",
  description: "Aggiornamenti, eventi e novità dal mondo ECOS.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const news = getAllNews();

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
          {news.length === 0 ? (
            <EmptyState
              title="Nessuna news pubblicata"
              text="Le prossime notizie di ECOS compariranno qui."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {news.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="group flex h-full flex-col rounded-xl2 border border-line bg-surface p-6 transition-shadow hover:shadow-card"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy">
                    {post.category} · {formatDate(post.date)}
                  </p>
                  <h2 className="mt-3 font-display text-xl text-ink group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
