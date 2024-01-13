import React from "react";
import Container from "./Container";

const FaqSection = () => {
  return (
    <Container
      title="Frequently asked questions"
      text="If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you."
      bgLightGray={true}
      padding="py-20"
    ></Container>
  );
};

export default FaqSection;
