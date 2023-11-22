"use client";
import { useState } from "react";
import Head from "next/head";
import { NavBar, SideBar } from "@/components";
import "./globals.css";

// export const metadata: Metadata = {
//   title: "Payment Application",
//   description:
//     "An application that enables small businesses to manage their payments efficiently",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSideBarOpen, setMobileSideBarOpen] = useState(false);

  const toggleSideBar = () => setMobileSideBarOpen(!mobileSideBarOpen);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <body>
        <div className="grid lg:grid-cols-5 max-w-[1900px] m-auto relative">
          <SideBar mobileSideBarOpen={mobileSideBarOpen} />
          <div className="lg:col-span-4">
            <NavBar toggleSideBar={toggleSideBar} />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
