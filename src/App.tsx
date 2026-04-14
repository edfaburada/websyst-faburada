import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login"; // 👈 IMPORTANT

export default function App() {
  return (
    <div className="app">

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

        {/* ✅ ONE CLEAN LOGIN ROUTE */}
        <Route path="/login/:role" element={<Login />} />

      </Routes>

    </div>
  );
}