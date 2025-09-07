import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { onAuthStateChanged, type User } from "firebase/auth";
import { registerUser, loginUser, logoutUser } from "../services/auth";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  signup: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u) {
        const minimal = {
          uid: u.uid,
          email: u.email,
          displayName: u.displayName ?? null,
        };
        localStorage.setItem("user", JSON.stringify(minimal));
      } else {
        localStorage.removeItem("user");
      }
    });
    return () => unsub();
  }, []);

  const signup = async (name: string, email: string, password: string) => {
    await registerUser(name, email, password);

    await logoutUser();
  };

  const login = async (email: string, password: string) => {
    await loginUser(email, password);
  };

  const logout = async () => {
    await logoutUser();
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
