import React from "react";

function ProductCard({ item, addToCart }) {
  return (
    <div className="product-card">
      <h3>{item.name}</h3>
      <p>${item.price}</p>
      <p>{item.game}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;


