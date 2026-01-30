import React from "react";
import aboutBackground from "../assets/aboutpage_background.jpeg";
import alohaPoster from "../assets/Aloha poster 1.png";

function AboutUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${aboutBackground})`,
      }}
    >
      <div className="page-content text-white">
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl">
          Learn more about Da Little Aloha Show and our mission.
        </p>
        <img
          src={alohaPoster}
          alt="Aloha poster"
          className="mt-8 w-full max-w-3xl rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

export default AboutUs;
