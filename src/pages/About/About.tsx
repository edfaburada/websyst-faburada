import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer";

export default function About() {
  return (
    <div className="about-container">

      <Navbar />

      <main className="about-main">

        <div className="about-card">

          <div className="about-badge">
            SIL Monitoring System
          </div>

          <h1 className="about-title">
            About the System
          </h1>

          <p className="about-text">
            The SIL Monitoring System is designed to help educational institutions
            track student progress during their Supervised Industry Learning (SIL).
            It improves transparency, efficiency, and communication between students
            and coordinators.
          </p>

          {/* FEATURE GRID */}
          <div className="about-grid">

            <div className="about-box">
              <h3>🎯 Purpose</h3>
              <p>Streamline student internship monitoring and reporting.</p>
            </div>

            <div className="about-box">
              <h3>🔐 Security</h3>
              <p>Role-based access for students, coordinators, and admins.</p>
            </div>

            <div className="about-box">
              <h3>📊 Tracking</h3>
              <p>Real-time logs, attendance, and progress monitoring.</p>
            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}