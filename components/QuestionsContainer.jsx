import React from "react";
import QA from "./QA";

const QuestionsContainer = ({
  firstQuestion,
  firstAnswer,
  secondQuestion,
  secondAnswer,
  thirdQuestion,
  thirdAnswer,
}) => {
  return (
    <ul className="space-y-8">
      <QA question={firstQuestion} answer={firstAnswer} />
      <QA question={secondQuestion} answer={secondAnswer} />
      <QA question={thirdQuestion} answer={thirdAnswer} />
    </ul>
  );
};

export default QuestionsContainer;
