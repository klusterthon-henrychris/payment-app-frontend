import React from "react";
import { IconType } from ".";

const IconInvoices: React.FC<IconType> = ({ fill = "#1E1E1E" }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18.9583C9.35002 18.9583 8.71669 18.625 8.28335 18.0416L7.44169 16.9166C7.26669 16.6833 7.03335 16.55 6.78335 16.5333C6.53335 16.525 6.28335 16.6333 6.08335 16.8416L5.60835 16.4166L6.06669 16.8416C4.86669 18.125 3.94169 18.025 3.50002 17.85C3.05002 17.675 2.29169 17.1 2.29169 15.25V5.86663C2.29169 2.16663 3.35835 1.04163 6.85002 1.04163H13.15C16.6417 1.04163 17.7084 2.16663 17.7084 5.86663V15.25C17.7084 17.0916 16.95 17.6666 16.5 17.85C16.0584 18.025 15.1417 18.125 13.9334 16.8416C13.7334 16.625 13.4917 16.5083 13.225 16.5333C12.975 16.55 12.7334 16.6833 12.5584 16.9166L11.7167 18.0416C11.2834 18.625 10.65 18.9583 10 18.9583ZM6.73335 15.275C6.76669 15.275 6.80835 15.275 6.84169 15.275C7.45835 15.3083 8.04169 15.6333 8.43335 16.1583L9.27502 17.2833C9.68335 17.825 10.3084 17.825 10.7167 17.2833L11.5584 16.1583C11.9584 15.6333 12.5334 15.3083 13.1584 15.275C13.775 15.2416 14.3917 15.5 14.8417 15.9833C15.475 16.6583 15.8917 16.7416 16.0334 16.6833C16.2334 16.6 16.45 16.1166 16.45 15.25V5.86663C16.45 2.85829 15.925 2.29163 13.1417 2.29163H6.85002C4.06669 2.29163 3.54169 2.85829 3.54169 5.86663V15.25C3.54169 16.125 3.75835 16.6083 3.95835 16.6833C4.10002 16.7416 4.51669 16.6583 5.15002 15.9833C5.60002 15.525 6.15835 15.275 6.73335 15.275Z"
        fill={fill}
      />
      <path
        d="M13.3334 6.45837H6.66669C6.32502 6.45837 6.04169 6.17504 6.04169 5.83337C6.04169 5.49171 6.32502 5.20837 6.66669 5.20837H13.3334C13.675 5.20837 13.9584 5.49171 13.9584 5.83337C13.9584 6.17504 13.675 6.45837 13.3334 6.45837Z"
        fill={fill}
      />
      <path
        d="M12.5 9.79163H7.5C7.15833 9.79163 6.875 9.50829 6.875 9.16663C6.875 8.82496 7.15833 8.54163 7.5 8.54163H12.5C12.8417 8.54163 13.125 8.82496 13.125 9.16663C13.125 9.50829 12.8417 9.79163 12.5 9.79163Z"
        fill={fill}
      />
    </svg>
  );
};

export default IconInvoices;
