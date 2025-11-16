import { createContext, useContext, useState } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => sessionStorage.getItem("token") || null);
  const [role, setRole] = useState(() => sessionStorage.getItem("role") || null);

  const login = (token) => {
    const decoded = jwtDecode(token);
    const role = decoded.role;

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("role", role);

    setToken(token);
    setRole(role);
  };

  const logout = () => {
    sessionStorage.clear();
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider value={{ token, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
