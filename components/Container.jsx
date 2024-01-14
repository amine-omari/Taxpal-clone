import React from "react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";

const Container = ({
  title,
  text,
  titleTextWhite,
  textColor,
  largeSpace,
  textLarge,
  textCenter,
  bgBlue = false,
  bgDarkBlue = false,
  bgLightGray = false,
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
      className={`${bgBlue && "bg-blue-600"} ${bgLightGray && "bg-slate-50"} ${
        bgDarkBlue && "bg-slate-900"
      } ${padding} relative overflow-hidden`}
    >
      {gradientImg && (
        <Image
          src={src}
          alt="gradient image"
          width={width}
          height={height}
          className={gradientStyle}
          priority={true}
        />
      )}
      <div className="relative px-4 sm:px-6">
        <SectionHeader
          title={title}
          text={text}
          titleTextWhite={titleTextWhite}
          textColor={textColor}
          largeSpace={largeSpace}
          textCenter={textCenter}
          textLarge={textLarge}
        />
        {children}
      </div>
    </section>
  );
};

export default Container;
