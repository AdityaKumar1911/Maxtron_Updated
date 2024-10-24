import React from "react";
import styled from "styled-components";
import "./TestimonialsPage.css";

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    quote:
      "Maxtron has completely changed the way I commute. It's fast, eco-friendly, and makes me feel like I'm contributing to a greener planet.",
    image:
      "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png", // Replace with actual image URL
  },
  {
    id: 2,
    name: "Jane Smith",
    quote:
      "Riding Maxtron has made my daily commute a breeze. I love the smooth ride and the fact that I'm reducing my carbon footprint.",
    image:
      "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg", // Replace with actual image URL
  },
  {
    id: 3,
    name: "David Lee",
    quote:
      "Switching to Maxtron was the best decision I made for my daily commute. It's reliable, eco-friendly, and I love the sleek design.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s", // Replace with actual image URL
  },
  {
    id: 4,
    name: "Emily Johnson",
    quote:
      "I never knew commuting could be this enjoyable. Maxtron has transformed my routine, and I feel great about contributing to a greener future.",
    image:
      "https://t3.ftcdn.net/jpg/06/07/84/82/240_F_607848231_w5iFN4tMmtI2woJjMh7Q8mGvgARnzHgQ.jpg", // Replace with actual image URL
  },
];

// Testimonial Card Component
const TestimonialCard = ({ testimonial }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={testimonial.image} alt={testimonial.name} />
      </ImageContainer>
      <CardContent>
        <Name>{testimonial.name}</Name>
        <Quote>"{testimonial.quote}"</Quote>
      </CardContent>
    </Card>
  );
};

// Testimonials Page Component
const TestimonialsPage = () => {
  return (
    <TestimonialsWrapper>
      <TestimonialsHeader>What Maxtron Riders Are Saying</TestimonialsHeader>
      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </TestimonialsGrid>
      <div className="frame">
        {/* <button className="custom-btn btn-4">
          <span>Read More</span>
        </button> */}
        {/* <button className="show-more-btn">
          Show More <span className="arrow">&rarr;</span>
        </button> */}
      </div>
    </TestimonialsWrapper>
  );
};

// Styled Components
const TestimonialsWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px 20px;
  background: linear-gradient(135deg, #f8f9fa, #ffffff);
  margin: 50px 20px;
  border-radius: 8px;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px;
`;

const TestimonialsHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 40px;
  font-weight: 700;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  cursor: pointer;
`;

const ImageContainer = styled.div`
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
  }
`;

const CardContent = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 10px;
  font-weight: 600;
`;

const Quote = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  font-style: italic;
`;

// Export the page component
export default TestimonialsPage;
