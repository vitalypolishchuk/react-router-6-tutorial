import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams();
  const selectedProduct = products.find((prod) => prod.id === productId);

  const handleRenderProduct = () => {
    if (selectedProduct) {
      return (
        <section className="section product">
          <img src={selectedProduct.image} style={{ height: "150px", width: "150px", objectFit: "cover" }} />
          <h2>{selectedProduct.name}</h2>
          <Link to="/homepage/products" className="btn">
            Products
          </Link>
        </section>
      );
    } else {
      return <h2>Product not found</h2>;
    }
  };

  return <section className="section product">{handleRenderProduct()}</section>;
};

export default SingleProduct;
