import React from "react";
import FormTitle from "./FormTitle";
import MonthlyBilling from "./MonthlyBilling";
import Toggler from "./Toggler";

const BillingForm = () => {
  return (
    <form>
      <FormTitle
        title="Select your plan"
        desc="You have the option of monthly or yearly billing."
      />
      <div className="flex gap-4  items-center mt-8 justify-center w-[100%]">
        <MonthlyBilling image="/icon-arcade.svg" price={9} title="Arcade" />
        <MonthlyBilling
          image="/icon-advanced.svg"
          price={12}
          title="Advanced"
        />
        <MonthlyBilling image="/icon-pro.svg" price={15} title="Pro" />
      </div>
      <div className="bg-gray-100 w-[50%] mx-auto my-4 text-center flex items-center justify-center py-4 rounded cursor-pointer">
        <span className="text-sm text-prupshBlue font-bold hover:text-prupshBlue">
          Monthly
        </span>
        <Toggler />
        <span className="text-sm text-PastelBlue hover:text-prupshBlue active:text-prupshBlue cursor-pointer">
          Year
        </span>
      </div>
    </form>
  );
};

export default BillingForm;
