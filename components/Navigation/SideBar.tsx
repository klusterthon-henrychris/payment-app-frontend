"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideBarItems } from "@/constants";
import { useAuthContext } from "@/store/useAuth";
import { useGetUser } from "@/store/useApi";
import DropdownMenu from "../common/DropdownMenu";
import withAuth from "@/utils/withAuth";

interface ISideBar {
  mobileSideBarOpen?: boolean;
}

const SideBar: React.FC<ISideBar> = ({ mobileSideBarOpen }) => {
  const pathname = usePathname();
  const { signOut } = useAuthContext();
  const { data: user } = useGetUser();

  return (
    <div
      className={`min-h-screen px-5 bg-white ${
        mobileSideBarOpen ? "block" : "hidden"
      } lg:block`}
    >
      <div className="h-20 flex items-center">
        <Link href="/">
          <Image src="/logo-light.svg" alt="logo" width={208} height={32} />{" "}
        </Link>
      </div>

      <div className="flex-grow flex flex-col justify-between h-full">
        <div>
          {sideBarItems.map((sideBarItems) => {
            const { displayName, Icon, path } = sideBarItems;
            const activeNav = pathname.includes(path);
            return (
              <Link href={path} key={path}>
                <nav
                  className={`flex p-4 gap-3 font-medium text-sm w-full hover:opacity-90 ${
                    activeNav && "active-nav"
                  }`}
                >
                  <Icon fill={activeNav ? "#008678" : "#1E1E1E"} />
                  {displayName}
                </nav>
              </Link>
            );
          })}
        </div>
        <div className="h-20 flex items-center shadow-lg rounded-lg px-3 bg-white">
          <div className="flex items-center flex-col justify-center">
            <Image src="/logo-light.svg" alt="logo" width={208} height={32} />
            <p>{user?.emailAddress ?? ""}</p>
          </div>
          <DropdownMenu
            title={
              <Image
                src="/icon-action.svg"
                alt="action toggle"
                width={20}
                height={32}
              />
            }
            menuItems={[{ title: "Sign out", onClick: () => signOut() }]}
            menuItemsClassName="origin-bottom-left left-5 bottom-10"
          />
        </div>
      </div>
    </div>
  );
};

export default withAuth(SideBar);
