import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TestRideForm from "./TestRide/TestRideForm";
import AllPage from "./AllPage"; // Main component (All Pages)
import OfferAdd from "./OfferBanner/Header";
import Navbar from "./Navbar/Navbar";
import DealerPage from "./DealerShip/Dealership";
import M1Scooter from "./ExploreScooters/M1/M1Scooter";
import ScooterBooking from "./ScootersBooking/ScooterBooking";
import ScooterData from "./Hamburgur/ScooterData";
import BlogPageAll from "./Blog/BlogFullPage/BlogPageAll";
import Footer from "./Footer/Footer";
import AboutUsFullPage from "./AboutUs/AboutUsFullPage/AboutUsFuulPage";
import WhyFull from "./WhyChooseMaxtron/WhyChooseMaxtroneFullPage/WhyFull";
import M2Scooter from "./ExploreScooters/M2/M2Scooter";
import M3Scooter from "./ExploreScooters/M3/M3Scooter";
import M4Scooter from "./ExploreScooters/M4/M4Scooter";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop/ScrollToTop"; // Import the ScrollToTop component

// Define a Layout component to conditionally render the footer
function Layout({ children }) {
  const location = useLocation(); // Get the current location
  return (
    <>
      <OfferAdd />
      <Navbar />
      {children}
      {location.pathname !== "/dealer" && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />{" "}
        {/* Ensures that every route opens directly at the top */}
        <Layout>
          <Routes>
            <Route path="/" element={<AllPage />} />
            <Route path="/testride" element={<TestRideForm />} />
            <Route path="/dealer" element={<DealerPage />} />
            <Route path="/m1" element={<M1Scooter />} />
            <Route path="/m2" element={<M2Scooter />} />
            <Route path="/m3" element={<M3Scooter />} />
            <Route path="/m4" element={<M4Scooter />} />
            <Route path="/sbooking" element={<ScooterBooking />} />
            <Route path="/scooterdata" element={<ScooterData />} />
            <Route path="/blogpageall" element={<BlogPageAll />} />
            <Route path="/aboutus" element={<AboutUsFullPage />} />
            <Route path="/whyfull" element={<WhyFull />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
