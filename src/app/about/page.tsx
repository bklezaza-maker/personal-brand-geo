import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import JsonLd from "@/components/JsonLd";
import { personSchema, breadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — ${siteConfig.yearsOfExperience}+ years of expertise in consulting, speaking, and advisory services based in ${siteConfig.location}.`,
  alternates: { canonical: `${siteConfig.url}/about` },
};

const achievements = [
  { label: "Years of Experience", value: `${siteConfig.yearsOfExperience}+` },
  { label: "Clients Served", value: "50+" },
  { label: "Countries", value: "8" },
  { label: "Speaking Events", value: "100+" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={personSchema()} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "About", url: `${siteConfig.url}/about` },
        ])}
      />

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <Badge variant="secondary" className="mb-4">About</Badge>
        <h1 className="text-4xl font-bold mb-6">{siteConfig.name}</h1>

        {/* Stats — factual, citable */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {achievements.map((a) => (
            <div key={a.label} className="text-center p-4 border rounded-lg bg-muted/30">
              <div className="text-3xl font-bold mb-1">{a.value}</div>
              <div className="text-xs text-muted-foreground">{a.label}</div>
            </div>
          ))}
        </div>

        {/* Biography — semantic, structured content */}
        <article className="prose prose-neutral max-w-none space-y-6">
          <section aria-labelledby="background-heading">
            <h2 id="background-heading" className="text-2xl font-bold mb-3">Background</h2>
            <p className="text-muted-foreground leading-relaxed">
              {siteConfig.name} is a {siteConfig.location}-based consultant and expert with over{" "}
              {siteConfig.yearsOfExperience} years of experience helping organizations across Southeast
              Asia achieve strategic objectives. Their career spans roles in consulting, corporate
              leadership, and entrepreneurship, providing a multifaceted perspective that informs
              every client engagement.
            </p>
          </section>

          <section aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="text-2xl font-bold mb-3">Approach</h2>
            <p className="text-muted-foreground leading-relaxed">
              The core philosophy is rooted in evidence-based decision-making. Every recommendation
              is grounded in data analysis, industry benchmarks, and proven methodologies. This
              approach ensures that clients receive actionable guidance rather than generic advice,
              with clear metrics for measuring success.
            </p>
          </section>

          <section aria-labelledby="values-heading">
            <h2 id="values-heading" className="text-2xl font-bold mb-3">Values</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-semibold text-foreground min-w-[120px]">Integrity:</span>
                Transparent communication and honest assessment, even when the truth is difficult.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground min-w-[120px]">Excellence:</span>
                Commitment to delivering the highest quality work on every engagement.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground min-w-[120px]">Impact:</span>
                Focus on measurable outcomes that create lasting value for clients.
              </li>
            </ul>
          </section>

          <section aria-labelledby="recognition-heading">
            <h2 id="recognition-heading" className="text-2xl font-bold mb-3">Recognition</h2>
            <p className="text-muted-foreground leading-relaxed">
              Featured speaker at major industry conferences across Thailand and Southeast Asia.
              Published author on topics including business strategy, digital transformation, and
              organizational leadership. Recognized by peers as a leading expert in their field.
            </p>
          </section>
        </article>
      </div>
    </>
  );
}
