import "./Home.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../components/Footer"; // only if Footer is inside components

export default function Home() {
  return (
    <div className="home-container">

      <Navbar />

      <main className="home-main">

        <div className="home-card">

          <div className="home-badge">
            SIL Monitoring System
          </div>

          <h1 className="home-title">
            Welcome Back 👋
          </h1>

          <p className="home-text">
            Welcome to the SIL Monitoring System. This platform allows students,
            coordinators, and administrators to manage and track industry learning efficiently.
          </p>

          <div className="home-grid">

            <div className="home-box">
              <h3>📘 Student Logs</h3>
              <p>Submit and track daily journal entries.</p>
            </div>

            <div className="home-box">
              <h3>📊 Reports</h3>
              <p>Monitor progress and submission records.</p>
            </div>

            <div className="home-box">
              <h3>🔐 Secure Access</h3>
              <p>Role-based system security and control.</p>
            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}