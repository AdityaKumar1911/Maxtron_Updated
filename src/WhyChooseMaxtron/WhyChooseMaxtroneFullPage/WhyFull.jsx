import React from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  Badge,
} from "@mui/material";
import { Zap, Leaf, Shield, Clock, Settings, Award } from "lucide-react";

// Feature Card Component
const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card style={{ height: "100%", padding: "16px" }}>
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
    >
      <Icon style={{ fontSize: 40, color: "#1976d2", marginRight: "16px" }} />
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    </div>
    <Typography variant="body2" color="textSecondary">
      {description}
    </Typography>
  </Card>
);

// Testimonial Card Component
const TestimonialCard = ({ name, location, quote }) => (
  <Card style={{ height: "100%", padding: "16px" }}>
    <CardContent>
      <Typography variant="body1" style={{ fontStyle: "italic" }}>
        "{quote}"
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        <div>
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {location}
          </Typography>
        </div>
        <Badge variant="outlined" color="secondary">
          Verified Rider
        </Badge>
      </div>
    </CardContent>
  </Card>
);

// Data for features
const features = [
  {
    icon: Zap,
    title: "Powerful Performance",
    description:
      "Experience unmatched speed and range with our high-capacity batteries and efficient motors.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Reduce your carbon footprint with our zero-emission electric scooters, contributing to a cleaner environment.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Ride with confidence thanks to our advanced safety features, including responsive brakes and stable design.",
  },
  {
    icon: Clock,
    title: "Long-lasting Battery",
    description:
      "Enjoy extended rides with our industry-leading battery life, perfect for daily commutes or weekend adventures.",
  },
  {
    icon: Settings,
    title: "Easy Maintenance",
    description:
      "Spend less time worrying about upkeep with our low-maintenance design and readily available support.",
  },
  {
    icon: Award,
    title: "Award-Winning Design",
    description:
      "Turn heads with our sleek, modern scooters that blend style with functionality.",
  },
];

// Data for testimonials
const testimonials = [
  {
    name: "Sarah L.",
    location: "New York, NY",
    quote:
      "My MAXTRON scooter has transformed my daily commute. It's fast, reliable, and I love how eco-friendly it is!",
  },
  {
    name: "Mike T.",
    location: "San Francisco, CA",
    quote:
      "The battery life on this scooter is incredible. I can go for days without needing to recharge.",
  },
  {
    name: "Emma R.",
    location: "London, UK",
    quote:
      "I feel so safe riding my MAXTRON. The stability and responsive brakes give me peace of mind in busy city traffic.",
  },
];

// Comparison Data
// Updated Comparison Data
const comparisonData = [
  {
    feature: "Range",
    maxtron: "Up to 60 miles",
    others: "30-40 miles",
    icon: Zap,
  },
  {
    feature: "Top Speed",
    maxtron: "25 mph",
    others: "15-20 mph",
    icon: Shield,
  },
  {
    feature: "Charging Time",
    maxtron: "3 hours",
    others: "5-6 hours",
    icon: Clock,
  },
  {
    feature: "Weight Capacity",
    maxtron: "300 lbs",
    others: "220-250 lbs",
    icon: Settings,
  },
  {
    feature: "Durability",
    maxtron: "10+ Years",
    others: "5-7 Years",
    icon: Shield,
  },
  {
    feature: "Warranty",
    maxtron: "3 Years",
    others: "1 Year",
    icon: Award,
  },
];

// Comparison Card Component
const ComparisonCard = ({ icon: Icon, feature, maxtron, others }) => (
  <Card style={{ height: "100%", padding: "16px" }}>
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
    >
      <Icon style={{ fontSize: 40, color: "#1976d2", marginRight: "16px" }} />
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        {feature}
      </Typography>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", color: "#1976d2" }}
        >
          MAXTRON
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {maxtron}
        </Typography>
      </div>
      <div style={{ textAlign: "center" }}>
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", color: "#757575" }}
        >
          Others
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {others}
        </Typography>
      </div>
    </div>
  </Card>
);

const WhyChooseMaxtron = () => (
  <div>
    {/* Hero Section */}
    <section
      style={{
        position: "relative",
        height: "60vh",
        minHeight: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1623079399942-368de709ea32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV2JTIwc2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D"
        alt="MAXTRON electric scooter in urban setting"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
      />
      <div
        style={{ position: "absolute", textAlign: "center", color: "white" }}
      >
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          Why Choose MAXTRON
        </Typography>
        <Typography variant="h5" style={{ marginBottom: "16px" }}>
          Experience the future of urban mobility
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ backgroundColor: "#00e676" }}
        >
          Explore Our Scooters
        </Button>
      </div>
    </section>

    {/* Features Section */}
    <section style={{ padding: "64px 16px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Unmatched Features for Unparalleled Rides
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Grid>
        ))}
      </Grid>
    </section>

    {/* Redesigned MAXTRON vs. The Competition Section */}
    <section style={{ padding: "64px 16px", backgroundColor: "#f0f0f0" }}>
      <Typography variant="h4" align="center" gutterBottom>
        MAXTRON vs. The Competition
      </Typography>
      <Typography
        variant="body1"
        align="center"
        color="textSecondary"
        style={{ marginBottom: "32px" }}
      >
        Compare the key features of MAXTRON with other electric scooters in the
        market.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {comparisonData.map((data, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ComparisonCard
              icon={data.icon}
              feature={data.feature}
              maxtron={data.maxtron}
              others={data.others}
            />
          </Grid>
        ))}
      </Grid>
    </section>

    {/* Testimonials Section */}
    <section style={{ padding: "64px 16px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        What Our Riders Say
      </Typography>
      <Grid container spacing={4}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <TestimonialCard
              name={testimonial.name}
              location={testimonial.location}
              quote={testimonial.quote}
            />
          </Grid>
        ))}
      </Grid>
    </section>

    {/* Call to Action Section */}
    <section
      style={{
        padding: "64px 16px",
        backgroundColor: "#ffffff",
        color: "black",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Ready to Revolutionize Your Ride?
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "16px" }}>
        Join thousands of satisfied riders and experience the MAXTRON difference
        today.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ backgroundColor: "#00e676" }}
      >
        Find Your Perfect Scooter
      </Button>
    </section>
  </div>
);

export default WhyChooseMaxtron;
