import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black justify-center">
      {props.name}
    </button>
  );
};

export default Button;
