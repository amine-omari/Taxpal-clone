import React from "react";

const QA = ({question, answer}) => {
  return (
    <li className="space-y-4">
      <h3 className="text-lg font-medium tracking-wide">{question}</h3>
      <p className="text-sm text-slate-700 leading-6 tracking-wide">{answer}</p>
    </li>
  );
};

export default QA;
