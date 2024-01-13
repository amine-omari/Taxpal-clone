import CommaIcon from "@/icons/CommaIcon";
import Image from "next/image";
import React from "react";

const TestimonialsCard = ({ cardText, name, position, src }) => {
  return (
    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
      <div className="absolute left-6 top-6 fill-slate-100">
        <CommaIcon />
      </div>
      <blockquote>
        <p className="text-lg leading-8">{cardText}</p>
      </blockquote>
      <figcaption className="mt-6 flex justify-between border-t border-slate-100 pt-6">
        <div className="flex flex-col justify-between">
          <h3 className="mt-1 font-semibold">{name}</h3>
          <p className="text-sm tracking-wide text-slate-500">{position}</p>
        </div>
        <div>
          <Image
            src={src}
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
