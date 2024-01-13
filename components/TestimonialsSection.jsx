import React from "react";
import Container from "./Container";

const TestimonialsSection = () => {
  const cardInfo = [
    {
      id: 1,
      cardText:
        "TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.",
      name: "Sheryl Berge",
      position: "CEO at Lynch LLC",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=128&q=75",
    },
    {
      id: 2,
      cardText:
        "I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.",
      name: "Amy Hahn",
      position: "Director at Velocity Industries",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75",
    },
    {
      id: 3,
      cardText:
        "The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
      name: "Leland Kiehn",
      position: "Founder of Kiehn and Sons",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&w=128&q=75",
    },
    {
      id: 4,
      cardText:
        "There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.",
      name: "Erin Powlowski",
      position: "COO at Armstrong Inc",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&w=128&q=75",
    },
    {
      id: 5,
      cardText:
        "I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.",
      name: "Peter Renolds",
      position: "Founder of West Inc",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&w=128&q=75",
    },
    {
      id: 6,
      cardText:
        "This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.",
      name: "Amy Hahn",
      position: "Director at Velocity Industries",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75",
    },
  ];
  return (
    <Container
      title="Loved by businesses worldwide."
      text="Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features."
      textColor="text-slate-700"
      padding="py-20"
      bgLightGray={true}
    >
      <div className="mt-16">
      </div>
    </Container>
  );
};

export default TestimonialsSection;
