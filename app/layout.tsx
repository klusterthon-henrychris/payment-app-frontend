import type { Metadata } from "next";
import "./globals.css";
import { NavBar, SideBar } from "@/components";

export const metadata: Metadata = {
  title: "Payment Application",
  description:
    "An application that enables small businesses to manage their payments efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="grid grid-cols-5">
        <SideBar />
        <div className="col-span-4">
          <NavBar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
