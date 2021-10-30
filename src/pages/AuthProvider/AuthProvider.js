import React from "react";
import { createContext } from "react";
import { useFirebase } from "../../Hooks/useFirebase";
export const AuthContextAPI = createContext();

const AuthProvider = ({ children }) => {
  const allContent = useFirebase();

  return (
    <AuthContextAPI.Provider value={allContent}>
      {children}
    </AuthContextAPI.Provider>
  );
};

export default AuthProvider;
