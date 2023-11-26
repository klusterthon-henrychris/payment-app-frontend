"use client";
import React from "react";
import withAuth from "@/utils/withAuth";
import SettingsContainer from "@/components/settings/SettingsContainer";

const SettingsPage: React.FC = () => {
  return <SettingsContainer />;
};

export default withAuth(SettingsPage, "/settings");
