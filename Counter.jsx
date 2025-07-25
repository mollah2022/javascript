import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <h1>This is a Counter Machine.......</h1>
      <p>Counter value :{count} </p>
      <button onClick={handleCount}>Increment+1</button>
    </>
  );
}
export default Counter;
