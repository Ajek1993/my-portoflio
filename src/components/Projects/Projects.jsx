import React from "react";
import Heading from "../Heading/Heading";
import Image from "next/image";
import Link from "next/link";
import { projects } from "./projectData";

export default async function Projects() {
  return (
    <section id="projects">
      <Heading title="Projects" />
      <ul className="mb-20 md:mb-32 grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(350px,350px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(550px,550px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(600px,600px))] lg:grid-cols-[repeat(auto-fit,minmax(450px,450px))] text-center text-white text-xl lg:text-2xl font-bold bg-primary-300 py-20 px-8 lg:px-4 rounded-3xl sm:mx-4 xl:mx-20">
        {projects.map((project, id) => (
          <div
            key={project.link}
            data-aos={id % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <p className="mb-4">{project.name}</p>
            <Link href={project.link}>
              <Image
                src={project.src}
                width={1000}
                height={1000}
                alt={project.alt}
                className="rounded-lg"
              />
            </Link>
          </div>
        ))}
      </ul>
    </section>
  );
}
