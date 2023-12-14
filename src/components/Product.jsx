import React, { useEffect, useState } from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";
const Product = () => {
  const dispatch = useDispatch();
  const [product, setproduct] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://fakestoreapi.com/products");
      let result = await data.json();
      setproduct(result);
    }
    fetchData();
  }, []);

  function addToCart(product) {
    dispatch(add(product));
  }

  return (
    <>
      <h1> All Products </h1>
      <div className="container">
        {product.map((product) => (
          <div className="card" key={product.id}>
            <div className="wrapper">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="content">
              <h3 className="name">{product.title.substring(0, 20)}</h3>
              <span className="price">$ {product.price}</span>
              <button onClick={() => addToCart(product)}>AddToCart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
