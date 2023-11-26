"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { toast } from "react-toastify";
import api from "@/utils/api";
import { CustomButton, InputGroup } from "../common";

export type UserSignInFormValues = {
  emailAddress: string;
  password: string;
};

const initialValues: UserSignInFormValues = {
  emailAddress: "",
  password: "",
};

const LoginContainer: React.FC = () => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);

  const handleSubmit = async (values: UserSignInFormValues) => {
    try {
      const res = await api.post("auth/login", values);
      if (res?.data?.success) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem("authenticated", "true");

        router.replace("/dashboard");
      } else {
        toast.error("Error has occurred, please try again");
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
        <Image src="/image-sign-in.svg" alt="logo" width={720} height={1024} />
        <p className="paragraph px-6 w-[296px]">
          enabling small businesses to manage their payments efficiently.
        </p>
      </div>

      <div className="lg:w-[350px] p-4 lg:px-0 m-auto flex flex-col items-center justify-center">
        <div>
          <p className="bold-title">Welcome to Simple Biz</p>
          <p className="paragraph mt-3 ml-1">Please sign to continue</p>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }: FormikProps<UserSignInFormValues>) => {
            const disabled = Object.values(values).some(
              (value) => value === ""
            );

            return (
              <Form className="w-full py-6">
                <div className="grid gap-6">
                  <InputGroup
                    name="emailAddress"
                    type="email"
                    label="Email"
                    placeholder="Email"
                  />
                  <div className="relative">
                    <InputGroup
                      name="password"
                      label="Password"
                      placeholder="Password"
                      type={visibility ? "text" : "password"}
                    />
                    <span
                      className="absolute right-4 top-[37px]"
                      onClick={() => setVisibility(!visibility)}
                    >
                      {visibility ? <HiOutlineEye /> : <HiOutlineEyeOff />}
                    </span>
                  </div>
                  <CustomButton type="submit" disabled={disabled}>
                    Continue
                  </CustomButton>
                </div>
              </Form>
            );
          }}
        </Formik>

        <p className="paragraph mt-14">
          Have an account?{" "}
          <Link href="/sign-up" className="text-primary font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginContainer;
