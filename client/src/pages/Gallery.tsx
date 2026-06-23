/**
 * Gallery Page - Da Little Aloha Show
 * Design: Volcanic Noir - Cinematic image grid with ember glow and lightbox
 */
import { useState } from "react";
import { X } from "lucide-react";

const images = [
  {
    src: "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898855/triodancers_os3faf.jpg",
    alt: "Trio dancers performing",
  },
  {
    src: "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898856/merv_fire_knives_w4rul7.jpg",
    alt: "Merv performing fire knives",
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

function TapaPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tapa-gallery" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            <circle cx="30" cy="30" r="3" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tapa-gallery)" />
      </svg>
    </div>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-[#0a0a0a]">
        <div className="container text-center">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Our Performances
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4">
            Gallery
          </h1>
          <p className="text-lg text-white/50">Browse Our Photos.</p>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-lime)] to-[var(--color-gold)] rounded-full mx-auto mt-6" />
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="relative py-12 md:py-20 bg-[#0a0a0a] overflow-hidden">
        <TapaPattern />
        <div className="relative z-10 container max-w-5xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {images.map((image, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10 hover:border-[var(--color-gold)]/40 transition-all duration-500"
              >
                {/* Ember glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-[#f5a623]/20 via-transparent to-[#f5a623]/20 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_10px_rgba(0,0,0,0.4)]" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium rounded-sm">
                    View Full Size
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-sm border border-[var(--color-gold)]/20"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
