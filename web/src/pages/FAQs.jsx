import React from "react";
import faqBackground from "../assets/faqpage_background.jpg";

function FAQs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${faqBackground})`,
      }}
    >
      <div className="page-content text-white" style={{ color: "white" }}>
        <h1 className="text-5xl font-bold mb-6" style={{ color: "white" }}>
          FAQs
        </h1>
        <p className="text-xl" style={{ color: "white" }}>
          Frequently Asked Questions about our show and performances
        </p>
      </div>
    </div>
  );
}

export default FAQs;
