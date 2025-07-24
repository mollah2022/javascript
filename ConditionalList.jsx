function ConditionalList({ isPacked, name }) {
  let content;
  content = isPacked ? " ✅" : null;
  return (
    <>
      <h1>Conditional Value Render : </h1>
      <h3>
        {name} - {content}
      </h3>
    </>
  );
}
export default ConditionalList;
