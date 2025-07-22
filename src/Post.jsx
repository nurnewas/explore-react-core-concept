import { useEffect, useState } from "react";

export default function Post() {
  // Using Set State
  const [post, setPost] = useState([]);
  // Using Set Effect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <>
      <h1>Post Section</h1>
      <p>Post are total: {post.length}</p>
    </>
  );
}
