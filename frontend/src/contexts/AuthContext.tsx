import React, { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (userData: { id: string }) => void; // Adjusted to include user data
  logout: () => void;
  user?: { id: string }; // Add user property to context type
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<{ id: string } | undefined>(undefined); // Define user state

  const login = (userData: { id: string }) => {
    setIsAuthenticated(true);
    setUser(userData); // Store user data in context
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(undefined); // Clear user data on logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
