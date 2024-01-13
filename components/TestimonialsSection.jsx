import React from "react";
import Container from "./Container";
import TestimonialsCard from "./TestimonialsCard";

const TestimonialsSection = () => {
  return (
    <Container
      title="Loved by businesses worldwide."
      text="Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features."
      textColor="text-slate-700"
      padding="py-20"
    >
      <TestimonialsCard />
    </Container>
  );
};

export default TestimonialsSection;
