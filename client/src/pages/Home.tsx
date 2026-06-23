/**
 * Home Page - Da Little Aloha Show
 * Design: Volcanic Noir - Cinematic dark theme with chartreuse accents
 * Enhanced: Ember dividers, tapa textures, stronger theatrical presence
 */
import { Link } from "wouter";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663729483691/9hQGQkAi4rTRx9FPtkjGnj/hero-fire-dance-foznGH5tJvvs9WBernnyNQ.webp";
const LOGO_URL = "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267911/logo_mbimde.png";

function EmberDivider() {
  return (
    <div className="w-full flex items-center justify-center py-2">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#f5a623]/40 to-transparent" />
      <div className="mx-4 w-2 h-2 rotate-45 bg-[#f5a623]/60" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#f5a623]/40 to-transparent" />
    </div>
  );
}

function TapaPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tapa" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            <circle cx="30" cy="30" r="3" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tapa)" />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Fire knife dancer performing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
          {/* Vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_150px_60px_rgba(0,0,0,0.7)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container text-center px-4 pt-20">
          <img
            src={LOGO_URL}
            alt="Da Little Aloha Show logo"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-8 drop-shadow-[0_0_30px_rgba(245,166,35,0.4)]"
          />
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 leading-[0.9] tracking-tight">
            Da Little<br />
            <span className="text-[var(--color-lime)]">Aloha</span> Show
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 font-light italic">
            Where Fire Meets Tradition
          </p>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/gallery"
              className="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-[var(--color-gold)]/40 text-white text-sm sm:text-base rounded-sm hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/70 transition-all duration-200 uppercase tracking-wider font-medium"
            >
              Gallery
            </Link>
            <Link
              href="/history-of-dancing"
              className="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-[var(--color-gold)]/40 text-white text-sm sm:text-base rounded-sm hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/70 transition-all duration-200 uppercase tracking-wider font-medium"
            >
              History
            </Link>
            <Link
              href="/about-us"
              className="px-6 py-3 sm:px-8 sm:py-3.5 border-2 border-[var(--color-gold)]/40 text-white text-sm sm:text-base rounded-sm hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/70 transition-all duration-200 uppercase tracking-wider font-medium"
            >
              About Us
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--color-gold)]/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[var(--color-gold)]/70 rounded-full" />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-20 md:py-32 bg-[#0a0a0a] overflow-hidden">
        <TapaPattern />
        <div className="relative z-10 container text-center">
          <EmberDivider />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-8 mb-3">
            Watch Our <span className="text-[var(--color-gold)]">Welcome</span> Video
          </h2>
          <p className="text-white/50 mb-12 text-lg max-w-lg mx-auto">
            Experience the energy and spirit of our performances
          </p>

          {/* Video Container with ember glow */}
          <div className="max-w-4xl mx-auto relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f5a623]/20 via-transparent to-[#f5a623]/20 rounded-xl blur-sm" />
            <div className="relative rounded-xl overflow-hidden border border-[var(--color-gold)]/20 shadow-[0_0_60px_-15px_rgba(245,166,35,0.15)]">
              <div className="aspect-video bg-[#0d0d0d]">
                <video
                  className="w-full h-full object-cover"
                  controls
                  playsInline
                  poster={HERO_IMAGE}
                  src="https://res.cloudinary.com/ds1fxskme/video/upload/v1769898855/aloha_show_promo_video.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 bg-[#0d0d0d] overflow-hidden">
        {/* Diagonal fire accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />
        <TapaPattern />
        <div className="relative z-10 container text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-medium mb-4">
              Book Your Experience
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Bring the Islands<br />to Your Event
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-12 text-lg leading-relaxed">
              Book our authentic Polynesian performance for your next celebration, corporate event, or community gathering.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-10 py-5 sm:px-14 sm:py-6 bg-[var(--color-lime)] text-black font-black text-lg sm:text-xl rounded-sm hover:shadow-[0_0_50px_rgba(200,255,0,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
