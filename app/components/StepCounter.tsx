import React from "react";

interface CounterProps {
  counter: number;
  title?: string;
  step?: string;
  active?: boolean;
}

const StepCounter = ({ counter, title, step, active }: CounterProps) => {
  return (
    <div className="flex   gap-3 mb-4 cursor-pointer group-hover: group">
      <div
        className={`rounded-full w-[40px] h-[40px]  flex items-center content-center  border  border-lightBlue  group-hover:bg-lightBlue ${
          active && "bg-lightBlue"
        }`}
      >
        <span
          className={`text-lightBlue  text-center w-full   group-hover:text-marineBlue  ${
            active && "text-marineBlue"
          }`}
        >
          {counter}
        </span>
      </div>
      <div>
        <span className="text-PastelBlue text-sm ">{step}</span>
        <h2 className="font-semibold text-lg text-lightBlue whitespace-nowrap ">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default React.memo(StepCounter);
