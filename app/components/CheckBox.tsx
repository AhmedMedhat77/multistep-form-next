import Image from "next/image";
import React from "react";
interface checkBoxProps {
  checked?: boolean;
  onClick?: any;
}
const CheckBox = ({ checked, onClick }: checkBoxProps) => {
  return (
    <div
      className={`border  w-5 h-5 rounded relative ${
        checked && "bg-prupshBlue"
      }`}
      onClick={onClick}
    >
      {checked && (
        <Image
          src="/icon-checkmark.svg"
          className="object-contain "
          alt="checkmark"
          fill
        />
      )}
    </div>
  );
};

export default CheckBox;
