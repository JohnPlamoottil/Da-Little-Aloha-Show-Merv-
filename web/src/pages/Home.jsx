import React from "react";
import { Link } from "react-router-dom";

const logoUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267911/logo_mbimde.png";
const homeBackgroundUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267905/homepage_background_pjsqiq.jpg";

function Home() {
  return (
    <div
      className="page-content home-page flex flex-col items-center justify-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${homeBackgroundUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={logoUrl}
        alt="Da Little Aloha Show logo"
        className="mb-6 w-full max-w-md"
      />
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
      <div className="w-full flex justify-center">
        <Link
          to="/contact-us"
          className="mt-6 inline-flex items-center justify-center px-16 py-6 rounded-3xl font-semibold transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: "#DFFF00",
            color: "#000000",
            fontSize: "56px",
            padding: "24px 64px",
            borderRadius: "9999px",
            display: "inline-block",
          }}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default Home;
