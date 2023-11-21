"use client";

import { BiSolidDashboard, BiSolidBarChartAlt2, BiCalendar } from "react-icons/bi";
import { IoReceiptSharp } from "react-icons/io5";
import { BsCalculatorFill } from "react-icons/bs";
import { MdFeedback } from "react-icons/md";
import { useState, useContext } from "react";
import Image from "next/image";
import { DashContext } from "../dashboard/page";

const OptionBtn = ({ Icon, name }) => {
  const [activeComponent, setActiveComponent] = useContext(DashContext);
  const isActive = name === activeComponent;

  return (
    <button
      onClick={() => setActiveComponent(name)}
      className={`flex justify-start items-center font-semibold text-lg btn-hover-blue bg-white rounded-xl px-4 py-3 flex-shrink-0 w-full ${isActive ? "primary-color" : ""}`}
    >
      <span className="text-xl mr-2">
        <Icon />
      </span>
      {name}
    </button>
  );
};

const OptionBtnCl = ({ Icon, name }) => {
  const [activeComponent, setActiveComponent] = useContext(DashContext);
  const isActive = name === activeComponent;

  return (
    <button
      onClick={() => setActiveComponent(name)}
      className={`flex flex-col justify-center items-center font-semibold text-xs btn-hover-blue bg-white rounded-xl px-4 py-4 w-full ${isActive ? "primary-color" : ""}`}
    >
      <span className={`text-xl`}>
        <Icon />
      </span>
    </button>
  );
};

export default function LeftMenu() {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="w-min h-full relative">
      <button className="absolute top-1/3 shutter-btn" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <Image src="/assets/Shutter_button-open.svg" height="50" width="50" alt="Xpenser-logo" className="cursor-pointer" />
        ) : (
          <Image src="/assets/Shutter_button-close.svg" height="50" width="50" alt="Xpenser-logo" className="cursor-pointer" />
        )}
      </button>

      {toggle ? (
        <div className="flex flex-col gap-3 bg-primary-color px-6 py-4 w-min h-full">
          <OptionBtn Icon={BiSolidDashboard} name="Dashboard" />
          <OptionBtn Icon={BiCalendar} name="Calendar" />
          <OptionBtn Icon={BiSolidBarChartAlt2} name="Reports" />
          <OptionBtn Icon={IoReceiptSharp} name="Receipts" />
          <OptionBtn Icon={BsCalculatorFill} name="Budget" />
          <OptionBtn Icon={MdFeedback} name="Feedback" />
        </div>
      ) : (
        <div className="flex flex-col gap-3 bg-primary-color px-6 py-4 w-min h-full">
          <OptionBtnCl Icon={BiSolidDashboard} name="Dashboard" />
          <OptionBtnCl Icon={BiCalendar} name="Calendar" />
          <OptionBtnCl Icon={BiSolidBarChartAlt2} name="Reports" />
          <OptionBtnCl Icon={IoReceiptSharp} name="Receipts" />
          <OptionBtnCl Icon={BsCalculatorFill} name="Budget" />
          <OptionBtnCl Icon={MdFeedback} name="Feedback" />
        </div>
      )}
    </div>
  );
}
