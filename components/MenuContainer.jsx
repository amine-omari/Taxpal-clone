import Link from "next/link";
import React from "react";

const MenuContainer = () => {
  return (
    <div className="absolute left-4 right-4 top-24 z-50 flex flex-col rounded-2xl border border-slate-300/40 bg-white p-6 text-left text-lg shadow-lg">
      <div className="flex flex-col space-y-5 ">
        <Link href="/">Features</Link>
        <Link href="/">Testimonials</Link>
        <Link href="/">Pricing</Link>
      </div>
      <hr className="mt-5 border-slate-300/40" />
      <Link className="mt-4" href="/">
        Sign in
      </Link>
    </div>
  );
};

export default MenuContainer;
