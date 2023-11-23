import React from "react";

interface ICustomButton {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  type = "button",
}) => {
  return (
    <button
      className="bg-primary text-white rounded-[8px] p-3 hover:opacity-90"
      type={type}
    >
      {children}
    </button>
  );
};

export default CustomButton;
