import Navbar from "../../components/Navbar";
import RoleCard from "../../components/RoleCard";
import Footer from "../../Footer";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f4f7f9_100%)] text-[#191c1d]">

      <Navbar />

      <main className="flex-1 flex flex-col items-center px-6 py-12 md:py-20 max-w-7xl mx-auto w-full">

        {/* HERO SECTION */}
        <header className="text-center mb-16 space-y-6 max-w-4xl">

          <div className="text-[10px] font-bold tracking-[0.2em] text-blue-600/60 uppercase">
            ACCESS MANAGEMENT SYSTEM
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 leading-[1.1] tracking-tight">
            Digital Supervised Industry Learning (SIL) Monitoring System for Diploma Students of Asian College
          </h1>

          <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Welcome to the centralized portal for tracking, managing, and certifying industrial learning progress.
            Please select your designated role to proceed.
          </p>

        </header>

        {/* ROLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mb-20">

          {/* STUDENT */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-blue-600 text-2xl">school</span>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">Student</h3>

            <p className="text-slate-500 text-[13px] leading-relaxed mb-8 flex-grow">
              Submit daily logs, track attendance hours, and manage journal reports for the SIL program.
            </p>

            <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
              Login as Student →
            </a>
          </div>

          {/* COORDINATOR */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-blue-600 text-2xl">person_search</span>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">Coordinator</h3>

            <p className="text-slate-500 text-[13px] leading-relaxed mb-8 flex-grow">
              Review student journals, approve attendance records, and generate institutional reports.
            </p>

            <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
              Login as Coordinator →
            </a>
          </div>

          {/* ADMIN */}
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:scale-[1.02]">
            <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-blue-600 text-2xl">lock_person</span>
            </div>

            <h3 className="text-xl font-bold text-slate-800 mb-3">Administrator</h3>

            <p className="text-slate-500 text-[13px] leading-relaxed mb-8 flex-grow">
              Manage user access, configure academic terms, and oversee system security.
            </p>

            <a href="#" className="text-blue-600 text-sm font-semibold hover:underline">
              Login as Admin →
            </a>
          </div>

        </div>

        {/* MID FOOTER TEXT */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold tracking-[0.15em] text-slate-400 uppercase mb-16">
          <span>Accredited Program</span>
          <span>•</span>
          <span>Secure Access</span>
          <span>•</span>
          <span>V2.0 Curated Experience</span>
        </div>

      </main>

      <Footer />

    </div>
  );
}