import React from "react";
import { Field } from "formik";

interface InputGroupProps {
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
}

export const InputGroup: React.FC<InputGroupProps> = ({
  name,
  type = "text",
  label,
  placeholder,
  disabled,
}) => {
  return (
    <div className="flex flex-col w-full gap-1">
      <label className="font-bold text-sm">{label}</label>
      <Field
        name={name}
        type={type}
        className="border rounded-lg h-10 px-4"
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
