import { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <h1>PostS</h1>
      <p>posts are: {posts.length}</p>

      {/* {
        posts.map(post => <Post></Post>)
      } */}
      {posts.map((post) => (
        <Post  title={post.title} body={post.body} />
      ))}
    </>
  );
}
