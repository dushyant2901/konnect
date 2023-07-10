import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context";

const PrivateRoutes = () => {
  const location = useLocation();
  const { isUserLoggedIn } = useAuth();
  console.log({ isUserLoggedIn });
  return isUserLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/login" state={{ from: location }} replace />
  );
};

export default PrivateRoutes;
