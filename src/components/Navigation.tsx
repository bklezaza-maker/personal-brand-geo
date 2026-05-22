"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home", labelTh: "หน้าหลัก" },
  { href: "/about", label: "About", labelTh: "เกี่ยวกับฉัน" },
  { href: "/expertise", label: "Expertise", labelTh: "ความเชี่ยวชาญ" },
  { href: "/articles", label: "Articles", labelTh: "บทความ" },
  { href: "/faq", label: "FAQ", labelTh: "คำถามที่พบบ่อย" },
  { href: "/contact", label: "Contact", labelTh: "ติดต่อ" },
];

export default function Navigation({ lang = "en" }: { lang?: "en" | "th" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold text-lg tracking-tight">
          {siteConfig.nickname ?? siteConfig.name}
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {lang === "th" ? link.labelTh : link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-foreground mb-1" />
            <span className="block w-5 h-0.5 bg-foreground mb-1" />
            <span className="block w-5 h-0.5 bg-foreground" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-background px-4 py-3">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {lang === "th" ? link.labelTh : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
