import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Sistema news basato su file Markdown in /content/news — nessun CMS esterno.
// Per aggiungere una news: creare un nuovo file .md in /content/news con lo
// stesso frontmatter degli esempi, poi fare commit + push (il deploy su
// Vercel si aggiorna da solo). Vedi la skill, sezione "Aggiungere una news".

const NEWS_DIR = path.join(process.cwd(), "content", "news");
const WORDS_PER_MINUTE = 200;

export type NewsMeta = {
  slug: string;
  title: string;
  date: string; // formato ISO: AAAA-MM-GG
  excerpt: string;
  category: string; // slug fisso, vedi data/newsCategories.ts
  tags: string[];
  author: string;
  cover?: string;
  readingTime: number; // minuti, arrotondati per eccesso
};

export type NewsPost = NewsMeta & {
  html: string;
};

function slugifyTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // rimuove accenti (segni diacritici)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function readingTimeFor(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function readSlugs(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function parseMeta(slug: string): NewsMeta {
  const raw = fs.readFileSync(path.join(NEWS_DIR, `${slug}.md`), "utf-8");
  const { data, content } = matter(raw);
  const d = data as Partial<NewsMeta>;
  return {
    slug,
    title: d.title ?? slug,
    date: d.date ?? "1970-01-01",
    excerpt: d.excerpt ?? "",
    category: d.category ?? "generale",
    tags: Array.isArray(d.tags) ? d.tags : [],
    author: d.author ?? "Redazione ECOS",
    cover: d.cover,
    readingTime: readingTimeFor(content),
  };
}

export function getAllNews(): NewsMeta[] {
  return readSlugs()
    .map(parseMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const filePath = path.join(NEWS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  return { ...parseMeta(slug), html };
}

export function getNewsByCategory(category: string): NewsMeta[] {
  return getAllNews().filter((post) => post.category === category);
}

export function getNewsByTag(tagSlug: string): NewsMeta[] {
  return getAllNews().filter((post) =>
    post.tags.some((tag) => slugifyTag(tag) === tagSlug)
  );
}

export function getRelatedNews(post: NewsMeta, limit = 3): NewsMeta[] {
  return getAllNews()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}

export type TagCount = { tag: string; slug: string; count: number };

export function getAllTags(): TagCount[] {
  const counts = new Map<string, TagCount>();
  for (const post of getAllNews()) {
    for (const tag of post.tags) {
      const slug = slugifyTag(tag);
      const existing = counts.get(slug);
      if (existing) {
        existing.count += 1;
      } else {
        counts.set(slug, { tag, slug, count: 1 });
      }
    }
  }
  return Array.from(counts.values()).sort((a, b) => b.count - a.count);
}

export function getTagLabel(tagSlug: string): string {
  return getAllTags().find((t) => t.slug === tagSlug)?.tag ?? tagSlug;
}

export { slugifyTag };
