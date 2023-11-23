import React from "react";
import Image from "next/image";

interface ISignUpProgressBar {
  isUserSignUp: boolean;
}

const SignUpProgressBar: React.FC<ISignUpProgressBar> = ({ isUserSignUp }) => {
  return (
    <div className="pt-10 flex justify-between w-full">
      <div className="w-full flex items-center">
        <p
          className={`border border-primary  rounded-full w-6 h-6 flex items-center justify-center text-sm ${
            isUserSignUp ? "text-primary" : "bg-primary text-white"
          }`}
        >
          1
        </p>
        <div
          className={`flex-grow flex justify-center items-center h-1 border-b-2 border-b-primary relative ${
            isUserSignUp ? "border-dashed" : ""
          }`}
        >
          <p className="font-bold text-sm absolute -top-5 text-primary">
            {isUserSignUp && <> User Details</>}
          </p>
        </div>
      </div>
      <Image src="/logo.svg" alt="logo" width={10} height={10} />
      <div className="w-full flex items-center">
        <div
          className={`flex-grow flex justify-center items-center h-1 border-b-2 border-dashed relative ${
            isUserSignUp ? "border-b-grey-light" : "border-b-primary"
          }`}
        >
          <p className="font-bold text-sm absolute -top-5 text-primary">
            {!isUserSignUp && <>Business Details</>}
          </p>
        </div>
        <p
          className={`border rounded-full w-6 h-6 flex items-center justify-center text-sm ${
            isUserSignUp
              ? "border-grey-light text-grey-light"
              : "border-primary text-primary"
          }`}
        >
          2
        </p>
      </div>
    </div>
  );
};

export default SignUpProgressBar;
