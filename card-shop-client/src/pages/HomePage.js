import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="page home-container">
      <div className="hero-box">
        <h1>Welcome to Nitro Packs</h1>
        <p>Your source for Magic, Pokémon, and Yu-Gi-Oh! cards.</p>

        <button className="shop-btn" onClick={() => navigate("/shop")}>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default HomePage;
