"use client"
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const password = "Hello+1234"
  const [access, setAccess] = useState(false);
  const [loggedInPassword, setLoggedInPassword] = useState(null);
  const [loading, setLoading] = useState(true);
  const [failedAttempt, setFailedAttempt] = useState(false);

  useEffect(() => {
    const storedPassword = localStorage.getItem('password');
    if (storedPassword === password) {
      setAccess(true);
      setLoggedInPassword(storedPassword);
    }
    setLoading(false);
  }, []);

  const login = (inputPassword) => {
    setLoading(true);
    if (inputPassword === password) {
      setAccess(true);
      localStorage.setItem('password', inputPassword);
      setLoggedInPassword(inputPassword);
    } else {
      setFailedAttempt(true);
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  const logout = () => {
    setAccess(false);
    localStorage.removeItem('password');
    setLoggedInPassword(null);
  };

  return (
    <AuthContext.Provider value={{ access, login, logout, loading, failedAttempt }}>
      {children}
    </AuthContext.Provider>
  );
};
