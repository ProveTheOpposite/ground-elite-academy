"use client";

import useAuthState from "@/hooks/useAuthState";

const AuthProvider = ({ children }) => {
  const { isLogin } = useAuthState();

  console.log(isLogin ? "Connecté" : "Pas connecté");

  return <>{children}</>;
};

export default AuthProvider;
