"use client";
import React from "react";
import Catalogue from "@/components/Catalogue/Catalogue";
import withAuth from "@/utils/withAuth";

const CatalogueScreen: React.FC = () => {
  return <Catalogue />;
};

export default withAuth(CatalogueScreen);
