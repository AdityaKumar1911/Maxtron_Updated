import React, { useState, useEffect } from "react";
import "./Popup.css"; // External CSS for the popup
import Qr from "../images/qr.png";

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close popup function
  const closePopup = () => {
    setIsOpen(false);
  };

  // UseEffect hook to trigger popup after 10 seconds (10000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000); // 10 seconds delay

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <span className="close-btn" onClick={closePopup}>
              &times;
            </span>
            <img
              src={Qr}
              alt="QR Code"
              className="qr-code"
              style={{
                width: "200px",
              }}
            />{" "}
            {/* Use the imported QR code */}
            <p>Join our WhatsApp channel for updates!</p>
            <button className="join-btn">
              <a href="https://wa.me/8888888888">Join Now</a>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
