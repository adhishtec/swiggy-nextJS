const getProductList = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};

const ServicesPage = async () => {
  let products = await getProductList();

  console.log(".....>>>>>>>>", products);

  return (
    <>
      {products.map((data) => {
        return (
          <div>
            <h3>{data.title}</h3>
            <p>${data.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default ServicesPage;
