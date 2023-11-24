import React from "react";

interface ICustomButton {
  children: string;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<ICustomButton> = ({
  children,
  type = "button",
  disabled,
  onClick,
}) => {
  return (
    <button
      className="bg-primary text-white min-w-[78px] rounded-[8px] p-3 hover:opacity-90 disabled:bg-grey-light"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
