import "./Dashboard.css";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../Footer";

export default function StudentDashboard() {
  return (
    <div className="dashboard-container">

      {/* 🔥 DASHBOARD MODE + LOGIN STATE */}
      <Navbar isLoggedIn={true} />

      <main className="dashboard-main">

        <div className="dashboard-card">

          <div className="dashboard-badge">
            Student Portal
          </div>

          <h1 className="dashboard-title">
            Welcome, Student
          </h1>

          <p className="dashboard-text">
            Manage your daily logs, attendance hours, and submit your SIL journal reports here.
          </p>

          <div className="dashboard-grid">

            <div className="dashboard-box">
              <h3>📘 Daily Logs</h3>
              <p>Submit your daily activities.</p>
            </div>

            <div className="dashboard-box">
              <h3>⏱ Attendance</h3>
              <p>Track your training hours.</p>
            </div>

            <div className="dashboard-box">
              <h3>📄 Reports</h3>
              <p>View and submit journal reports.</p>
            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}