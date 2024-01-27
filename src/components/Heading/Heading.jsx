import React from "react";
import "./Heading.css";

export default function Heading({ title }) {
  return (
    <h2 className="section__header text-5xl font-bold text-center my-14 relative">
      {title}
    </h2>
  );
}
