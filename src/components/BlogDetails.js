import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    `http://localhost:4040/blogs/${id}`
  );
  const history = useHistory();
  const deleteHandler = () => {
    fetch(`http://localhost:4040/blogs/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        console.log(`blog ${id} deleted`);
        history.push("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

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
      <button onClick={deleteHandler}>Delete Blog</button>
    </div>
  );
};
export default BlogDetails;
