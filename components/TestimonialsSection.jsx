import React from "react";
import Container from "./Container";
import TestimonialsContainer from "./TestimonialsContainer";

const TestimonialsSection = () => {
  const cardInfo = [
    {
      id: 1,
      firstCardText:
        "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
      firstCardName: "Sheryl Berge",
      firstCardPosition: "CEO at Lynch LLC",
      firstCardSrc:
        "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=128&q=75",
      secondCardText:
        "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      secondCardName: "Amy Hahn",
      secondCardPosition: "Director at Velocity Industries",
      secondCardSrc:
        "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75",
    },
    {
      id: 2,
      firstCardText:
        "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      firstCardName: "Leland Kiehn",
      firstCardPosition: "Founder of Kiehn and Sons",
      firstCardSrc:
        "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&w=128&q=75",
      secondCardText:
        "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      secondCardName: "Erin Powlowski",
      secondCardPosition: "COO at Armstrong Inc",
      secondCardSrc:
        "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&w=128&q=75",
    },
    {
      id: 3,
      firstCardText:
        "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      firstCardName: "Peter Renolds",
      firstCardPosition: "Founder of West Inc",
      firstCardSrc:
        "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&w=128&q=75",
      secondCardText:
        "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      secondCardName: "Amy Hahn",
      secondCardPosition: "Director at Velocity Industries",
      secondCardSrc:
        "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75",
    },
  ];

  return (
    <Container
      title="Loved by businesses worldwide."
      text="Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features."
      textColor="text-slate-700"
      headerCenter="md:text-center mx-auto max-w-[640px]"
      padding="py-20 sm:py-32"
      bgLightGray={true}
    >
      <div className="mx-auto mt-16 max-w-[640px] space-y-6 sm:space-y-8 lg:mt-20 lg:grid lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
        {cardInfo.map(
          ({
            id,
            firstCardText,
            firstCardName,
            firstCardPosition,
            firstCardSrc,
            secondCardText,
            secondCardName,
            secondCardPosition,
            secondCardSrc,
          }) => (
            <TestimonialsContainer
              key={id}
              firstCardText={firstCardText}
              firstCardName={firstCardName}
              firstCardPosition={firstCardPosition}
              firstCardSrc={firstCardSrc}
              secondCardText={secondCardText}
              secondCardName={secondCardName}
              secondCardPosition={secondCardPosition}
              secondCardSrc={secondCardSrc}
            />
          ),
        )}
      </div>
    </Container>
  );
};

export default TestimonialsSection;
