import React from "react";
import Container from "./Container";
import QuestionsContainer from "./QuestionsContainer";

const FaqSection = () => {
  return (
    <Container
      title="Frequently asked questions"
      text="If you can’t find what you’re looking for, email our support team and if you’re lucky someone will get back to you."
      textColor="text-slate-700"
      bgLightGray={true}
      padding="py-20"
    >
      <div className="mt-16 space-y-8">
        <QuestionsContainer
          firstQuestion="Does TaxPal handle VAT?"
          firstAnswer="Well no, but if you move your company offshore you can probably ignore it."
          secondQuestion="Can I pay for my subscription via purchase order?"
          secondAnswer="Absolutely, we are happy to take your money in all forms."
          thirdQuestion="How do I apply for a job at TaxPal?"
          thirdAnswer="We only hire our customers, so subscribe for a minimum of 6 months and then let’s talk."
        />
        <QuestionsContainer
          firstQuestion="What was that testimonial about tax fraud all about?"
          firstAnswer="TaxPal is just a software application, ultimately your books are your responsibility."
          secondQuestion="TaxPal sounds horrible but why do I still feel compelled to purchase?"
          secondAnswer="This is the power of excellent visual design. You just can’t resist it, no matter how poorly it actually functions."
          thirdQuestion="I found other companies called TaxPal, are you sure you can use this name?"
          thirdAnswer="Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website."
        />
        <QuestionsContainer
          firstQuestion="How do you generate reports?"
          firstAnswer="You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons."
          secondQuestion="Can we expect more inventory features?"
          secondAnswer="In life it’s really better to never expect anything at all."
          thirdQuestion="I lost my password, how do I get into my account?"
          thirdAnswer="Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information."
        />
      </div>
    </Container>
  );
};

export default FaqSection;
