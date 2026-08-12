import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Breadcrumb from "@/components/Breadcrumb";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import NewsCard from "@/components/NewsCard";
import { CategoryBadge, TagPill, formatDate } from "@/components/NewsMeta";
import { getAllNews, getNewsBySlug, getRelatedNews } from "@/lib/news";
import { getCategory } from "@/data/newsCategories";

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

export default function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getNewsBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedNews(post);
  const category = getCategory(post.category);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "News", href: "/news" },
          { label: post.title },
        ]}
      />

      <Container className="max-w-3xl py-16 sm:py-20">
        <div className="flex flex-wrap items-center gap-3">
          <CategoryBadge categorySlug={post.category} />
          <span className="text-sm text-ink-soft">{formatDate(post.date)}</span>
          <span className="text-sm text-ink-soft">·</span>
          <span className="text-sm text-ink-soft">
            {post.readingTime} min di lettura
          </span>
        </div>

        <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
          {post.title}
        </h1>

        <p className="mt-4 text-sm text-ink-soft">
          A cura di <span className="font-medium text-ink">{post.author}</span>
        </p>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-xl2 border border-line bg-gradient-to-br from-navy-light to-purple-light">
          {post.cover ? (
            <Image
              src={post.cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Icon name="globe" className="h-10 w-10 text-navy-dark/40" />
            </div>
          )}
        </div>

        <div
          className="prose-body mt-10 text-[15px] leading-relaxed text-ink-soft [&_a]:text-navy-dark [&_a]:underline [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:text-ink [&_strong]:text-ink"
          // Contenuto generato da Markdown locale (content/news/*.md), non da input utente.
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {post.tags.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-2 border-t border-line pt-8">
            {post.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        )}
      </Container>

      {related.length > 0 && (
        <section className="bg-mist-warm py-16 sm:py-20">
          <Container>
            <p className="text-xs font-semibold uppercase tracking-wide text-navy">
              Altre notizie in {category.label}
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <NewsCard key={p.slug} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        title="Vuoi restare aggiornato su ECOS?"
        text="Scopri tutte le nostre attività, i progetti e le opportunità di collaborazione."
        primaryLabel="Torna alle news"
        primaryHref="/news"
      />
    </>
  );
}
