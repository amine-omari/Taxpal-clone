import LogoIcon from "@/icons/LogoIcon";
import MenuIcon from "@/icons/MenuIcon";
import Xmark from "@/icons/Xmark";
import Link from "next/link";
import React, { useState } from "react";
import MenuContainer from "./MenuContainer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6">
      <div>
        <LogoIcon />
      </div>
      <div className="flex items-center space-x-6">
        <Link
          className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold tracking-wide text-white hover:bg-blue-500"
          href="/"
        >
          Get started
        </Link>
        <div>
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
