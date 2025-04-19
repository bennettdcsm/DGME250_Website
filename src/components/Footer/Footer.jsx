import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      {/* Wrapper for the top part of the footer with expandable background */}
      <div className="footer-top-wrapper">
        <div className="footer-top">
          <div className="footer-top-text">
            <p className="footer-title">Digital Media Department</p>
            <p>1700 West Hillsdale Boulevard</p>
            <p>San Mateo, CA 94402</p>
            <p>650-574-6494</p>
          </div>

          <div className="footer-center-text">
            <p>BACK TO TOP</p>
          </div>

          <div className="footer-contact">
            <button className="footer-button">Apply Now</button>
            <p className="contact-us">CONTACT US</p>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.youtube.com/channel/UCvbbcCUtC4Xg1UR3mEBjgpA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/youtube.png" alt="YouTube logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/csm_dgme_hub/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/instagram.png" alt="Instagram logo" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/csmdigitalmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="images/facebook.png" alt="Facebook logo" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Wrapper for the bottom part of the footer with expandable background */}
      <div className="footer-bottom-wrapper">
        <div className="footer-bottom">
          <small>&copy;DGME 2025. All Rights Reserved</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;