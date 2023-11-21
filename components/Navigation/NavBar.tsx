import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar: React.FC = () => {

  return (
    <header className="w-full z-10">
      <nav className='max-w-[1440px] mx-auto flex sm:px-16 px-6 py-4 bg-transparent sticky bg-white top-0 shadow-sm z-50 h-16 flex-col justify-center'>
        <Link href="/" className="flex items-center">
          <Image src="/Avatar.png" alt="logo" width={32} height={32} />
        </Link>

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
