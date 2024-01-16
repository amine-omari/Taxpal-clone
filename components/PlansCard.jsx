import Link from "next/link";
import React from "react";

const PlansCard = ({
  amount,
  businessType,
  text,
  bgBlue = false,
  order,
  children,
}) => {
  return (
    <div
      className={`relative px-2 text-white sm:px-8 ${
        bgBlue ? "py-8" : "lg:py-8"
      } ${order}`}
    >
      {bgBlue && (
        <div className="absolute -left-4 -right-4 top-0 h-full rounded-3xl bg-blue-600 sm:inset-x-0"></div>
      )}
      <div className="relative">
        <p className="text-5xl">{amount}</p>
        <h3 className="mt-7 text-lg font-semibold tracking-wide">
          {businessType}
        </h3>
        <p className={`${!bgBlue && "text-slate-400"} mt-3 tracking-wide`}>
          {text}
        </p>
        <Link
          href="https://salient.tailwindui.com/register"
          className={`mt-9 flex justify-center rounded-full px-4 py-2 font-semibold ${
            bgBlue
              ? "bg-white text-black hover:bg-blue-50"
              : "border border-slate-700 hover:border-slate-500"
          }`}
        >
          Get started
        </Link>
        <div
          className={`${!bgBlue && "text-slate-200"} mt-10 space-y-3.5 text-sm`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
