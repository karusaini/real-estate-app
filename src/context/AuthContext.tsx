// src/context/AuthContext.tsx
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
        // minimal user info for localStorage (avoid storing full firebase User)
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
    // registerUser will create and set displayName
    await registerUser(name, email, password);
    // NOTE: createUserWithEmailAndPassword auto signs-in the user.
    // If you want user to login manually (assignment required redirect to login), sign them out:
    await logoutUser();
  };

  const login = async (email: string, password: string) => {
    await loginUser(email, password);
    // onAuthStateChanged will update user & localStorage
  };

  const logout = async () => {
    await logoutUser();
    // onAuthStateChanged will clear user & localStorage
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
