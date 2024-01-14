import Image from "next/image";
import React from "react";

const TrustedCompanies = () => {
  const firstGroupLogo = [
    {
      id: 1,
      src: "https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg",
      alt: "",
      width: 158,
    },
    {
      id: 2,
      src: "https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg",
      alt: "",
      width: 105,
    },
    {
      id: 3,
      src: "https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg",
      alt: "",
      width: 127,
    },
  ];

  const secondGroupLogo = [
    {
      id: 1,
      src: "https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg",
      alt: "",
      width: 138,
    },
    {
      id: 2,
      src: "https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg",
      alt: "",
      width: 136,
    },
    {
      id: 3,
      src: "https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg",
      alt: "",
      width: 147,
    },
  ];

  return (
    <div className="mt-36">
      <div className="text-center font-medium">
        <p>Trusted by these six companies so far</p>
      </div>
      <div className="mt-8 flex justify-center space-x-8 sm:flex-col sm:space-x-0 sm:items-center sm:space-y-10">
        <div className="space-y-8 sm:flex sm:space-y-0 sm:space-x-12">
          {firstGroupLogo.map(({ id, src, alt, width }) => (
            <div className="flex items-center justify-center" key={id}>
              <Image src={src} alt={alt} width={width} height={48} />
            </div>
          ))}
        </div>
        <div className="space-y-8 sm:flex sm:space-y-0 sm:space-x-12">
          {secondGroupLogo.map(({ id, src, alt, width }) => (
            <div className="flex items-center justify-center" key={id}>
              <Image src={src} alt={alt} width={width} height={48} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedCompanies;
