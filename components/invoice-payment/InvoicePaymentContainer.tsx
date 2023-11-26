"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Form, Formik, FormikProps } from "formik";
import { CustomButton, InputGroup } from "../common";
import { HiLockClosed } from "react-icons/hi";
import { useRouter } from "next/navigation";

export type InvoicePaymentFormValues = {
  emailAddress: string;
  amount: string;
};

enum PaymentScreen {
  Payment = "details",
  Success = "success!",
  Error = "error!",
}

const initialValues: InvoicePaymentFormValues = {
  emailAddress: "",
  amount: "",
};

const InvoicePaymentContainer: React.FC = () => {
  const [screen, setScreen] = useState<PaymentScreen>(PaymentScreen.Payment);
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
            <p className="title">Payment {screen}</p>
          </div>

          {screen === PaymentScreen.Payment ? (
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values }: FormikProps<InvoicePaymentFormValues>) => {
                return (
                  <Form className="w-full py-6">
                    <div className="grid gap-6">
                      <InputGroup
                        name="emailAddress"
                        type="email"
                        label="Email"
                        placeholder="wwilson@email.com"
                        disabled
                      />
                      <InputGroup
                        name="amount"
                        label="Amount"
                        placeholder="₦6800"
                        disabled
                      />
                      <CustomButton type="submit">
                        Pay with Paystack
                      </CustomButton>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          ) : screen === PaymentScreen.Success ? (
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
                We have successfully made payment of ₦6800 for invoice #1234
              </p>
              <CustomButton
                type="button"
                onClick={() => {
                  // router.replace("/sign-in")
                  setScreen(PaymentScreen.Error);
                }}
              >
                Done
              </CustomButton>
            </div>
          ) : (
            <div className="grid items-center justify-center gap-6 py-4">
              <div className="flex justify-center">
                <Image
                  src="/icon-error.png"
                  alt="success"
                  width={200}
                  height={200}
                />
              </div>
              <p className="paragraph text-center">
                Sorry we could not complete your payment, please try again
                later.
              </p>
              <CustomButton
                type="button"
                onClick={() => router.replace("/sign-in")}
              >
                Done
              </CustomButton>
            </div>
          )}
        </div>
        <p className="paragraph flex items-center gap-[5px]">
          <HiLockClosed /> <span>Secure payment</span>
        </p>
      </div>
    </div>
  );
};

export default InvoicePaymentContainer;
