import React from "react";

const shopBackgroundUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267903/shoppage_background_hyq2xi.jpg";
const oldAlohaPromoUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898855/old_aloha_promo_nzulco.jpg";

function Shop() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${shopBackgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="page-content">
        <h1 style={{ color: "white" }}>Shop</h1>
        <p style={{ color: "white" }}>
          COMING SOON <br /> Browse our collection of merchandise and products.
        </p>
        <img
          src={oldAlohaPromoUrl}
          alt="Old Aloha promo"
          className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mt-6"
        />
      </div>
    </div>
  );
}

export default Shop;
