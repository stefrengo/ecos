import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";
import { CategoryBadge, formatDate } from "./NewsMeta";
import type { NewsMeta } from "@/lib/news";

export default function NewsCard({ post }: { post: NewsMeta }) {
  return (
    <Link
      href={`/news/${post.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl2 border border-line bg-surface transition-shadow hover:shadow-card"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-navy-light to-purple-light">
        {post.cover ? (
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <Icon name="globe" className="h-8 w-8 text-navy-dark/40" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <CategoryBadge categorySlug={post.category} />
          <span className="text-xs text-ink-soft">{formatDate(post.date)}</span>
        </div>
        <h3 className="mt-3 font-display text-xl text-ink group-hover:underline">
          {post.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
          {post.excerpt}
        </p>
        <p className="mt-4 text-xs text-ink-soft">
          {post.author} · {post.readingTime} min di lettura
        </p>
      </div>
    </Link>
  );
}
