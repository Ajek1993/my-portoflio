import React from "react";
import Heading from "../Heading/Heading";
import Image from "next/image";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto mb-40">
      <Heading title="About me" />
      <div className="md:flex md:gap-x-12 lg:gap-x-24 px-4 md:px-6">
        <p
          className="text-center w-full md:w-2/3 leading-8"
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, hic
          minus ea aliquid illum laboriosam consectetur voluptatem harum quis?
          Aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          voluptate similique explicabo itaque aperiam laborum recusandae
          tenetur, libero quod harum? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Perspiciatis, accusantium. Voluptatibus rerum, quos
          esse voluptate possimus architecto libero commodi officia labore
          suscipit quas quod cum ea quam beatae laudantium nostrum! Perspiciatis
          alias unde voluptas cupiditate commodi culpa, facilis illo quam
          tempora ipsa laudantium harum, earum voluptatum ullam perferendis
          tenetur aliquam.
        </p>
        <div
          className="flex justify-center items-center my-8"
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <div className="myPicture">
            <Image
              src="/me.jpg"
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
