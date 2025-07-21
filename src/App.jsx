import "./App.css";
import Country from "./country";

function App() {
  //Hard coded Js
  function handleClick() {
    alert("Ahaaaaa! uffff! I am clicked!");
  }

  const handleClick2 = () => {
    alert("Ahaaaaa! uffff! I am also clicked! 2");
  };

  // add to five
  const addToFive = (num) => {
    alert(num + 5);
  };
  return (
    <>
      <h1>Core Concept </h1>
      {/* /counter */}
      <Country />

      <button onClick={handleClick}>Use Me baby</button>
      <button onClick={handleClick2}>touch me</button>
      <button onClick={() => alert("From JSX")}>I'm From JSX</button>

      {/* /use this many times */}
      <button onClick={() => addToFive(1)}>Adding 5</button>
    </>
  );
}

export default App;
