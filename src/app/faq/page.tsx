import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import JsonLd from "@/components/JsonLd";
import { faqSchema, breadcrumbSchema } from "@/lib/schemas";
import { faqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Frequently asked questions about ${siteConfig.name}'s consulting services, availability, and approach.`,
  alternates: { canonical: `${siteConfig.url}/faq` },
};

export default function FaqPage() {
  return (
    <>
      {/* FAQPage schema — primary signal for AI answer engines */}
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={faqSchema(faqs, "th")} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "FAQ", url: `${siteConfig.url}/faq` },
        ])}
      />

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">FAQ</Badge>
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground">
            Direct answers to common questions about services, experience, and working together.
          </p>
        </div>

        {/* FAQ list — semantic dl for best AI parsing */}
        <dl className="space-y-0">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={`py-8 ${i < faqs.length - 1 ? "border-b" : ""}`}
            >
              <dt className="font-semibold text-lg mb-3">
                {faq.question}
              </dt>
              <dd className="text-muted-foreground leading-relaxed mb-3">
                {faq.answer}
              </dd>
              {/* Bilingual version */}
              <dt className="font-medium text-sm text-muted-foreground/70 mt-4 mb-2">
                {faq.questionTh}
              </dt>
              <dd className="text-sm text-muted-foreground/70 leading-relaxed">
                {faq.answerTh}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 p-6 border rounded-xl bg-muted/30 text-center">
          <h2 className="font-semibold mb-2">Have another question?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            If your question isn&apos;t answered here, feel free to reach out directly.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-6 py-2 text-sm font-medium hover:bg-foreground/80 transition-colors"
          >
            Ask a Question
          </a>
        </div>
      </div>
    </>
  );
}
