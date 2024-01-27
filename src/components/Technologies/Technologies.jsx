import React from "react";
import Heading from "../Heading/Heading";
import {
  HtmlIcon,
  CSSIcon,
  SassIcon,
  JavascriptIcon,
  ReactIcon,
  NextIcon,
  NodeIcon,
  ExpressIcon,
  GitIcon,
  GitHubIcon,
} from "../Icons";
import "./Technologies.css";

export default function Technologies() {
  return (
    <section className="px-10">
      <Heading title="Technologies" />
      <ul className="technologies flex flex-wrap justify-center items-center gap-8">
        <li>
          <HtmlIcon />
        </li>
        <li>
          <CSSIcon />
        </li>
        <li>
          <SassIcon />
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
        </li>
      </ul>
    </section>
  );
}
