"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Projects", href: "#projects", pageHref: "/projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);
  const isHomePage = pathname === "/";
  const homeHref = isHomePage ? "#home" : "/#home";
  const getSectionHref = (href: string, pageHref?: string) => {
    if (pageHref) return pageHref;
    return isHomePage ? href : `/${href}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link href={homeHref} className="font-mono text-base font-semibold tracking-tight text-accent sm:text-xl">
          <span>{"<SepVanced/>"}</span>
        </Link>

        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-4 text-sm text-foreground/80 sm:gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="transition hover:text-accent" href={getSectionHref(link.href, link.pageHref)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-sheet"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/50 text-foreground transition hover:border-[var(--accent)]/70 hover:bg-card"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={closeMobileMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-30 bg-black/45 md:hidden"
            />
            <motion.div
              id="mobile-nav-sheet"
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-3 top-[68px] z-40 rounded-2xl border border-border/70 bg-background/96 p-3 shadow-2xl shadow-black/40 md:hidden"
            >
            <ul className="space-y-1.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className="block rounded-xl px-3 py-3 text-sm font-medium text-foreground/90 transition hover:bg-card hover:text-accent"
                    href={getSectionHref(link.href, link.pageHref)}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
