import CircleCheckIcon from "@/icons/CircleCheckIcon";
import Link from "next/link";
import React from "react";

const PlansCard = () => {
  const services = [
    {
      id: 1,
      text: "Send 25 quotes and invoices",
    },
    {
      id: 2,
      text: "Connect up to 5 bank accounts",
    },
    {
      id: 3,
      text: "Track up to 50 expenses per month",
    },
    {
      id: 4,
      text: "Automated payroll support",
    },
    {
      id: 5,
      text: "Export up to 12 reports",
    },
    {
      id: 6,
      text: "Bulk reconcile transactions",
    },
    {
      id: 7,
      text: "Track in multiple currencies",
    },
  ];

  return (
    <div className="relative px-2 py-8 text-white">
      <div className="absolute -left-4 -right-4 top-0 h-full rounded-3xl bg-blue-600"></div>
      <div className="relative">
        <p className="text-5xl">$15</p>
        <h3 className="mt-7 text-lg font-semibold tracking-wide">Small business</h3>
        <p className="mt-3 tracking-wide">Perfect for small / medium sized businesses.</p>
        <Link
          href="/"
          className="mt-9 flex justify-center rounded-full bg-white px-4 py-2 font-semibold text-black hover:bg-blue-50"
        >
          Get started
        </Link>
        <div className="text-sm mt-10 space-y-3.5">
          {services.map(({ id, text }) => (
            <div key={id} className="flex space-x-4">
              <span>
                <CircleCheckIcon />
              </span>
              <p className="tracking-wide">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlansCard;
