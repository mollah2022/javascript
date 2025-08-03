import { memo } from "react";

const Button = ({ onChnage }) => {
  console.log("Button is Rendering");
  return (
    <>
      <button onClick={onChnage}>Increase By Value</button>
    </>
  );
};
export default memo(Button);
