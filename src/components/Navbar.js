import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Crazy Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#1d98cb",
            borderRadius: "5px"
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
