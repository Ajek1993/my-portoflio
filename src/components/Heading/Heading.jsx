import React from "react";
import "./Heading.css";

export default function Heading({ title }) {
  return (
    <h2
      className="section__header text-5xl font-bold text-center mt-10 mb-[4.5rem] relative bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent leading-tight"
      data-aos="fade-up"
    >
      {title}
    </h2>
  );
}
