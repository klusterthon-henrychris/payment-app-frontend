"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import UserSignUpForm, { UserSignUpFormValues } from "./UserSignUpForm";
import api from "@/utils/api";
import { useAuthContext } from "@/contexts/useAuth";

const SignUpContainer: React.FC = () => {
  const [isUserSignUp, setIsUserSignUp] = useState(true);
  const { userAuth, setUserAuth } = useAuthContext();

  console.log(userAuth, "userAuth");

  const handleSubmit = async (values: UserSignUpFormValues) => {
    try {
      //   api.post("auth/Register", {
      //     email: "ooo",
      //   });
      setUserAuth(values);
      setIsUserSignUp(false);
      console.log(values, "====");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="lg:min-h-screen bg-light-white py-3 flex flex-col items-center justify-evenly">
        <Image src="/logo-gray.png" alt="logo" width={208} height={32} />
        <Image src="/image-sign-up.svg" alt="logo" width={720} height={1024} />
        <p className="paragraph px-6">
          enabling small businesses to manage their payments efficiently.
        </p>
      </div>

      <div className="lg:w-[350px] p-4 lg:px-0 m-auto flex flex-col items-center justify-center">
        <div className="">
          <p className="bold-title">Welcome to Simple Biz</p>
          <p className="paragraph">
            Please fill in the required details to continue
          </p>
        </div>
        <div className="pt-10 flex justify-between w-full">
          <div className="w-full flex items-center">
            <p
              className={`border border-primary  rounded-full w-6 h-6 flex items-center justify-center text-sm ${
                isUserSignUp ? "text-primary" : "bg-primary text-white"
              }`}
            >
              1
            </p>
            <div className="flex-grow flex justify-center items-center h-1 border-b-2 border-b-primary border-dotted relative">
              <p className="font-bold text-sm absolute -top-5 text-primary">
                User Details
              </p>
            </div>
          </div>
          <Image src="/logo.svg" alt="logo" width={10} height={10} />
          <div className="w-full flex items-center">
            <div
              className={`flex-grow flex justify-center items-center h-1 border-b-2 border-dotted relative ${
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
        {isUserSignUp ? (
          <UserSignUpForm handleSubmit={handleSubmit} />
        ) : (
          <div>2</div>
        )}

        <p className="paragraph mt-14">
          Have an account?{" "}
          <Link href="/sign-in" className="text-primary font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpContainer;
