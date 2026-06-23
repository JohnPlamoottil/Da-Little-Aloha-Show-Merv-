/**
 * FAQs Page - Da Little Aloha Show
 * Design: Volcanic Noir - Accordion with ember accents and tapa textures
 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663729483691/9hQGQkAi4rTRx9FPtkjGnj/hero-fire-dance-foznGH5tJvvs9WBernnyNQ.webp";

const FAQ_DATA = [
  {
    q: "What is Da Little Aloha Show?",
    a: "We are a 3-person Polynesian entertainment group based in Gurnee, IL. We perform traditional dances from Hawaii, Fiji, New Zealand (Haka!), Tahiti, and the famous Samoan Fire Dance (Siva Afi) at events, parties, corporate gatherings, and community celebrations.",
  },
  {
    q: "How long is the show?",
    a: "Our traditional Polynesian show is typically 40-50 minutes. We can adjust the length depending on your event needs.",
  },
  {
    q: "Where do you perform?",
    a: "We perform throughout the Chicagoland area and beyond! We've entertained at community events, corporate parties, schools, parades, and private celebrations. Contact us for availability in your area.",
  },
  {
    q: "Can I book the show for a private event?",
    a: "Absolutely! We love performing at private events including birthday parties, weddings, corporate events, and family gatherings. Our cost is open to budget — reach out and let's make it happen!",
  },
  {
    q: "Do you offer dance lessons?",
    a: "Yes! We can incorporate crowd participation and teach basic Polynesian dance moves as part of our show. We also offer separate workshop sessions for groups.",
  },
  {
    q: "What equipment do you bring?",
    a: "We include all professional sound equipment, microphone, tiki-torches, and performance props. We can also offer a custom Photo Booth experience & DeeJay Entertainment with an Emcee.",
  },
];

function TapaPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tapa-faq" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            <circle cx="30" cy="30" r="3" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tapa-faq)" />
      </svg>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Fire performance"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 to-[#0a0a0a]" />
        </div>
        <div className="relative z-10 container text-center">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Questions & Answers
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4">
            FAQs
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Frequently Asked Questions about our show and performances
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="relative py-12 md:py-20 bg-[#0a0a0a] overflow-hidden">
        <TapaPattern />
        <div className="relative z-10 container max-w-3xl">
          <div className="space-y-3">
            {FAQ_DATA.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-sm overflow-hidden transition-all duration-300 ${
                  openIndex === i
                    ? "border-[var(--color-gold)]/40 bg-white/[0.03] shadow-[0_0_20px_-8px_rgba(245,166,35,0.1)]"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 sm:px-7 py-5 text-left"
                >
                  <span className="text-white font-medium text-base sm:text-lg pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--color-gold)] shrink-0 transition-transform duration-300 ${
                      openIndex === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-7 pb-5 text-white/60 text-base leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
