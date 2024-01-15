import React, { useState } from "react";
import Container from "./Container";
import ReportingIcon from "@/icons/ReportingIcon";
import InventoryIcon from "@/icons/InventoryIcon";
import ContactsIcon from "@/icons/ContactsIcon";
import Image from "next/image";

const TasksSection = () => {
  const [index, setIndex] = useState(0);

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

  const slideImg = (id) => {
    setIndex(id - 1);
  };

  return (
    <Container
      title="Simplify everyday business tasks."
      text="Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead."
      textColor="text-slate-700"
      padding="pt-20 pb-14 sm:pt-32 sm:pb-20"
      headerCenter="md:text-center mx-auto max-w-[640px]"
    >
      <div className="mt-20">
        <div className="space-y-10 lg:flex lg:space-x-8 lg:space-y-0">
          {Tasks.map(({ id, icon, title, text1, text2, src }) => (
            <div key={id}>
              <button
                onClick={() => slideImg(id - 1)}
                className={`group mx-auto max-w-[640px] cursor-default text-left lg:cursor-pointer lg:opacity-75 lg:hover:opacity-100 lg:focus:opacity-100`}
              >
                <span className="flex w-9 rounded-lg bg-blue-600 lg:bg-slate-500 lg:group-focus:bg-blue-600">
                  {icon}
                </span>
                <h3 className="mt-6 text-sm font-medium text-blue-600 lg:text-slate-600 lg:group-focus:text-blue-600">
                  {title}
                </h3>
                <p className="mt-3 text-xl font-medium leading-8 tracking-wide">
                  {text1}
                </p>
                <p className="mt-4 text-sm leading-6 tracking-wide text-slate-600">
                  {text2}
                </p>
              </button>

              {/* mobile screen */}
              <div className="relative mt-10 pb-10 lg:hidden">
                <div className="absolute -left-4 -right-4 bottom-0 h-[93%] bg-slate-200 sm:-left-6 sm:-right-6"></div>
                <div className="relative w-[844px]">
                  <Image
                    src={src}
                    alt="tasks image"
                    width={844}
                    height={427}
                    className="rounded-xl border border-slate-500/10"
                    priority={true}
                  />
                </div>
              </div>
            </div>
          ))}
          {/* from lg screen */}
        </div>
        <div className="mt-20 hidden justify-center overflow-hidden rounded-[32px] border border-slate-500/20 bg-slate-200 px-14 py-16 lg:flex">
          <div
            className="flex transition-all duration-500"
            style={{ transform: `translateX(${-844 * index}px)` }}
          >
            {Tasks.map(({ id, src }) => (
              <div key={id} className="px-5">
                <Image
                  src={src}
                  alt="tasks image"
                  width={844}
                  height={427}
                  className={`${
                    index + 1 != id - 1 && "opacity-50"
                  } min-w-[844px] rounded-xl border border-slate-500/10`}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TasksSection;
