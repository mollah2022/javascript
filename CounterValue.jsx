import { useState } from "react";
import Button from "./child/Button";

function CounterValue() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount((c) => c + 1);
  }

  return (
    <>
      <Button value={count} onclick={handleClick} />
      <Button value={count} onclick={handleClick} />
    </>
  );
}
export default CounterValue;
