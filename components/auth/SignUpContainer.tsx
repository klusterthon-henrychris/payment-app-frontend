"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { omit } from "lodash";
import api from "@/utils/api";
import UserSignUpForm, { UserSignUpFormValues } from "./UserSignUpForm";
import SignUpProgressBar from "./SignUpProgressBar";
import BusinessSignUpForm, {
  BusinessSignUpFormValues,
} from "./BusinessSignUpForm";

const SignUpContainer: React.FC = () => {
  const [isUserSignUp, setIsUserSignUp] = useState(true);
  const router = useRouter();

  const handleSubmit = async (values: UserSignUpFormValues) => {
    try {
      const res = await api.post("auth/register", values);
      if (res?.data?.success) {
        setIsUserSignUp(false);
        await localStorage.setItem("accessToken", res.data.data.accessToken);
      } else {
        throw new Error("Error has occurred");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        `Error has occurred, please try again: ${err?.response.data.errors[0].description}`
      );
    }
  };

  const handleRegister = async (values: BusinessSignUpFormValues) => {
    try {
      const res = await api.post("business", {
        ...omit(values, "policy"),
        cacNumber: "0123456789012",
      });
      if (res?.data?.success) {
        localStorage.setItem("authenticated", "true");

        setIsUserSignUp(true);
        toast.success("Registered successfully");
        router.replace("/dashboard");
      } else {
        throw new Error("Error has occurred");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        `Error has occurred, please try again: ${err?.response.data.errors[0].description}`
      );
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="lg:min-h-screen bg-light-white py-3 flex flex-col items-center justify-evenly">
        <Image src="/logo-gray.png" alt="logo" width={208} height={32} />
        <Image
          src={`${isUserSignUp ? "/image-sign-up.svg" : "/image-register.svg"}`}
          alt="logo"
          width={720}
          height={isUserSignUp ? 1024 : 100}
        />
        <p className="paragraph px-6 w-[296px]">
          enabling small businesses to manage their payments efficiently.
        </p>
      </div>

      <div className="lg:w-[350px] p-4 lg:px-0 m-auto flex flex-col items-center justify-center">
        <div>
          <p className="bold-title">Welcome to Simple Biz</p>
          <p className="paragraph">
            Please fill in the required details to continue
          </p>
        </div>

        <SignUpProgressBar isUserSignUp={isUserSignUp} />

        {isUserSignUp ? (
          <UserSignUpForm handleSubmit={handleSubmit} />
        ) : (
          <BusinessSignUpForm handleSubmit={handleRegister} />
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
