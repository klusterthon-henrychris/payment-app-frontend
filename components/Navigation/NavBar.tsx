"use client";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGetUser } from "@/store/useApi";
import withAuth from "@/utils/withAuth";

interface INavBar {
  toggleSideBar?: () => void;
}

const NavBar: React.FC<INavBar> = ({ toggleSideBar }) => {
  const { data: user } = useGetUser();
  const pathname = usePathname().slice(1);
  const pageHead = pathname.split("/")[0];

  return (
    <header className="w-full z-10 flex px-6 bg-white h-20 items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/icon-menu.svg"
          alt="logo"
          width={32}
          height={32}
          onClick={toggleSideBar}
          className="lg:hidden"
        />
        <p className="title">{pageHead}</p>
      </div>
      <nav className="flex gap-6">
        <div className="flex items-center">
          <Image
            src="/icon-notification.svg"
            alt="logo"
            width={32}
            height={32}
          />
        </div>
        <div className="flex gap-3">
          <div className="flex items-center">
            <Image src="/avatar.png" alt="logo" width={32} height={32} />
          </div>
          <div>
            <p className="font-semibold">{`${user?.firstName ?? ""} ${
              user?.lastName ?? ""
            }`}</p>
            <p className="text-xs">{user?.emailAddress ?? ""}</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default withAuth(NavBar);
