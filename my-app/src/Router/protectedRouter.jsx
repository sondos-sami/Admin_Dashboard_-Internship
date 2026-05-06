import { Navigate } from "react-router-dom";

export default function RequireAuth({ children }) {
  const admin = localStorage.getItem("admin");

  return admin ? children : <Navigate to="/login" />;
}