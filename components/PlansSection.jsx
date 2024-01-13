import React from "react";
import Container from "./Container";
import PlansCard from "./PlansCard";

const PlansSection = () => {
  const smallBusinessServices = [
    {
      id: 1,
      text: "Send 25 quotes and invoices",
    },
    {
      id: 2,
      text: "Connect up to 5 bank accounts",
    },
    {
      id: 3,
      text: "Track up to 50 expenses per month",
    },
    {
      id: 4,
      text: "Automated payroll support",
    },
    {
      id: 5,
      text: "Export up to 12 reports",
    },
    {
      id: 6,
      text: "Bulk reconcile transactions",
    },
    {
      id: 7,
      text: "Track in multiple currencies",
    },
  ];

  const starterServices = [
    {
      id: 1,
      text: "Send 10 quotes and invoices",
    },
    {
      id: 2,
      text: "Connect up to 2 bank accounts",
    },
    {
      id: 3,
      text: "Track up to 15 expenses per month",
    },
    {
      id: 4,
      text: "Manual payroll support",
    },
    {
      id: 5,
      text: "Export up to 3 reports",
    },
  ];

  const enterpriseServices = [
    {
      id: 1,
      text: "Send unlimited quotes and invoices",
    },
    {
      id: 2,
      text: "Connect up to 15 bank accounts",
    },
    {
      id: 3,
      text: "Track up to 200 expenses per month",
    },
    {
      id: 4,
      text: "Automated payroll support",
    },
    {
      id: 5,
      text: "Export up to 25 reports, including TPS",
    },
  ];

  return (
    <Container
      title="Simple pricing, for everyone."
      text="It doesn’t matter what size your business is, our software won’t work well for you."
      bgDarkBlue={true}
      titleTextWhite={true}
      textColor="text-slate-400"
      padding="py-20"
    >
      <div className="mt-16">
        <PlansCard />
      </div>
    </Container>
  );
};

export default PlansSection;
