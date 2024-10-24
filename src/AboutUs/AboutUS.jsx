import React from "react";
import styled from "styled-components";
import "./AboutUs.css";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate(); // Call useNavigate to get the navigate function

  const handleAboutUsAllPage = () => {
    navigate("/Aboutus"); // Adjust the route as per your routing configuration
  };

  return (
    <Section>
      <Container>
        <Header>
          <h1>
            <Highlight>About Us</Highlight>
          </h1>
          <p>
            Rehabilitating Sustainable Energy with Invention and Innovation.
          </p>
        </Header>

        <Story>
          <StoryItem>
            <Icon>🌿</Icon>
            <Text>
              <h3>Eco-Friendly Vision</h3>
              <p>
                Maxtron offers sustainable transportation by emitting zero
                carbon footprints to reshape urban commuting with
                eco-friendliness.
              </p>
            </Text>
          </StoryItem>

          <StoryItem>
            <Icon>⚡</Icon>
            <Text>
              <h3>Cutting-Edge Technology</h3>
              <p>
                With Innovative technologies and inventions, Maxtron provides
                super-quality electric vehicles with advanced features for
                modern urban needs.
              </p>
            </Text>
          </StoryItem>

          <StoryItem>
            <Icon>🌍</Icon>
            <Text>
              <h3>Committed to Sustainability</h3>
              <p>
                Maxtron's mission and vision are to reduce carbon emissions and
                promote pollution-free environment, contributing towards
                cleaner, greener, quieter, and smoother cities worldwide.
              </p>
            </Text>
          </StoryItem>
        </Story>

        {/* Full Story Section */}
        {/* <FullStorySection>
          <FullStoryHeader>The Story Behind Maxtron</FullStoryHeader>
          <FullStoryText>
            <p>
              Maxtron was born out of a vision to reshape the way we commute in
              cities—a vision driven by a deep commitment to environmental
              sustainability, cutting-edge technology, and a passion for
              creating smarter urban mobility solutions.
            </p>
            <p>
              As cities grew and congestion became a daily struggle, the need
              for cleaner, more efficient transportation became increasingly
              urgent. Maxtron was founded to meet this demand by designing
              eco-friendly electric vehicles that offer a cleaner alternative to
              traditional fuel-powered modes of transport. At the heart of
              Maxtron’s mission is a drive to significantly reduce carbon
              footprints while offering a modern, sleek, and comfortable
              commuting experience.
            </p>
            <p>
              Built on advanced technology, Maxtron integrates innovation into
              every aspect of its design—from powerful batteries that offer
              extended range to intuitive features that enhance safety and ease
              of use. Whether it's the seamless connectivity features,
              high-performance motors, or smart energy management systems,
              Maxtron's electric vehicles are at the forefront of automotive
              evolution.
            </p>
            <p>
              But beyond technology, what truly powers Maxtron is a relentless
              passion for revolutionizing urban transportation. The team behind
              Maxtron is driven by a belief that the future of commuting must
              not only be efficient but also sustainable, paving the way for
              cleaner, quieter, and more responsible cities.
            </p>
            <p>
              Maxtron isn’t just building vehicles; it's building a movement—one
              that champions green commuting, empowers urban dwellers to embrace
              the future of mobility, and fosters a healthier relationship with
              the environment. With every ride, Maxtron is driving us closer to
              a world where technology and sustainability go hand in hand,
              making urban transportation a joy rather than a burden.
            </p>
          </FullStoryText>
        </FullStorySection> */}

        <Footer>
          <p>
            Embrace the change with Maxtron where innovation meets
            sustainability, and be a pioneer in sustainable travel- making
            commuting smarter, greener, and more enjoyable.
          </p>
        </Footer>
        <div className="frame">
          {/* <button className="custom-btn btn-4">
            <span>Read More</span>
          </button> */}
          <button className="show-more-btn" onClick={handleAboutUsAllPage}>
            Show More <span className="arrow">&rarr;</span>
          </button>
        </div>
      </Container>
    </Section>
  );
};

// Styled components
const Section = styled.section`
  background: linear-gradient(120deg, #f3f4f6, #ffffff);
  padding: 80px 20px;
  display: flex;
  justify-content: center;
  margin: 50px 20px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 15px;

  @media (max-width: 768px) {
    padding: 60px 0px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  text-align: center;
`;

const Header = styled.header`
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ff7f50;
    font-family: "Poppins", sans-serif;
  }
  p {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 60px;
    font-family: "Roboto", sans-serif;
  }
`;

const Highlight = styled.span`
  background: #00e676;
  padding: 0 15px;
  border-radius: 5px;
  color: white;
  box-shadow: 0 5px 15px rgba(255, 69, 0, 0.3);
`;

const Story = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StoryItem = styled.div`
  background-color: #fff;
  padding: 30px;
  width: 30%;
  margin-bottom: 20px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 380px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #ff6347;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-20px);
    }
    60% {
      transform: translateY(-10px);
    }
  }
`;

const Text = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 15px;
    color: #333;
    font-family: "Poppins", sans-serif;
  }
  p {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    font-family: "Roboto", sans-serif;
  }
`;

// Full Story Section
const FullStorySection = styled.div`
  background-color: #fafafa;
  padding: 50px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  text-align: left;

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

const FullStoryHeader = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

const FullStoryText = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  font-family: "Roboto", sans-serif;

  p {
    margin-bottom: 20px;
  }
`;

const Footer = styled.footer`
  p {
    font-size: 1.4rem;
    color: #444;
    margin-top: 50px;
    line-height: 1.8;
    font-family: "Roboto", sans-serif;
  }
`;

// Exporting the AboutUs component
export default AboutUs;
