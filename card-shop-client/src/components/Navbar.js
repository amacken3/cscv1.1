
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/navbar.css"; // make sure this line exists

function Navbar() {
  const { cart } = useContext(CartContext);

  // total number of items across the whole cart
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li className="nav-cart">
          <Link to="/cart">
            Cart
            {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
          </Link>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;

