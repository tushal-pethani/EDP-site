import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="  flexBetween   max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="" height={34} width={125} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flexCenter">
        <Link
          href={
            "https://drive.google.com/file/d/1cxtUzc9AAijZncyKwBgJems98tHoA3Q4/view"
          }
          className="flex flex-col gap-3 whitespace-nowrap xl:flex-row"
          target="_blank"
        >
          <Button type="button" title="Get Brochure" variant="btn_dark_green" />
        </Link>
      </div>
      <Image
        src="/menu.svg"
        alt=""
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
