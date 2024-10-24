import React, { useState } from "react";
import "./Header.css";
import Close_icon from "../images/AqEeNXNmuyLO.svg";

const Header = () => {
  // State to control the visibility of the header
  const [isVisible, setIsVisible] = useState(true);

  // Function to hide the header
  const handleClose = () => {
    console.log("Close icon clicked"); // Debug: Check if function is called
    setIsVisible(false);
  };

  console.log("Header visibility:", isVisible); // Debug: Check the current state value

  return (
    <>
      {isVisible && (
        <div>
          <div className="offer-message-block-inner book-now-tip-top">
            <p>
              Upgrade to India's #1 EV at just ₹74,999.
              <b>
                <a href="/testride">Test ride now.</a>
              </b>
            </p>
            <img
              className="header_top_navigation_close"
              src={Close_icon}
              alt="Close"
              onClick={handleClose} // Call the function when the image is clicked
              style={{ cursor: "pointer" }} // Add a pointer cursor to indicate it's clickable
            />
          </div>
          <div className="offer-message-animation"></div>
        </div>
      )}
    </>
  );
};

export default Header;
