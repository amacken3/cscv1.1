import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/shop.css";

function ProductCard({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="product-image" />
      <div className="product-info">
        <h3 className="product-name">{item.name}</h3>
        <p className="product-price">${item.price.toFixed(2)}</p>
        <p className="product-game">{item.game}</p>
      </div>
      <button className="add-btn" onClick={() => addToCart(item)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;





