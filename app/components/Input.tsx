import React from "react";
interface inputProps {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  valid?: boolean;
  placeholder?: string;
}
const Input = ({
  label,
  id,
  name,
  type,
  required,
  valid,
  placeholder,
}: inputProps) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="text-blue-950 font-bold  mb-1 text-sm  flex items-center content-between whitespace-nowrap"
      >
        {label}
        {!valid && (
          <span className="  text-strwbaryRed text-xs font-bold w-full  text-end">
            This Field Is Required
          </span>
        )}
      </label>

      <input
        className={`rounded p-1 px-3 text-marineBlue border w-full outline-none focus:border-marineBlue ${
          !valid
            ? "border-strwbaryRed "
            : "border-PastelBlue focus:invalid:border-strwbaryRed"
        }`}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
