/**
 * History of Dancing Page - Da Little Aloha Show
 * Design: Volcanic Noir - Long-form cultural content with cinematic styling
 */

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663729483691/9hQGQkAi4rTRx9FPtkjGnj/hero-fire-dance-foznGH5tJvvs9WBernnyNQ.webp";

function TapaPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tapa-history" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            <circle cx="30" cy="30" r="3" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tapa-history)" />
      </svg>
    </div>
  );
}

export default function History() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Fire knife dancer"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 to-[#0a0a0a]" />
          <div className="absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.6)]" />
        </div>
        <div className="relative z-10 container text-center">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Cultural Heritage
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4">
            History of Dancing
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            Discover the Rich History of Traditional Samoan Hula Dance.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
        <TapaPattern />
        {/* Top ember line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />

        <div className="relative z-10 container max-w-3xl">
          <article className="space-y-8 text-white/65 leading-relaxed text-base sm:text-lg">
            <p>
              Samoan hula dancing is more accurately known as <span className="text-[var(--color-gold)] font-semibold">Siva Samoa</span>, the traditional dance of Samoa. While "hula" is native to Hawaii, Samoa's dance traditions developed independently within Polynesian culture, sharing oceanic roots but maintaining distinct identity, language, and movement vocabulary.
            </p>

            <p>
              The word <em className="text-white/80">siva</em> means "dance" or "gesture," and its origins trace back over a thousand years to ancient village life. Siva was a sacred and social expression performed during ceremonies, chiefly gatherings (fono), weddings, and community celebrations.
            </p>

            <p>
              Movements are graceful, deliberate, and storytelling in nature, using hands, eyes, and subtle footwork to convey legends, genealogy, nature, and respect for family and village hierarchy.
            </p>

            {/* Taualuga Card */}
            <div className="my-10 p-6 sm:p-8 bg-white/[0.03] border border-[var(--color-gold)]/20 rounded-sm shadow-[0_0_30px_-10px_rgba(245,166,35,0.08)]">
              <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-medium mb-3">
                Sacred Tradition
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                The Taualuga
              </h3>
              <p className="text-white/60 m-0 leading-relaxed">
                A prominent branch of Samoan dance is the Taualuga, traditionally performed by the high chief's son or daughter, symbolizing honor and culmination. It is the final and most important dance of any celebration.
              </p>
            </div>

            {/* Siva Afi Card */}
            <div className="my-10 p-6 sm:p-8 bg-gradient-to-r from-[var(--color-gold)]/5 to-transparent border border-[var(--color-gold)]/25 rounded-sm shadow-[0_0_30px_-10px_rgba(245,166,35,0.12)]">
              <p className="text-[var(--color-lime)] uppercase tracking-[0.2em] text-xs font-medium mb-3">
                The Fire Dance
              </p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Siva Afi — The Fire Knife Dance
              </h3>
              <p className="text-white/60 m-0 leading-relaxed">
                Another globally recognized form is the Siva Afi (fire knife dance), which evolved from warrior training with ceremonial knives and became a dramatic performance art in the 20th century. Today it is one of the most thrilling spectacles in Polynesian entertainment.
              </p>
            </div>

            <p>
              Despite missionary influence in the 19th century, Samoan dance endured and adapted. Today, Siva remains central to cultural identity, especially during fiafia nights and diaspora celebrations, preserving Samoa's rich oral history through rhythm, chant, and movement.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
