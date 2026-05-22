import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schemas";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for consulting, speaking engagements, and advisory services. Based in ${siteConfig.location}.`,
  alternates: { canonical: `${siteConfig.url}/contact` },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${siteConfig.name}`,
  url: `${siteConfig.url}/contact`,
  mainEntity: {
    "@type": "Person",
    name: siteConfig.name,
    email: siteConfig.email,
    url: siteConfig.url,
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      contactType: "business inquiries",
      availableLanguage: ["English", "Thai"],
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.url },
          { name: "Contact", url: `${siteConfig.url}/contact` },
        ])}
      />

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Contact</Badge>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-muted-foreground text-lg">
            Available for consulting, speaking, and advisory engagements. Typically responds within
            24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact details — structured for AI citation */}
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold mb-1">Email</h2>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
            {siteConfig.linkedin && (
              <div>
                <h2 className="font-semibold mb-1">LinkedIn</h2>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {siteConfig.linkedin.replace("https://", "")}
                </a>
              </div>
            )}
            <div>
              <h2 className="font-semibold mb-1">Location</h2>
              <p className="text-muted-foreground">{siteConfig.location}</p>
            </div>
            <div>
              <h2 className="font-semibold mb-1">Languages</h2>
              <p className="text-muted-foreground">Thai, English</p>
            </div>
            <div>
              <h2 className="font-semibold mb-1">Response Time</h2>
              <p className="text-muted-foreground">Within 24 business hours</p>
            </div>
          </div>

          {/* What to include */}
          <div className="bg-muted/30 rounded-xl p-6">
            <h2 className="font-semibold mb-4">What to include in your message</h2>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {[
                "Brief description of your project or challenge",
                "Type of engagement (consulting, speaking, advisory)",
                "Approximate timeline and start date",
                "Company name and industry (if applicable)",
                "Your budget range (optional but helpful)",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-10 py-3 text-sm font-medium hover:bg-foreground/80 transition-colors"
          >
            Send an Email
          </a>
        </div>
      </div>
    </>
  );
}
