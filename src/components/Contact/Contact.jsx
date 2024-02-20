import React from "react";
import Link from "next/link";
import Heading from "../Heading/Heading";
import { contactIcons } from "../Icons";

export default function Contact() {
  return (
    <section id="contact">
      <Heading title="Contact" />
      <ul
        className="text-center mb-5 flex justify-center gap-4"
        data-aos="zoom-in"
      >
        {contactIcons.map((contactIcon) => (
          <Link
            color="foreground"
            className="flex justify-center items-center w-14 h-14 border rounded-sm hover:scale-125 duration-400"
            key={contactIcon.link}
            href={contactIcon.link}
            target="_blank"
          >
            {contactIcon.IconBig}
          </Link>
        ))}
      </ul>
      <p className="px-2 mx-auto sm:w-2/3 md:w:1/2 text-xs md:text-base text-foreground-500 leading-6 text-center">
        If you are interested in discussing potential opportunities,
        collaborating on exciting projects, or just want to say hello, I would
        love to hear from you!
      </p>
    </section>
  );
}
