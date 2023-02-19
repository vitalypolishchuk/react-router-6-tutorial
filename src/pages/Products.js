import { Fragment } from "react";
import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return products.map(({ id, name, image }) => {
    return (
      <Fragment key={id}>
        <section className="section">
          <h2>{name}</h2>
          <Link to={id} className="btn">
            More info
          </Link>
        </section>
      </Fragment>
    );
  });
};

export default Products;
