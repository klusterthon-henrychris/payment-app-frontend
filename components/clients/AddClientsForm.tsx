import { Form, Formik } from "formik";
import React from "react";
import { CustomButton, InputGroup } from "../common";

export type AddClientsFormValues = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  address: string;
  businessName: string;
};

interface IAddClientsForm {
  handleSubmit: (values: AddClientsFormValues) => void;
  buttonText?: string;
  oldValues?: AddClientsFormValues;
  disableButton?: boolean;
}

const initialValues: AddClientsFormValues = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  address: "",
  businessName: "",
};

const AddClientsForm: React.FC<IAddClientsForm> = ({
  handleSubmit,
  buttonText,
  oldValues,
}) => {
  return (
    <Formik
      initialValues={oldValues ? oldValues : initialValues}
      onSubmit={handleSubmit}
    >
      {({ values }) => {
        const disabled = Object.values(values).some((value) => value === "");

        return (
          <Form className="w-full py-6">
            <div className="grid gap-6">
              <InputGroup
                name="firstName"
                label="First name"
                placeholder="First name"
              />
              <InputGroup
                name="lastName"
                label="Last name"
                placeholder="Last name"
              />
              <InputGroup
                name="emailAddress"
                label="Email"
                placeholder="Email"
                type="email"
              />
              <InputGroup
                name="address"
                label="Billing address"
                placeholder="Billing address"
              />
              <InputGroup
                name="businessName"
                label="Business name"
                placeholder="Business name"
              />

              <CustomButton type="submit" disabled={disabled}>
                {buttonText ?? "Continue"}
              </CustomButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddClientsForm;
