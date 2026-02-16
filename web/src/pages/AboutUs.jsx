import React from "react";

const aboutBackgroundUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267903/aboutpage_background_r7hfhp.jpg";
const alohaPosterUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267905/Aloha_poster_1_ddqht2.png";
const mervActionPoseUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267905/merv_actionpose_sh5wbe.jpg";

function AboutUs() {
  return (
    <div className="min-h-screen about-page">
      <div
        className="page-content text-white"
        style={{
          color: "#ffffff",
          paddingTop: "0.75rem",
          position: "relative",
          transform: "scale(0.9)",
          transformOrigin: "top center",
        }}
      >
        <h1 className="text-5xl font-bold mb-6">About Us</h1>
        <p className="text-xl" style={{ fontSize: "45px" }}>
          Learn more about Da Little Aloha Show and Our Mission.
        </p>
        <img
          src={mervActionPoseUrl}
          alt="Merv action pose"
          className="about-action rounded-lg shadow-lg"
          style={{
            position: "absolute",
            top: "34rem",
            left: "-21%",
            width: "93%",
            maxWidth: "260px",
            zIndex: 20,
          }}
        />

        <div
          className="mt-4 w-full max-w-5xl mx-auto"
          style={{ position: "relative" }}
        >
          <img
            src={aboutBackgroundUrl}
            alt="About page background"
            className="about-background w-full rounded-lg shadow-lg block"
            style={{ height: "1400px", objectFit: "cover" }}
          />
          <img
            src={alohaPosterUrl}
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
            className="about-description"
            style={{
              position: "absolute",
              top: "62%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "85%",
              maxWidth: "1100px",
              fontSize: "31px",
              lineHeight: "1.6",
              padding: "0 1.5rem",
              textAlign: "center",
              zIndex: 9,
              color: "beige",
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
            and we even have the famous "FIRE DANCE" of Samoa! <br /> The Siva
            Afi! <br /> We includes, all professional sound equipment, mic,
            tiki-torches and encourage/teach crowd participation. <br /> Our
            cost is open to budget! <br /> We hope that you choose us at your
            next community event!! <br /> Our feedback from other municipalities
            and clients speaks for itself! <br /> Let us bring the summer
            Island-Vibes to your gathering, we bring excitement! Energy! and the
            Heat from our very own Fire-Dancer of Samoa! We can also offer a
            custom Photo Booth experience & DeeJay Entertainment with an Emcee
            to facilitate your next event! Mahalo Nui Loa!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
