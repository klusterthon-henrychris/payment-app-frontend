import React from "react";

interface ICustomButton {
  text: string;
}

const CustomButton: React.FC<ICustomButton> = ({ text }) => {
  return (
    <button className="ml-auto bg-primary text-white rounded-[8px] p-3">
      {text}
    </button>
  );
};

export default CustomButton;
