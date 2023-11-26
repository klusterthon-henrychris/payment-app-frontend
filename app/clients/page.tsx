"use client";
import React from "react";
import ClientsContainer from "@/components/clients/ClientsContainer";
import withAuth from "@/utils/withAuth";

const ClientsScreen: React.FC = () => {
  return <ClientsContainer />;
};

export default withAuth(ClientsScreen, "/clients");
