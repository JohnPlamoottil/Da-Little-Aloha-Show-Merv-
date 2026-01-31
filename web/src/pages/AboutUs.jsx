import React from "react";
import aboutBackground from "../assets/aboutpage_background.jpeg";
import alohaPoster from "../assets/Aloha poster 1.png";
import mervActionPose from "../assets/merv_actionpose.JPG";

function AboutUs() {
  return (
    <div className="min-h-screen">
      <div
        className="page-content text-white"
        style={{
          color: "#ffffff",
          paddingTop: "0.75rem",
          transform: "scale(0.9)",
          transformOrigin: "top center",
        }}
      >
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl" style={{ fontSize: "45px" }}>
          Learn more about Da Little Aloha Show and Our Mission.
        </p>
        <div
          className="mt-4 w-full max-w-5xl mx-auto"
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
              width: "80%",
              maxWidth: "8000px",
              zIndex: 10,
            }}
          />
          <img
            src={mervActionPose}
            alt="Merv action pose"
            className="rounded-lg shadow-lg"
            style={{
              position: "absolute",
              top: "58%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "35%",
              maxWidth: "900px",
              zIndex: 9,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
