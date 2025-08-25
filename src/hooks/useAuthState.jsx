"use client";

import { useEffect, useState } from "react";

import { app, auth } from "@/server/firebase";
import { onAuthStateChanged } from "firebase/auth";

const useAuthState = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const isLogin = !!user;

  // loading = true quand on est en train de vérifier l'état de connexion
  return { user, loading, isLogin };
};

export default useAuthState;
