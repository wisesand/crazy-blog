import React from "react";
import image from "../image/404.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={image} />
      <h2>Sorry !</h2>
      <p>That page doesn't exist!</p>
      <Link to="/">Back to home</Link>
    </div>
  );
};

export default NotFound;
