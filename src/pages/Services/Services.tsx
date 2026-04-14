import "./Services.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../Footer";

export default function Services() {
  return (
    <div className="services-container">

      <Navbar />

      <main className="services-main">

        <div className="services-card">

          <h1 className="services-title">Services</h1>

          <ul className="services-list">

            <li><span className="services-check">✔</span> Student logbook submission</li>
            <li><span className="services-check">✔</span> Attendance tracking</li>
            <li><span className="services-check">✔</span> Coordinator review system</li>
            <li><span className="services-check">✔</span> Administrator access control</li>
            <li><span className="services-check">✔</span> Real-time progress monitoring</li>

          </ul>

        </div>

      </main>

      <Footer />

    </div>
  );
}