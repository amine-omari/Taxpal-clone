import React from "react";

const SectionHeader = ({ title, text, titleTextWhite = false, textColor }) => {
  return (
    <div className="space-y-6">
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
