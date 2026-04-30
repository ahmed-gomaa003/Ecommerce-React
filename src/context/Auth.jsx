import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
function Auth({ children }) {
  const [token, setToken] = useState(localStorage.getItem("tokn"));

  // useEffect(() => {
  //   const uTokn = localStorage.getItem("tokn");
  //   setToken(uTokn);
  // }, []);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default Auth;
