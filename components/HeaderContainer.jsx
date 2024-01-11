import LogoIcon from "@/icons/LogoIcon";
import MenuIcon from "@/icons/MenuIcon";
import Xmark from "@/icons/Xmark";
import Link from "next/link";
import React, { useState } from "react";
import MenuContainer from "./MenuContainer";

const HeaderContainer = ({ menuOpen, setMenuOpen }) => {
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header className="py-10">
      <nav className="flex items-center justify-between px-4">
        <div>
          <LogoIcon />
        </div>
        <div className="flex items-center space-x-6">
          <Link
            className="rounded-full bg-blue-600 px-4 py-2.5 text-sm font-semibold tracking-wide text-white"
            href="/"
          >
            Get started
          </Link>
          <button onClick={toggleMenu}>
            {menuOpen ? <Xmark /> : <MenuIcon />}
          </button>
          {menuOpen && <MenuContainer />}
        </div>
      </nav>
    </header>
  );
};

export default HeaderContainer;
