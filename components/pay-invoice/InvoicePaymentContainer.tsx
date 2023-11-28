"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Form, Formik, FormikProps } from "formik";
import { HiLockClosed } from "react-icons/hi";
import { useParams, useRouter } from "next/navigation";
import { usePaystackPayment } from "react-paystack";
import { CustomButton, InputGroup } from "../common";
import api from "@/utils/api";
import { toast } from "react-toastify";
import { getClientById } from "@/contexts/apiContext";

export type InvoicePaymentFormValues = {
  emailAddress: string;
  amount: number | string;
};

enum PaymentScreen {
  Payment = "details",
  Success = "success!",
  Error = "error!",
}

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
  const [invoiceDetail, setInvoiceDetail] =
    useState<InvoicePaymentFormValues>();
  const router = useRouter();
  const param = useParams();
  const invoiceId = param?.id;

  const initialValues: InvoicePaymentFormValues = {
    emailAddress: invoiceDetail?.emailAddress || "",
    amount: invoiceDetail?.amount ?? "",
  };

  const getInvoiceDetail = async () => {
    try {
      const res = await api.get(`invoices/${invoiceId}`);
      if (res?.data?.success) {
        const client = await getClientById(res?.data?.data?.clientId);
        setInvoiceDetail({
          ...res?.data?.data,
          emailAddress: client?.data?.emailAddress,
        });
      } else {
        toast.error("Error has occurred, please try again");
        throw new Error("Error has occurred");
      }
    } catch (err: any) {
      console.error(err);
      toast.error(
        `Error has occurred, please try again: ${err?.response?.data?.errors[0]?.description}`
      );
    }
  };

  useEffect(() => {
    getInvoiceDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const config = {
    reference: invoiceId as string,
    email: initialValues.emailAddress,
    amount: Number(initialValues.amount) * 100,
    publicKey: "pk_test_e4b1f6a31bb0eae1313d3293ebd4a5fb39101bf1",
    // publicKey: process?.env?.NEXT_PUBLIC_PAYSTACK_KEY ?? "",
  };

  const initializePayment = usePaystackPayment(config);

  const onSuccess = () => {
    setScreen(PaymentScreen.Success);
  };

  const onClose = () => {
    setScreen(PaymentScreen.Error);
  };

  const handleSubmit = async (values: InvoicePaymentFormValues) => {
    initializePayment(onSuccess, onClose);
  };

  return (
    <div className="min-h-screen bg-white w-full flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="">
          <Image src="/logo-light.svg" alt="logo" width={208} height={32} />
        </div>

        <div className="w-screen max-w-[428px] p-4 lg:px-6 lg:py-4 m-auto flex flex-col items-center justify-center shadow-lg shadow-gray-400 rounded-lg">
          <div>
            <p className="title">Payment {screen}</p>
          </div>

          {screen === PaymentScreen.Payment ? (
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              enableReinitialize
            >
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
                Transaction log updated successfully
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
