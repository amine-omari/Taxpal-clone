import React from "react";

const SectionHeader = ({ title, text }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-[32px] font-semibold text-white leading-10">{title}</h2>
      <p className="text-lg text-blue-100 leading-8">{text}</p>
    </div>
  );
};

export default SectionHeader;
