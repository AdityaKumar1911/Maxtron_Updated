import React from "react";
import styled from "styled-components";
import "./BlogPage.css";
import { useNavigate } from "react-router-dom";

// Blog data (you can replace this with dynamic data from an API)
const blogs = [
  {
    id: 1,
    title: "The Future of Electric Mobility",
    description:
      "Explore the latest trends and innovations driving the electric vehicle industry.",
    image:
      "https://bd.gaadicdn.com/processedimages/ola-electric/s1-pro/source/s1-pro664af02c3f229.jpg", // Replace with actual image URL
    date: "October 3, 2024",
  },
  {
    id: 2,
    title: "How EV Charging Technology is Evolving",
    description:
      "A look into the cutting-edge developments in EV charging infrastructure.",
    image: "https://www.motorbeam.com/wp-content/uploads/Ola-S1-Deliveries.jpg", // Replace with actual image URL
    date: "September 22, 2024",
  },
  {
    id: 3,
    title: "Electric Bikes: A Sustainable Urban Commute",
    description:
      "How electric bikes are transforming urban mobility and reducing pollution.",
    image:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/99475/one-right-front-three-quarter-2.jpeg?isig=0", // Replace with actual image URL
    date: "September 15, 2024",
  },
  {
    id: 4,
    title: "Government Policies Boosting EV Adoption",
    description:
      "An overview of the global policies encouraging the switch to electric vehicles.",
    image:
      "https://akm-img-a-in.tosshub.com/aajtak/images/story/202301/ola_electric_scooter-amp-sixteen_nine.jpg?size=948:533", // Replace with actual image URL
    date: "August 30, 2024",
  },
  // Add more blog posts here...
];

// Blog Card Component
const BlogCard = ({ blog }) => {
  return (
    <Card>
      <ImageContainer>
        <img src={blog.image} alt={blog.title} />
      </ImageContainer>
      <CardContent>
        <BlogDate>{blog.date}</BlogDate>
        <BlogTitle>{blog.title}</BlogTitle>
        <BlogDescription>{blog.description}</BlogDescription>
        <ReadMoreButton>Read More</ReadMoreButton>
      </CardContent>
    </Card>
  );
};

// Blog Page Component
const BlogPage = () => {
  const navigate = useNavigate(); // Get the navigate function from useNavigate

  const handleBlogAllPage = () => {
    navigate("/blogpageall"); // Adjust the route as per your routing configuration
  };

  return (
    <BlogWrapper>
      <BlogHeader>Latest Blog Posts on Electric Mobility</BlogHeader>
      <BlogGrid>
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </BlogGrid>
      <div className="frame">
        {/* <button className="custom-btn btn-4" onClick={handleBlogAllPage}>
          <span>Read More</span>
        </button> */}
        <button className="show-more-btn" onClick={handleBlogAllPage}>
          Show More <span className="arrow">&rarr;</span>
        </button>
      </div>
    </BlogWrapper>
  );
};

// Styled Components
const BlogWrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f7f7f7;
  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.1);
  margin: 50px 20px;
  border-radius: 8px;
`;

const BlogHeader = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 50px;
  color: #2c3e50;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 20px;
`;

const BlogDate = styled.p`
  font-size: 0.9rem;
  color: #7f8c8d;
  margin-bottom: 10px;
`;

const BlogTitle = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
`;

const BlogDescription = styled.p`
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
  background-color: #00e676;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

export default BlogPage;
