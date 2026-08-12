import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Sistema news basato su file Markdown in /content/news — nessun CMS esterno.
// Per aggiungere una news: creare un nuovo file .md in /content/news con lo
// stesso frontmatter degli esempi, poi fare commit + push (il deploy su
// Vercel si aggiorna da solo). Vedi la skill, sezione "Aggiungere una news".

const NEWS_DIR = path.join(process.cwd(), "content", "news");

export type NewsMeta = {
  slug: string;
  title: string;
  date: string; // formato ISO: AAAA-MM-GG
  excerpt: string;
  category: string;
  cover?: string;
};

export type NewsPost = NewsMeta & {
  html: string;
};

function readSlugs(): string[] {
  if (!fs.existsSync(NEWS_DIR)) return [];
  return fs
    .readdirSync(NEWS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllNews(): NewsMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(NEWS_DIR, `${slug}.md`), "utf-8");
      const { data } = matter(raw);
      return { slug, ...(data as Omit<NewsMeta, "slug">) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsPost | null {
  const filePath = path.join(NEWS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  return { slug, html, ...(data as Omit<NewsMeta, "slug">) };
}
