import Play from "@/icons/Play";
import Link from "next/link";
import React from "react";
import TrustedCompanies from "./TrustedCompanies";

const HeroSection = () => {
  const buttonStyle = [
    {
      id: 1,
      text: "Get 6 months free",
      icon: false,
      style: "bg-black text-white font-semibold hover:bg-slate-700",
    },
    {
      id: 2,
      text: "Watch video",
      icon: true,
      style: "border space-x-3 hover:border-slate-300",
    },
  ];
  return (
    <section className="px-4 pb-16 pt-20 sm:px-6">
      <div className="text-center">
        <h1 className="text-5xl font-semibold leading-[55px] sm:text-7xl sm:leading-[77px]">
          Accounting
          <br />
          <span className="text-blue-600">made simple</span> for small
          businesses.
        </h1>
        <p className="mt-6 px-2 text-lg leading-8 text-slate-700 sm:mt-7">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </p>
        <div className="mt-10 flex justify-center space-x-5 sm:pt-1">
          {buttonStyle.map(({ id, text, icon, style }) => (
            <Link
              key={id}
              className={`${style} flex items-center rounded-full px-4 py-2 text-sm tracking-wide`}
              href="/"
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
