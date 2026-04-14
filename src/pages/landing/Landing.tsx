import "./Landing.css";
import Navbar from "../../components/Navbar/Navbar";
import RoleCard from "../../components/Rolecard/RoleCard";
import Footer from "../../Footer";

export default function Landing() {
  const roleCardsData = [
    {
      title: "Student",
      description:
        "Submit daily logs, track attendance hours, and manage journal reports for the SIL program.",
      href: "/login/student",
    },
    {
      title: "Coordinator",
      description:
        "Review student journals, approve attendance records, and generate institutional reports.",
      href: "/login/coordinator",
    },
    {
      title: "Administrator",
      description:
        "Manage user access, configure academic terms, and oversee system security.",
      href: "/login/admin",
    },
  ] as const;

  return (
    <div className="landing-container">
      <Navbar />

      <main className="landing-main">
        
        {/* HERO SECTION */}
        <header className="landing-header">
          
          <div className="landing-label">
            ACCESS MANAGEMENT SYSTEM
          </div>

          <h1 className="landing-title">
            Digital Supervised Industry Learning (SIL) Monitoring System for
            Diploma Students of Asian College
          </h1>

          <p className="landing-subtitle">
            Welcome to the centralized portal for tracking, managing, and
            certifying industrial learning progress. Please select your
            designated role to proceed.
          </p>

        </header>

        {/* ROLE GRID */}
        <div className="landing-grid">
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
        <div className="landing-footer-strip">
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