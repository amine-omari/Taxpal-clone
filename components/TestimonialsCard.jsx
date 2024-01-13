import Image from "next/image";
import React from "react";

const TestimonialsCard = () => {
  return (
    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
      <blockquote>
        <p className="text-lg leading-8">
          TaxPal is so easy to use I can’t help but wonder if it’s really doing
          the things the government expects me to do.
        </p>
      </blockquote>
      <figcaption className="mt-6 flex justify-between border-t border-slate-100 pt-6">
        <div className="flex flex-col justify-between">
          <h3 className="mt-1 font-semibold">Sheryl Berge</h3>
          <p className="text-sm tracking-wide text-slate-500">
            CEO at Lynch LLC
          </p>
        </div>
        <div>
          <Image
            src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=128&q=75"
            alt="profile img"
            width={56}
            height={56}
            className="rounded-full"
          />
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialsCard;
