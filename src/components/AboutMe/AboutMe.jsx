"use client";

import React from "react";
import Heading from "../Heading/Heading";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import "./AboutMe.css";

export default function AboutMe() {
  const { t } = useLanguage();

  return (
    <section className="max-w-4xl mx-auto mb-16 py-12" id="aboutme">
      <Heading title={t("about.title")} />
      <div className="lg:flex md:gap-x-12 lg:gap-x-24 px-4 md:px-6 lg:px-8">
        <p
          className="text-left font-medium first-letter:w-full lg:w-2/3 leading-8 whitespace-pre-line text-text-main"
          data-aos="fade-up"
        >
          {t("about.text")}
        </p>
        <div
          className="flex justify-center items-center my-8"
          data-aos="fade-up"
        >
          <div className="myPicture">
            <Image
              src="/selfie.JPEG"
              width={300}
              height={250}
              alt="Picture of the author"
              className="max-w-[300px] relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
