import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/data/site";
import { expertise } from "@/data/expertise";
import { faqs } from "@/data/faqs";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schemas";

export default function Home() {
  const topFaqs = faqs.slice(0, 3);

  return (
    <>
      <JsonLd data={faqSchema(topFaqs)} />

      {/* Hero — direct answer format for AEO */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge variant="secondary" className="mb-4">
          {siteConfig.location} · {siteConfig.yearsOfExperience}+ Years Experience
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-3xl mx-auto">
          {siteConfig.name}
        </h1>

        {/* Sub-headline as a direct statement — easily cited by AI */}
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          {siteConfig.description}
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {siteConfig.keywords.slice(0, 5).map((kw) => (
            <Badge key={kw} variant="outline">
              {kw}
            </Badge>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors"
          >
            Book a Consultation
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center rounded-full border px-8 py-3 text-sm font-medium hover:bg-muted transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Expertise — structured list for AI to parse */}
      <section className="bg-muted/30 py-20" aria-labelledby="expertise-heading">
        <div className="container mx-auto px-4">
          <h2 id="expertise-heading" className="text-3xl font-bold text-center mb-4">
            Areas of Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Core competencies developed over {siteConfig.yearsOfExperience}+ years of professional practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertise.map((item) => (
              <Card key={item.title} className="h-full">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <ul className="space-y-1">
                    {item.skills.map((skill) => (
                      <li key={skill} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/expertise" className="text-sm font-medium underline underline-offset-4">
              View full expertise →
            </Link>
          </div>
        </div>
      </section>

      {/* About snippet — E-E-A-T signals for GEO */}
      <section className="container mx-auto px-4 py-20" aria-labelledby="about-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="about-heading" className="text-3xl font-bold mb-6">About</h2>

          {/* Factual, citable statements */}
          <div className="prose prose-neutral max-w-none space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">{siteConfig.name}</strong> is a{" "}
              {siteConfig.location}-based consultant and expert with over{" "}
              {siteConfig.yearsOfExperience} years of professional experience. Specializing in
              strategic consulting, digital transformation, and leadership development, they have
              worked with organizations across Southeast Asia ranging from early-stage startups to
              large enterprises.
            </p>
            <p>
              Their work focuses on helping organizations navigate complex challenges through
              evidence-based approaches, combining data analysis with deep industry knowledge. They
              are available for consulting engagements, keynote speaking, and advisory roles.
            </p>
          </div>

          <Link href="/about" className="inline-block mt-6 text-sm font-medium underline underline-offset-4">
            Full biography →
          </Link>
        </div>
      </section>

      {/* FAQ — FAQPage schema answers common AI queries */}
      <section className="bg-muted/30 py-20" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 id="faq-heading" className="text-3xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {topFaqs.map((faq) => (
              <div key={faq.question} className="border-b pb-6 last:border-0">
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="text-sm font-medium underline underline-offset-4">
              View all questions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Reach out to discuss your project or book an initial consultation.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-10 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors"
        >
          Get in Touch
        </Link>
      </section>
    </>
  );
}
