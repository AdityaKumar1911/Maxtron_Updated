import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./DealerNetwork.css";

// Placeholder icons for the map
const dealerIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const DealerLocator = () => {
  const [dealers, setDealers] = useState([
    {
      id: 1,
      name: "A & R E-Automobiles",
      lat: 28.7041,
      lng: 77.1025,
      city: "Delhi",
      state: "Delhi",
      locality: "Rohini",
      tollFreeNumber: "1800-123-4567", // Toll-free number
    },
    {
      id: 2,
      name: "A H Motors",
      lat: 19.076,
      lng: 72.8777,
      city: "Mumbai",
      state: "Maharashtra",
      locality: "Andheri",
      tollFreeNumber: "1800-987-6543", // Toll-free number
    },
  ]);

  const [filteredDealers, setFilteredDealers] = useState(dealers);
  const mapRef = useRef();

  const handleFilterChange = () => {
    // Handle filtering logic here based on state, city, and locality
  };

  const redirectToGoogleMaps = (lat, lng) => {
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;
    window.open(googleMapsUrl, "_blank");
  };

  const handleMouseEnter = () => {
    if (mapRef.current) {
      mapRef.current.leafletElement.scrollWheelZoom.disable();
    }
  };

  const handleMouseLeave = () => {
    if (mapRef.current) {
      mapRef.current.leafletElement.scrollWheelZoom.enable();
    }
  };

  return (
    <DealerLocatorWrapper>
      <SearchContainer>
        <h2>Find Your Nearest Dealer</h2>
        <SelectRow>
          <select name="state" id="state-select" onChange={handleFilterChange}>
            <option value="">-- Select State --</option>
            <option value="Delhi">Delhi</option>
            <option value="Maharashtra">Maharashtra</option>
          </select>
          <select name="city" id="city-select" onChange={handleFilterChange}>
            <option value="">-- Select City --</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>
          <select
            name="locality"
            id="locality-select"
            onChange={handleFilterChange}
          >
            <option value="">-- Select Locality --</option>
            <option value="Rohini">Rohini</option>
            <option value="Andheri">Andheri</option>
          </select>
          <SearchButton>Search</SearchButton>
        </SelectRow>
      </SearchContainer>

      <ContentContainer>
        <DealerList>
          {filteredDealers.map((dealer) => (
            <DealerCard key={dealer.id}>
              <h3>{dealer.name}</h3>
              <p>
                {dealer.locality}, {dealer.city}, {dealer.state}
              </p>
              <p>
                Toll-Free:{" "}
                <a href={`tel:${dealer.tollFreeNumber}`}>
                  {dealer.tollFreeNumber}
                </a>
              </p>
              {/* Uncomment this to show buttons */}
              {/* <CardButtons>
                <button>View on Map</button>
                <button
                  onClick={() => redirectToGoogleMaps(dealer.lat, dealer.lng)}
                >
                  Get Directions
                </button>
              </CardButtons> */}
            </DealerCard>
          ))}
        </DealerList>

        <MapContainerWrapper>
          <MapContainer
            center={[20.5937, 78.9629]}
            zoom={5}
            scrollWheelZoom={false} // Disable scroll zoom initially
            style={{ height: "100%", width: "100%" }}
            whenCreated={(mapInstance) => {
              mapRef.current = mapInstance;
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {filteredDealers.map((dealer) => (
              <Marker
                key={dealer.id}
                position={[dealer.lat, dealer.lng]}
                icon={dealerIcon}
              >
                <Popup>
                  {dealer.name}
                  <br />
                  {dealer.city}, {dealer.state}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </MapContainerWrapper>
      </ContentContainer>
    </DealerLocatorWrapper>
  );
};

// Styled Components with Light, Modern Color Palette
const DealerLocatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5faff;
  padding: 20px;
  margin: 50px 20px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

const SearchContainer = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.12);
  width: 100%;
  max-width: 1200px;
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #336699;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
  }
`;

const SelectRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  select {
    width: 30%;
    padding: 12px;
    border-radius: 10px;
    border: 2px solid #8fbcd4;
    font-size: 1rem;
    background-color: #f9f9f9;
    transition: border-color 0.3s ease;

    &:focus {
      border-color: #336699;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    select {
      width: 100%;
    }
  }
`;

const SearchButton = styled.button`
  padding: 12px 30px;
  background-color: #00e676;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #336699;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DealerList = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const DealerCard = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  h3 {
    margin: 0 0 10px 0;
    color: #336699;
  }

  p {
    margin: 0 0 15px 0;
    font-size: 0.9rem;
    color: #555;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.12);
  }
`;

const MapContainerWrapper = styled.div`
  width: 65%;
  height: 600px;
  border-radius: 15px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: 400px;
    margin-top: 20px;
  }
`;

export default DealerLocator;
