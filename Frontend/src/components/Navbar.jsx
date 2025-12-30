import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <strong>User Management</strong>

      <span style={{ marginLeft: "1rem" }}>
        {user.fullName} ({user.role})
      </span>

      <div style={{ float: "right" }}>
        <Link to="/profile">Profile</Link>

        {user.role === "admin" && (
          <Link to="/admin" style={{ marginLeft: "1rem" }}>
            Admin
          </Link>
        )}

        <button
          onClick={logout}
          style={{ marginLeft: "1rem" }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
