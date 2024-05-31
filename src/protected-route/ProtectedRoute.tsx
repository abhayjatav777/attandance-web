import { memo, useEffect } from "react";
import { useIsAuthenticated } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Index";

const ProtectedRoute = () => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate("/login", { replace: true });
    }
  }, [navigate, isAuthenticated]);

  return <Dashboard />;
};

export default memo(ProtectedRoute);
