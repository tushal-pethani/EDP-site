import React from "react";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available on iOS and Android
          </p>
          <Link
            href={
              "https://drive.google.com/file/d/1cxtUzc9AAijZncyKwBgJems98tHoA3Q4/view"
            }
            className="flex flex-col gap-3 whitespace-nowrap xl:flex-row"
            target="_blank"
          >
            <Button
              type="button"
              title="Get brochure"
              variant="btn_white"
              full
            />
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phone-2.png" alt="phones" width={500} height={791} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
