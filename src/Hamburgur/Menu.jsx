import React from "react";

const Menu = ({ toggleMobileMenu }) => {
  const handleLinkClick = () => {
    toggleMobileMenu(); // Close the mobile menu when a link is clicked
  };

  return (
    <div className="menu">
      <div className="menu-section">
        <h3>Tech & Design</h3>
        <ul>
          <li>
            <a href="#" onClick={handleLinkClick}>Software</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Cell Tech</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Manufacturing</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Performance</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Design</a>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Ownership</h3>
        <ul>
          <li>
            <a href="#" onClick={handleLinkClick}>Electric Store</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Hypercharger</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Community</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Referrals</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Hyperservice</a>
          </li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Our Company</h3>
        <ul>
          <li>
            <a href="#" onClick={handleLinkClick}>About Us</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Investor Relations</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>News & Events</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Blogs</a>
          </li>
          <li>
            <a href="#" onClick={handleLinkClick}>Careers</a>
          </li>
        </ul>
      </div>

      {/* <div className="menu-section">
        <h3>Account</h3>
        <ul>
          <li>
            <a href="#">Sign in</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Menu;
