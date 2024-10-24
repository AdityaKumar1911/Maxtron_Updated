import React, { useState, useEffect } from "react"; // Added useEffect here
import "./Dealership.css";
import {
  FaBatteryFull,
  FaRocket,
  FaShieldAlt,
  FaMobileAlt,
  FaStream,
} from "react-icons/fa";
import WhatsAppPopup from "../DelershipPoUp/WhatsAppPopupD";

const DealerProgramPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleFormToggle = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  const usps = [
    {
      id: 1,
      icon: <FaBatteryFull />,
      title: "Revolutionary Battery Tech",
      description: `Maxtron vehicles showcase state-of-the-art battery prowess, delivering
      extended range and rapid charging times, outperforming rivals to offer
      prolonged riding sessions and minimized charging intervals.`,
    },

    {
      id: 2,
      icon: <FaMobileAlt />,
      title: "Smart Connectivity",
      description: ` Equipped with advanced smart connectivity features, Maxtron electric vehicles
      allow riders to seamlessly connect their devices for navigation, entertainment,
      and real-time vehicle monitoring, enhancing the overall riding experience and
      convenience.`,
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: "Top Performance",
      description: `Maxtron electric two-wheelers offer exceptional performance and speed,
delivering thrilling acceleration and top speeds that surpass traditional
combustion engine counterparts, providing powerful performance while
contributing to a cleaner environment.`,
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: "Best-in-Class Safety",
      description: `Maxtron prioritizes rider safety with a comprehensive suite of advanced safety
features, including collision prevention systems, anti-lock braking, and stability
control, providing riders with peace of mind and confidence on the road.`,
    },
    {
      id: 5,
      icon: <FaStream />,
      title: "Sleek and Innovative Design",
      description: `Maxtron electric vehicles boast a sleek and innovative design that sets them
apart from conventional scooters and motorcycles, offering superior
functionality and making a bold statement on the streets.`,
    },
  ];

  return (
    <div className="dealer-program-page">
      {/* Show the popup conditionally */}
      {/* {showPopup && <WhatsAppPopup closePopup={closePopup} />} */}

      {/* Rest of your DealerProgramPage content */}
      {/* Unique Selling Proposition Section */}
      <section className="usp-section">
        <h2 className="usp-title">Unique Selling Proposition</h2>
        <div className="usp-cards">
          {usps.map((usp) => (
            <div key={usp.id} className="usp-card">
              <div className="usp-card-icon">{usp.icon}</div>
              <h3 className="usp-card-title">{usp.title}</h3>
              <p className="usp-card-description">{usp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner with Maxtron Section */}
      <section className="why-partner-section">
        <h2 className="section-title">Why Partner with Maxtron</h2>
        <div className="partner-benefits">
          <div>
            <strong>Innovative Products</strong>
            <p>
              Maxtron presents next-gen electric scooters equipped with
              brushless hub motors, lithium/lead-acid batteries, and intelligent
              functionalities for an unprecedented riding adventure.
            </p>
          </div>
          <div>
            <strong>Diverse Range</strong>
            <p>
              Explore our diverse product range, meeting various customer
              preferences with powerful motors and stylish designs.
            </p>
          </div>
          <div>
            <strong>Power Quality</strong>
            <p>
              Maxtron is synonymous with reliability and top-notch quality. Our
              vehicles undergo rigorous testing for safety and customer
              satisfaction.
            </p>
          </div>
          <div>
            <strong>Dealer Support</strong>
            <p>
              Benefit from comprehensive support, including marketing
              assistance, product training, and responsive customer service. We
              are committed to your success!
            </p>
          </div>
        </div>
      </section>

      {/* How to Become a Dealer Section */}
      <section className="how-to-become-section">
        <h2 className="section-title">How to Become a Maxtron Dealer</h2>
        <div className="steps">
          <div>
            <strong>Reach Out</strong>
            <p>
              Express your interest in becoming a Maxtron dealer by contacting
              us.
            </p>
          </div>
          <div>
            <strong>Qualifications</strong>
            <p>
              Ensure you meet our dealership requirements, demonstrating
              dedication and passion for electric mobility.
            </p>
          </div>
          <div>
            <strong>Agreement</strong>
            <p>
              Sign a clear partnership agreement outlining terms for mutual
              benefit.
            </p>
          </div>
          <div>
            <strong>Product Delivery</strong>
            <p>
              Upon approval, receive our high-quality electric scooters
              promptly, ready to showcase to your customers.
            </p>
          </div>
        </div>
      </section>

      {/* Maxtron Dealership Benefits Section */}
      <section className="dealership-benefits-section">
        <h2 className="section-title">Maxtron Dealership Benefits</h2>
        <div className="benefits">
          <div>
            <strong>Lucrative Margins</strong>
            <p>Enjoy competitive margins and growing revenue potential.</p>
          </div>
          <div>
            <strong>Exclusive Access</strong>
            <p>Stay ahead by offering the latest Maxtron models.</p>
          </div>
          <div>
            <strong>Brand Recognition</strong>
            <p>Associate your business with Maxtron’s leading brand in EVs.</p>
          </div>
        </div>
      </section>

      {/* Maxtron Dealer Program Section */}
      <section className="dealer-program-section">
        <h2 className="section-title">
          Maxtron Dealer Program: Seize the Electric Revolution!
        </h2>
        <p style={{ textAlign: "center" }}>
          Expand your business with Maxtron, a pioneer in electric mobility.
          Join us today to explore growth opportunities in the dynamic electric
          vehicle industry.
        </p>

        {/* Add Button for Opening Dealership Form */}
        <button className="btn-open-form">
          Join the Maxtron Dealer Program
        </button>

        {/* Conditionally Render the Form */}

        <div className="dealership-form">
          <h3>Dealership Application Form</h3>
          <form>
            <label>
              Full Name:
              <input type="text" placeholder="Enter your full name" />
            </label>
            <label>
              Email:
              <input type="email" placeholder="Enter your email" />
            </label>
            <label>
              Phone Number:
              <input type="tel" placeholder="Enter your phone number" />
            </label>
            <label>
              Business Name:
              <input type="text" placeholder="Enter your business name" />
            </label>
            <label>
              Location:
              <input type="text" placeholder="Enter your business location" />
            </label>
            <button type="submit">Submit Application</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DealerProgramPage;
