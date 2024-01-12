import React from "react";
import InnerContainer_SecondSetion from "./InnerContainer_SecondSetion";

const FeaturesSection = () => {
  return (
    <section className="bg-blue-600 pb-28 pt-20">
      <div className="space-y-6 px-4">
        <h2 className="text-[32px] font-semibold text-white">
          Everything you need to run your books.
        </h2>
        <p className="text-lg text-blue-100">
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </p>
      </div>
      <InnerContainer_SecondSetion />
    </section>
  );
};

export default FeaturesSection;
