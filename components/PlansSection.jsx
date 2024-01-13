import React from "react";
import Container from "./Container";
import PlansCard from "./PlansCard";

const PlansSection = () => {
  return (
    <Container
      title="Simple pricing, for everyone."
      text="It doesn’t matter what size your business is, our software won’t work well for you."
      bgDarkBlue={true}
      titleTextWhite={true}
      textColor="text-slate-400"
      padding="py-20"
    >
      <div>
        <PlansCard />
      </div>
    </Container>
  );
};

export default PlansSection;
