"use client";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

interface AuthContextProvider {
  children: ReactNode;
}

type IAuthContext = {
  setIsRegistered: Dispatch<SetStateAction<boolean>>;
  isRegistered: boolean;
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider: FC<AuthContextProvider> = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();

  const checkSession = () => {
    const token = localStorage.getItem("accessToken");

    const decodedData = token && jwtDecode(token);
    if (decodedData && (decodedData?.exp as any) < Date.now() / 1000) {
      localStorage.clear();
      router.push("/sign-in");
    }
  };

  useEffect(() => {
    checkSession();
  }, []);

  const providerValues = {
    isRegistered,
    setIsRegistered,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext<IAuthContext>(AuthContext);
