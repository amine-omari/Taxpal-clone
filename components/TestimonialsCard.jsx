import Image from "next/image";
import React from "react";

const TestimonialsCard = () => {
  return (
    <figure>
      <blockquote>
        <p>
          TaxPal is so easy to use I can’t help but wonder if it’s really doing
          the things the government expects me to do.
        </p>
      </blockquote>
      <figcaption>
        <div>
          <h3>Sheryl Berge</h3>
          <p>CEO at Lynch LLC</p>
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
