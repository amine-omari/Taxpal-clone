import Link from "next/link";
import React from "react";

const FirstSection = () => {
  const buttonStyle = [
    {
      id: 1,
      text: "Get 6 months free",
      icon: false,
      style: "",
    },
    {
      id: 2,
      text: "Watch video",
      icon: true,
      style: "",
    },
  ];
  return (
    <section className="px-4 pb-16 pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-semibold leading-[55px]">
          Accounting
          <br />
          <span className="text-blue-600">made simple</span> for small
          businesses.
        </h1>
        <p className="mt-6 px-2 text-lg leading-8 text-slate-700">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </p>
        <div>
          {buttonStyle.map(({ id, text, icon, style }) => (
            <Link key={id} className={`${style}`} href="/">
              {icon}
              {text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
