import React from "react";
import "./WhyChooseMaxtron.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const WhyChooseMaxtron = () => {
  const navigate = useNavigate();
  const handlwhyAllPage = () => {
    navigate("/whyfull"); // Adjust the route as per your routing configuration
  };
  return (
    <section className="maxtron-section">
      <div className="container">
        <h2 className="section-title">Why Choose Maxtron?</h2>
        <p className="section-story">
          Maxtron aims to create affordable, high-quality EV scooters that
          bridge the gap between advanced technology, environmental
          responsibility, and everyday affordability. The company's name,
          Maxtron, stands for Maximum, as they prioritise maximising every
          aspect of the user's experience, including performance, comfort, and
          sustainability while ensuring affordability.
        </p>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Affordable, High-Quality Vehicles</h3>
            <p>
              Maxtron offers premium, eco-friendly, affordable electric scooters
              powered by lithium or lead-acid batteries. Our aluminium alloy EV
              scooters feature Bluetooth connectivity, NFC Card functionality,
              and USB charging, aiming to make daily commutes hassle-free,
              comfortable, and smooth.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Powered by Expertise</h3>
            <p>
              With 20+ Years of experience in the powerful batteries and
              electric vehicle industries market. Our leading brand, Maxtron, is
              powered by a legacy of trust, passion, and innovation. Our sleek
              EV Scooters offer fashion and comfort, fostering a robust supply
              chain ecosystem and focusing on sustainable transportation
              solutions.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Leading the Electric Mobility Revolution</h3>
            <p>
              Our brand, Maxtron, leads the electric mobility revolution,
              focusing on zero-emissions, battery enhancements, safety measures,
              efficiency improvements, and sustainable tech innovation. We aim
              to provide affordable, high-quality electric vehicles that empower
              individuals to go green.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Addressing Rising Fuel Costs</h3>
            <p>
              Maxtron offers high-tech electric vehicles with lower running
              costs, utilising advanced battery technology for reduced fuel
              costs, reduced carbon footprint, and positive social impact. EVs
              are financially and environmentally sustainable, demonstrating
              long-term savings in fuel maintenance.
            </p>
          </div>
        </div>
      </div>
      <div className="frame">
        {/* <button className="custom-btn btn-4">
          <span>Read More</span>
        </button> */}
        {/* <button className="show-more-btn" onClick={handleBlogAllPage}>
          Show More <span className="arrow">&rarr;</span>
        </button> */}
        <button className="show-more-btn" onClick={handlwhyAllPage}>
          Show More <span className="arrow">&rarr;</span>
        </button>
      </div>
    </section>
  );
};

export default WhyChooseMaxtron;
