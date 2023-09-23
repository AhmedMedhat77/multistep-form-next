"use client";
import React from "react";

const Toggler = () => {
  const [active, setActive] = React.useState(false);
  return (
    <button
      onClick={() => setActive((old) => !old)}
      type="button"
      className=" bg-marineBlue px-2 rounded-lg h-4 w-10 relative mx-2"
    >
      <span
        className={` absolute  w-3 h-3 rounded-full top-[50%] translate-y-[-50%]   bg-lightBlue ${
          active ? "right-1" : "left-1"
        } `}
      />
    </button>
  );
};

export default Toggler;
