import Navbar from "../../components/Navbar";
import RoleCard from "../../components/RoleCard";
import Footer from "../../Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">

      <Navbar />

      {/* HERO SECTION */}
      <main className="flex-1 pt-28 px-6 max-w-6xl mx-auto">

        <div className="text-center mb-16">

          {/* small label */}
          <p className="text-blue-600 font-semibold tracking-widest text-xs uppercase">
            Access Management System
          </p>

          {/* title */}
          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-4 leading-tight">
            Digital Supervised Industry Learning (SIL) Monitoring System for Diploma Students of Asian College
          </h1>

          {/* subtitle */}
          <p className="text-gray-500 max-w-2xl mx-auto">
            Welcome to the centralized portal for tracking, managing, and certifying industrial learning progress.
            Please select your designated role to proceed.
          </p>
        </div>

        {/* ROLE CARDS */}
        <div className="grid md:grid-cols-3 gap-6">

          <RoleCard
            icon="school"
            title="Student"
            description="Submit daily logs, track attendance hours, and manage journal reports for the SIL program."
          />

          <RoleCard
            icon="groups"
            title="Coordinator"
            description="Review student journals, approve attendance records, and generate institutional progress reports."
          />

          <RoleCard
            icon="admin_panel_settings"
            title="Administrator"
            description="Manage user access, configure academic terms, and oversee system security and performance."
          />

        </div>

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}