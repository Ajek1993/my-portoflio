import Link from "next/link";
import { mailtoHref, nav, site } from "@/content/pl";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-accent-ink"
      >
        {nav.skipLink}
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          aria-label={nav.homeLabel}
          className="group flex items-center gap-2.5"
        >
          <span
            className="flex size-8 items-center justify-center rounded-lg bg-accent font-mono text-sm font-bold text-accent-ink"
            aria-hidden="true"
          >
            AS
          </span>
          <span className="font-semibold tracking-tight whitespace-nowrap">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Główna" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <Button href={mailtoHref} size="sm" icon="mail" iconPosition="start">
              {nav.cta}
            </Button>
          </div>
          <MobileMenu
            links={nav.links}
            cta={nav.cta}
            ctaHref={mailtoHref}
            openLabel={nav.openMenu}
            closeLabel={nav.closeMenu}
          />
        </div>
      </div>
    </header>
  );
}
