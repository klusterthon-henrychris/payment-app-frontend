"use client";
import React from "react";
import withAuth from "@/utils/withAuth";
import ClientContainer from "../../../components/clients/ClientContainer";

const ClientPage: React.FC = () => {
  return <ClientContainer />;
};

export default withAuth(ClientPage);
