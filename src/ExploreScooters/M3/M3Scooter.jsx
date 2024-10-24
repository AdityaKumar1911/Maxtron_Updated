// src/components/ExploreMorePage.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  Zap,
  TrendingUp,
  Battery,
  CreditCard,
  Lightbulb,
  RotateCcw,
  Navigation,
  Bell,
  ShieldCheck,
  Gauge,
  Settings,
  BatteryCharging,
  Layers,
  Bolt,
} from "lucide-react";
import M3img from "../../images/Product Image copy M3.jpg";

const ExploreMorePage = () => {
  const [activeTab, setActiveTab] = useState("keyFeatures"); // For tab management
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle redirection
  const handleTestRideClick = () => {
    navigate("/testride"); // Adjust the route as per your routing configuration
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
            Explore the Future of Maxtron M3 Mobility
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <img
                src={M3img}
                alt="EV Scooter Pro"
                className="rounded-lg shadow-lg"
                style={{ width: "600px", height: "400px", objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Performance that Excites
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-[#00e676]" />
                  Brushless Hub Motor: Powerful 1200W 30H Type
                </li>
                <li className="flex items-center">
                  <Gauge className="w-5 h-5 mr-2 text-[#00e676]" />
                  Max Speed: 60 km/h
                </li>
                <li className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-[#00e676]" />
                  Climbing Capacity: 17 degrees
                </li>
              </ul>
            </div>
          </div>

          {/* Tabs for Key Features and Specifications */}
          <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-xl shadow-xl p-6 mb-12">
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setActiveTab("keyFeatures")}
                className={`px-4 py-2 font-semibold ${
                  activeTab === "keyFeatures"
                    ? "text-white rounded-full"
                    : "text-blue-600"
                }`}
                style={{
                  backgroundColor:
                    activeTab === "keyFeatures" ? "#00e676" : "transparent",
                  color: activeTab === "keyFeatures" ? "#00e676" : "#00e676",
                }}
              >
                Key Features
              </button>

              <button
                onClick={() => setActiveTab("specifications")}
                className={`px-4 py-2 font-semibold ml-4 ${
                  activeTab === "specifications"
                    ? "text-white bg-blue-600 rounded-full"
                    : "text-blue-600"
                }`}
                style={{
                  backgroundColor:
                    activeTab === "specifications" ? "#00e676" : "transparent",
                  color: activeTab === "specifications" ? "#00e676" : "#00e676",
                }}
              >
                Specifications
              </button>
            </div>

            {/* Display Key Features or Specifications based on active tab */}
            {activeTab === "keyFeatures" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Battery, label: "USB Charging" },
                  { icon: CreditCard, label: "NFC Card" },
                  { icon: Lightbulb, label: "LED Light" },
                  { icon: RotateCcw, label: "Reverse Gear" },
                  { icon: Navigation, label: "Cruise Control" },
                  { icon: Bell, label: "Remote Alarm" },
                  { icon: ShieldCheck, label: "Anti-theft Alarm" },
                  { icon: Gauge, label: "123 Speed Control" },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <feature.icon className="w-5 h-5 mr-2 text-[#00e676]" />
                    <span>{feature.label}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
                {[
                  { icon: Settings, label: "Tire Type: 90/90 - 12 inches" },
                  {
                    icon: BatteryCharging,
                    label: "Battery: Lithium or Lead Acid Voltage: 60/72V",
                  },
                  { icon: Bolt, label: "Charging Time: 4-6 hours" },
                  { icon: Layers, label: "Weight: 95 kg" },
                  { icon: Gauge, label: "Max Range: 100 km per charge" },
                  { icon: TrendingUp, label: "Top Speed: 60 km/h" },
                  { icon: RotateCcw, label: "Climbing: 17°" },
                  { icon: Navigation, label: "Suspension: Hydraulic Dual" },
                ].map((spec, index) => (
                  <div key={index} className="flex items-center">
                    <spec.icon className="w-5 h-5 mr-2 text-[#00e676]" />
                    <span>{spec.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Book a Test Ride Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Experience the Revolution
            </h2>
            <p className="text-gray-600 mb-6">
              Join the future of urban mobility with our cutting-edge EV Scooter
              Pro.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00e676] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#00c767] transition duration-300"
              onClick={handleTestRideClick} // Add onClick event handler for redirection
            >
              Book a Test Ride
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreMorePage;
