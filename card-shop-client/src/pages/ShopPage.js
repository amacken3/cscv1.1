import React, { useContext } from "react";
import products from "../data/product";
import { CartContext } from "../context/CartContext";

function ShopPage() {
  const { cart, addToCart } = useContext(CartContext);

  console.log(cart); // <-- This is in the right spot now

  return (
    <div>
      <h1>Shop</h1>

      <ul>
        {products.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} ({item.game})
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopPage;


