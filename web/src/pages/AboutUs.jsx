import React from "react";
import aboutBackground from "../assets/aboutpage_background.jpeg";
import alohaPoster from "../assets/Aloha poster 1.png";

function AboutUs() {
  return (
    <div className="min-h-screen">
      <div className="page-content text-white" style={{ color: "#ffffff" }}>
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl">
          Learn more about Da Little Aloha Show and our mission.
        </p>
        <div
          className="mt-8 w-full max-w-5xl mx-auto"
          style={{ position: "relative" }}
        >
          <img
            src={aboutBackground}
            alt="About page background"
            className="w-full rounded-lg shadow-lg block"
          />
          <img
            src={alohaPoster}
            alt="Aloha poster"
            className="rounded-lg shadow-lg"
            style={{
              position: "absolute",
              top: "8%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "50%",
              maxWidth: "520px",
              zIndex: 10,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
