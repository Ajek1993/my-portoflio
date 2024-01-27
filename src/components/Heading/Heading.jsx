import React from "react";
import "./Heading.css";

export default function Heading({ title }) {
  return (
    <h2 className="section__header text-5xl font-bold text-center mb-14 relative after:bg-primary">
      {title}
    </h2>
  );
}
