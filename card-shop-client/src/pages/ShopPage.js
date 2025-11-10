import React from "react";
import product from "../data/product";

function ShopPage() {
  return (
    <div>
      <h1>Shop</h1>

      <ul>
        {product.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} ({item.game})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopPage;
