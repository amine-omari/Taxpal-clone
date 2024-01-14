import React from "react";

const SectionHeader = ({
  title,
  text,
  titleTextWhite = false,
  textColor,
  largeSpace = false,
  textCenter,
}) => {
  return (
    <div
      className={`${
        largeSpace ? "space-y-6" : "space-y-4"
      } ${textCenter} relative`}
    >
      <h2
        className={`text-[32px] font-medium leading-10 sm:leading-snug tracking-wide sm:text-[40px] ${
          titleTextWhite && "text-white"
        }`}
      >
        {title}
      </h2>
      <p className={`text-lg leading-8 ${textColor}`}>{text}</p>
    </div>
  );
};

export default SectionHeader;
