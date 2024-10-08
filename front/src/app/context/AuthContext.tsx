'use client'

import { useState, useEffect, useContext, createContext } from 'react';
import { IUserData } from '../interfaces/ILogin';

export interface AuthContextProps {
  userData: IUserData | null;
  setUserData: (userData: IUserData | null) => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IUserData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedUserData = localStorage.getItem('userToken');
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData);
        setUserData(parsedUserData);
      }
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem('userToken', JSON.stringify({ token: userData.token, user: userData.user }));
    } else {
      localStorage.removeItem('userToken');
    }
  }, [userData]);

  return (
    <AuthContext.Provider value={{ setUserData, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
