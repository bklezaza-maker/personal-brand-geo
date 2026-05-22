import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site";
import { expertise } from "@/data/expertise";

export const metadata: Metadata = {
  title: "Expertise",
  description: `Core areas of expertise: strategic consulting, digital transformation, and leadership development. ${siteConfig.yearsOfExperience}+ years of professional practice.`,
  alternates: { canonical: `${siteConfig.url}/expertise` },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Services by ${siteConfig.name}`,
  itemListElement: expertise.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: item.title,
      description: item.description,
      provider: {
        "@type": "Person",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  })),
};

export default function ExpertisePage() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Expertise", url: `${siteConfig.url}/expertise` },
        ])}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4">Expertise</Badge>
          <h1 className="text-4xl font-bold mb-4">Areas of Expertise</h1>
          <p className="text-muted-foreground text-lg">
            Specialized knowledge and hands-on experience developed across{" "}
            {siteConfig.yearsOfExperience}+ years of professional practice in Southeast Asia
            and globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {expertise.map((item) => (
            <Card key={item.title} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <p className="text-xs text-muted-foreground">{item.titleTh}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-3 text-muted-foreground">
                    Key Skills
                  </h3>
                  <ul className="space-y-2">
                    {item.skills.map((skill) => (
                      <li key={skill} className="text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Working together section */}
        <div className="max-w-2xl mx-auto bg-muted/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">How We Work Together</h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Every engagement begins with a discovery session to understand your specific context,
            challenges, and goals. From there, a tailored approach is designed to deliver
            measurable outcomes within your timeframe and budget.
          </p>
          <ol className="text-left space-y-3 max-w-md mx-auto">
            {[
              "Discovery call — understand your situation",
              "Proposal — scoped approach and timeline",
              "Execution — structured delivery with checkpoints",
              "Review — measure results and next steps",
            ].map((step, i) => (
              <li key={step} className="flex gap-3 text-sm">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
