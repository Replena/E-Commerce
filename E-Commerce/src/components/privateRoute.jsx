import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element: Component, redirectTo = "/" }) => {
  const token = localStorage.getItem("token");

  return token ? <Navigate to={redirectTo} replace /> : <Component />;
};

export default PrivateRoute;
