import { useCallback, useMemo, useState } from "react";
import Button from "./Button";
import Headline from "./Headline";
import Count from "./Count";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const handleClick1 = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleClick2 = useCallback(() => {
    setCount1((prev1) => prev1 + 5);
  }, []);

  const oddValue = useMemo(() => {
    let i = 0;
    while (i < 1000000000000000) {
      i++;
      return count % 2 === 0 ? "even number" : "odd Number";
    }
  }, [count]);

  return (
    <>
      <Headline />
      <Count value={count} />
      <p>This value is {oddValue}</p>
      <Button onChnage={handleClick1} />
      <br /> <br />
      <Count value={count1} />
      <Button onChnage={handleClick2} />
    </>
  );
};
export default Counter;
