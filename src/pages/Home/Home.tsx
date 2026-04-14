import "./Home.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../Footer";

export default function Home() {
  return (
    <div className="home-container">

      <Navbar />

      <main className="home-main">

        <div className="home-card">
          <h1 className="home-title">Home</h1>

          <p className="home-text">
            Welcome to the SIL Monitoring System. This platform allows students,
            coordinators, and administrators to manage and track industry learning efficiently.
          </p>
        </div>

      </main>

      <Footer />

    </div>
  );
}