import { Metadata } from "next/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContextProvider from "@/store/useAuth";
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
        <ToastContainer />
        <AuthContextProvider>
          <ClientSideLayout>{children}</ClientSideLayout>
        </AuthContextProvider>
      </body>
    </html>
  );
}
