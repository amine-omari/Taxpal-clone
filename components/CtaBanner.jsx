import React from "react";
import Container from "./Container";
import Link from "next/link";

const CtaBanner = () => {
  return (
    <Container
      title="Get started today"
      text="It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive."
      titleTextWhite={true}
      textColor="text-white"
      bgBlue={true}
      padding="py-32"
      textCenter="text-center mx-auto max-w-lg"
      gradientImg={true}
      src="https://salient.tailwindui.com/_next/static/media/background-call-to-action.6a5a5672.jpg"
      width={2347}
      height={1244}
      gradientStyle="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
    >
      <div className="mt-10 flex justify-center">
        <Link
          href="/"
          className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold hover:bg-blue-50"
        >
          Get 6 months free
        </Link>
      </div>
    </Container>
  );
};

export default CtaBanner;
