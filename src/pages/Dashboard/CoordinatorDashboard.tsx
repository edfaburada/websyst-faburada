import "./Dashboard.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer";

export default function CoordinatorDashboard() {
  return (
    <div className="dashboard-container">

      <Navbar />

      <main className="dashboard-main">

        <div className="dashboard-card">

          <div className="dashboard-badge">
            Coordinator Panel
          </div>

          <h1 className="dashboard-title">
            Welcome, Coordinator
          </h1>

          <p className="dashboard-text">
            Review student submissions, approve attendance records, and generate reports.
          </p>

          <div className="dashboard-grid">

            <div className="dashboard-box">
              <h3>📋 Review Logs</h3>
              <p>Check student submissions.</p>
            </div>

            <div className="dashboard-box">
              <h3>✔ Approvals</h3>
              <p>Approve or reject records.</p>
            </div>

            <div className="dashboard-box">
              <h3>📊 Reports</h3>
              <p>Generate class reports.</p>
            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}