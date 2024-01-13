import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialsContainer = ({
  firstCardText,
  firstCardName,
  firstCardPosition,
  firstCardSrc,
  secondCardText,
  secondCardName,
  secondCardPosition,
  secondCardSrc,
}) => {
  return (
    <div className="space-y-6">
      <TestimonialsCard
        cardText={firstCardText}
        name={firstCardName}
        position={firstCardPosition}
        src={firstCardSrc}
      />
      <TestimonialsCard
        cardText={secondCardText}
        name={secondCardName}
        position={secondCardPosition}
        src={secondCardSrc}
      />
    </div>
  );
};

export default TestimonialsContainer;
