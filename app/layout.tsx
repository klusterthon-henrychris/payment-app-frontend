import { Metadata } from "next/types";
import AuthContextProvider from "@/contexts/useAuth";
import ClientSideLayout from "@/components/common/ClientSideLayout";
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
      <body>
        <AuthContextProvider>
          <ClientSideLayout children={children} />
        </AuthContextProvider>
      </body>
    </html>
  );
}
