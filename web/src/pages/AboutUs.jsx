import React from "react";
import aboutBackground from "../assets/aboutpage_background.jpeg";
import alohaPoster from "../assets/Aloha poster 1.png";
import mervActionPose from "../assets/merv_actionpose.JPG";

function AboutUs() {
  return (
    <div className="min-h-screen about-page">
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
            className="about-background w-full rounded-lg shadow-lg block"
            style={{ height: "1400px", objectFit: "cover" }}
          />
          <img
            src={alohaPoster}
            alt="Aloha poster"
            className="about-poster rounded-lg shadow-lg"
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
          <p
            style={{
              position: "absolute",
              top: "52%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              maxWidth: "1100px",
              fontSize: "28px",
              lineHeight: "1.3",
              padding: "0 1.5rem",
              textAlign: "center",
              zIndex: 9,
            }}
          >
            We are Da Little Aloha Show! <br /> Originally from the islands but
            now <br />
            we reside on the Big Island of Gurnee! <br /> We do love spreading
            the "Aloha Spirit" at special events, parades, community gatherings,
            schools and much more! <br /> We are a 3 person show, 1 Male & 2
            Female. <br /> Mana, Melanie and Lori. <br /> Our traditional
            Polynesian show is typically 40-50mins. <br /> We include a showcase
            of Polynesian dances from Hawaii, Fiji, New Zealand - Haka! Tahiti,
            and we even have the famous "FIRE DANCE" of Samoa! The Siva Afi!{" "}
            <br /> We includes, all professional sound equipment, mic,
            tiki-torches and encourage/teach crowd participation. <br /> Our
            cost is open to budget! <br /> We hope that you choose us at your
            next community event!! <br /> Our feedback from other municipalities
            and clients speaks for itself! <br /> Let us bring the summer
            Island-Vibes to your gathering, we bring excitement! Energy! and the
            Heat from our very own Fire-Dancer of Samoa! We can also offer a
            custom Photo Booth experience & DeeJay Entertainment with an Emcee
            to facilitate your next event! Mahalo Nui Loa!
          </p>
          <img
            src={mervActionPose}
            alt="Merv action pose"
            className="about-action rounded-lg shadow-lg"
            style={{
              position: "absolute",
              top: "88%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "35%",
              maxWidth: "900px",
              zIndex: 8,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
