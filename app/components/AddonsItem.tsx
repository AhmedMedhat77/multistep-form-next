"use client";
import React from "react";
import CheckBox from "./CheckBox";
interface addonsItemProps {
  title: string;
  desc: string;
  price: number;
}
const AddonsItem = ({ title, desc, price }: addonsItemProps) => {
  const [checked, setchecked] = React.useState(false);

  return (
    <div
      className={`border flex justify-between items-center my-4  rounded w-[100%] p-2 ${
        checked ? "bg-gray-100 border-prupshBlue" : "border-gray-200"
      }  active:bg-gray-100 hover:bg-gray-100 cursor-pointer`}
      onClick={() => setchecked((prev) => !prev)}
    >
      <div className="flex gap-4 items-center">
        <CheckBox checked={checked} />
        <div>
          <h3 className="text-marineBlue">{title}</h3>
          <p className="text-gray-400 text-xs font-light">{desc}</p>
        </div>
      </div>
      <div>
        <span className="text-gray-400 text-sm ">+${price}/mo</span>
      </div>
    </div>
  );
};

export default AddonsItem;
