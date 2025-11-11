import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
            <p><strong>Total: ${totalPrice.toFixed(2)}</strong></p>
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
