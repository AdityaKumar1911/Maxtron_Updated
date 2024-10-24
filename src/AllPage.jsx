import React from "react";
import SliderComponent from "./ExploreScooters/SliderComponentAll";
import SavingsCalculator from "./SaveingCalculater/EmiCalculater";
import WhyChooseMaxtron from "./WhyChooseMaxtron/WhyChooseMaxtron";
import DealerLocator from "./NearestDelear/DealerNetwork";

import UserResources from "./UserResources/UserResources";
import ContactUs from "./ContectUs/ContactUs";
import BlogPage from "./Blog/BlogPage";
import TestimonialsPage from "./MaxtronRidersAreSaying/TestimonialsPage";
import NewsletterSubscription from "./Subscribe/Newsletter";

import Popup from "./Popup/Popup";

import AboutUs from "./AboutUs/AboutUS";
import Nav from "./SlidingBanner/Nav";
const AllPage = () => {
  return (
    <div>
      <Popup />

      {/* <Navbar /> */}
      <Nav />
      <SliderComponent />
      <SavingsCalculator />
      <WhyChooseMaxtron />
      <AboutUs />
      <DealerLocator />
      <UserResources />
      <ContactUs />
      <BlogPage />
      {/* <TestimonialsPage /> */}
      <NewsletterSubscription />
      {/* <TestRideForm/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default AllPage;
