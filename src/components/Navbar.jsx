import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        ShopNest
      </h1>

      <div className="space-x-6">
        <span className="cursor-pointer hover:text-purple-400" onClick={() => navigate("/")}>
          Home
        </span>
        <span className="cursor-pointer hover:text-purple-400" onClick={() => navigate("/orders")}>
          Orders
        </span>
        <button
          onClick={logout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}