import Navbar from "../../components/Navbar";
import RoleCard from "../../components/RoleCard";
import Footer from "../../Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#f6f8fc] flex flex-col">

      <Navbar />

      <main className="flex-1 flex flex-col items-center text-center px-6 pt-24">

        {/* LABEL */}
        <p className="text-xs tracking-[0.25em] text-blue-600 font-semibold mb-4">
          ACCESS MANAGEMENT SYSTEM
        </p>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold max-w-4xl text-gray-900 leading-tight">
          Digital Supervised Industry Learning (SIL) Monitoring System for Diploma Students of Asian College
        </h1>

        {/* SUBTITLE */}
        <p className="text-gray-500 mt-5 max-w-2xl text-sm md:text-base">
          Welcome to the centralized portal for tracking, managing, and certifying industrial learning progress.
          Please select your designated role to proceed.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 w-full max-w-6xl">

          <RoleCard
            title="Student"
            description="Submit daily logs, track attendance hours, and manage journal reports for the SIL program."
          />

          <RoleCard
            title="Coordinator"
            description="Review student journals, approve attendance records, and generate institutional reports."
          />

          <RoleCard
            title="Administrator"
            description="Manage system access, configure academic terms, and oversee platform security."
          />

        </div>

        {/* FOOTER TEXT */}
        <div className="flex gap-4 text-xs text-gray-400 mt-16">
          <span>ACCREDITED PROGRAM</span>
          <span>•</span>
          <span>SECURE ACCESS</span>
          <span>•</span>
          <span>V2.0 CURATED EXPERIENCE</span>
        </div>

      </main>

      <Footer />

    </div>
  );
}