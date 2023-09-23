import React from "react";
import FormTitle from "./FormTitle";
import AddonsItem from "./AddonsItem";

const AddonsForm = () => {
  return (
    <form>
      <FormTitle
        title="Pick add-ons"
        desc="Add-ons help enhance your gaming experience."
      />

      <div className="mt-4">
        <AddonsItem
          title="Online service"
          desc="Access to multiplayer games"
          price={1}
        />
        <AddonsItem
          title="Larger storage"
          desc="Extra 1TB of cloud save"
          price={2}
        />
        <AddonsItem
          title="Customizable Profile"
          desc="Custom theme on your profile"
          price={2}
        />
      </div>
    </form>
  );
};

export default AddonsForm;
