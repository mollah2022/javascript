const Button = ({ onChnage, counter }) => {
  return (
    <>
      <p>This is Value of Counter : {counter}</p>
      <button onClick={onChnage}>Increase By One</button>
    </>
  );
};
export default Button;
