import React from "react";
import SectionHeader from "./SectionHeader";

const Container = ({
  title,
  text,
  bgBlue = false,
  bgDarkBlue = false,
  padding,
  children,
}) => {
  return (
    <section
      className={`${bgBlue && "bg-blue-600"} ${
        bgDarkBlue && "bg-slate-900"
      } ${padding} relative`}
    >
      <div className="relative overflow-hidden px-4">
        <SectionHeader title={title} text={text} />
        {children}
      </div>
    </section>
  );
};

export default Container;
