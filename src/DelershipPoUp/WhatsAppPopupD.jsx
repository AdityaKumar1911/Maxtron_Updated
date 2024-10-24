import React, { useState, useEffect } from "react";
import "./WhatsAppPopupD.css";
import { FaTimes } from "react-icons/fa"; // For a close icon

const WhatsAppPopup = ({ closePopup }) => {
  return (
    <div className="whatsapp-popup-overlay">
      <div className="whatsapp-popup">
        <button className="close-popup-btn" onClick={closePopup}>
          <FaTimes />
        </button>
        <h3>Join Our WhatsApp Channel!</h3>
        <p>
          Stay updated with the latest Maxtron news and offers. Join our
          WhatsApp channel now!
        </p>
        <a
          href="https://wa.me/your-whatsapp-link"
          target="_blank"
          rel="noopener noreferrer"
          className="join-whatsapp-btn"
        >
          Join Now
        </a>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
