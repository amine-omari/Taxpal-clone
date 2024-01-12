import React from "react";

const SectionHeader = ({
  title,
  text,
  titleTextWhite = false,
  textColor,
  largeSpace = false,
}) => {
  return (
    <div className={`${largeSpace ? "space-y-6" : "space-y-4"}`}>
      <h2
        className={`text-[32px] font-semibold leading-10 ${
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
