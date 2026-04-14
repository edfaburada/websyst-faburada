import "./App.css";
import { Routes, Route } from "react-router-dom";

import Landing from "./pages/landing/Landing";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

// ✅ ADD THESE (you need to create these pages)
import StudentDashboard from "./pages/Dashboard/StudentDashboard";
import CoordinatorDashboard from "./pages/Dashboard/CoordinatorDashboard";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";

export default function App() {
  return (
    <div className="app">

      <Routes>
        {/* PUBLIC PAGES */}
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />

        {/* LOGIN (ROLE BASED) */}
        <Route path="/login/:role" element={<Login />} />

        {/* DASHBOARDS (AFTER LOGIN) */}
        <Route path="/dashboard/student" element={<StudentDashboard />} />
        <Route path="/dashboard/coordinator" element={<CoordinatorDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />

      </Routes>

    </div>
  );
}