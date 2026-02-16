import React from "react";

const galleryBackgroundUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267903/gallery_background_im9mwr.jpg";

function Gallery() {
  return (
    <div
      className="min-h-screen gallery-page bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${galleryBackgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
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
