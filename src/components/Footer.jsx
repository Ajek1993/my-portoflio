"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 md:py-28 mx-auto text-center text-lg md:text-xl overflow-hidden">
      <div className="mb-4">
        <Link
          href="/cookies"
          className="text-primary hover:underline mx-3 transition-all"
        >
          {t("footer.cookies")}
        </Link>
        <span className="text-gray-500">|</span>
        <Link
          href="/privacy"
          className="text-primary hover:underline mx-3 transition-all"
        >
          {t("footer.privacy")}
        </Link>
      </div>
      <div>
        <span className="text-primary">&copy;</span> 2026 {t("footer.createdBy")}
      </div>
    </footer>
  );
}
