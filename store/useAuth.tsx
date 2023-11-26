"use client";
import { createContext, FC, ReactNode, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";

interface AuthContextProvider {
  children: ReactNode;
}

type IAuthContext = { signOut: () => void };

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider: FC<AuthContextProvider> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const invoiceId = pathname.split("/")[2];

  const unprotectedRoutes = [
    "/sign-in",
    "/sign-up",
    `/pay-invoice/${invoiceId}`,
  ];

  const signOut = () => {
    if (unprotectedRoutes.includes(pathname)) {
      return;
    } else {
      localStorage.clear();
      router.push("/sign-in");
    }
  };

  const checkSession = () => {
    const token = localStorage.getItem("accessToken");

    const decodedData = token && jwtDecode(token);
    if (token && decodedData && (decodedData?.exp as any) < Date.now() / 1000) {
      signOut();
    }
  };

  useEffect(() => {
    checkSession();
  }, [pathname]);

  const providerValues = { signOut };

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext<IAuthContext>(AuthContext);
