import { useState } from "react";

export default function Country() {
  const [count, setCount] = useState(0);

  const addNewValue = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div style={{ border: "1px  solid pink", padding: "10px", margin: "10px" }}>
        <h1>I am counting!</h1>
        <p>Counting: {count}</p>
        <button onClick={addNewValue}>Add New Value!</button>
      </div>
    </>
  );
}
