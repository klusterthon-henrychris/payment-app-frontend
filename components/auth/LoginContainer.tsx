"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import api from "@/utils/api";
import { CustomButton, InputGroup } from "../common";

export type UserSignUpFormValues = {
  emailAddress: string;
  password: string;
};

const initialValues: UserSignUpFormValues = {
  emailAddress: "",
  password: "",
};

const LoginContainer: React.FC = () => {
  const router = useRouter();
  const [visibility, setVisibility] = useState(false);

  const handleSubmit = async (values: UserSignUpFormValues) => {
    try {
      const res = await api.post("auth/login", values);
      if (res?.data?.success) {
        localStorage.setItem("accessToken", res.data.data.accessToken);
        localStorage.setItem(
          "currentUser",
          await JSON?.stringify({
            userId: res.data.data.id,
            role: res.data.data.role,
          })
        );
        console.log(res, "res");

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
        <Image src="/image-sign-in.svg" alt="logo" width={720} height={1024} />
        <p className="paragraph px-6 w-[296px]">
          enabling small businesses to manage their payments efficiently.
        </p>
      </div>

      <div className="lg:w-[350px] p-4 lg:px-0 m-auto flex flex-col items-center justify-center">
        <div>
          <p className="bold-title">Welcome to Simple Biz</p>
          <p className="paragraph">Please sign to continue</p>
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }: FormikProps<UserSignUpFormValues>) => {
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
                  <CustomButton type="submit">Continue</CustomButton>
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
