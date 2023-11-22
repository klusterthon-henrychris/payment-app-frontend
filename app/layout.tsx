import Head from "next/head";
import { Metadata } from "next/types";
import ClientSideLayout from "@/components/utils/ClientSideLayout";
import "./globals.css";

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
      <Head>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <body>
        <ClientSideLayout children={children} />
      </body>
    </html>
  );
}
