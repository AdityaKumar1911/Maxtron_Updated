import React, { useState } from "react";
import styled from "styled-components";
import { FaArrowRight } from "react-icons/fa"; // Arrow icon

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");

  const handleSubscription = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log("Subscribed with: ", email);
    setEmail("");
  };

  return (
    <SubscriptionWrapper>
      <FormWrapper>
        <Title>Subscribe to learn about our latest news</Title>
        <Form onSubmit={handleSubscription}>
          <InputWrapper>
            <EmailInput
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <SubmitButton type="submit">
              <FaArrowRight />
            </SubmitButton>
          </InputWrapper>
        </Form>
      </FormWrapper>
    </SubscriptionWrapper>
  );
};

// Styled Components
const SubscriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  background-color: #f5f7f9; /* Soft light background */
  padding: 0 20px;
`;

const FormWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: baseline;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #2c3e50; /* Dark gray text */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 500px;
  border-bottom: 1px solid #2c3e50; /* Bottom border like the example */
  position: relative;
`;

const EmailInput = styled.input`
  width: 400px;
  padding: 15px;
  font-size: 1rem;
  border: none;
  background: transparent;
  outline: none;
  color: #2c3e50;
  ::placeholder {
    color: #95a5a6; /* Light gray placeholder text */
  }
  max-width: 800px;
  @media (max-width: 768px) {
    width: auto;
  }
`;

const SubmitButton = styled.button`
  background: none;
  border: none;
  color: #2c3e50;
  cursor: pointer;
  padding-right: 10px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  transition: color 0.3s ease;

  &:hover {
    color: #3498db; /* Light blue on hover */
  }
`;

export default NewsletterSubscription;
