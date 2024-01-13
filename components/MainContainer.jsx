import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TasksSection from "./TasksSection";
import CtaBanner from "./CtaBanner";
import TestimonialsSection from "./TestimonialsSection";

const MainContainer = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TasksSection />
      <CtaBanner />
      <TestimonialsSection />
    </main>
  );
};

export default MainContainer;
