// src/Products.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook

const ScooterData = () => {
  const navigate = useNavigate(); // Initialize navigate

  const products = [
    {
      id: 1,
      name: "Maxtron M1",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1pro_v2.webp",
      route: "/m1", // Add route
    },
    {
      id: 2,
      name: "Maxtron M2",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1air_v2.webp",
      route: "/m2", // Add route
    },
    {
      id: 3,
      name: "Maxtron M3",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1x_v2.webp",
      route: "/m3", // Add route
    },
    {
      id: 4,
      name: "Maxtron M4",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_motorcycle_rx.webp",
      route: "/m4", // Add route
    },
  ];

  const handleImageClick = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div className="Scooter-products bg-dark">
      {products.map((product) => (
        <div key={product.id} className="Scooter-card">
          <img
            src={product.image}
            alt={product.name}
            onClick={() => handleImageClick(product.route)} // Add click handler
            style={{ cursor: "pointer" }} // Add cursor pointer for better UX
          />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ScooterData;
