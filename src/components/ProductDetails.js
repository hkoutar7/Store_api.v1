import "./../styles/ProductDetails.css";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function ProductDetails() {
  const URL = "https://fakestoreapi.com/products";
  const { pid } = useParams();
  const [product, setProduct] = useState({});
  let BlockStar = null,
    BlockStar2 = null;

  useEffect(() => {
    fetch(`${URL}/${pid}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [pid]);

  if (Object.keys(product).length !== 0) {
    let starNum = Math.round(+product.rating["rate"]);
    const starsArray = Array.from({ length: starNum }, (_, index) => index);
    const starsArray2 = Array.from(
      { length: 5 - starNum },
      (_, index) => index
    );

    BlockStar = starsArray.map((star) => {
      return (
        <FaStar
          key={star}
          style={{ color: "gold", marginLeft: "5px", fontSize: "25px" }}
        />
      );
    });
    BlockStar2 = starsArray2.map((star) => {
      return (
        <FaRegStar
          key={star}
          style={{ color: "gold", marginLeft: "5px", fontSize: "25px" }}
        />
      );
    });
  }

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <Loader />
      ) : (
        <div className="card card-details-d mb-3 col-6">
          <div className="row g-0">
            <div className="card-i col-md-4">
              <img
                src={product.image}
                className="img-fluid rounded-start"
                alt={product.tittle}
              />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <div className="card-f">
                  <p className="card-desc card-text">{product.description}</p>
                </div>
                <div className="price">
                  <p>{Number(product.price).toFixed(1)}$</p>
                </div>
                <p className="card-text card-cat">
                  <small className="text-body-secondary">
                    {product.category}
                  </small>
                </p>
                <div>
                  {BlockStar} {BlockStar2}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
