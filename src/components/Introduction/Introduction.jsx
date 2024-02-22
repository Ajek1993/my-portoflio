import React from "react";

export default function Introduction() {
  return (
    <section className="h-screen mx-auto flex flex-col justify-center sm:items-start items-center text-center sm:text-start px-4 md:px-6 lg:px-24 xl:px-36">
      <p
        data-aos="fade-in"
        data-aos-duration="1000"
        className="font-bold text-sm md:text-base"
      >
        Hi, my name is
      </p>
      <div className="my-3 text-xl sm:text-2xl md:text-4xl lg:text-7xl flex flex-col gap-y-2 md:gap-y-4">
        <h1>
          <span
            data-aos="fade-in"
            data-aos-duration="2000"
            className="text-primary font-extrabold tracking-wide "
          >
            Arkadiusz Sarach.
          </span>
        </h1>
        <h2
          data-aos="fade-in"
          data-aos-duration="3000"
          className="text-primary-200"
        >
          Junior Frontend Develeper.
        </h2>
      </div>

      <p
        data-aos="fade-up"
        className="sm:w-2/3 md:w:1/2 text-xs md:text-base text-foreground-500 leading-6"
      >
        Right now I am looking for my first job. I like learning and trying new
        things. In this moment I'm focused on React skills. Simultaneously I'm
        getting know Node.js. In the near future my goal is to understand
        Typescript and JEST.
      </p>
    </section>
  );
}
