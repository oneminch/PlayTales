import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "@mantine/hooks";
import type { ChildrenNodes } from "@/types";
import { useQueryClient } from "@tanstack/react-query";

const defaultAuthContext = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {}
};

export const AuthCtx = createContext(defaultAuthContext);

export const AuthProvider = ({ children }: ChildrenNodes) => {
  const [localStorage, setLocalStorage] = useLocalStorage({
    key: "auth-context",
    defaultValue: defaultAuthContext
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    localStorage.isLoggedIn
  );

  useEffect(() => {
    setIsLoggedIn(localStorage.isLoggedIn);
  }, []);

  const queryClient = useQueryClient();
  useEffect(() => {
    if (isLoggedIn) {
      queryClient.refetchQueries();
    } else {
      queryClient.resetQueries();
    }
  }, [isLoggedIn]);

  const logIn = () => {
    setIsLoggedIn(true);

    setLocalStorage((prevCtx) => ({
      ...prevCtx,
      isLoggedIn: true
    }));
  };

  const logOut = () => {
    setIsLoggedIn(false);

    setLocalStorage((prevCtx) => ({
      ...prevCtx,
      isLoggedIn: false
    }));
  };

  const value = {
    isLoggedIn,
    logIn,
    logOut
  };

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};

export const useAuthContext = () => useContext(AuthCtx);
