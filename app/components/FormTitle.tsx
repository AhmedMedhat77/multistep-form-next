import React from "react";
interface FormTitleProps {
  title: string;
  desc: string;
}
const FormTitle = ({ title, desc }: FormTitleProps) => {
  return (
    <div>
      <h1 className="text-black text-2xl  font-bold">{title}</h1>
      <p className="text-gray-400 text-lg">{desc}</p>
    </div>
  );
};

export default FormTitle;
