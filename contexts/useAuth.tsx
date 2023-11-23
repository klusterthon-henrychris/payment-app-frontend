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
  //   signUp: () => void;
  //   authenticate: () => void;
  //   logOut: () => void;
  userAuth: object | null;
  setUserAuth: Dispatch<SetStateAction<object | null>>;
  setIsRegistered: Dispatch<SetStateAction<boolean>>;
  isRegistered: boolean;
  //   loading: boolean;
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
  const [userAuth, setUserAuth] = useState<object | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState({
    login: { code: "" },
    register: { code: "" },
    logout: { code: "" },
  });

  const signUp = async () => {
    try {
      setLoading(true);
      setUserAuth({ auth: true });
    } catch (err: any) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const authenticate = async () => {
    try {
      setLoading(true);
      setUserAuth({ auth: true });
    } catch (err) {
      console.error(err, "error");
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    try {
      setUserAuth(null);
    } catch (err) {
      console.error(err, "error");
    }
  };

  useEffect(() => {
    const unsubscribe = () => {};
    return unsubscribe;
  }, []);

  const providerValues = {
    // signUp,
    // authenticate,
    // logOut,
    userAuth,
    isRegistered,
    setUserAuth,
    setIsRegistered,
    // errors,
    // loading,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext<IAuthContext>(AuthContext);
