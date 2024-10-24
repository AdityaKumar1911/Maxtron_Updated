import React from "react";
import "./Footer.css"; // Separate CSS file for styling
import Logo from "../images/Logos/MAXTRON_LOGO_FINAL_POPnMAXGREEN_(FORDARKBG).png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-Footer">
        <div className="footer-columns">
          <div className="footer-logo">
            <img src={Logo} alt="Maxtron Logo" />
            {/* <h2>MAXTRON</h2> */}
          </div>
          <div className="footer-links">
            <h3>Products</h3>
            <ul>
              <li>
                <a href="/m1">Maxtron M1</a>
              </li>
              <li>
                <a href="/m2">Maxtron M2</a>
              </li>
              <li>
                <a href="/m3">Maxtron M3</a>
              </li>
              <li>
                <a href="/m4">Maxtron M4</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Tech & Design</h3>
            <ul>
              <li>
                <a href="#">Software</a>
              </li>
              <li>
                <a href="#">Manufacturing</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Ownership</h3>
            <ul>
              <li>
                <a href="#">Exp Center</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2024 Maxtron. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
