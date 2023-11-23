"use client";
import { ReactNode, useState } from "react";
import { NavBar, SideBar } from "@/components/Navigation";
import { useAuthContext } from "@/contexts/useAuth";
import SignUp from "@/app/sign-up/page";

interface IClientSideLayout {
  children: ReactNode;
}

const ClientSideLayout: React.FC<IClientSideLayout> = ({ children }) => {
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);
  const { userAuth: user } = useAuthContext();

  const toggleSideBar = () => setMobileSideBarOpen(!mobileSideBarOpen);

  return (
    <>
      {user ? (
        <div className="grid lg:grid-cols-5 max-w-[1900px] m-auto relative">
          <SideBar mobileSideBarOpen={mobileSideBarOpen} />
          <div className="lg:col-span-4">
            <NavBar toggleSideBar={toggleSideBar} />
            <main>{children}</main>
          </div>
        </div>
      ) : (
        <SignUp />
      )}
    </>
  );
};

export default ClientSideLayout;
