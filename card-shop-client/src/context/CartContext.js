import { useEffect } from "react";   
import React, { createContext, useState } from "react";


export const CartContext = createContext();

export function CartProvider({ children }) {
  
  const [cart, setCart] = useState(() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) : [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);


 function addToCart(product) {
  setCart((prevCart) => {
    const existingItem = prevCart.find((item) => item.id === product.id);

    if (existingItem) {
      return prevCart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [...prevCart, { ...product, quantity: 1 }];
  });
}


  function removeFromCart(index) {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
