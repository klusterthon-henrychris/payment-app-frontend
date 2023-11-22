"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideBarItems } from "@/constants";

interface ISideBar {
  mobileSideBarOpen: boolean;
}

const SideBar: React.FC<ISideBar> = ({ mobileSideBarOpen }) => {
  const pathname = usePathname();

  return (
    <div
      className={`h-full px-5 ${
        mobileSideBarOpen ? "block" : "hidden"
      } lg:block`}
    >
      <p className="title h-20 flex gap-3 items-center">
        <Image src="/logo.svg" alt="logo" width={32} height={32} />
        Product name
      </p>
      {sideBarItems.map((sideBarItems) => {
        const { displayName, Icon, path } = sideBarItems;
        const activeNav = pathname === path;
        return (
          <Link href={path} key={path}>
            <div
              className={`flex p-4 gap-3 font-medium text-sm w-full hover:opacity-90 ${
                activeNav && "active-nav"
              }`}
            >
              <Icon fill={activeNav ? "#008678" : "#1E1E1E"} />
              {displayName}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
