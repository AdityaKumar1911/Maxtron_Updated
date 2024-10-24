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
          The main aim behind developing Maxtron- A Great High-Tech EV Scooter
          Company. The word itself stands for Maximum, meaning anyone can buy
          this eco-friendly, super comfy, quieter power start, durable battery,
          light, and speedy electric vehicle without compromising one's budget
          and quality with quantities.
        </p>

        <div className="benefits-grid">
          <div className="benefit-card">
            <h3>Affordable, High-Quality Vehicles</h3>
            <p>
              Maxtron offers high-quality EVs with unlimited services. These
              pocket-friendly electric vehicles are installed with Aluminium
              alloy, Lithium, or lead acid batteries with power backup, seamless
              bluetooth connectivity, LED Light, Reverse Gear, NFC Card, USB
              Charging, Cruise Control, 123 Speed Control, Remote and Anti-theft
              alarm, offering daily commuters a hassle-free and smooth
              experience.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Powered by Expertise</h3>
            <p>
              With 20+ Years of experience in the powerful batteries and
              electric vehicle industries market. Our leading brand, Maxtron, is
              powered by a legacy of trust, passion, and innovation. Our EV
              Scooters are launched in a series of sleek designs that offer
              fashion with comfort and build a robust EV supply chain ecosystem.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Leading the Electric Mobility Revolution</h3>
            <p>
              Rapid urbanisation needs modern solutions to reshape the future of
              transportation. Our brand is leading the electric mobility
              revolution by emphasising zero-emissions, battery enhancements,
              safety measures, and efficiency improvements towards an
              eco-friendly future, innovation in sustainable tech, and
              empowering dreamers to go green.
            </p>
          </div>

          <div className="benefit-card">
            <h3>Addressing Rising Fuel Costs</h3>
            <p>
              Advanced battery technology helps to ease fuel costs by embracing
              electric mobility- ease, reduced carbon footprint, and positive
              social impact. EVs are more cost-effective than fuel-powered
              vehicles, which shows long-term savings in terms of fuel
              maintenance, making it both a financially and environmentally
              sustainable choice.
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
