import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
  {cart.map((item, index) => (
    <li key={index}>
      {item.name} - ${item.price} ({item.game}) — Qty: {item.quantity}
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </li>
  ))}
</ul>

      )}
    </div>
  );
}

export default CartPage;
