import React, { useState } from "react";
import styled from "styled-components";

// Dummy data for User Resources section
const manuals = [
  { id: 1, title: "EV Bike User Manual", url: "#" },
  { id: 2, title: "Scooter User Manual", url: "#" },
];

const tips = [
  {
    id: 1,
    title: "Battery Maintenance",
    description: "Keep the battery fully charged and avoid overcharging.",
  },
  {
    id: 2,
    title: "Tire Pressure Tips",
    description:
      "Regularly check the tire pressure to enhance efficiency and safety.",
  },
];

const faqs = [
  {
    id: 1,
    question: "How do I charge my EV bike?",
    answer:
      "You can charge your EV bike using the provided charging cable or visit any authorized charging station.",
  },
  {
    id: 2,
    question: "What is the warranty period?",
    answer:
      "The warranty period for all our EVs is 2 years from the date of purchase.",
  },
];

// Main User Resources Component
const UserResources = () => {
  const [selectedFAQ, setSelectedFAQ] = useState(null);

  // Toggle FAQ visibility
  const toggleFAQ = (index) => {
    setSelectedFAQ(selectedFAQ === index ? null : index);
  };

  return (
    <ResourcesWrapper>
      <SectionTitle>User Resources</SectionTitle>

      {/* <Section>
        <SubTitle>User Manuals</SubTitle>
        <ManualsContainer>
          {manuals.map((manual) => (
            <ManualCard key={manual.id}>
              <ManualTitle>{manual.title}</ManualTitle>
              <DownloadButton href={manual.url} download>
                Download
              </DownloadButton>
            </ManualCard>
          ))}
        </ManualsContainer>
      </Section> */}

      <Section>
        <SubTitle>Maintenance Tips</SubTitle>
        <TipsContainer>
          {tips.map((tip) => (
            <TipCard key={tip.id}>
              <TipTitle>{tip.title}</TipTitle>
              <TipDescription>{tip.description}</TipDescription>
            </TipCard>
          ))}
        </TipsContainer>
      </Section>

      <Section>
        <SubTitle>Frequently Asked Questions</SubTitle>
        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={faq.id}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span>{selectedFAQ === index ? "-" : "+"}</span>
              </FAQQuestion>
              {selectedFAQ === index && <FAQAnswer>{faq.answer}</FAQAnswer>}
            </FAQItem>
          ))}
        </FAQContainer>
      </Section>
    </ResourcesWrapper>
  );
};

// Styled Components for new design
const ResourcesWrapper = styled.div`
  padding: 80px 20px;
  background: linear-gradient(to bottom right, #f0f4f8, #d0dce2);
  max-width: 1600px;
  margin: 50px 20px;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #1e3c72;
  text-align: center;
  margin-bottom: 50px;
  font-family: "Poppins", sans-serif;
`;

const SubTitle = styled.h3`
  font-size: 2rem;
  color: #34495e;
  margin-bottom: 25px;
  font-family: "Poppins", sans-serif;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 60px;
`;

const ManualsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const ManualCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ManualTitle = styled.h4`
  color: #1e3c72;
  font-size: 1.5rem;
  margin-bottom: 25px;
  font-family: "Poppins", sans-serif;
`;

const DownloadButton = styled.a`
  padding: 12px 30px;
  background-color: #00e676;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #2471a3;
    transform: scale(1.05);
  }
`;

const TipsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const TipCard = styled.div`
  background-color: #ffffff;
  border-radius: 15px;
  padding: 35px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const TipTitle = styled.h4`
  color: #1e3c72;
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-family: "Poppins", sans-serif;
`;

const TipDescription = styled.p`
  color: #7f8c8d;
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
`;

const FAQContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const FAQItem = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ddd;
`;

const FAQQuestion = styled.div`
  font-size: 1.3rem;
  color: #1e3c72;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Poppins", sans-serif;

  span {
    font-size: 1.6rem;
  }
`;

const FAQAnswer = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-top: 10px;
  font-family: "Open Sans", sans-serif;
`;

export default UserResources;
