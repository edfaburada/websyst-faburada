import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">

      <h2 className="navbar-logo">
        SIL Monitor
      </h2>

      <nav className="navbar-links">
        <NavLink to="/home" className={linkStyle}>Home</NavLink>
        <NavLink to="/about" className={linkStyle}>About</NavLink>
        <NavLink to="/services" className={linkStyle}>Services</NavLink>
        <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
      </nav>

      <button
        onClick={() => navigate("/register")}
        className="navbar-btn"
      >
        Sign Up
      </button>

    </header>
  );
}