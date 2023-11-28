"use client";
import React, { useState } from "react";
import Delete from "../Reusables/Delete";
import Share from "../Reusables/Share";

interface InvoiceProps {
  invoiceId: string;
}
const InvoiceOptions = ({ invoiceId }: InvoiceProps) => {
  const [isOptionsBoxOpen, setIsOptionsBoxOpen] = useState(false);
  const [optionValue, setOptionValue] = useState("");
  // const options = ['View', 'Send reminder', 'Download', 'Share', 'Delete']
  const options = ["Delete"];
  const toggleOptionsBoxDisplay = () => {
    setIsOptionsBoxOpen(!isOptionsBoxOpen);
  };
  const optionClick = (val: string) => {
    setOptionValue(val);
  };
  const closeOptionClick = () => {
    setOptionValue("");
  };
  return (
    <div className="">
      <button onClick={toggleOptionsBoxDisplay}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-[16px]"
        >
          <path
            d="M3.33333 9.83341C2.32 9.83341 1.5 9.01341 1.5 8.00008C1.5 6.98675 2.32 6.16675 3.33333 6.16675C4.34667 6.16675 5.16667 6.98675 5.16667 8.00008C5.16667 9.01341 4.34667 9.83341 3.33333 9.83341ZM3.33333 7.16675C2.87333 7.16675 2.5 7.54008 2.5 8.00008C2.5 8.46008 2.87333 8.83341 3.33333 8.83341C3.79333 8.83341 4.16667 8.46008 4.16667 8.00008C4.16667 7.54008 3.79333 7.16675 3.33333 7.16675Z"
            fill="#1E1E1E"
          />
          <path
            d="M12.6667 9.83341C11.6533 9.83341 10.8333 9.01341 10.8333 8.00008C10.8333 6.98675 11.6533 6.16675 12.6667 6.16675C13.68 6.16675 14.5 6.98675 14.5 8.00008C14.5 9.01341 13.68 9.83341 12.6667 9.83341ZM12.6667 7.16675C12.2067 7.16675 11.8333 7.54008 11.8333 8.00008C11.8333 8.46008 12.2067 8.83341 12.6667 8.83341C13.1267 8.83341 13.5 8.46008 13.5 8.00008C13.5 7.54008 13.1267 7.16675 12.6667 7.16675Z"
            fill="#1E1E1E"
          />
          <path
            d="M8.00001 9.83341C6.98667 9.83341 6.16667 9.01341 6.16667 8.00008C6.16667 6.98675 6.98667 6.16675 8.00001 6.16675C9.01334 6.16675 9.83334 6.98675 9.83334 8.00008C9.83334 9.01341 9.01334 9.83341 8.00001 9.83341ZM8.00001 7.16675C7.54 7.16675 7.16667 7.54008 7.16667 8.00008C7.16667 8.46008 7.54 8.83341 8.00001 8.83341C8.46001 8.83341 8.83334 8.46008 8.83334 8.00008C8.83334 7.54008 8.46001 7.16675 8.00001 7.16675Z"
            fill="#1E1E1E"
          />
        </svg>
      </button>
      {isOptionsBoxOpen && (
        <div className="w-[100px] h-[40px] bg-[#fff] rounded-[8px] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.16)] z-9999 absolute flex flex-col justify-center gap-[8px]">
          {options.map((item, index) => (
            <button
              key={index}
              className="ml-[8px]"
              onClick={() => optionClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
      {optionValue === "Delete" && (
        <Delete
          params={{
            open: optionValue,
            close: closeOptionClick,
            Id: invoiceId,
            item: "invoices",
          }}
        />
      )}
      {/* {optionValue === "Share" && <Share params={{ open: optionValue, close: closeOptionClick, item: "invoice" }} />} */}
    </div>
  );
};

export default InvoiceOptions;
