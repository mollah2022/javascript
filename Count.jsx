import { memo } from "react";

const Count = ({ value }) => {
  return (
    <>
      <p>This Count Value is {value}</p>
    </>
  );
};
export default memo(Count);
