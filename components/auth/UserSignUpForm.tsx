import React, { useState } from "react";
import { Form, Formik, FormikProps } from "formik";
import { CustomButton, InputGroup } from "@/components/common";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";

export type UserSignUpFormValues = {
  email: string;
  name: string;
  phone: string;
  password: string;
  address: string;
};

interface IUserSignUpForm {
  handleSubmit: (values: UserSignUpFormValues) => void;
}

const initialValues: UserSignUpFormValues = {
  email: "",
  name: "",
  phone: "",
  password: "",
  address: "",
};

const UserSignUpForm: React.FC<IUserSignUpForm> = ({ handleSubmit }) => {
  const [visibility, setVisibility] = useState(false);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }: FormikProps<UserSignUpFormValues>) => {
        return (
          <Form className="w-full py-6">
            <div className="grid gap-6">
              <InputGroup
                name="name"
                label="Full name"
                placeholder="Your full name"
              />
              <InputGroup
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
              />
              <InputGroup
                name="phone"
                type="number"
                label="Phone number"
                placeholder="Phone number"
              />
              <InputGroup
                name="address"
                label="Address"
                placeholder="Your address"
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
  );
};

export default UserSignUpForm;
