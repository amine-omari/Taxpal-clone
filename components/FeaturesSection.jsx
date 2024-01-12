import React, { useState } from "react";
import Container from "./Container";

const FeaturesSection = () => {
  const [text, setText] = useState();

  const buttonInfo = [
    {
      id: 1,
      button: "Payroll",
      text: "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    },
    {
      id: 2,
      button: "Claim expenses",
      text: "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    },
    {
      id: 3,
      button: "VAT handling",
      text: "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    },
    {
      id: 4,
      button: "Reporting",
      text: "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    },
  ];

  const showText = (id) => {
    const selectedButton = buttonInfo.find((button) => button.id === id);
    if (selectedButton) {
      setText(selectedButton.text);
    }
  };

  return (
    <Container
      title="Everything you need to run your books."
      text="Well everything you need if you aren’t that picky about minor details
        like tax compliance."
      bgBlue={true}
      padding="pb-28 pt-20"
    >
      <div className="mt-16 pt-10">
        <div>
          <div className="absolute right-0 flex w-full space-x-4 overflow-x-scroll pb-4">
            {buttonInfo.map(({ id, button }) => (
              <button
                key={id}
                onClick={() => showText(id)}
                className="whitespace-nowrap rounded-full px-4 py-1 text-lg font-medium text-blue-100 duration-300 hover:bg-white/10 hover:text-white focus:bg-white focus:text-blue-600"
              >
                {button}
              </button>
            ))}
          </div>
          <p className="pt-20 text-lg text-white">
            {text ? text : buttonInfo[0].text}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default FeaturesSection;
