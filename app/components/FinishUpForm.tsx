import React from "react";
import FormTitle from "./FormTitle";
import Link from "next/link";

const FinishUpForm = () => {
  return (
    <div>
      <FormTitle
        title="Finishing up"
        desc="Double-check everything looks OK before confirming."
      />

      <div className="bg-gray-50 rounded w-full p-4">
        <div className=" flex items-center justify-between  w-full">
          <div className="mb-2">
            <h2 className="text-marineBlue ">Arcade (Monthly)</h2>
            <Link
              href="#"
              className="text-gray-400 text-sm font-light hover:text-prupshBlue cursor-pointer hover:underline"
            >
              Change
            </Link>
          </div>
          <div>
            <span className="text-marineBlue font-bold ">$9/mo</span>
          </div>
        </div>
        <hr className="border-b-gray-300 border-b" />
        <div className="w-full flex items-center justify-between my-2">
          <p className="text-gray-400 font-light text-sm">Online service</p>
          <span className="text-xs text-marineBlue font-light">+$1/mo</span>
        </div>
        <div className="w-full flex items-center justify-between my-2">
          <p className="text-gray-400 font-light text-sm">Larger Storage</p>
          <span className="text-xs text-marineBlue font-light">+$1/mo</span>
        </div>
      </div>
      <div className=" pl-3 w-full flex items-center justify-between mt-2">
        <p className="text-gray-400 font-light text-xs">Larger Storage</p>
        <span className="text-lg text-prupshBlue font-semibold">+$12/mo</span>
      </div>
    </div>
  );
};

export default FinishUpForm;
