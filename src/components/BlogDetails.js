import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    `http://localhost:4040/blogs/${id}`
  );
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h1>{blog.title}</h1>
          <p>
            written by: <i>{blog.author}</i>
          </p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};
export default BlogDetails;
