"use client";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";
import { unprotectedRoutes } from "@/components/common/ClientSideLayout";

export default function withAuth(Component: React.FC, pathname: string) {
  return function WithAuth(props: any) {
    const getIsAuthenticated =
      typeof window !== "undefined"
        ? localStorage.getItem("authenticated")
        : "";
    const session = getIsAuthenticated === "true";

    useLayoutEffect(() => {
      if (!session) {
        unprotectedRoutes.includes(pathname) && redirect("/sign-in");
      }
    }, []);

    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}
