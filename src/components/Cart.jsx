import React from "react";
import "./Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

const Cart = () => {
  const data = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      {
        data.length > 0 ? data.map( item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title.substring(0, 20)}</h2>
            <span>$ {item.price}</span>
            <button onClick={() => dispatch(remove(item.id))}>Remove</button>
          </div>
        )) : "No Item Exists"
      }
    </div>
  );
};

export default Cart;
