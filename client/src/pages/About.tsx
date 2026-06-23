/**
 * About Page - Da Little Aloha Show
 * Design: Volcanic Noir - Cinematic performer reveal with cultural textures
 * Enhanced: Story-driven layout, ember accents, tapa patterns, theatrical framing
 */
import { Link } from "wouter";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663729483691/9hQGQkAi4rTRx9FPtkjGnj/about-performers-foznGH5tJvvs9WBernnyNQ.webp";
const MERV_BIO = "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898856/merv_bio_kd4jou.jpg";
const MERV_ACTION = "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267905/merv_actionpose_sh5wbe.jpg";
const MERV_OUTSIDE = "https://res.cloudinary.com/ds1fxskme/image/upload/v1769898868/merv_outside_luat4u.jpg";
const ABOUT_BG_PHOTO = "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267903/aboutpage_background_r7hfhp.jpg";
const ALOHA_POSTER = "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267905/Aloha_poster_1_ddqht2.png";

function TapaPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tapa-about" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            <circle cx="30" cy="30" r="3" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tapa-about)" />
      </svg>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ABOUT_BG}
            alt="Polynesian performers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
          <div className="absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.6)]" />
        </div>
        <div className="relative z-10 container text-center">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Our Story
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Learn more about Da Little Aloha Show and Our Mission.
          </p>
        </div>
      </section>

      {/* Performer Photos - Cinematic Grid */}
      <section className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
        <TapaPattern />
        <div className="relative z-10 container">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { src: MERV_BIO, alt: "Merv bio portrait" },
              { src: MERV_ACTION, alt: "Merv fire knife action" },
              { src: MERV_OUTSIDE, alt: "Merv outdoor performance" },
            ].map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[3/4] rounded-sm overflow-hidden"
              >
                {/* Ember border glow */}
                <div className="absolute -inset-px bg-gradient-to-b from-[#f5a623]/30 via-transparent to-[#f5a623]/30 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-sm overflow-hidden border border-white/10 group-hover:border-[var(--color-gold)]/40 transition-colors duration-500">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Cinematic vignette on each image */}
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_10px_rgba(0,0,0,0.5)]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-16 md:py-28 bg-[#0d0d0d] overflow-hidden">
        {/* Top ember line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />
        <TapaPattern />

        <div className="relative z-10 container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 md:gap-16 items-start max-w-6xl mx-auto">
            {/* Images - 2 columns */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-3 lg:sticky lg:top-28">
              <div className="rounded-sm overflow-hidden border border-[var(--color-gold)]/20 shadow-[0_0_30px_-10px_rgba(245,166,35,0.1)]">
                <img
                  src={ABOUT_BG_PHOTO}
                  alt="Show background"
                  className="w-full h-40 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              <div className="rounded-sm overflow-hidden border border-[var(--color-gold)]/20 shadow-[0_0_30px_-10px_rgba(245,166,35,0.1)]">
                <img
                  src={ALOHA_POSTER}
                  alt="Aloha poster"
                  className="w-full h-40 sm:h-56 lg:h-64 object-cover"
                />
              </div>
            </div>

            {/* Text Content - 3 columns */}
            <div className="lg:col-span-3 space-y-8">
              <div>
                <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-medium mb-3">
                  The Performers
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2">
                  We are Da Little<br />Aloha Show!
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-lime)] to-[var(--color-gold)] rounded-full mt-4" />
              </div>

              <div className="space-y-5 text-white/65 leading-relaxed text-base sm:text-lg">
                <p>
                  Originally from the islands but now we reside on the Big Island of Gurnee! We do love spreading the <span className="text-white/90 font-medium">"Aloha Spirit"</span> at special events, parades, community gatherings, schools and much more!
                </p>
                <p>
                  We are a <span className="text-[var(--color-gold)]">3 person show</span> — 1 Male & 2 Female. <strong className="text-white/90">Mana, Melanie and Lori.</strong> Our traditional Polynesian show is typically 40-50mins.
                </p>
                <p>
                  We include a showcase of Polynesian dances from <span className="text-white/80">Hawaii, Fiji, New Zealand - Haka! Tahiti</span>, and we even have the famous <span className="text-[var(--color-lime)] font-semibold">"FIRE DANCE"</span> of Samoa! The Siva Afi!
                </p>
                <p>
                  We include all professional sound equipment, mic, tiki-torches and encourage/teach crowd participation. Our cost is open to budget!
                </p>
                <p>
                  We hope that you choose us at your next community event!! Our feedback from other municipalities and clients speaks for itself!
                </p>
                <p>
                  Let us bring the summer Island-Vibes to your gathering, we bring excitement! Energy! and the Heat from our very own Fire-Dancer of Samoa! We can also offer a custom Photo Booth experience & DeeJay Entertainment with an Emcee to facilitate your next event!
                </p>
              </div>

              <p className="text-[var(--color-gold)] font-bold text-2xl italic font-[var(--font-display)]">
                Mahalo Nui Loa!
              </p>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="/contact-us"
                  className="inline-block px-8 py-4 bg-[var(--color-lime)] text-black font-bold text-base rounded-sm hover:shadow-[0_0_30px_rgba(200,255,0,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider"
                >
                  Book Our Show
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
