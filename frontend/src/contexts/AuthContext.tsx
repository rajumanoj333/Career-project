import { createContext, useContext, ReactNode, useState } from 'react';
import * as AuthService from '../services/api';

type AuthContextType = {
  user: any | null;
  login: (email, password) => Promise<any>;
  logout: () => void;
  register: (email, password, fullName) => Promise<any>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (email, password) => {
    const data = await AuthService.login(email, password);
    setUser(data);
    return data;
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  const register = async (email, password, fullName) => {
    return AuthService.register(email, password, fullName);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
