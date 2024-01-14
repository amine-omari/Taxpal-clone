import Github from "@/icons/Github";
import LogoIcon from "@/icons/LogoIcon";
import Twitter from "@/icons/Twitter";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const links = [
    {
      id: 1,
      text: "Features",
    },
    {
      id: 2,
      text: " Testimonials",
    },
    {
      id: 3,
      text: "Pricing",
    },
  ];
  return (
    <footer>
      <div className="py-16">
        <div className="flex justify-center">
          <LogoIcon />
        </div>
        <div className="mt-10 flex justify-center space-x-6 text-sm text-slate-700">
          {links.map(({ id, text }) => (
            <Link
              key={id}
              href="/"
              className="rounded-lg px-2 py-1 hover:bg-slate-100 hover:text-slate-900"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <div className="flex justify-center space-x-6">
          <Link
            href="https://twitter.com/"
            className="fill-slate-500 duration-300 hover:fill-slate-700"
          >
            <Twitter />
          </Link>
          <Link
            href="https://twitter.com/"
            className="fill-slate-500 duration-300 hover:fill-slate-700"
          >
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
