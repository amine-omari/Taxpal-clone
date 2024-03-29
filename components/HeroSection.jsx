import Play from "@/icons/Play";
import Link from "next/link";
import React from "react";
import TrustedCompanies from "./TrustedCompanies";

const HeroSection = () => {
  const buttonStyle = [
    {
      id: 1,
      text: "Get 6 months free",
      link: "https://salient.tailwindui.com/register",
      icon: false,
      style: "bg-black text-white font-semibold hover:bg-slate-700",
    },
    {
      id: 2,
      text: "Watch video",
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      icon: true,
      style: "border space-x-3 hover:border-slate-300",
    },
  ];
  return (
    <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pt-32">
      <div className="text-center">
        <h1 className="mx-auto max-w-4xl text-5xl font-semibold leading-[55px] sm:text-7xl sm:leading-[77px]">
          Accounting
          <br className="md:hidden" />{" "}
          <span className="text-blue-600">made simple</span> for small
          businesses.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl px-6 text-lg leading-8 text-slate-700 sm:mt-7">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </p>
        <div className="mt-10 flex justify-center space-x-5 lg:pt-0.5">
          {buttonStyle.map(({ id, link, text, icon, style }) => (
            <Link
              key={id}
              className={`${style} flex items-center rounded-full px-4 py-2 text-sm tracking-wide`}
              href={link}
            >
              <span>{icon && <Play />}</span>
              <p>{text}</p>
            </Link>
          ))}
        </div>
      </div>
      <TrustedCompanies />
    </section>
  );
};

export default HeroSection;
