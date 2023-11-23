import React from "react";
import { Field, Form, Formik, FormikProps } from "formik";
import { CustomButton, InputGroup } from "@/components/common";

export type BusinessSignUpFormValues = {
  businessAddress: string;
  businessName: string;
  rcNumber: string;
  industry: string;
  businessDescription: string;
  cacNumber: string;
};

interface IBusinessSignUpForm {
  handleSubmit: (values: BusinessSignUpFormValues) => void;
}

const initialValues: BusinessSignUpFormValues = {
  businessAddress: "",
  businessName: "",
  rcNumber: "",
  industry: "",
  businessDescription: "",
  cacNumber: "0123456789012",
};

const BusinessSignUpForm: React.FC<IBusinessSignUpForm> = ({
  handleSubmit,
}) => {
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }: FormikProps<BusinessSignUpFormValues>) => {
        return (
          <Form className="w-full py-6">
            <div className="grid gap-6">
              <InputGroup
                name="businessName"
                label="Business name"
                placeholder="Business name"
              />
              <InputGroup
                name="businessAddress"
                label="Business address"
                placeholder="Business address"
              />
              <InputGroup
                name="rcNumber"
                label="RC Number"
                placeholder="Registration number"
              />
              <div className="flex flex-col w-full gap-1">
                <label className="font-bold text-sm">
                  Business description
                </label>
                <Field
                  as="textarea"
                  name="businessDescription"
                  className="border rounded-lg h-20 px-4 py-2"
                  placeholder="A brief description about your business"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label className="font-bold text-sm">Industry</label>
                <Field
                  as="select"
                  name="industry"
                  className="border rounded-lg h-10 px-4"
                  placeholder="Select industry"
                >
                  <option value="">Select</option>
                  <option value="Tech">Tech</option>
                </Field>
              </div>

              <CustomButton type="submit">Continue</CustomButton>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BusinessSignUpForm;
