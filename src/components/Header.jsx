import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {useSelector} from 'react-redux' 
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const data = useSelector((state)=> state.allCart)
  return (
    <>
      <nav>
        <Link className="link" to="/">
          Shop
        </Link>
        <Link className="link" to="/cart">
          <span className="item-counter">
            <FaShoppingCart />
            <span className="count">{data.length}</span>
          </span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
