import React from "react";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Address</h3>
          <p>📍 Location</p>
          <p>📞 Call +01 1234567890</p>
          <p>📧 demo@gmail.com</p>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Info</h3>
          <p>
            Necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful.
          </p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Why Us</a></li>
            <li><a href="#">Team</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Subscribe</h3>
          <form>
            <input type="email" placeholder="Enter email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 All Rights Reserved By Yll Cervadiku</p>
      </div>
    </footer>
  );
};

export default Footer;
