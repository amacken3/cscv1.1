import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";

function CheckoutPage() {
  const { cart, total, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h1>Your cart is empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-card">
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="checkout-item">
              <span>
                {item.name} <strong>x {item.quantity}</strong>
              </span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <div className="checkout-total">
          Total: <strong>${total.toFixed(2)}</strong>
        </div>

        <button className="checkout-button" onClick={clearCart}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;
