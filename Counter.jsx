import { useState } from "react";

const Counter = () => {
  const [increase, setIncrease] = useState(0);
  const [decrease, setDecrease] = useState(0);
  const [clear, setClear] = useState(0);

  const total = increase + decrease;

  const IncreaseHandler = () => {
    if (total < 100) {
      setIncrease(increase + 1);
    }
  };

  const DecreaseHandler = () => {
    if (total > 0) {
      setDecrease(decrease - 1);
    }
  };

  const ClearHandler = () => {
    setIncrease(0);
    setDecrease(0);
  };

  return (
    <div
      style={{
        border: "5px solid red",
        padding: "10px",
        borderRadius: "5px",
        background: "pink",
        margin: "0 auto",
        width: "40vw",
        height: "auto",
        marginTop: "80px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>This Counter Application....</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            height: "50px",
            width: "150px",
            backgroundColor: "skyblue",
            marginRight: "10px",
            fontSize: "30px",
            borderRadius: "10px",
          }}
          onClick={IncreaseHandler}
        >
          +
        </button>
        <button
          style={{
            height: "50px",
            width: "150px",
            backgroundColor: "skyblue",
            fontSize: "30px",
            borderRadius: "10px",
          }}
          onClick={DecreaseHandler}
        >
          -
        </button>
      </div>
      <p
        style={{
          textAlign: "center",
          border: "3px solid green",
          width: "50%",
          margin: "20px auto",
          padding: "10px",
          borderRadius: "10px",
          fontSize: "20px",
          color: "red",
          background: "white",
        }}
      >
        Result-{total}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: "50px",
            width: "150px",
            backgroundColor: "skyblue",
            fontSize: "30px",
            borderRadius: "10px",
          }}
          onClick={ClearHandler}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
export default Counter;
