import "./App.css";
import { Routes, Route } from "react-router-dom";

// PUBLIC PAGES
import Landing from "./pages/landing/Landing";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Contact from "./pages/contact/Contact";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

// DASHBOARDS (ROLE-BASED)
import StudentDashboard from "./pages/dashboard/StudentDashboard";
import CoordinatorDashboard from "./pages/dashboard/CoordinatorDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";

export default function App() {
  return (
    <div className="app">

      <Routes>

        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

        {/* ===== LOGIN (ROLE-BASED ROUTING) ===== */}
        <Route path="/login/:role" element={<Login />} />

        {/* ===== DASHBOARDS ===== */}
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/coordinator" element={<CoordinatorDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />

      </Routes>

    </div>
  );
}