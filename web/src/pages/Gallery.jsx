import React from "react";

const galleryBackgroundUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267903/gallery_background_im9mwr.jpg";
const galleryImages = [
  {
    src: "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898855/triodancers_os3faf.jpg",
    alt: "Trio dancers",
  },
  {
    src: "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898856/merv_fire_knives_w4rul7.jpg",
    alt: "Merv fire knives",
  },
  {
    src: "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898856/merv_stage_ziu5lu.jpg",
    alt: "Merv on stage",
  },
  {
    src: "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898854/merv_1_dl1bk1.jpg",
    alt: "Merv performance",
  },
];

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
        <p style={{ color: "white", fontSize: "44px" }}>Browse Our Photos.</p>
        <div className="mt-8 grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {galleryImages.map((image) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className={
                image.alt === "Merv fire knives"
                  ? "w-[33%] h-[120px] rounded-xl shadow-xl object-cover border border-white/20"
                  : image.alt === "Merv on stage"
                    ? "w-[17%] h-[120px] rounded-xl shadow-xl object-cover border border-white/20"
                    : image.alt === "Merv performance"
                      ? "w-[51%] h-[120px] rounded-xl shadow-xl object-cover border border-white/20"
                      : image.alt === "Trio dancers"
                        ? "w-[68%] h-[120px] rounded-xl shadow-xl object-cover border border-white/20"
                        : "w-[120px] h-[120px] rounded-xl shadow-xl object-cover border border-white/20"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
