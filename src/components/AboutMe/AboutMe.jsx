import React from "react";
import Heading from "../Heading/Heading";
import Image from "next/image";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto mb-40" id="aboutme">
      <Heading title="About me" />
      <div className="lg:flex md:gap-x-12 lg:gap-x-24 px-4 md:px-6">
        <p
          className="text-left font-medium first-letter:w-full lg:w-2/3 leading-8"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <br></br>
          <br></br>I am Arkadiusz, a miner by education. However, last years I
          was working in logistics and transport. I started as usual driver,
          after 2 years I started working as branch supervisor in a
          gastro-courier company.<br></br>
          <br></br>I have been fascinated by computers since I was a child. As a
          teenager, I had contact with the DOS system. I felt that this could be
          the environment for me, but then life took a different course.
          <br></br>
          <br></br>
          Since I started learning, I have experienced great satisfaction from
          discovering new possibilities offered by the latest libraries and
          frameworks. This is an additional motivation for me to improve in this
          field.
        </p>
        <div
          className="flex justify-center items-center my-8"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="myPicture">
            <Image
              src="/selfie.jpeg"
              width={300}
              height={250}
              alt="Picture of the author"
              className="max-w-[300px] h-auto relative rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
