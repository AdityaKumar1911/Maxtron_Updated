import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const MapComponent = () => {
  const mapContainerStyle = {
    height: "450px",
    width: "600px",
  };

  const center = {
    lat: 18.9751, // Center coordinates
    lng: 72.8273, // Center coordinates
  };

  const locations = [
    { lat: 18.9751, lng: 72.8273, title: "AH Motors (AL HAADI MOTORS)" },
    { lat: 18.9761, lng: 72.8263, title: "Location 2" }, // Example of another location
    { lat: 18.9741, lng: 72.8283, title: "Location 3" }, // Example of another location
  ];

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      {" "}
      {/* Replace with your actual API key */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={15}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.title}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
