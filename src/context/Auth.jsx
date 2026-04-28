import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
function Auth({ children }) {
  const [token, setToken] = useState(null);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
