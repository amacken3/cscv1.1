import React from "react";
import products from "../data/products";

function ShopPage() {
  return (
    <div>
      <h1>Shop</h1>

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} ({item.game})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopPage;
