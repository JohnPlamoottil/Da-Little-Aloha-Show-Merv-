import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className="page-content flex flex-col items-center justify-center"
      style={{
        minHeight: "calc(100vh - 120px)",
        transform: "translateY(-20px)",
      }}
    >
      <h1></h1>
      <p
        className="text-center text-white"
        style={{ size: "555px", color: "#ffffff", fontSize: "56px" }}
      >
        Please Watch Our Welcome Video
      </p>
      <video
        controls
        controlsList="nodownload"
        onContextMenu={(event) => event.preventDefault()}
        className="mt-4 w-full max-w-2xl aspect-video rounded-lg shadow-lg"
      >
        <source
          src="https://res.cloudinary.com/ds1fxskme/video/upload/v1769807988/aloha_intro_hfz6ks.mp4"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/ds1fxskme/video/upload/v1769807988/aloha_intro_hfz6ks.mov"
          type="video/quicktime"
        />
        Your browser does not support the video tag.
      </video>
      <Link
        to="/contact-us"
        className="mt-6 inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:opacity-90"
        style={{ backgroundColor: "#ffffff", color: "#000000" }}
      >
        Book Now
      </Link>
    </div>
  );
}

export default Home;
