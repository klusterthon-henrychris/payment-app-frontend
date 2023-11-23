"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface INavBar {
  toggleSideBar: () => void;
}

const NavBar: React.FC<INavBar> = ({ toggleSideBar }) => {
  const pathname = usePathname().slice(1);

  return (
    <header className="w-full z-10 flex px-6 sticky bg-white top-0 h-20 items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          src="/icon-menu.svg"
          alt="logo"
          width={32}
          height={32}
          onClick={toggleSideBar}
          className="lg:hidden"
        />
        <p className="title">{pathname}</p>
      </div>
      <nav className="flex gap-6">
        <Link href="/" className="flex items-center">
          <Image
            src="/icon-notification.svg"
            alt="logo"
            width={32}
            height={32}
          />
        </Link>
        <div className="flex gap-3">
          <Link href="/" className="flex items-center">
            <Image src="/avatar.png" alt="logo" width={32} height={32} />
          </Link>
          <div>
            <p className="font-semibold">Wade Warren</p>
            <p className="text-xs">Wade@email.com</p>
          </div>
        </div>

        {/* <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
      /> */}
      </nav>
    </header>
  );
};

export default NavBar;
