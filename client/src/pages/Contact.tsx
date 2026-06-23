/**
 * Contact Page - Da Little Aloha Show
 * Design: Volcanic Noir - Branded booking form with ember accents
 * Enhanced: Tapa textures, warm framing, theatrical hierarchy
 */

const CONTACT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663729483691/9hQGQkAi4rTRx9FPtkjGnj/contact-bg-foznGH5tJvvs9WBernnyNQ.webp";

function TapaPattern() {
  return (
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="tapa-contact" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M30 10L50 30L30 50L10 30Z" fill="none" stroke="white" strokeWidth="0.3" />
            <circle cx="30" cy="30" r="3" fill="none" stroke="white" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tapa-contact)" />
      </svg>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={CONTACT_BG}
            alt="Tiki torches at night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
          <div className="absolute inset-0 shadow-[inset_0_0_120px_40px_rgba(0,0,0,0.6)]" />
        </div>
        <div className="relative z-10 container text-center">
          <p className="text-[var(--color-gold)] uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Let's Connect
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white mb-4">
            Book a Show
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            View our available dates, select a time, and send your booking request to the team.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="relative py-16 md:py-24 bg-[#0a0a0a] overflow-hidden">
        <TapaPattern />
        {/* Top ember line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#f5a623]/30 to-transparent" />

        <div className="relative z-10 container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Calendar Side */}
            <div>
              <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-medium mb-3">
                Step 1
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Availability Calendar
              </h2>
              <p className="text-white/50 mb-6 text-base">
                Choose an available date in the calendar below.
              </p>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 border border-[var(--color-gold)]/40 text-white text-sm rounded-sm hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/70 transition-all duration-200 uppercase tracking-wider font-medium mb-8"
              >
                Open Calendly
              </a>

              {/* Calendar Widget Placeholder */}
              <div className="bg-white/[0.03] border border-white/10 rounded-lg p-4 sm:p-6 shadow-[0_0_30px_-10px_rgba(245,166,35,0.08)]">
                <CalendarWidget />
              </div>
            </div>

            {/* Form Side */}
            <div>
              <p className="text-[var(--color-gold)] uppercase tracking-[0.2em] text-xs font-medium mb-3">
                Step 2
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3">
                Send a Booking Request
              </h2>
              <p className="text-white/50 mb-8 text-base">
                After selecting your preferred time, submit the form so we can confirm details.
              </p>

              {/* Form */}
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <FormField label="Name" required placeholder="First, Middle, Last" />
                <FormField label="Email Address" required placeholder="email@gmail.com" type="email" />
                <FormField label="Phone" required placeholder="+1(area)555-5555" type="tel" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField label="Preferred Date & Time" required placeholder="month/day/year @ time" />
                  <FormField label="Event Location" required placeholder="City, State" />
                </div>

                <FormField label="Estimated Attendees" required placeholder="# of Guests" />

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">
                    Additional Details<span className="text-[var(--color-lime)]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the event & any special requests"
                    className="w-full px-4 py-3 bg-white/[0.04] border border-white/15 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-lime)]/50 focus:ring-1 focus:ring-[var(--color-lime)]/20 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--color-lime)] text-black font-bold text-lg rounded-sm hover:shadow-[0_0_40px_rgba(200,255,0,0.3)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 uppercase tracking-wider mt-4"
                >
                  Send Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FormField({
  label,
  required,
  placeholder,
  type = "text",
}: {
  label: string;
  required?: boolean;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-white/80 text-sm font-medium mb-2">
        {label}
        {required && <span className="text-[var(--color-lime)]">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white/[0.04] border border-white/15 rounded-md text-white placeholder:text-white/30 focus:outline-none focus:border-[var(--color-lime)]/50 focus:ring-1 focus:ring-[var(--color-lime)]/20 transition-all duration-200"
      />
    </div>
  );
}

function CalendarWidget() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const monthName = today.toLocaleString("default", { month: "long" });

  const days = [];
  for (let i = 0; i < firstDay; i++) {
    days.push(<div key={`empty-${i}`} />);
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today.getDate();
    days.push(
      <div
        key={d}
        className={`text-center py-2 text-sm rounded transition-colors ${
          isToday
            ? "bg-[var(--color-lime)]/20 text-[var(--color-lime)] font-bold border border-[var(--color-lime)]/30"
            : "text-white/60 hover:bg-white/5 hover:text-white"
        }`}
      >
        {d}
      </div>
    );
  }

  return (
    <div>
      <h3 className="text-center text-white font-bold text-lg mb-4">
        {monthName} {year}
      </h3>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/40 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="py-1 font-medium">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">{days}</div>
    </div>
  );
}
