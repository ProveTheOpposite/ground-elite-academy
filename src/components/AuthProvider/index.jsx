"use client";

import useAuthState from "@/hooks/useAuthState";
import { isLoginAtom } from "@/state/atoms/isLogin";
import { useSetAtom } from "jotai";

const AuthProvider = ({ children }) => {
  const setIsLogin = useSetAtom(isLoginAtom);
  useAuthState(setIsLogin);

  return <>{children}</>;
};

export default AuthProvider;
