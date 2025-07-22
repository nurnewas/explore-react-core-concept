import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  // Using Set State
  const [posts, setPosts] = useState([]);
  // Using Set Effect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>Post Section</h1>
      <p>Post are total: {posts.length}</p>
      {/* {posts.map((post) => (
         <Post key={post.id} post={post}></Post>
      ))} */}
      {posts.map((post) => (
        <Post key={post.id} post={post}></Post>
      ))}
    </>
  );
}
