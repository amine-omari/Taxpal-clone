import React from "react";
import Container from "./Container";
import ReportingIcon from "@/icons/ReportingIcon";
import InventoryIcon from "@/icons/InventoryIcon";
import ContactsIcon from "@/icons/ContactsIcon";

const TasksSection = () => {
  const Tasks = [
    {
      id: 1,
      icon: <ReportingIcon />,
      title: "Reporting",
      text1: "Stay on top of things with always up-to-date reporting features.",
      text2:
        "We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofit-loss.2a2f85d5.png&w=1920&q=75",
    },
    {
      id: 2,
      icon: <InventoryIcon />,
      title: "Inventory",
      text1:
        "Never lose track of what’s in stock with accurate inventory tracking.",
      text2:
        "We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finventory.14ec7758.png&w=1920&q=75",
    },
    {
      id: 3,
      icon: <ContactsIcon />,
      title: "Contacts",
      text1:
        "Organize all of your contacts, service providers, and invoices in one place.",
      text2:
        "This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.",
      src: "https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontacts.a61dce95.png&w=1920&q=75",
    },
  ];

  return (
    <Container
      title="Simplify everyday business tasks."
      text="Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead."
      textColor="text-slate-700"
      padding="pt-20 pb-14"
    >
      <div>
        <div>
          {Tasks.map(({ id, icon, title, text1, text2, src }) => (
            <div key={id}>
              <div>
                <div className="flex w-9 rounded-lg bg-blue-600">{icon}</div>
                <h3>{title}</h3>
                <p>{text1}</p>
                <p>{text2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default TasksSection;
