import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/cart.css";

function CartPage() {
  const { cart, removeFromCart, clearCart, total, increaseQuantity, decreaseQuantity } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Your Cart</h1>
        <p className="empty-text">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      <ul className="cart-list">
        {cart.map((item, index) => (
  <li key={index} className="cart-item">
  <img src={item.image} alt={item.name} className="cart-img" />

  <div className="cart-info">
    <h3>{item.name}</h3>
    <p>${item.price}</p>

    <div className="quantity-controls">
  <button
    onClick={() => decreaseQuantity(item.id)}
    disabled={item.quantity <= 1}
  >
    –
  </button>
  <span>{item.quantity}</span>
  <button onClick={() => increaseQuantity(item.id)}>+</button>
</div>
  </div>

  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
    Remove
  </button>
</li>



))}

      </ul>

      <h2 className="total">Total: ${total.toFixed(2)}</h2>

      <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
    </div>
  );
}

export default CartPage;

