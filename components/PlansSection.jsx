import React from "react";
import Container from "./Container";
import PlansCard from "./PlansCard";
import CircleCheckIcon from "@/icons/CircleCheckIcon";

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
      headerCenter="md:text-center"
      id="PlansSection"
      bgDarkBlue={true}
      titleTextWhite={true}
      textColor="text-slate-400"
      padding="py-20 sm:py-32"
    >
      <div className="mx-auto mt-16 max-w-[640px] space-y-10 lg:-mx-8 lg:grid lg:max-w-none lg:grid-cols-3 lg:space-y-0 xl:mx-0 xl:gap-x-8">
        <PlansCard
          amount="$15"
          businessType="Small business"
          text="Perfect for small / medium sized businesses."
          bgBlue={true}
          order="lg:order-2"
        >
          {smallBusinessServices.map(({ id, text }) => (
            <div key={id} className="flex space-x-4">
              <span>
                <CircleCheckIcon />
              </span>
              <p>{text}</p>
            </div>
          ))}
        </PlansCard>
        <PlansCard
          amount="$9"
          businessType="starter"
          text="Good for anyone who is self-employed and just getting started."
          order="lg:order-1"
        >
          {starterServices.map(({ id, text }) => (
            <div key={id} className="flex space-x-4">
              <span className="text-slate-400">
                <CircleCheckIcon />
              </span>
              <p>{text}</p>
            </div>
          ))}
        </PlansCard>
        <PlansCard
          amount="$39"
          businessType="Enterprise"
          text="For even the biggest enterprise companies."
          order="lg:order-3"
        >
          {enterpriseServices.map(({ id, text }) => (
            <div key={id} className="flex space-x-4">
              <span className="text-slate-400">
                <CircleCheckIcon />
              </span>
              <p>{text}</p>
            </div>
          ))}
        </PlansCard>
      </div>
    </Container>
  );
};

export default PlansSection;
