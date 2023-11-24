"use client";
import React from "react";
import DashboardContainer from "@/components/dashboard/DashboardContainer";
import withAuth from "@/utils/withAuth";

function Dashboard() {
  return <DashboardContainer />;
}

export default withAuth(Dashboard);
