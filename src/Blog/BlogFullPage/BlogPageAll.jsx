// BlogPage.js

import React from "react";

const BlogPage = () => {
  const featuredPost = {
    title: "The Future of Electric Scooters: A Comprehensive Look",
    description:
      "Explore the latest trends and advancements in the electric scooter industry, highlighting eco-friendly transportation options and the future of urban mobility.",
    category: "EV Scooters",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1579600517811-d88f3ab8c03f?auto=format&fit=crop&w=800&q=80",
    author: "John Doe",
  };

  const sidePosts = [
    {
      title: "Top 5 Electric Scooters to Watch in 2024",
      category: "EV Scooters",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1558564822-b40e1fd2b0d5?auto=format&fit=crop&w=200&q=80",
    },
    {
      title: "Battery Life Comparison: Which EV Scooter Reigns Supreme?",
      category: "EV Scooters",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1571887264931-eae4ff3dd04f?auto=format&fit=crop&w=200&q=80",
    },
    {
      title: "Charging Your EV Scooter: Tips for Longevity and Efficiency",
      category: "EV Scooters",
      readTime: "3 min read",
      image:
        "https://images.unsplash.com/photo-1552766958-19f0577f89ae?auto=format&fit=crop&w=200&q=80",
    },
  ];

  const secondaryPosts = [
    {
      title: "How EV Scooters Are Revolutionizing Urban Commutes",
      category: "EV Scooters",
      timeAgo: "12 hours ago",
      image:
        "https://images.unsplash.com/photo-1549214013-5c357039b8e1?auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "The Environmental Impact of EV Scooters: What You Need to Know",
      category: "EV Scooters",
      timeAgo: "1 day ago",
      image:
        "https://images.unsplash.com/photo-1547394765-d9f142e93d50?auto=format&fit=crop&w=300&q=80",
    },
  ];

  const latestArticles = [
    {
      title: "Top Safety Tips for Riding Your Electric Scooter",
      author: "Jane Smith",
      timeAgo: "2 hours ago",
      readTime: "3 minute read",
      image:
        "https://images.unsplash.com/photo-1558980664-10a4c7b42220?auto=format&fit=crop&w=150&q=80",
    },
    {
      title: "Affordable EV Scooters: What Are Your Best Options in 2024?",
      author: "Michael Green",
      timeAgo: "5 hours ago",
      readTime: "4 minute read",
      image:
        "https://images.unsplash.com/photo-1552858726-c9b92bc5f5ab?auto=format&fit=crop&w=150&q=80",
    },
    {
      title: "How Governments Are Encouraging EV Scooter Adoption",
      author: "Chris Lee",
      timeAgo: "8 hours ago",
      readTime: "6 minute read",
      image:
        "https://images.unsplash.com/photo-1552858726-daa24b91894a?auto=format&fit=crop&w=150&q=80",
    },
    {
      title: "EV Scooter Maintenance: How to Keep Your Ride Smooth",
      author: "Emily Clark",
      timeAgo: "12 hours ago",
      readTime: "5 minute read",
      image:
        "https://images.unsplash.com/photo-1552858726-6a8b1d226d0e?auto=format&fit=crop&w=150&q=80",
    },
  ];

  return (
    <div className="bg-gray-100 font-sans antialiased min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Feature Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Main Post */}
          <div className="lg:col-span-2 bg-white shadow-md rounded-lg p-6">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {featuredPost.title}
            </h2>
            <p className="text-gray-600 mb-4">{featuredPost.description}</p>
            <div className="text-gray-500 text-sm">
              <span>
                {featuredPost.category} • {featuredPost.readTime}
              </span>
            </div>
          </div>

          {/* Side Posts */}
          <div className="space-y-4">
            {sidePosts.map((post, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-20 h-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {post.title}
                  </h3>
                  <div className="text-gray-500 text-sm">
                    <span>
                      {post.category} • {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Posts Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          {secondaryPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <div className="text-gray-500 text-sm">
                  <span>
                    {post.category} • {post.timeAgo}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Latest Articles Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {latestArticles.map((article, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {article.title}
                </h3>
                <div className="text-gray-500 text-sm mb-2">
                  <span>
                    {article.author} • {article.timeAgo}
                  </span>
                </div>
                <div className="text-gray-500 text-sm">
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
