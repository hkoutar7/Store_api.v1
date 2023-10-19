import "./../styles/Card.css";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function Card(props) {
  let { product } = props;

  return (
    <div
      className="card card-m mb-3 col-12 col-md-6 col-lg-4"
      style={{ maxWidth: "500px" }}
    >
      {Object.keys(product).length === 0 ? (
        <Loader />
      ) : (
        <div className="row g-0">
          <div className="card-i col-md-4">
            <img
              src={product.image}
              className="img-fluid rounded-start"
              alt={product.title}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <div className="card-f">
                <p className="card-desc card-text">{product.description}</p>
              </div>
              <div className="price">
                <p>
                  {product.price > 10
                    ? +(product.price - 10).toFixed(2)
                    : +(product.price - 5).toFixed(2)}
                  $
                </p>
                <p>{+product.price.toFixed(2)}$</p>
              </div>
              <p className="card-text">
                <small className="text-body-secondary">
                  {product.category}
                </small>
              </p>
              <Link className="details" to={`/products/${product.id}/`}>
                More Info
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
