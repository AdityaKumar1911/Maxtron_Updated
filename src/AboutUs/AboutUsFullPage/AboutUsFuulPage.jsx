import { Button, Card, CardContent } from "@mui/material";
import { Zap, Leaf, Shield } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <img
          src="https://c8.alamy.com/comp/2A2T6M6/3d-rendering-electric-scooter-banner-2A2T6M6.jpg"
          alt="Electric scooters on a city street"
          className="brightness-50 object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
            About MAXTRON
          </h1>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="Aditya" style={{ background: "#ffffff" }}>
        <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-muted-foreground">
            At MAXTRON, we're committed to revolutionizing urban mobility with
            cutting-edge electric scooters. Our mission is to provide
            eco-friendly, efficient, and stylish transportation solutions for
            the modern city dweller.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-muted">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Why Choose MAXTRON
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Zap className="w-12 h-12 mb-4" style={{ color: "#00e676" }} />
                <h3 className="text-xl font-semibold mb-2">
                  Powerful Performance
                </h3>
                <p className="text-center text-muted-foreground">
                  Experience unmatched speed and range with our high-capacity
                  batteries and efficient motors.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Leaf
                  className="w-12 h-12 mb-4 "
                  style={{ color: "#00e676" }}
                />
                <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
                <p className="text-center text-muted-foreground">
                  Reduce your carbon footprint with our zero-emission electric
                  scooters.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center p-6">
                <Shield
                  className="w-12 h-12 mb-4 "
                  style={{ color: "#00e676" }}
                />
                <h3 className="text-xl font-semibold mb-2">Safety First</h3>
                <p className="text-center text-muted-foreground">
                  Ride with confidence thanks to our advanced safety features
                  and sturdy construction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section style={{ background: "#ffffff" }}>
        <div className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Jane Doe", role: "CEO" },
              { name: "John Smith", role: "Head of Design" },
              { name: "Emily Chen", role: "Chief Engineer" },
              { name: "Michael Brown", role: "Marketing Director" },
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={
                    "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
                  }
                  alt={member.name}
                  className="rounded-full mb-4"
                  width="200"
                  height="200"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16  text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join the Electric Revolution?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to learn more about our electric scooters and find
            the perfect model for you.
          </p>
          <Button size="large" variant="contained" color="secondary">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
