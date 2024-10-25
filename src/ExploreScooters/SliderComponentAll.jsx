import React from "react";
import Slider from "react-slick";
import {
  FaMotorcycle,
  FaRoad,
  FaRegLightbulb,
  FaTachometerAlt,
} from "react-icons/fa";
import "./SliderComponentAll.css"; // Include the CSS file
import { useNavigate } from "react-router-dom";

// Importing images DesktopView
import ImageM1 from "../images/Product Image copy M1.jpg";
import ImageM2 from "../images/Product Image copy.jpg";
import ImageM3 from "../images/Product Image copy M3.jpg";
import ImageM4 from "../images/Product Image copy M4.jpg";

const scooterData = [
  {
    model: "M1",
    title: "M1 Scooter",
    image: ImageM1,
    highlights: [
      {
        label: "Motor Type",
        value: "Brushless 800W Hub Motor",
        icon: <FaMotorcycle />,
      },
      { label: "Climbing Capacity", value: "17 degrees", icon: <FaRoad /> },
      { label: "Max Speed", value: "45 km/h", icon: <FaTachometerAlt /> },
      {
        label: "Key Features",
        value: "LED light, Reverse gear, Remote Alarm",
        icon: <FaRegLightbulb />,
      },
    ],
  },
  {
    model: "M2",
    title: "M2 Scooter",
    image: ImageM2,
    highlights: [
      {
        label: "Motor Type",
        value: "Brushless 800W Hub Motor",
        icon: <FaMotorcycle />,
      },
      { label: "Climbing Capacity", value: "20 degrees", icon: <FaRoad /> },
      { label: "Max Speed", value: "45 km/h", icon: <FaTachometerAlt /> },
      {
        label: "Key Features",
        value: "LED light, Reverse gear, Remote Alarm",
        icon: <FaRegLightbulb />,
      },
    ],
  },
  {
    model: "M3",
    title: "M3 Scooter",
    image: ImageM3,
    highlights: [
      {
        label: "Motor Type",
        value: "Brushless 800W Hub Motor",
        icon: <FaMotorcycle />,
      },
      { label: "Climbing Capacity", value: "17 degrees", icon: <FaRoad /> },
      { label: "Max Speed", value: "45 km/h", icon: <FaTachometerAlt /> },
      {
        label: "Key Features",
        value: "LED light, Reverse gear, Remote Alarm",
        icon: <FaRegLightbulb />,
      },
    ],
  },
  {
    model: "M4",
    title: "M4 Scooter",
    image: ImageM4,
    highlights: [
      {
        label: "Motor Type",
        value: " Brushless 800W Hub Motor",
        icon: <FaMotorcycle />,
      },
      { label: "Climbing Capacity", value: "17 degrees", icon: <FaRoad /> },
      { label: "Max Speed", value: "45 km/h", icon: <FaTachometerAlt /> },
      {
        label: "Key Features",
        value: "USB Charging, LED light, Anti-theft Alarm",
        icon: <FaRegLightbulb />,
      },
    ],
  },
];

const SliderComponent = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Updated handleExploreClick to handle dynamic navigation
  const handleExploreClick = (model) => {
    navigate(`/${model.toLowerCase()}`); // Dynamically navigate based on model
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <h2 className="slider-title font-face-casd">
        Explore Our Electric Scooters
      </h2>
      <div className="desktop-view">
        <div className="scooter-grid">
          {scooterData.map((scooter, index) => (
            <div key={index} className="scooter-card">
              <img
                src={scooter.image}
                alt={scooter.model}
                className="scooter-image"
              />
              <div className="scooter-details">
                <h2 className="scooter-title">{scooter.title}</h2>
                <ul className="scooter-highlights">
                  {scooter.highlights.map((highlight, i) => (
                    <li key={i} className="scooter-highlight">
                      <span className="icon">{highlight.icon}</span>
                      <strong>{highlight.label}: </strong> {highlight.value}
                    </li>
                  ))}
                </ul>
                {/* Dynamic onClick navigation for each scooter model */}
                <button
                  className="explore-more"
                  onClick={() => handleExploreClick(scooter.model)}
                >
                  Explore {scooter.model} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-view">
        <Slider {...settings}>
          {scooterData.map((scooter, index) => (
            <div key={index} className="scooter-card">
              <img
                src={scooter.image}
                alt={scooter.model}
                className="scooter-image"
              />
              <div className="scooter-details">
                <h2 className="scooter-title">{scooter.title}</h2>
                <ul className="scooter-highlights">
                  {scooter.highlights.map((highlight, i) => (
                    <li key={i} className="scooter-highlight">
                      <span className="icon">{highlight.icon}</span>
                      <strong>{highlight.label}: </strong> {highlight.value}
                    </li>
                  ))}
                </ul>
                <button
                  className="explore-more"
                  onClick={() => handleExploreClick(scooter.model)}
                >
                  Explore {scooter.model} →
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
