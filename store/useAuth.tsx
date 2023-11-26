"use client";
import { createContext, FC, ReactNode, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { usePathname, useRouter } from "next/navigation";
import { unprotectedRoutes } from "@/components/common/ClientSideLayout";

interface AuthContextProvider {
  children: ReactNode;
}

type IAuthContext = { signOut: () => void };

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider: FC<AuthContextProvider> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const signOut = () => {
    localStorage.clear();
    !unprotectedRoutes.includes(pathname) && router.push("/sign-in");
  };

  const checkSession = () => {
    const token = localStorage.getItem("accessToken");

    const decodedData = token && jwtDecode(token);
    if (
      !token &&
      decodedData &&
      (decodedData?.exp as any) < Date.now() / 1000
    ) {
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
