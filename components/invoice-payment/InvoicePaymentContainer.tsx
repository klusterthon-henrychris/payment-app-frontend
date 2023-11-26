"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Form, Formik, FormikProps } from "formik";
import { HiLockClosed } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { usePaystackPayment } from "react-paystack";
import { CustomButton, InputGroup } from "../common";

export type InvoicePaymentFormValues = {
  emailAddress: string;
  amount: number;
};

enum PaymentScreen {
  Payment = "details",
  Success = "success!",
  Error = "error!",
}

const initialValues: InvoicePaymentFormValues = {
  emailAddress: "makybeky9@gmail.com",
  amount: 100,
};

/* NOTE
 - Business sends invoice via email
 - User opens email and redirected to /invoices/payment/:id page
 -- :id is the passed with the link (?id=123)
 - Get the id using next param on this page 
 - Make an api call to getInvoiceById invoices page 
 - Endpoint returns email and amount, reference? (passed to formik)
 - User makes payment and gets email confirmation
 - Business gets their confirmation as well.
*/

const InvoicePaymentContainer: React.FC = () => {
  const [screen, setScreen] = useState<PaymentScreen>(PaymentScreen.Payment);
  const router = useRouter();

  const config = {
    reference: new Date().getTime().toString(), // id (param)
    email: initialValues.emailAddress,
    amount: initialValues.amount * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_KEY ?? "",
  };

  const onSuccess = () => {
    setScreen(PaymentScreen.Success);
  };

  const onClose = () => {
    setScreen(PaymentScreen.Error);
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = async () => {
    initializePayment(onSuccess, onClose);
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
                onClick={() => router.replace("/sign-in")}
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
              <div className="w-full flex justify-evenly">
                <button
                  type="button"
                  className="text-error"
                  onClick={() => setScreen(PaymentScreen.Payment)}
                >
                  Retry
                </button>
                <CustomButton
                  type="button"
                  onClick={() => router.replace("/sign-in")}
                >
                  Done
                </CustomButton>
              </div>
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
