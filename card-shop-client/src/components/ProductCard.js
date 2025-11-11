import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ item }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={item.image} alt={item.name} className="product-image" />

      <h3>{item.name}</h3>
      <p className="price">${item.price}</p>
      <p className="game">{item.game}</p>

      <button onClick={() => addToCart(item)} className="add-btn">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;



