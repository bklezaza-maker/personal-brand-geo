import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: `Insights on strategy, digital transformation, and leadership from ${siteConfig.name}. ${articles.length} articles available in Thai and English.`,
  alternates: { canonical: `${siteConfig.url}/articles` },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${siteConfig.name} — Articles`,
  url: `${siteConfig.url}/articles`,
  author: {
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  blogPost: articles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.title,
    description: a.excerpt,
    datePublished: a.datePublished,
    url: `${siteConfig.url}/articles/${a.slug}`,
  })),
};

export default function ArticlesPage() {
  const sorted = [...articles].sort(
    (a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
  );

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Articles", url: `${siteConfig.url}/articles` },
        ])}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">Articles</Badge>
          <h1 className="text-4xl font-bold mb-4">Insights & Articles</h1>
          <p className="text-muted-foreground text-lg">
            Practical perspectives on strategy, digital transformation, and leadership — based on
            real client work across Southeast Asia.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {sorted.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="block group">
              <Card className="transition-shadow group-hover:shadow-md">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.datePublished).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      · {article.readingTime} min read
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold group-hover:underline underline-offset-4 leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-xs text-muted-foreground">{article.titleTh}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{article.excerpt}</p>
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
