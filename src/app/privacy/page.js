"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen px-6 py-12 max-w-4xl mx-auto">
      <div className="w-full">
        <Link
          href="/"
          className="inline-block mb-8 text-primary hover:underline transition-all hover-link"
        >
          {t("privacy.backLink")}
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
          {t("privacy.title")}
        </h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            {t("privacy.intro")}
          </p>

          {t("privacy.sections").map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {section.heading}
              </h2>
              <div className="text-text-secondary leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
