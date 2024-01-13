import Link from "next/link";
import React from "react";

const PlansCard = ({
  amount,
  businessType,
  text,
  bgBlue = false,
  textSlate200 = false,
  textSlate400 = false,
  children,
}) => {
  return (
    <div className="relative px-2 py-8 text-white">
      {bgBlue && (
        <div className="absolute -left-4 -right-4 top-0 h-full rounded-3xl bg-blue-600"></div>
      )}
      <div className="relative">
        <p className="text-5xl">{amount}</p>
        <h3 className="mt-7 text-lg font-semibold tracking-wide">
          {businessType}
        </h3>
        <p className={`${textSlate400 && "text-slate-400"} mt-3 tracking-wide`}>
          {text}
        </p>
        <Link
          href="/"
          className="mt-9 flex justify-center rounded-full bg-white px-4 py-2 font-semibold text-black hover:bg-blue-50"
        >
          Get started
        </Link>
        <div
          className={`${
            textSlate200 && "text-slate-200"
          } mt-10 space-y-3.5 text-sm`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
