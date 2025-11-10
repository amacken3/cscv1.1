import React from "react";

function HomePage() {
  return (
    <div className="container mt-4">

      {/* Hero Banner */}
      <div className="p-5 mb-4 bg-light rounded-3 text-center">
        <h1 className="display-4 fw-bold">Welcome to Nitro Packs</h1>
        <p className="lead">Your source for Magic, Pokémon, and Yu-Gi-Oh Cards</p>
        <button className="btn btn-primary btn-lg">Shop Now</button>
      </div>

      {/* Featured Sections */}
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="p-3 border rounded">
            <h3>Pokémon</h3>
            <p>Booster packs, singles, and collector items.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="p-3 border rounded">
            <h3>Magic: The Gathering</h3>
            <p>Commander, Modern, and Draft staples.</p>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="p-3 border rounded">
            <h3>Yu-Gi-Oh!</h3>
            <p>Meta cards and rare classic prints.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
