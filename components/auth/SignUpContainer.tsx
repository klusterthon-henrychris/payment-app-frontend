"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/utils/api";
import { useAuthContext } from "@/contexts/useAuth";
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
        await localStorage.setItem("userData", JSON?.stringify(res.data.data));
      } else {
        throw new Error("Error has occurred");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleRegister = async (values: BusinessSignUpFormValues) => {
    try {
      const res = await api.post("business", {
        ...values,
        cacNumber: "0123456789012",
      });
      if (res?.data?.success) {
        const userData = localStorage.getItem("userData");
        const user = userData ? JSON?.parse(userData) : {};
        console.log(res, "res");

        await localStorage.setItem(
          "currentUser",
          JSON?.stringify({
            userId: user.userId,
            role: user.role,
            businessId: res.data.data.businessId,
          })
        );
        setIsUserSignUp(true);
        router.replace("/dashboard");
      } else {
        throw new Error("Error has occurred");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="lg:min-h-screen bg-light-white py-3 flex flex-col items-center justify-evenly">
        <Image src="/logo-gray.png" alt="logo" width={208} height={32} />
        <Image src="/image-sign-up.svg" alt="logo" width={720} height={1024} />
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
