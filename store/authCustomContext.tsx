import React, { useState, createContext, useContext, ReactNode } from "react";

interface AuthContextType {
    data: {
      isLogin: boolean;
      userName: string;
      password: string;
      role: string;
      phone: string[];
    };
    setData: React.Dispatch<
      React.SetStateAction<{
        isLogin: boolean;
        userName: string;
        password: string;
        role: string;
        phone: string[];
      }>
    >;
  }
  
  interface AuthContextData {
    isLogin: boolean;
    userName: string;
    password: string;
    role: string;
    phone: string[];
  }
  
  interface AuthContextType {
    data: AuthContextData;
    setData: React.Dispatch<React.SetStateAction<AuthContextData>>;
  }

  export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProps) {
    const [state, setState] = useState<AuthContextData>({
        isLogin: false,
        userName: "ra",
        password: "tr",
        role: "admin",
        phone: [],
      });


      return (
        <AuthContext.Provider value={{ data: state, setData: setState }}>
          {children}
        </AuthContext.Provider>
      );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  const { data } = context;
  const { userName, isLogin } = data;

  return {
    userName,
    isLogin,
  };
}
