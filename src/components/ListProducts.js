import { useState, useEffect } from "react";
import Card from "./Card";
import "./../styles/Home.css";

export default function ListProducts() {
  const URL = "https://fakestoreapi.com/products";

  let [products, setProducts] = useState([]);
  let [categories, setCategories] = useState([]);

  let getAllPrducts = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  let getAllCategories = () => {
    fetch(`${URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  };

  let getProductByCategory = (category) => {
    fetch(`${URL}/category/${category}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllPrducts();
    getAllCategories();
  }, []);

  let productsBlock = products.map((product) => {
    return <Card key={product.id} product={product} />;
  });

  let categoriesBlock = categories.map((c) => {
    return (
      <button
        type="button"
        onClick={() => {
          getProductByCategory(c);
        }}
        key={c.toString()}
        style={{ width: "fit-content" }}
      >
        <span>{c}</span>
      </button>
    );
  });

  return (
    <>
      <div className="container mt-5">
        <div className="row categories">
          <button type="button" onClick={getAllPrducts}>
            <span>All</span>
          </button>
          {categoriesBlock}
        </div>

        <div
          className="row"
          style={{ gap: "32px 17px", justifyContent: "center" }}
        >
          {productsBlock}
        </div>
      </div>
    </>
  );
}
