import { NavLink, useNavigate, Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export default function Navbar({ isLoggedIn = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 detect if user is in dashboard
  const isDashboard = location.pathname.startsWith("/dashboard");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <header className="navbar">

      {/* 🔥 LOGO LOGIC */}
      {isDashboard ? (
        <h2 className="navbar-logo">
          SIL Monitor
        </h2>
      ) : (
        <Link to="/" className="navbar-logo">
          SIL Monitor
        </Link>
      )}

      {/* 🔥 MENU ONLY FOR NON-DASHBOARD */}
      {!isDashboard && (
        <nav className="navbar-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      )}

      {/* BUTTON */}
      {!isLoggedIn ? (
        <button
          onClick={() => navigate("/register")}
          className="navbar-btn"
        >
          Sign Up
        </button>
      ) : (
<button
  onClick={handleLogout}
  className="navbar-btn navbar-btn-danger"
>
  Sign Out
</button>
      )}

    </header>
  );
}