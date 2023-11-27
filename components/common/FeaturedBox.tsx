import React from "react";

export type IFeaturedBoxItems = {
  label: string;
  title: string;
  className?: string;
  labelClassName?: string;
};

const FeaturedBox: React.FC<IFeaturedBoxItems> = ({
  label,
  title,
  className,
  labelClassName,
}) => {
  return (
    <div
      className={`h-[100px] rounded-[8px] flex flex-col gap-2 justify-center ps-5 ${className}`}
    >
      <p
        className={`text-grey-light text-[10px] font-bold w-full ${labelClassName}`}
      >
        {label}
      </p>
      <p className="bold-title">{title}</p>
    </div>
  );
};

export default FeaturedBox;
