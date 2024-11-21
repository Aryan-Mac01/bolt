import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    try {
      // Simulate API call
      if (email && password) {
        setUser({ name: email.split('@')[0], email });
        toast.success('Successfully logged in!');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      toast.error('Invalid credentials. Please try again.');
      throw error;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      // Simulate API call
      if (name && email && password) {
        setUser({ name, email });
        toast.success('Account created successfully!');
      } else {
        throw new Error('Invalid information');
      }
    } catch (error) {
      toast.error('Failed to create account. Please try again.');
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}