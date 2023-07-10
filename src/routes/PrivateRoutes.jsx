import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";

const PrivateRoutes = () => {
  const location = useLocation();
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
