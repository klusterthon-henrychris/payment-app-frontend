import React from "react";

interface ICustomButton {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  type = "button",
  disabled,
}) => {
  return (
    <button
      className="bg-primary text-white rounded-[8px] p-3 hover:opacity-90 disabled:bg-grey-light"
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default CustomButton;
