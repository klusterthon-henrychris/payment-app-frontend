"use client";
import React from "react";
import PaymentsContainer from "@/components/payments/PaymentsContainer";
import withAuth from "@/utils/withAuth";

const Payments: React.FC = () => {
  return <PaymentsContainer />;
};

export default withAuth(Payments, "/payments");
