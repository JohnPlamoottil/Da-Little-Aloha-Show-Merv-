import React from "react";
import shopBackground from "../assets/shoppage_background.jpg";

function Shop() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${shopBackground})`,
      }}
    >
      <div className="page-content">
        <h1 style={{ color: "white" }}>Shop</h1>
        <p style={{ color: "white" }}>
          Browse our collection of merchandise and products.
        </p>
      </div>
    </div>
  );
}

export default Shop;
