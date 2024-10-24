import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Nav.css";

// Import your images manually
import M3Banner from "../images/Website Banner1 copy.jpg"; // Replace with your actual image file name
import scooter2 from "../images/Website Banner2 copy.jpg";
// Add other images here

// Importing images Mobile View
import MobileBanner1 from "../images/Website MobileView Banner1 copy.jpg";
import MobileBanner2 from "../images/Website MobileView Banner2 copy.jpg";

function App() {
  // State to manage screen width
  const [isMobile, setIsMobile] = useState(false);

  // Function to check the window width and update state
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); // Set a threshold for mobile view (768px is a common breakpoint)
  };

  // Use useEffect to run the function on mount and window resize
  useEffect(() => {
    checkScreenSize(); // Check on initial load
    window.addEventListener("resize", checkScreenSize); // Update on window resize
    return () => window.removeEventListener("resize", checkScreenSize); // Cleanup on unmount
  }, []);

  // Desktop images (imported manually)
  const desktopImages = [M3Banner, scooter2];

  // Mobile images (imported manually or use separate mobile-optimized images if available)
  const mobileImages = [
    MobileBanner1, // Assuming you have separate mobile versions
    MobileBanner2,
  ];

  // Choose the appropriate set of images based on the screen size
  const imagesToDisplay = isMobile ? mobileImages : desktopImages;

  return (
    <div className="box">
      <Carousel
        showThumbs={false} // Remove thumbnails
        showStatus={false} // Remove status indicator
        showIndicators={true} // Control dots
        infiniteLoop={true} // Loop infinitely
        autoPlay={true} // Enable auto-slide on both mobile and desktop
        interval={5000} // Slide every 5 seconds
        swipeable={true} // Enable swiping
        emulateTouch={true} // Emulate touch on non-touch devices
        axis="horizontal" // Horizontal sliding only
        preventMovementUntilSwipeScrollTolerance={true} // Prevent accidental slides
        swipeScrollTolerance={50} // Adjust tolerance to avoid triggering slide on small vertical movements
        stopOnHover={false} // Prevent pausing on hover
        autoFocus={true} // Maintain focus for continuous auto-slide
      >
        {imagesToDisplay.map((imageSrc, index) => (
          <div className="slide" key={index}>
            <img alt={`slide_image_${index}`} src={imageSrc} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default App;
