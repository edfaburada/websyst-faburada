import "./Services.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer";

export default function Services() {
  return (
    <div className="services-container">

      <Navbar />

      <main className="services-main">

        <div className="services-card">

          <div className="services-badge">
            System Features
          </div>

          <h1 className="services-title">
            Services
          </h1>

          <p className="services-text">
            The SIL Monitoring System provides tools to manage, track, and evaluate
            student industrial learning activities efficiently.
          </p>

          {/* FEATURE GRID */}
          <div className="services-grid">

            <div className="services-box">
              <h3>📘 Logbook System</h3>
              <p>Students submit daily activity logs digitally.</p>
            </div>

            <div className="services-box">
              <h3>⏱ Attendance Tracking</h3>
              <p>Monitor student training hours in real time.</p>
            </div>

            <div className="services-box">
              <h3>🧑‍🏫 Coordinator Review</h3>
              <p>Approve and evaluate student submissions.</p>
            </div>

            <div className="services-box">
              <h3>🔐 Role Access Control</h3>
              <p>Secure login system for each user type.</p>
            </div>

            <div className="services-box">
              <h3>📊 Progress Monitoring</h3>
              <p>Track student development and completion status.</p>
            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}