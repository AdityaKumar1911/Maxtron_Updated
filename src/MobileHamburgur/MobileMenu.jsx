import React, { useEffect, useState } from "react";
import "./MobileMenu.css"; // Import your CSS for mobile styling

const MobileMenu = () => {
  // State to manage the visibility of the entire menu
  const [isMenuOpen, setMenuOpen] = useState(true);

  // States to manage collapse for each section
  const [isScootersOpen, setScootersOpen] = useState(false);
  const [isMotorcyclesOpen, setMotorcyclesOpen] = useState(false);
  const [isAccessoriesOpen, setAccessoriesOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isTechOpen, setTechOpen] = useState(false);
  const [isOwnershipOpen, setOwnershipOpen] = useState(false);
  const [isBookNowOpen, setBookNowOpen] = useState(false);
  const [isTestOpen, setTestOpen] = useState(false); // Define state for Test Ride section

  // Toggles
  const toggleScooters = () => setScootersOpen(!isScootersOpen);
  const toggleMotorcycles = () => setMotorcyclesOpen(!isMotorcyclesOpen);
  const toggleAccessories = () => setAccessoriesOpen(!isAccessoriesOpen);
  const toggleCompany = () => setCompanyOpen(!isCompanyOpen);
  const toggleTech = () => setTechOpen(!isTechOpen);
  const toggleOwnership = () => setOwnershipOpen(!isOwnershipOpen);
  const toggleBookNow = () => setBookNowOpen(!isBookNowOpen);
  const toggleTest = () => setTestOpen(!isTestOpen); // Properly toggle Test Ride section

  // Function to close the menu and restore scrolling
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "auto"; // Re-enable scrolling when menu closes
  };

  useEffect(() => {
    // Disable scrolling when the menu is open
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    // Cleanup function to ensure scrolling is restored if the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  if (!isMenuOpen) return null; // If menu is closed, return nothing

  return (
    <div className="mobile-menu-container">
      {/* Close button */}
      <button className="mobile-menu-close-M" onClick={closeMenu}>
        &times;
      </button>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleScooters}>
          Scooters
        </div>
        {isScootersOpen && (
          <ul className="menu-list">
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
        )}
      </div>

      {/* Uncomment if you need the Motorcycles section */}
      {/* <div className="menu-section">
        <div className="menu-header" onClick={toggleMotorcycles}>
          Motorcycles
        </div>
        {isMotorcyclesOpen && (
          <ul className="menu-list">
            <li>Roadster</li>
            <li>Roadster X</li>
            <li>Roadster Pro</li>
          </ul>
        )}
      </div> */}

      <div className="menu-section">
        <div className="menu-header" onClick={toggleAccessories}>
          Accessories
        </div>
        {isAccessoriesOpen && (
          <ul className="menu-list">{/* Add accessories links here */}</ul>
        )}
      </div>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleCompany}>
          Our Company
        </div>
        {isCompanyOpen && (
          <ul className="menu-list">{/* Add company links here */}</ul>
        )}
      </div>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleTech}>
          Tech & Design
        </div>
        {isTechOpen && (
          <ul className="menu-list">{/* Add tech links here */}</ul>
        )}
      </div>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleOwnership}>
          <a href="/dealer">Dealership</a>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleBookNow}>
          <a href="/sbooking">Book Now</a>
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header" onClick={toggleTest}>
          Test Ride
        </div>
        {isTestOpen && (
          <ul className="menu-list">
            <li>
              <a href="/testride">Schedule Test Ride</a>
            </li>
          </ul>
        )}
      </div>

      {/* Footer Buttons */}
      {/* <div className="menu-footer">
        <button className="sign-in-btn">Sign in</button>
        <button className="support-btn">Support</button>
      </div> */}
    </div>
  );
};

export default MobileMenu;
