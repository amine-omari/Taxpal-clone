import LogoIcon from "@/icons/LogoIcon";
import MenuIcon from "@/icons/MenuIcon";
import Link from "next/link";
import React from "react";

const HeaderContainer = () => {
  return (
    <header>
      <nav className="flex items-center justify-between px-4">
        <div>
          <LogoIcon />
        </div>
        <div className="flex items-center space-x-5">
          <Link
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
            href="/"
          >
            Get started
          </Link>
          <button>
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderContainer;
