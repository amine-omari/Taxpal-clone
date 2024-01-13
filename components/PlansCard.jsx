import Link from "next/link";
import React from "react";

const PlansCard = () => {
  return (
    <div className="relative px-2 py-8 text-white">
      <div className="absolute -left-4 -right-4 top-0 h-full rounded-3xl bg-blue-600"></div>
      <div className="relative">
        <p className="text-5xl">$15</p>
        <h3 className="mt-5 text-lg font-semibold">Small business</h3>
        <p className="mt-2">Perfect for small / medium sized businesses</p>
        <Link
          href="/"
          className="mt-8 flex justify-center rounded-full bg-white px-4 py-2 font-semibold text-black hover:bg-blue-50"
        >
          Get started
        </Link>
      </div>
    </div>
  );
};

export default PlansCard;
