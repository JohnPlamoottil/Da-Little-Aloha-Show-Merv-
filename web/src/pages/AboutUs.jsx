import React from "react";
import aboutBackground from "../assets/aboutpage_background.jpeg";
import alohaPoster from "../assets/Aloha poster 1.png";

function AboutUs() {
  return (
    <div
      className="min-h-screen bg-no-repeat"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center top",
        backgroundSize: "contain",
        backgroundColor: "#000",
      }}
    >
      <div className="page-content text-white" style={{ color: "#ffffff" }}>
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl">
          Learn more about Da Little Aloha Show and our mission.
        </p>
        <img
          src={alohaPoster}
          alt="Aloha poster"
          className="mt-8 w-full max-w-3xl rounded-lg shadow-lg mx-auto block"
        />
      </div>
    </div>
  );
}

export default AboutUs;
