"use client";
import React from "react";
import Invoices from "@/components/Invoices/Invoices";
import withAuth from "@/utils/withAuth";

const InvoicesScreen: React.FC = () => {
  return <Invoices />;
};

export default withAuth(InvoicesScreen);
