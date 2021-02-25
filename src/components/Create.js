import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Thanos");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    const blog = { author, title, body };
    setIsPending(true);
    fetch("http://localhost:4040/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
      .then(() => {
        console.log(`new blog added`);
        setIsPending(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(blog);
  };
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitHandler}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Iron Man">Iron Man</option>
          <option value="Thanos">Thanos</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Please wait...</button>}
      </form>
    </div>
  );
};
export default Create;
