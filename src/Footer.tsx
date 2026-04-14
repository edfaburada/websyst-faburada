import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-line"></div>

        <p className="footer-text">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;