import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function AppRoutes() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>

        {/* HOME - ONLY CUSTOMER & SELLER */}
        <Route
          path="/"
          element={
            <ProtectedRoute allowedRoles={["CUSTOMER", "SELLER"]}>
              <Home />
            </ProtectedRoute>
          }
        />

        {/* ORDERS - ALL ROLES */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute allowedRoles={["CUSTOMER", "SELLER", "ADMIN"]}>
              <Orders />
            </ProtectedRoute>
          }
        />

        {/* PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}