import React from "react";
import { Button } from "@nextui-org/react";
import Heading from "../Heading/Heading";
import { icons, PortfolioIcon } from "../Icons";
import Link from "next/link";

export default function Technologies() {
  return (
    <section className="mx-auto mb-28 md:mb-48 max-w-screen-lg px-4">
      <Heading title="Technologies" />
      <ul className="technologies mb-20 md:mb-32 grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
        {icons.map((icon, id) => {
          return (
            <li
              key={icon.name}
              className="rounded-lg flex flex-col flex-nowrap items-center justify-center gap-5 w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6 text-primary text-center font-bold border-2 border-solid border-primary"
              data-aos="fade-left"
              data-aos-delay={`${id * 100}`}
            >
              {icon.Icon}
              <p className="lg:text-lg">{icon.name}</p>
            </li>
          );
        })}
      </ul>
      <div
        className="portfolio flex flex-col justify-center items-center gap-4 pt-50 pb-40"
        data-aos="fade-right"
      >
        <PortfolioIcon />
        <p className="max-w-[350px] lg:max-w-[400px] text-center font-medium text-foreground lg:text-lg">
          Thank you for considering my profile! If you're looking for more
          information about my skills, feel free to check my CV below:
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href={"./Arkadiusz.Sarach_CV.pdf"}>
            <Button radius="full" color="primary" variant="shadow" size="lg">
              Curriculum Vitae PL
            </Button>
          </Link>
          <Link href={"./Arkadiusz.Sarach_CV_ENG.pdf"}>
            <Button
              radius="full"
              color="primary"
              variant="shadow"
              size="lg"
              onCl
            >
              Curriculum Vitae ENG
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
