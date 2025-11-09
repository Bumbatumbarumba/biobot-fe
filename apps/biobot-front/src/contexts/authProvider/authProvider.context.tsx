// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import type {
  AuthContextType,
  GoogleProfile,
} from './authProvider.definitions';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<GoogleProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('google_token');
    if (storedToken) {
      try {
        const decoded: any = storedToken;
        const { name, email, picture } = decoded;
        setToken(storedToken);
        setUser({ name, email, picture });
      } catch (e) {
        console.error('Failed to decode stored token:', e);
        logout();
      }
    }
  }, []);

  const login = (jwt: string) => {
    localStorage.setItem('google_token', jwt);
    setToken(jwt);
    const decoded: any = jwtDecode(jwt);
    const { name, email, picture } = decoded;
    setUser({ name, email, picture });
  };

  const logout = () => {
    localStorage.removeItem('google_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
