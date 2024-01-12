import React from "react";

const SectionHeader = ({ title, text }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-[32px] font-semibold leading-10 text-white">
        {title}
      </h2>
      <p className="text-lg leading-8 text-blue-100">{text}</p>
    </div>
  );
};

export default SectionHeader;
