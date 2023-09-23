import React from "react";
import Input from "./Input";
import FormTitle from "./FormTitle";

const InfoForm = () => {
  return (
    <form className="mt-8">
      <FormTitle
        title="Personal info"
        desc="Please provide your name, email address, and phone number."
      />

      <div className="mt-4">
        <Input
          id="name"
          name="name"
          placeholder="Jhon Doe"
          type="string"
          label="name"
          valid={true}
        />
        <Input
          id="email"
          name="email"
          placeholder="emil@example.com"
          type="email"
          label="Email Adress"
          valid={true}
        />
        <Input
          id="phone"
          name="phone"
          placeholder="e.g. +1 2345 567 890"
          type="string"
          label="Phone Number"
        />
      </div>
    </form>
  );
};

export default InfoForm;
