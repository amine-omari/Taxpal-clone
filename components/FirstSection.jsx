import React from "react";

const FirstSection = () => {
  return (
    <section className="px-4 pb-16 pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-semibold leading-[55px]">
          Accounting
          <br />
          <span className="text-blue-600">made simple</span> for small
          businesses.
        </h1>
        <p className="mt-6 px-2 text-lg leading-8 text-slate-700">
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
