import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Index";
import ProtectedRoute from "../protected-route/ProtectedRoute";
import Dashboard from "../pages/dashboard/Index";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
    ],
  },
]);
