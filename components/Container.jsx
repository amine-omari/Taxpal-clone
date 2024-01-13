import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const Container = ({
  title,
  text,
  titleTextWhite,
  textColor,
  largeSpace,
  bgBlue = false,
  bgDarkBlue = false,
  padding,
  gradientImg = false,
  src,
  width,
  height,
  gradientStyle,
  children,
}) => {
  return (
    <section
      className={`${bgBlue && "bg-blue-600"} ${
        bgDarkBlue && "bg-slate-900"
      } ${padding} relative`}
    >
      {gradientImg && (
        <Image
          src={src}
          width={width}
          height={height}
          className={gradientStyle}
        />
      )}
      <div className="overflow-hidden px-4">
        <SectionHeader
          title={title}
          text={text}
          titleTextWhite={titleTextWhite}
          textColor={textColor}
          largeSpace={largeSpace}
        />
        {children}
      </div>
    </section>
  );
};

export default Container;
