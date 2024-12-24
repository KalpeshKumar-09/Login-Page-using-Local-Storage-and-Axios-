import { createContext, useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "./LocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = getLocalStorage();
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  const value = {
    userData,
    setUserData,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
