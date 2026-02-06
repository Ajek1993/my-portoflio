"use client";

import React from "react";
import Heading from "../Heading/Heading";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { projects } from "./projectData";
import { Card, CardHeader, CardBody, Chip, Button, Link as HeroUILink } from "@heroui/react";
import { ArrowUpRight } from "@/components/Icons";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section-alt py-12 md:py-20">
      <div className="xl:container mx-auto">
      <Heading title={t("projects.title")} />
      <ul className="mb-10 md:mb-16 grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(320px,380px))] gap-6 sm:gap-8 px-4 sm:px-8">
        {projects.map((project) => (
          <li
            key={project.link}
            data-aos="fade-up"
            className="w-full"
          >
            <Card
              className="hover-card border border-border rounded-2xl overflow-hidden bg-bg-card"
              isPressable
              as={Link}
              href={project.link}
              target="_blank"
            >
              <CardBody className="p-0 overflow-visible relative group">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <Image
                    src={project.src}
                    width={450}
                    height={253}
                    alt={project.alt}
                    className="aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      color="primary"
                      variant="solid"
                      size="lg"
                      className="font-semibold"
                      endContent={<ArrowUpRight className="w-5 h-5" />}
                    >
                      {t("projects.viewProject")}
                    </Button>
                  </div>
                </div>
              </CardBody>
              <CardHeader className="flex flex-col gap-3 px-6 py-5">
                <h3 className="text-xl font-bold text-text-main">
                  {project.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      size="sm"
                      variant="flat"
                      className="text-xs bg-primary/20 text-primary-light"
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              </CardHeader>
            </Card>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
