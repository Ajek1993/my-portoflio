import React from "react";
import Link from "next/link";
import Heading from "../Heading/Heading";
import { contactIcons } from "../Icons";

export default function Contact() {
  return (
    <section id="contact">
      <Heading title="Contact" />
      <ul className="text-center mb-5 flex justify-center gap-4">
        {contactIcons.map((contactIcon) => (
          <Link
            color="foreground"
            className="flex justify-center items-center w-14 h-14 rounded-sm"
            key={contactIcon.link}
            href={contactIcon.link}
            target="_blank"
          >
            {contactIcon.IconBig}
          </Link>
        ))}
      </ul>
    </section>
  );
}
