import { useAuthContext } from "@/context/auth-context";
import { ChildrenNodes } from "@/types";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedPage = ({ children }: ChildrenNodes) => {
  const { isLoggedIn } = useAuthContext();
  const { pathname } = useLocation();

  return isLoggedIn === true ? (
    children
  ) : (
    <Navigate to="/login" state={{ redirectTo: pathname }} replace />
  );
};

export default ProtectedPage;
