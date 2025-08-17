"use client";

import { useEffect } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

const useAuthState = (setIsLogin) => {
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLogin(!!user);
    });
    return () => unsubscribe();
  }, []);
};

export default useAuthState;
