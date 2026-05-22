import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import JsonLd from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site";
import { articles, getArticleBySlug } from "@/data/articles";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${siteConfig.url}/articles/${slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified,
      authors: [siteConfig.name],
      tags: article.tags,
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={i} className="font-semibold mt-4 mb-2">
          {line.replace(/\*\*/g, "")}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc pl-5 space-y-1 my-4">
          {listItems.map((item, j) => (
            <li key={j} className="text-muted-foreground text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\./.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\./.test(lines[i])) {
        listItems.push(lines[i].replace(/^\d+\.\s/, ""));
        i++;
      }
      elements.push(
        <ol key={i} className="list-decimal pl-5 space-y-1 my-4">
          {listItems.map((item, j) => (
            <li key={j} className="text-muted-foreground text-sm leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() !== "") {
      // Handle inline bold **text**
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={i} className="text-muted-foreground leading-relaxed my-3">
          {parts.map((part, j) =>
            j % 2 === 1 ? <strong key={j} className="text-foreground font-semibold">{part}</strong> : part
          )}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.excerpt,
          datePublished: article.datePublished,
          dateModified: article.dateModified,
          url: `${siteConfig.url}/articles/${article.slug}`,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Articles", url: `${siteConfig.url}/articles` },
          { name: article.title, url: `${siteConfig.url}/articles/${article.slug}` },
        ])}
      />

      <article className="container mx-auto px-4 py-16 max-w-2xl">
        {/* Back link */}
        <Link
          href="/articles"
          className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1"
        >
          ← All Articles
        </Link>

        {/* Header */}
        <header className="mt-6 mb-10">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Badge variant="secondary">{article.category}</Badge>
            <span className="text-sm text-muted-foreground">
              {new Date(article.datePublished).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="text-sm text-muted-foreground">· {article.readingTime} min read</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-2">{article.title}</h1>
          <p className="text-muted-foreground text-sm mb-4">{article.titleTh}</p>

          <p className="text-lg text-muted-foreground leading-relaxed">{article.excerpt}</p>

          <Separator className="mt-8" />
        </header>

        {/* Body — English */}
        <section aria-label="Article content (English)">
          {renderMarkdown(article.content)}
        </section>

        <Separator className="my-12" />

        {/* Body — Thai */}
        <section aria-label="Article content (Thai)" lang="th">
          <Badge variant="outline" className="mb-6">ภาษาไทย</Badge>
          {renderMarkdown(article.contentTh)}
        </section>

        <Separator className="my-12" />

        {/* Author box + Tags */}
        <footer>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-lg font-bold">
              {siteConfig.name.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-sm">{siteConfig.name}</p>
              <p className="text-xs text-muted-foreground">{siteConfig.description.slice(0, 60)}…</p>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/articles"
              className="text-sm font-medium underline underline-offset-4 hover:no-underline"
            >
              ← Back to all articles
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}
