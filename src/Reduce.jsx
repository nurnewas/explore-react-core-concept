import { useState } from "react";

export default function Reduce() {
  const [click, SetClick] = useState(99);

  const handleClick = () => {
    SetClick(click - 1);
  };
  return (
    <>
      <div style={{ border: "1px solid red", padding: "10px" }}>
        <h1>Return</h1>
        <p>Total Click: {click}</p>
        <button onClick={handleClick}>Reduce</button>
      </div>
    </>
  );
}
