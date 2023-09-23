"use client";
import React, { MouseEventHandler } from "react";

interface buttonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  primary?: boolean;
}

const Button = ({ title, onClick, primary }: buttonProps) => {
  return (
    <button
      className={`cursor-pointer rounded px-3 py-1 w-fit  ${
        primary
          ? "bg-marineBlue text-lightBlue"
          : " text-gray-300 hover:text-prupshBlue"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
