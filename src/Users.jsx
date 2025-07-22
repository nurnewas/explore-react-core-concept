import { useEffect, useState } from "react";

export default function Users() {
  // use Effect
  const [users, setUsers] = useState([]);
  //   use Effect
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <>
      <h1>Users{setUsers}</h1>
      <h2>Users: {users.length}</h2>
    </>
  );
}
