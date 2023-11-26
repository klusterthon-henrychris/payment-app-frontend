"use client";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavBar, SideBar } from "@/components/Navigation";

// export const unprotectedRoutes = ["/sign-in", "/sign-up", "/pay-invoice/"];

interface IClientSideLayout {
  children: ReactNode;
}

const ClientSideLayout: React.FC<IClientSideLayout> = ({ children }) => {
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);
  const pathname = usePathname();
  const invoiceId = pathname.split("/")[2];
  const queryClient = new QueryClient();

  const unprotectedRoutes = [
    "/sign-in",
    "/sign-up",
    `/pay-invoice/${invoiceId}`,
  ];

  const shouldShowSidebar = !unprotectedRoutes.includes(pathname);

  const toggleSideBar = () => setMobileSideBarOpen(!mobileSideBarOpen);

  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`grid ${
          shouldShowSidebar && "lg:grid-cols-5"
        } max-w-[1900px] m-auto relative`}
      >
        {shouldShowSidebar && <SideBar mobileSideBarOpen={mobileSideBarOpen} />}
        <div className="lg:col-span-4">
          {shouldShowSidebar && <NavBar toggleSideBar={toggleSideBar} />}
          <main>
            <div>{children}</div>
          </main>
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default ClientSideLayout;
