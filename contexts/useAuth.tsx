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

interface AuthContextProvider {
  children: ReactNode;
}

type IAuthContext = {
  setIsRegistered: Dispatch<SetStateAction<boolean>>;
  isRegistered: boolean;
  currentUser: object | null;
};

const contextItems = {
  signUp: null,
  authenticate: null,
  logOut: null,
  user: null,
  errors: null,
  loading: null,
};

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthContextProvider: FC<AuthContextProvider> = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const userData = localStorage.getItem("currentUser");
  const user = userData ? JSON?.parse(userData) : null;

  useEffect(() => {
    setCurrentUser(user);
  }, [userData]);

  const providerValues = {
    isRegistered,
    setIsRegistered,
    currentUser,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext<IAuthContext>(AuthContext);
