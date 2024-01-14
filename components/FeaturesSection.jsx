import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";

const FeaturesSection = () => {
  const [text, setText] = useState();
  const [imgSrc, setImgsrc] = useState();

  const buttonInfo = [
    {
      id: 1,
      button: "Payroll",
      text: "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=2048&q=75",
    },
    {
      id: 2,
      button: "Claim expenses",
      text: "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&w=2048&q=75",
    },
    {
      id: 3,
      button: "VAT handling",
      text: "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&w=2048&q=75",
    },
    {
      id: 4,
      button: "Reporting",
      text: "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&w=2048&q=75",
    },
  ];

  const showText = (id) => {
    const selectedButton = buttonInfo.find((button) => button.id === id);
    if (selectedButton) {
      setText(selectedButton.text);
      setImgsrc(selectedButton.src);
    }
  };

  return (
    <Container
      title="Everything you need to run your books."
      text="Well everything you need if you aren’t that picky about minor details
        like tax compliance."
      titleTextWhite={true}
      textColor="text-blue-100"
      textCenter="md:text-center"
      largeSpace={true}
      bgBlue={true}
      padding="pb-28 pt-20 sm:py-32"
      gradientImg={true}
      src="https://salient.tailwindui.com/_next/static/media/background-features.5f7a9ac9.jpg"
      width={2245}
      height={1636}
      gradientStyle="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
      textLarge={true}
    >
      <div className="mt-16 pt-10 md:mt-20">
        <div className="sm:relative">
          <div className="absolute right-0 top-[232px] h-[27%] w-full border border-white/10 bg-white/10 sm:-top-[38px] sm:h-[228px] sm:rounded-xl"></div>
          <div className="absolute right-0 flex w-full justify-between space-x-4 overflow-x-scroll px-4 pb-4 sm:justify-center sm:px-0 md:overflow-hidden">
            {buttonInfo.map(({ id, button }) => (
              <button
                key={id}
                onClick={() => showText(id)}
                className="whitespace-nowrap rounded-full px-4 py-1.5 text-lg font-medium tracking-wide text-blue-100 duration-300 hover:bg-white/10 hover:text-white focus:bg-white focus:text-blue-600 "
              >
                {button}
              </button>
            ))}
          </div>
          <p className="mx-auto max-w-2xl pt-16 text-lg text-white sm:text-center sm:leading-7">
            {text ? text : buttonInfo[0].text}
          </p>
        </div>
        <div className="mt-10 w-[720px] sm:w-auto">
          <Image
            src={imgSrc ? imgSrc : buttonInfo[0].src}
            alt="imgs"
            width={1085}
            height={730}
            className="rounded-xl shadow-xl shadow-blue-900/20"
          />
        </div>
      </div>
    </Container>
  );
};

export default FeaturesSection;
