import React, { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const deleteBlog = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };
  useEffect(() => {
    fetch(" http://localhost:4040/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);
  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
    </div>
  );
};
export default Home;
