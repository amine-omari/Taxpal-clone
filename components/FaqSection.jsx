import React from "react";
import Container from "./Container";
import QuestionsContainer from "./QuestionsContainer";

const FaqSection = () => {
  return (
    <Container
      title="Frequently asked questions"
      text="If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you."
      textColor="text-slate-700"
      bgLightGray={true}
      padding="py-20"
    >
      <div className="mt-16">
        <QuestionsContainer />
      </div>
    </Container>
  );
};

export default FaqSection;
