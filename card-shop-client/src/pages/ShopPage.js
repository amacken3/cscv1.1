import React, { useContext } from "react";
import products from "../data/product";
import { CartContext } from "../context/CartContext";
import ProductCard from "../components/ProductCard";
import "../styles/shop.css";

function ShopPage() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="page">
    <div className="shop-grid">
      {products.map((item) => (
        <ProductCard key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
    </div>
  );
}

export default ShopPage;



