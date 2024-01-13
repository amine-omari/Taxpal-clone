import React from "react";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TasksSection from "./TasksSection";
import CtaBanner from "./CtaBanner";

const MainContainer = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TasksSection />
      <CtaBanner />
    </main>
  );
};

export default MainContainer;
