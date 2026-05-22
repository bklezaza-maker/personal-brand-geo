import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-2">{siteConfig.name}</h3>
            <p className="text-sm text-muted-foreground max-w-xs">{siteConfig.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Links</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">About</Link></li>
              <li><Link href="/expertise" className="hover:text-foreground">Expertise</Link></li>
              <li><Link href="/articles" className="hover:text-foreground">Articles</Link></li>
              <li><Link href="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.linkedin && (
                <li>
                  <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    LinkedIn
                  </a>
                </li>
              )}
              {siteConfig.twitter && (
                <li>
                  <a href={`https://twitter.com/${siteConfig.twitter.replace("@", "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                    Twitter / X
                  </a>
                </li>
              )}
              <li>{siteConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p>Built for AI discoverability — GEO &amp; AEO optimized</p>
        </div>
      </div>
    </footer>
  );
}
