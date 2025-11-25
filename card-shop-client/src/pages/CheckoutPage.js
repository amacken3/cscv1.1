import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/checkout.css";

function CheckoutPage() {
  const { cart, total, clearCart } = useContext(CartContext);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [payment, setPayment] = useState({
    name: "",
    number: "",
    exp: "",
    cvv: ""
  });

  const handleInput = (e) => {
    setPayment({ ...payment, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
    }, 1800); // fake processing delay
  };

  if (isSuccess) {
    return (
      <div className="checkout-container success-box">
        <h1>Order Successful!</h1>
        <p>Your payment has been processed.</p>
        <p>Thank you for your purchase!</p>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h1>Your Cart is Empty 🛒</h1>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-box">
        <ul className="checkout-list">
          {cart.map((item) => (
            <li key={item.id} className="checkout-item">
              <div className="checkout-item-info">
                <span className="checkout-name">{item.name}</span>
                <span className="checkout-qty">× {item.quantity}</span>
              </div>
              <span className="checkout-price">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        <div className="checkout-total">
          <span>Total:</span>
          <strong>${total.toFixed(2)}</strong>
        </div>

        {/* --- Payment Form --- */}
        <div className="payment-form">
          <h2>Payment Details</h2>

          <input
            type="text"
            name="name"
            placeholder="Name on Card"
            value={payment.name}
            onChange={handleInput}
          />

          <input
            type="text"
            name="number"
            placeholder="Card Number"
            maxLength="16"
            value={payment.number}
            onChange={handleInput}
          />

          <div className="payment-row">
            <input
              type="text"
              name="exp"
              placeholder="MM/YY"
              maxLength="5"
              value={payment.exp}
              onChange={handleInput}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              maxLength="3"
              value={payment.cvv}
              onChange={handleInput}
            />
          </div>
        </div>

        <button
          className="checkout-button"
          onClick={handlePlaceOrder}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}

export default CheckoutPage;


