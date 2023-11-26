"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Form, Formik, FormikProps } from "formik";
import { useRouter } from "next/navigation";
import { CustomButton, InputGroup } from "../common";

export type InvoicePaymentFormValues = {
  emailAddress: string;
  amount: number;
};

enum PaymentScreen {
  Confirm = "Confirm your Account",
  Success = "Your account has been created",
}

const initialValues: InvoicePaymentFormValues = {
  emailAddress: "makybeky9@gmail.com",
  amount: 100,
};

const ConfirmEmailContainer: React.FC = () => {
  const [screen, setScreen] = useState<PaymentScreen>(PaymentScreen.Confirm);
  const router = useRouter();

  const handleSubmit = async () => {
    setScreen(PaymentScreen.Success);
  };

  return (
    <div className="min-h-screen bg-white w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="">
          <Image src="/logo-light.svg" alt="logo" width={208} height={32} />
        </div>

        <div className="w-screen max-w-[428px] p-4 lg:px-6 lg:py-4 m-auto flex flex-col items-center justify-center shadow-lg shadow-gray-400 rounded-lg">
          <div>
            <p className="title">{screen}</p>
          </div>

          {screen === PaymentScreen.Confirm ? (
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values }: FormikProps<InvoicePaymentFormValues>) => {
                return (
                  <Form className="w-full py-12">
                    <div className="grid gap-10">
                      <InputGroup
                        name="emailAddress"
                        type="email"
                        label="Enter your email"
                        placeholder="wwilson@email.com"
                      />
                      <CustomButton type="submit">Confirm</CustomButton>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          ) : (
            <div className="grid items-center justify-center gap-6 py-4">
              <div className="flex justify-center">
                <Image
                  src="/icon-approve.svg"
                  alt="success"
                  width={200}
                  height={200}
                />
              </div>
              <p className="paragraph text-center">
                Please sign in to start using your account
              </p>
              <CustomButton
                type="button"
                onClick={() => router.replace("/sign-in")}
              >
                Sign in
              </CustomButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmEmailContainer;
