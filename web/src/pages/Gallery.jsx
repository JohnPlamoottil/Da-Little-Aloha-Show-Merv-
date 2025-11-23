import React from "react";
import galleryBackground from "../assets/gallery_background.jpg";

function Gallery() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${galleryBackground})`,
      }}
    >
      <div className="page-content">
        <h1 style={{ color: "white" }}>Gallery</h1>
        <p style={{ color: "white" }}>Browse our photo and video gallery.</p>
      </div>
    </div>
  );
}

export default Gallery;
