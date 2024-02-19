import React from "react";
import Heading from "../Heading/Heading";
import { icons } from "../Icons";
import "./Technologies.css";

export default function Technologies() {
  return (
    <section className="mx-auto mb-28 md:mb-48 max-w-screen-lg">
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
              <p>{icon.name}</p>
            </li>
          );
        })}
        {/* <li>
          <HtmlIcon />
        </li>
        <li>
          <CSSIcon />
        </li>
        <li>
          <SassIcon />
        </li>
        <li>
          <TailwindCSSIcon />
        </li>
        <li>
          <JavascriptIcon />
        </li>
        <li>
          <ReactIcon />
        </li>
        <li>
          <NextIcon />
        </li>
        <li>
          <NodeIcon />
        </li>
        <li>
          <ExpressIcon />
        </li>
        <li>
          <GitIcon />
        </li>
        <li>
          <GitHubIcon />
        </li> */}
      </ul>
    </section>
  );
}
