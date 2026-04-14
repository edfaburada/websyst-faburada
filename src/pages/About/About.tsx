import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer";

export default function About() {
  return (
    <div className="about-container">

      <Navbar />

      <main className="about-main">

        <div className="about-card">
          <h1 className="about-title">About</h1>

          <p className="about-text">
            The SIL Monitoring System is designed to help educational institutions
            track student progress during their Supervised Industry Learning (SIL).
            It improves transparency, efficiency, and communication between students
            and coordinators.
          </p>
        </div>

      </main>

      <Footer />

    </div>
  );
}