import "./Dashboard.css";
import Navbar from "../../components/Navbar/NavBar";
import Footer from "../../Footer";

export default function AdminDashboard() {
  return (
    <div className="dashboard-container">

      {/* 🔥 DASHBOARD MODE + LOGGED IN */}
      <Navbar isLoggedIn={true} />

      <main className="dashboard-main">

        <div className="dashboard-card">

          <div className="dashboard-badge">
            Admin Control Panel
          </div>

          <h1 className="dashboard-title">
            Welcome, Administrator
          </h1>

          <p className="dashboard-text">
            Manage users, system settings, roles, and overall platform security.
          </p>

          <div className="dashboard-grid">

            <div className="dashboard-box">
              <h3>👥 Users</h3>
              <p>Manage accounts and roles.</p>
            </div>

            <div className="dashboard-box">
              <h3>⚙ Settings</h3>
              <p>System configuration.</p>
            </div>

            <div className="dashboard-box">
              <h3>🔐 Security</h3>
              <p>Control access permissions.</p>
            </div>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}