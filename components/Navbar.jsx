import LogoIcon from "@/icons/LogoIcon";
import MenuIcon from "@/icons/MenuIcon";
import Xmark from "@/icons/Xmark";
import Link from "next/link";
import React, { useState } from "react";
import MenuContainer from "./MenuContainer";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    {
      id: 1,
      text: "Features",
      sectionId: "FeaturesSection",
    },
    {
      id: 2,
      text: " Testimonials",
      sectionId: "TestimonialsSection",
    },
    {
      id: 3,
      text: "Pricing",
      sectionId: "PlansSection",
    },
  ];

  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <div className="flex items-center md:space-x-12">
        <LogoIcon />
        <div className="hidden space-x-8 text-sm md:flex">
          {links.map(({ id, sectionId, text }) => (
            <ScrollLink
              key={id}
              to={sectionId}
              spy={true}
              exact="true"
              activeClass="active"
              smooth
              className="cursor-pointer rounded-lg px-2 py-1 duration-300 hover:bg-slate-100 hover:text-slate-900"
            >
              {text}
            </ScrollLink>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-6 md:space-x-9">
        <div className="hidden text-sm md:flex">
          <Link
            href="https://salient.tailwindui.com/login"
            className="rounded-lg px-2 py-1 duration-300 hover:bg-slate-100 hover:text-slate-900"
          >
            Sign in
          </Link>
        </div>
        <Link
          className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold tracking-wide text-white hover:bg-blue-500"
          href="https://salient.tailwindui.com/register"
        >
          Get started <span className="hidden lg:inline-block">today</span>
        </Link>
        <div className="md:hidden">
          <button
            className="relative z-50 flex items-center"
            onClick={toggleMenu}
          >
            {menuOpen ? <Xmark /> : <MenuIcon />}
          </button>
          {menuOpen && <MenuContainer />}
          {menuOpen && (
            <div
              className="fixed right-0 top-0 h-full w-full bg-slate-300/50"
              onClick={toggleMenu}
            ></div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
