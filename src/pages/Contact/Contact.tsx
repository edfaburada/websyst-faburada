import "./Contact.css";
import Navbar from "../../components/navbar/NavBar";
import Footer from "../../Footer";

export default function Contact() {
  return (
    <div className="contact-container">

      <Navbar />

      <main className="contact-main">

        <div className="contact-card">

          <div className="contact-badge">
            Get in Touch
          </div>

          <h1 className="contact-title">
            Contact Us
          </h1>

          <p className="contact-text">
            If you have questions or need assistance, feel free to reach out.
            Our support team is ready to help you.
          </p>

          {/* CONTACT GRID */}
          <div className="contact-grid">

            {/* EMAIL (opens mail app) */}
            <a href="mailto:support@silmonitor.com" className="contact-box">
              <h3>📧 Email Support</h3>
              <p>support@silmonitor.com</p>
            </a>

            {/* PHONE (click to call) */}
            <a href="tel:+639123456789" className="contact-box">
              <h3>📞 Phone</h3>
              <p>+63 912 345 6789</p>
            </a>

            {/* LOCATION (opens Google Maps) */}
            <a
              href="https://www.google.com/maps/search/Asian+College+Philippines"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-box"
            >
              <h3>📍 Location</h3>
              <p>Asian College, Philippines</p>
            </a>

          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}