"use client";
import { ReactNode, useState } from "react";
import { NavBar, SideBar } from "@/components/Navigation";

interface IClientSideLayout {
  children: ReactNode;
}

const ClientSideLayout: React.FC<IClientSideLayout> = ({ children }) => {
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);

  const toggleSideBar = () => setMobileSideBarOpen(!mobileSideBarOpen);

  return (
    <div className="grid lg:grid-cols-5 max-w-[1900px] m-auto relative">
      <SideBar mobileSideBarOpen={mobileSideBarOpen} />
      <div className="lg:col-span-4">
        <NavBar toggleSideBar={toggleSideBar} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default ClientSideLayout;
