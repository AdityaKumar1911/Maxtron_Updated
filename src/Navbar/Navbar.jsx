import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Navbar.css"; // Include your styles here
import Products from "../Hamburgur/Products";
import ScooterData from "../Hamburgur/ScooterData";
import Menu from "../Hamburgur/Menu";
import MobileMenu from "../MobileHamburgur/MobileMenu";
import Logo from "../images/Logos/MAXTRON_LOGO_FINAL_POPnMAXGREEN_(FORDARKBG).png";

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // State to toggle dropdowns and mobile menu
  const [isScooterDropdownOpen, setScooterDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  // Functions to handle dropdown toggle
  const toggleScooterDropdown = () =>
    setScooterDropdownOpen(!isScooterDropdownOpen);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevState) => !prevState); // Use the previous state to toggle
  };

  // Check screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo" onClick={handleLogoClick}>
          <img src={Logo} alt="Maxtron Logo" />
        </div>

        {!isMobileView && (
          <div className="nav-item">
            <div
              className="dropdown"
              onMouseEnter={toggleScooterDropdown}
              onMouseLeave={toggleScooterDropdown}
            >
              <span className="nav-link">Scooters</span>
              {isScooterDropdownOpen && (
                <div className="dropdown-content animated-dropdown">
                  <ScooterData />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="navbar-right">
        {!isMobileView && (
          <>
            <a href="/dealer" className="nav-link font-face-gm">
              Dealership
            </a>
            <a href="/testride" className="nav-link">
              Test Ride
            </a>

            <a href="/sbooking" className="nav-link order-now">
              Book Now
            </a>
          </>
        )}

        <a href="#" className="nav-link" onClick={toggleMobileMenu}>
          <i className="fas fa-bars"></i>
        </a>
      </div>

      {isMobileView && isMobileMenuOpen && (
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      )}

      {isMobileMenuOpen && !isMobileView && (
        <div className="mobile-menu">
          <div className="mContent">
            <Products toggleMobileMenu={toggleMobileMenu} />
            <Menu toggleMobileMenu={toggleMobileMenu} />
          </div>

          <div className="blue-backdrop"></div>

          <button onClick={toggleMobileMenu} className="mobile-menu-close">
            &times;
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
