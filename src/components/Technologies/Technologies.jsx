"use client";

import React from "react";
import Heading from "../Heading/Heading";
import { frontendIcons, backendIcons, toolIcons } from "../Icons";
import { useLanguage } from "@/context/LanguageContext";

export default function Technologies() {
  const { t } = useLanguage();

  const renderIconGroup = (icons, categoryKey) => (
    <div className="mb-16 md:mb-20" data-aos="fade-up">
      <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">
        {t(categoryKey)}
      </h3>
      <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
        {icons.map((icon) => (
          <li
            key={icon.name}
            className="rounded-lg flex flex-col flex-nowrap items-center justify-center gap-5 w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6 text-primary text-center font-bold border-2 border-solid border-primary"
          >
            {icon.Icon}
            <p className="lg:text-lg">{icon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="mx-auto mb-28 md:mb-48 max-w-screen-lg px-4">
      <Heading title={t("tech.title")} />
      {renderIconGroup(frontendIcons, "tech.frontend")}
      {renderIconGroup(backendIcons, "tech.backend")}
      {renderIconGroup(toolIcons, "tech.tools")}
    </section>
  );
}
