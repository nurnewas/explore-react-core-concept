import Posts from "./Posts";

export default function Post({ post }) {
    console.log(post);
  return (

    <>
      <h1>Single post Bebo!</h1>
      <h3>Tittle: {post.title}</h3>
      <p>Description: {post.body}</p>
    </>
  );
}
 