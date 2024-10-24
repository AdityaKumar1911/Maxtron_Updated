import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";

const Products = ({ toggleMobileMenu }) => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Maxtron M1",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1pro_v2.webp",
      route: "/m1",
    },
    {
      id: 2,
      name: "Maxtron M2",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1air_v2.webp",
      route: "/m2",
    },
    {
      id: 3,
      name: "Maxtron M3",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_s1x_v2.webp",
      route: "/m3",
    },
    {
      id: 4,
      name: "Maxtron M4",
      image:
        "https://cdn.olaelectric.com/sites/evdp/pages/home_ipo/menu_image_motorcycle_rx.webp",
      route: "/m4",
    },
  ];

  const handleImageClick = (route) => {
    toggleMobileMenu(); // Close the mobile menu
    navigate(route); // Navigate to the specified route
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => handleImageClick(product.route)}
        >
          <img src={product.image} alt={product.name} />
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
