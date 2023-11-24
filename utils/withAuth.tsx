"use client";
import { useLayoutEffect } from "react";
import { redirect } from "next/navigation";

export default function withAuth(Component: React.FC) {
  return function WithAuth(props: any) {
    const getIsAuthenticated =
      typeof window !== "undefined"
        ? localStorage.getItem("authenticated")
        : "";
    const session = getIsAuthenticated === "true";

    useLayoutEffect(() => {
      if (!session) {
        redirect("/sign-in");
      }
    }, []);

    if (!session) {
      return null;
    }
    return <Component {...props} />;
  };
}
