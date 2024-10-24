import React, { useState } from "react";
import "./ScooterBooking.css";

const ScooterBooking = () => {
  const [selectedScooter, setSelectedScooter] = useState("M1");
  const [selectedColor, setSelectedColor] = useState("#ffffff");

  const scooters = [
    {
      id: "M1",
      name: "M1 2.2 kWh",
      images: {
        "#ffffff":
          "https://autonexa.com/wp-content/uploads/2021/08/Ola-S1-electric-scooter-launched-in-India-at-Rs-99999.jpg", // White
        "#008000": "https://example.com/green-scooter-m1.jpg", // Green
        "#ffff00": "https://example.com/yellow-scooter-m1.jpg", // Yellow
        "#ff0000": "https://example.com/red-scooter-m1.jpg", // Red
      },
      availableColors: [
        { name: "White", colorCode: "#ffffff" },
        { name: "Green", colorCode: "#008000" },
        { name: "Yellow", colorCode: "#ffff00" },
        { name: "Red", colorCode: "#ff0000" },
      ],
      range: "75 km",
      topSpeed: "75 km/h",
      chargeTime: "2h 00min",
    },
    {
      id: "M2",
      name: "M2 3.4 kWh",
      images: {
        "#c0c0c0": "https://example.com/silver-grey-scooter-m2.jpg", // Silver Grey
        "#ff0000": "https://example.com/red-scooter-m2.jpg", // Red
        "#0000ff": "https://example.com/blue-scooter-m2.jpg", // Blue
        "#000000": "https://example.com/black-scooter-m2.jpg", // Black
      },
      availableColors: [
        { name: "Silver Grey", colorCode: "#c0c0c0" },
        { name: "Red", colorCode: "#ff0000" },
        { name: "Blue", colorCode: "#0000ff" },
        { name: "Black", colorCode: "#000000" },
      ],
      range: "100 km",
      topSpeed: "85 km/h",
      chargeTime: "2h 30min",
    },
    {
      id: "M3",
      name: "M3 3.4 kWh",
      images: {
        "#c0c0c0": "https://example.com/silver-metallic-scooter-m3.jpg", // Silver Metallic
        "#ff0000": "https://example.com/fiery-red-scooter-m3.jpg", // Fiery Red
        "#0000ff": "https://example.com/blue-scooter-m3.jpg", // Blue
        "#000000": "https://example.com/black-matte-scooter-m3.jpg", // Black Matte
      },
      availableColors: [
        { name: "Silver Metallic", colorCode: "#c0c0c0" },
        { name: "Fiery Red", colorCode: "#ff0000" },
        { name: "Blue", colorCode: "#0000ff" },
        { name: "Black Matte", colorCode: "#000000" },
      ],
      range: "120 km",
      topSpeed: "90 km/h",
      chargeTime: "3h 00min",
    },
    {
      id: "M4",
      name: "M4 5.1 kWh",
      images: {
        "#ffffff":
          "https://th.bing.com/th/id/OIP.2RMFp8JlSmc70fZMV_lg5gHaFP?w=820&h=580&rs=1&pid=ImgDetMain", // White
        "#c0c0c0": "https://example.com/silver-scooter-m4.jpg", // Silver
        "#0000ff": "https://example.com/blue-scooter-m4.jpg", // Blue
        "#800000": "https://example.com/maroon-scooter-m4.jpg", // Maroon
        "#000000": "https://example.com/black-scooter-m4.jpg", // Black
      },
      availableColors: [
        { name: "White", colorCode: "#ffffff" },
        { name: "Silver", colorCode: "#c0c0c0" },
        { name: "Blue", colorCode: "#0000ff" },
        { name: "Maroon", colorCode: "#800000" },
        { name: "Black", colorCode: "#000000" },
      ],
      range: "150 km",
      topSpeed: "100 km/h",
      chargeTime: "3h 30min",
    },
  ];

  const handleSelectScooter = (scooterId) => {
    setSelectedScooter(scooterId);
    setSelectedColor("#ffffff"); // Reset to default color when selecting a new scooter
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const selectedScooterDetails = scooters.find(
    (scooter) => scooter.id === selectedScooter
  );

  return (
    <div className="scooter-booking">
      <div className="tabs">
        {scooters.map((scooter) => (
          <button
            key={scooter.id}
            onClick={() => handleSelectScooter(scooter.id)}
            className={`tab-button ${
              selectedScooter === scooter.id ? "active" : ""
            }`}
          >
            {scooter.name}
          </button>
        ))}
      </div>

      <div className="booking-container">
        <div className="scooter-imageBooking">
          <img
            src={selectedScooterDetails.images[selectedColor]}
            alt={selectedScooterDetails.name}
          />
        </div>
        <div className="scooter-details">
          <h2>{selectedScooterDetails.name}</h2>
          <div className="color-selection">
            <p>Available Colors</p>
            <div className="color-options">
              {selectedScooterDetails.availableColors.map((color) => (
                <span
                  key={color.colorCode}
                  className={`color-circle ${
                    selectedColor === color.colorCode ? "active-color" : ""
                  }`}
                  style={{ backgroundColor: color.colorCode }}
                  onClick={() => handleColorChange(color.colorCode)}
                ></span>
              ))}
            </div>
            <p>
              {selectedScooterDetails.availableColors.find(
                (color) => color.colorCode === selectedColor
              )?.name || "White"}
            </p>
          </div>
          <div className="scooter-specs">
            <p>
              <strong>Range:</strong> {selectedScooterDetails.range}
            </p>
            <p>
              <strong>Top Speed:</strong> {selectedScooterDetails.topSpeed}
            </p>
            <p>
              <strong>0-80% Charging:</strong>{" "}
              {selectedScooterDetails.chargeTime}
            </p>
          </div>
        </div>

        <div className="booking-form">
          <h3>Book Your Scooter</h3>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="text" placeholder="Phone Number" required />
            <input type="text" placeholder="Enter Your Location" required />

            {/* Scooter model dropdown */}
            <label htmlFor="scooter-model">Select Scooter Model</label>
            <select
              id="scooter-model"
              value={selectedScooter}
              onChange={(e) => handleSelectScooter(e.target.value)}
            >
              {scooters.map((scooter) => (
                <option key={scooter.id} value={scooter.id}>
                  {scooter.name}
                </option>
              ))}
            </select>

            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ScooterBooking;
