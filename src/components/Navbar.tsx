import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-emerald-500 font-semibold"
      : "text-gray-600 hover:text-emerald-500";

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 h-16 bg-white border-b shadow-sm">

      <h2 className="font-bold text-lg text-emerald-600">
        SIL Monitor
      </h2>

      <nav className="hidden md:flex gap-6">
        <NavLink to="/home" className={linkStyle}>Home</NavLink>
        <NavLink to="/about" className={linkStyle}>About</NavLink>
        <NavLink to="/services" className={linkStyle}>Services</NavLink>
        <NavLink to="/contact" className={linkStyle}>Contact</NavLink>
      </nav>

      <button className="bg-emerald-500 text-white px-4 py-2 rounded hover:bg-emerald-600">
        Sign Up
      </button>
    </header>
  );
}