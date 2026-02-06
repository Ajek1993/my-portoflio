"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 md:py-12 text-center text-sm md:text-base section-alt border-t border-border">
      <div className="xl:container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-4">
          <Link
            href="/cookies"
            className="text-primary hover-link hover:underline mx-3"
          >
            {t("footer.cookies")}
          </Link>
          <span className="text-text-secondary">|</span>
          <Link
            href="/privacy"
            className="text-primary hover-link hover:underline mx-3"
          >
            {t("footer.privacy")}
          </Link>
        </div>
        <div className="text-text-secondary">
          <span className="text-primary">&copy;</span> 2026 {t("footer.createdBy")}
        </div>
      </div>
    </footer>
  );
}
