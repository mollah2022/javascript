function Button({ value, onclick }) {
  return (
    <>
      <h1>Two Button Value : ...........</h1>
      <button onClick={onclick}>IncrementValue : {value}</button>
    </>
  );
}
export default Button;
