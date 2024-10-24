import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Slider } from "@mui/material";
import "chart.js/auto"; // Required for chart functionality
import "./EmiCalculater.css";

const SavingsCalculator = () => {
  const [distance, setDistance] = useState(30); // default 30 km/day
  const [model, setModel] = useState("M1"); // default value set to first model in the list
  const [location, setLocation] = useState(""); // Set default value to an empty string for placeholder

  // Costs associated with different models
  const modelData = {
    M1: { fixedCost: 1100, maintenance: 220, runningCostPerKm: 0.85 },
    M2: { fixedCost: 1300, maintenance: 240, runningCostPerKm: 0.95 },
    M3: { fixedCost: 900, maintenance: 180, runningCostPerKm: 0.7 },
    M4: { fixedCost: 1500, maintenance: 260, runningCostPerKm: 1.0 },
    // Add more models as necessary
  };

  // Array of models to display in the dropdown
  const models = Object.keys(modelData);

  // Array of Indian states
  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  // Function to calculate savings and costs based on distance
  const calculateCosts = (distance) => {
    const fixedCostICE = 2000; // Fixed cost for ICE scooter
    const maintenanceICE = 500; // Maintenance cost for ICE scooter
    const runningCostICE = distance * 3; // ₹3 per km for ICE

    const currentModel = modelData[model]; // Get current model data
    const runningCostEV = distance * currentModel.runningCostPerKm;

    const savings =
      runningCostICE +
      maintenanceICE +
      fixedCostICE -
      (currentModel.fixedCost + currentModel.maintenance + runningCostEV);

    return {
      ICE: {
        fixedCost: fixedCostICE,
        maintenance: maintenanceICE,
        runningCost: runningCostICE,
        totalCost: fixedCostICE + maintenanceICE + runningCostICE,
      },
      EV: {
        fixedCost: currentModel.fixedCost,
        maintenance: currentModel.maintenance,
        runningCost: runningCostEV,
        totalCost:
          currentModel.fixedCost + currentModel.maintenance + runningCostEV,
      },
      savings,
    };
  };

  // Get dynamic costs and savings
  const { ICE, EV, savings } = calculateCosts(distance);

  // Bar chart data
  const data = {
    labels: ["ICE Scooter", model],
    datasets: [
      {
        label: "Fixed Cost",
        data: [ICE.fixedCost, EV.fixedCost],
        backgroundColor: "#4CAF50", // Cool color for fixed cost
      },
      {
        label: "Maintenance",
        data: [ICE.maintenance, EV.maintenance],
        backgroundColor: "#FFC300", // Cool color for maintenance
      },
      {
        label: "Running Cost",
        data: [ICE.runningCost, EV.runningCost],
        backgroundColor: "#0081C2", // Cool color for running cost
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Total cost of ownership (₹ per month)",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const monthlySavings = Math.round(savings); // Savings per month
  const annualSavings = monthlySavings * 12; // Savings per year

  return (
    <div className="MainCont-Emi">
      <div style={styles.headerSection}>
        <h2 style={styles.headerTitle}>Calculate Your Fuel-Free Savings</h2>
        <p style={styles.headerSubtitle}>
          Evaluate how much one can contribute towards green energy while
          switching from fuel to battery with an EV based on your daily commute.
        </p>
      </div>

      <div className="MainSectionG-Emi">
        {/* Left Section */}
        <div className="left-section_Emi">
          {/* Button for the scooter */}
          <div className="ScooterButton" style={styles.scooterButton}>
            <button style={styles.button}>Scooter</button>
          </div>

          {/* Dropdowns for model and location */}
          <div className="DropdownSection" style={styles.dropdownSection}>
            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              style={styles.dropdown}
            >
              {/* Dynamically render options from models array */}
              {models.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={styles.dropdown}
            >
              {/* Placeholder option */}
              <option value="" disabled>
                State
              </option>

              {/* Dynamically render options from indianStates array */}
              {indianStates.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </div>

          {/* Slider for daily distance */}
          <div className="left_Text">
            <section>
              <p id="p1st">
                Buying an EV means buying happiness without overburdening your
                budget indicating,
              </p>
            </section>
            <section className="p2class">
              <p id="p2nd">EV = BUDGET + ECO- FRIENDLY</p>
            </section>
          </div>
          <div style={styles.sliderSection}>
            <p style={styles.sliderLabel}>Daily distance: {distance} km</p>
            <Slider
              value={distance}
              min={15}
              max={100}
              step={5}
              onChange={(e, newValue) => setDistance(newValue)}
              className="Emi-Slider"
              // style={styles.slider}
            />
          </div>

          {/* Savings Summary */}
          <div style={styles.savingsSummary}>
            <div style={styles.savingsItem}>
              <h3 style={styles.savingsValue}>
                ₹{annualSavings.toLocaleString()}
              </h3>
              <p style={styles.savingsText}>Annual Savings</p>
            </div>
            <div style={styles.savingsItem}>
              <h3 style={styles.savingsValue}>
                ₹{monthlySavings.toLocaleString()}
              </h3>
              <p style={styles.savingsText}>Monthly Savings</p>
            </div>
          </div>
        </div>

        {/* Right Section (Graph) */}
        <div className="ChartCont-Emi">
          <Bar className="ChartBar" data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  headerSection: {
    marginBottom: "40px",
  },
  headerTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#0A3D62",
    marginBottom: "10px",
  },
  headerSubtitle: {
    fontSize: "18px",
    color: "#6D7993",
  },
  scooterButton: {
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1a7f58",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  dropdownSection: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "30px",
  },
  dropdown: {
    padding: "12px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "2px solid #ddd",
    backgroundColor: "#ffffff",
    color: "#333",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  sliderSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  sliderLabel: {
    fontSize: "18px",
    color: "#333",
    marginBottom: "10px",
  },
  savingsSummary: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "20px",
  },
  savingsItem: {
    textAlign: "center",
  },
  savingsValue: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2ecc71",
  },
  savingsText: {
    fontSize: "16px",
    color: "#555",
  },
};

export default SavingsCalculator;
