import Link from "next/link";
import { getCategory, toneClasses } from "@/data/newsCategories";
import { slugifyTag } from "@/lib/news";
import { cn } from "@/lib/utils";

export function CategoryBadge({
  categorySlug,
  className,
}: {
  categorySlug: string;
  className?: string;
}) {
  const category = getCategory(categorySlug);
  return (
    <Link
      href={`/news/categoria/${category.slug}`}
      className={cn(
        "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide transition-opacity hover:opacity-80",
        toneClasses[category.tone],
        className
      )}
    >
      {category.label}
    </Link>
  );
}

export function TagPill({ tag, className }: { tag: string; className?: string }) {
  return (
    <Link
      href={`/news/tag/${slugifyTag(tag)}`}
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-white px-3.5 py-1.5 text-sm text-ink-soft hover:border-navy/30 hover:text-navy-dark",
        className
      )}
    >
      #{tag}
    </Link>
  );
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
