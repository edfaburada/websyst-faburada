import Navbar from "../../components/Navbar";
import RoleCard from "../../components/RoleCard";
import Footer from "../../Footer";

export default function Landing() {
  // Define your card data here to keep the JSX clean
  const roleCardsData = [
    {
      title: "Student",
      description: "Submit daily logs, track attendance hours, and manage journal reports for the SIL program.",
      href: "/login/student", 
    },
    {
      title: "Coordinator",
      description: "Review student journals, approve attendance records, and generate institutional reports.",
      href: "/login/coordinator", 
    },
    {
      title: "Administrator",
      description: "Manage user access, configure academic terms, and oversee system security.",
      href: "/login/admin", 
    }
  ] as const;

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
          {/* Dynamically render the RoleCards */}
          {roleCardsData.map((role, index) => (
            <RoleCard 
              key={index}
              title={role.title}
              description={role.description}
              href={role.href}
            />
          ))}
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