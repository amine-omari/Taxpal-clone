import React from "react";

const SectionHeader = ({ title, text }) => {
  return (
    <div className="space-y-6 px-4">
      <h2 className="text-[32px] font-semibold text-white">{title}</h2>
      <p className="text-lg text-blue-100">{text}</p>
    </div>
  );
};

export default SectionHeader;
