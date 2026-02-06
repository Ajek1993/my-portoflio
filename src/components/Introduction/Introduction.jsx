"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Introduction() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="h-[calc(100vh-65px)] mx-auto flex flex-col justify-center sm:items-start items-center text-center sm:text-start px-4 md:px-6 lg:px-24 xl:px-36"
    >
      <p
        data-aos="fade-in"
        data-aos-duration="1000"
        className="font-bold text-sm md:text-base text-text-secondary"
      >
        {t("intro.greeting")}
      </p>
      <div className="my-3 text-xl sm:text-2xl md:text-4xl lg:text-7xl flex flex-col gap-y-2 md:gap-y-4">
        <h1>
          <span
            data-aos="fade-in"
            data-aos-duration="2000"
            className="text-primary font-extrabold tracking-wide bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent"
          >
            {t("intro.name")}
          </span>
        </h1>
        <h2
          data-aos="fade-in"
          data-aos-duration="3000"
          className="text-primary-light"
        >
          {t("intro.role")}
        </h2>
      </div>

      <p
        data-aos="fade-up"
        className="sm:w-2/3 md:w-1/2 text-xs md:text-base text-text-secondary leading-6"
      >
        {t("intro.description")}
      </p>
    </section>
  );
}
