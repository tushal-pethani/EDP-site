import Image from "next/image";
import React from "react";
import Button from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt=""
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Exercise Aid</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Your ultimate physiotherapy companion, designed to guide you through
          personalized recovery exercises and track your progress effortlessly.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  alt=""
                  key={index}
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            126
            <span className="regular-16 lg:regular-20 ml-1 ">
              Excellent reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link
            href={
              "https://drive.google.com/file/d/1cxtUzc9AAijZncyKwBgJems98tHoA3Q4/view"
            }
            className="flex flex-col gap-3 whitespace-nowrap xl:flex-row"
            target="_blank"
          >
            <Button type="button" title="Get Brochure" variant="btn_green" />
          </Link>

          <Link
            href={
              "https://drive.google.com/file/d/1kGsr7h6v3QOMslzzaiFpj3hznf4JgsU4/view"
            }
            className="flex flex-col gap-3 whitespace-nowrap xl:flex-row"
            target="_blank"
          >
            <Button type="button" title="Get report" variant="btn_white_text" />
          </Link>
        </div>
      </div>

      <div className="relative flex flex-1 items-start ">
        <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Exercise Type</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Rehabilitation Therapy</p>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Duration</p>
              <p className="bold-20 text-white">30 mins</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Intensity</p>
              <p className="bold-20 text-white">Moderate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
