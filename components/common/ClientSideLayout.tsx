"use client";
import { ReactNode, useEffect, useState } from "react";
import { NavBar, SideBar } from "@/components/Navigation";
import { usePathname, useRouter } from "next/navigation";

interface IClientSideLayout {
  children: ReactNode;
}

const ClientSideLayout: React.FC<IClientSideLayout> = ({ children }) => {
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);
  const pathname = usePathname();
  const isRegistered = localStorage.getItem("authenticated") === "true";
  const excludeSidebarPages = ["/sign-in", "/sign-up"];
  const shouldShowSidebar = !excludeSidebarPages.includes(pathname);

  const toggleSideBar = () => setMobileSideBarOpen(!mobileSideBarOpen);
  const router = useRouter();

  useEffect(() => {
    if (!isRegistered) {
      router.push("/sign-in");
    }
  }, []);

  return (
    <div
      className={`grid ${
        shouldShowSidebar && "lg:grid-cols-5"
      } max-w-[1900px] m-auto relative`}
    >
      {shouldShowSidebar && <SideBar mobileSideBarOpen={mobileSideBarOpen} />}
      <div className="lg:col-span-4">
        {shouldShowSidebar && <NavBar toggleSideBar={toggleSideBar} />}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default ClientSideLayout;
