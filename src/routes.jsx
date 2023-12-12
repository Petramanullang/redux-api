import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoutes from "./hoc/ProtectedRoutes";

export const routes = [
  {
    path: "/",
    element: (
      <ProtectedRoutes>
        <Home />
      </ProtectedRoutes>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
];
