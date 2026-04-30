import { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { Navigate } from "react-router-dom";

function Guard({ children }) {
  const { token } = useContext(AuthContext);
  if (token == null) {
    return <Navigate to="/Login" />;
  }
  return <div>{children}</div>;
}

export default Guard;
