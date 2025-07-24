function RenderingList() {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
    { title: "Samsung", id: 4 },
    { title: "Walton", id: 5 },
    { title: "Vivo", id: 6 },
  ];

  return (
    <>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </>
  );
}
export default RenderingList;
