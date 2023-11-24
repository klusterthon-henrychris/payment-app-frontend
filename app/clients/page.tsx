"use client";
import React from "react";
import Clients from "@/components/clients/Client";
import withAuth from "@/utils/withAuth";

const ClientsScreen: React.FC = () => {
  return <Clients />;
};

export default withAuth(ClientsScreen);
