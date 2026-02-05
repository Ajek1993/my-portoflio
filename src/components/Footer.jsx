"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-12 md:py-28 mx-auto text-center text-lg md:text-xl overflow-hidden">
      <span className="text-primary">&copy;</span> 2024 {t("footer.createdBy")}
    </footer>
  );
}
