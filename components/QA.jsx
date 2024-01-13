import React from "react";

const QA = ({question, answer}) => {
  return (
    <li className="space-y-4">
      <h3 className="text-lg font-medium">{question}</h3>
      <p className="text-sm text-slate-700">{answer}</p>
    </li>
  );
};

export default QA;
