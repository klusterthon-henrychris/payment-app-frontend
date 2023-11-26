"use client";
import React, { useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import { CustomButton, InputGroup } from "@/components/common";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export type UserSignUpFormValues = {
  emailAddress: string;
  firstName: string;
  lastName: string;
  password?: string;
  address: string;
  role?: string;
};

interface IUserSignUpForm {
  handleSubmit: (values: UserSignUpFormValues) => void;
  oldValues?: UserSignUpFormValues;
}

const initialValues: UserSignUpFormValues = {
  emailAddress: "",
  firstName: "",
  lastName: "",
  password: "",
  address: "",
  role: "Admin",
};

const UserSignUpForm: React.FC<IUserSignUpForm> = ({
  handleSubmit,
  oldValues,
}) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Formik
      initialValues={oldValues ? oldValues : initialValues}
      onSubmit={handleSubmit}
    >
      {({ values }: FormikProps<UserSignUpFormValues>) => {
        const disabled = Object.values(values).some((value) => value === "");

        return (
          <Form className="w-full py-6">
            <div className="grid gap-6">
              <InputGroup
                name="firstName"
                label="First name"
                placeholder="Your first name"
              />
              <InputGroup
                name="lastName"
                label="Last name"
                placeholder="Your last name"
              />
              <InputGroup
                name="emailAddress"
                type="email"
                label="Email"
                placeholder="Email"
              />
              <InputGroup
                name="address"
                label="Address"
                placeholder="Your address"
              />
              {!oldValues && (
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
              )}
              <CustomButton type="submit" disabled={disabled}>
                Continue
              </CustomButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserSignUpForm;
