import "./Contact.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Footer";

export default function Contact() {
  return (
    <div className="contact-container">

      <Navbar />

      <main className="contact-main">

        <div className="contact-card">

          <h1 className="contact-title">Contact</h1>

          <p className="contact-text">
            If you have questions or need assistance, feel free to contact us.
          </p>

          <div className="contact-info">
            <p>Email: support@silmonitor.com</p>
            <p>Phone: +63 912 345 6789</p>
            <p>Address: Asian College, Philippines</p>
          </div>

        </div>

      </main>

      <Footer />

    </div>
  );
}