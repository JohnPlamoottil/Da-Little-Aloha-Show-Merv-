/**
 * Shop Page - Da Little Aloha Show
 * Design: Volcanic Noir - Coming soon with theatrical presentation
 */
import { Link } from "wouter";

const PROMO_IMAGE = "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898855/old_aloha_promo_nzulco.jpg";

function TapaPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tapa-shop" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            <circle cx="30" cy="30" r="3" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tapa-shop)" />
      </svg>
    </div>
  );
}

export default function Shop() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0a0a]">
      <TapaPattern />
      {/* Top ember line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />

      <div className="relative z-10 container py-28 md:py-36">
        <div className="text-center mb-12">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Merchandise
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4">
            Shop
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-lime)] to-[var(--color-gold)] rounded-full mx-auto mb-6" />
          <div className="inline-block px-5 py-2 bg-[var(--color-lime)]/10 border border-[var(--color-lime)]/30 rounded-sm">
            <span className="text-[var(--color-lime)] text-sm font-bold uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Promo Image with cinematic framing */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative rounded-sm overflow-hidden border border-[var(--color-gold)]/20 shadow-[0_0_40px_-15px_rgba(245,166,35,0.1)]">
            <img
              src={PROMO_IMAGE}
              alt="Da Little Aloha Show promo"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 shadow-[inset_0_0_40px_10px_rgba(0,0,0,0.4)]" />
          </div>
        </div>

        <p className="text-center text-white/40 text-base max-w-md mx-auto mb-8">
          Our merchandise store is being prepared. Check back soon for authentic Polynesian-inspired apparel and accessories!
        </p>

        <div className="text-center">
          <Link
            href="/contact-us"
            className="inline-block px-8 py-3.5 bg-[var(--color-lime)] text-black font-bold text-sm rounded-sm hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
          >
            Contact Us Instead
          </Link>
        </div>
      </div>
    </div>
  );
}
