import React from "react";
import PortfolioButton from "../Button/PortfolioButton";

export default function MainContent(props) {
  const { img, title, date, description, name, link } = props;

  return (
    <div className="bg-white p-6 rounded-lg mb-[5%] shadow-[7px_7px_1rem_rgba(0,0,0,0.4)]">
      <div className="flex flex-col gap-2">
        <h3 className="m-0">{title}</h3>
        <h4 className="m-0">{date}</h4>
        <p className="mb-4">{description}</p>
      </div>
      <img src={img} alt="" className="w-full rounded-lg" />
      <div className="flex justify-between items-center bg-[#DFE3EE] -mx-6 px-6 py-6 rounded-b-lg">
        <h3 className="text-base">Check Out the Work Here!</h3>
        <PortfolioButton name={name} link={link} />
      </div>
    </div>
  );
}
