"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import pl from "@/locales/pl.json";
import en from "@/locales/en.json";

const LanguageContext = createContext();

const translations = {
  pl,
  en,
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedLanguage = localStorage.getItem("language");
      if (savedLanguage && (savedLanguage === "pl" || savedLanguage === "en")) {
        setLanguage(savedLanguage);
      }
    } catch (error) {
      // Fallback na 'en' gdy localStorage jest niedostępny
      console.warn("localStorage is not available:", error);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (lang === "pl" || lang === "en") {
      setLanguage(lang);
      try {
        localStorage.setItem("language", lang);
      } catch (error) {
        console.warn("Could not save language to localStorage:", error);
      }
    }
  };

  const t = (key) => {
    const keys = key.split(".");
    let value = translations[language];

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return key; // Zwróć klucz jako fallback
      }
    }

    return value;
  };

  // Zapobieganie hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
