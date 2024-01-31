import { useParams } from "react-router-dom";

const Product = () => {
  const { productId } = useParams();
  console.log(productId);

  return (
    <h1 className="text-3xl font-bold">
      This is an individual Product Page for product: {productId}
    </h1>
  );
};

export default Product;
