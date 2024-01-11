import LogoIcon from "@/icons/LogoIcon";
import MenuIcon from "@/icons/MenuIcon";
import Link from "next/link";
import React, { useState } from "react";

const HeaderContainer = () => {
  const [linkItems, setLinkItems] = useState();

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
          <button>
            <MenuIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderContainer;
