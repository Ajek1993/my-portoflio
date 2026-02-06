"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-bg-card border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="xl:container mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm md:text-base text-text-main text-center sm:text-left">
            {t("cookies.banner")}{" "}
            <Link href="/cookies" className="text-primary hover:text-primary-light hover:underline">
              {t("cookies.learnMore")}
            </Link>
          </p>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-text-secondary border border-border rounded-lg hover:border-primary hover:text-text-main transition-all duration-300"
            >
              {t("cookies.decline")}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-light transition-all duration-300"
            >
              {t("cookies.accept")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
