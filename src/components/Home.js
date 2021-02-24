import React, { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Crazy 1", content: "I have no idea", author: "Shivanshi" },
    { id: 2, title: "Crazy 2", content: "I have an idea", author: "Sandeep" },
    { id: 3, title: "Crazy 3", content: "I have better idea", author: "Thanos" }
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
export default Home;
