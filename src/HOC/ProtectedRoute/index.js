import { Navigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const authContextData = useContext(AuthContext);
  const { isLogin } = authContextData;

  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
