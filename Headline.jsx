import { memo } from "react";

const Headline = () => {
  console.log("Hello Head Line");
  return (
    <>
      <h1>Now I am study in React Performance Optimizition</h1>
    </>
  );
};
export default memo(Headline);
