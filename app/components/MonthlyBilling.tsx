import Image from "next/image";
import React from "react";
interface billingProps {
  image: string;
  title: string;
  price: number;
}
const MonthlyBilling = ({ image, title, price }: billingProps) => {
  return (
    <div className="p-4 border border-gray-100  active:border-prupshBlue active:bg-gray-100  hover:border-prupshBlue rounded w-[7.5rem] h-[9rem] cursor-pointer flex justify-between flex-col">
      <Image src={image} width={30} height={30} alt="" className="mb-5" />
      <div>
        <h3 className="text-marineBlue font-medium text-lg">{title}</h3>
        <span className="text-PastelBlue text-m text-sm">${price}/mo</span>
      </div>
    </div>
  );
};

export default MonthlyBilling;
