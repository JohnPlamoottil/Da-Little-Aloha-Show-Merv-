import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contactUsBackground from "../assets/contactus_background.jpg";

function ContactUs() {
  const calendlyUrl =
    import.meta.env.VITE_CALENDLY_URL ||
    "https://calendly.com/your-team/da-little-aloha-show";

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";
  const isEmailConfigured = Boolean(serviceId && templateId && publicKey);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventLocation: "",
    attendees: "",
    notes: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatusMessage("");
    setStatusType("");

    if (!isEmailConfigured) {
      setStatusType("error");
      setStatusMessage(
        "Email sending is not configured yet. Please set EmailJS environment variables.",
      );
      return;
    }

    try {
      setIsSending(true);

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formValues.name,
          reply_to: formValues.email,
          phone: formValues.phone,
          event_date: formValues.eventDate,
          event_location: formValues.eventLocation,
          attendees: formValues.attendees,
          notes: formValues.notes,
        },
        {
          publicKey,
        },
      );

      setStatusType("success");
      setStatusMessage(
        "Thanks! Your booking request was sent. We will get back to you shortly.",
      );
      setFormValues({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventLocation: "",
        attendees: "",
        notes: "",
      });
    } catch {
      setStatusType("error");
      setStatusMessage(
        "Sorry, we could not send your request. Please try again in a moment.",
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${contactUsBackground})`,
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="page-content">
        <div className="mx-auto max-w-6xl px-4 py-12 text-white">
          <div className="text-center">
            <h1
              className="text-4xl md:text-5xl font-semibold"
              style={{ color: "white" }}
            >
              {" "}
              Book a Show RSVP
            </h1>
            <p
              className="mt-4 text-lg text-white/80"
              style={{ color: "white", fontSize: "33px" }}
            >
              View our available dates, select a time, and send your booking
              request to the team.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl bg-black/60 p-6 shadow-xl backdrop-blur">
              <div className="flex flex-col gap-3">
                <div>
                  <h2
                    className="text-2xl font-semibold"
                    style={{ color: "white", fontSize: "53px" }}
                  >
                    Availability Calendar
                  </h2>
                  <p
                    className="mt-2 text-sm text-white/70"
                    style={{ color: "white", fontSize: "33px" }}
                  >
                    Choose an available date in the calendar below.
                  </p>
                </div>
                <div style={{ color: "black", textAlign: "center" }}>
                  <button
                    type="button"
                    onClick={() =>
                      window.open(calendlyUrl, "_blank", "noopener,noreferrer")
                    }
                    className="w-full max-w-md rounded-full bg-[#DFFF00] px-6 py-3 font-semibold text-black transition hover:opacity-90"
                    style={{ color: "black", textAlign: "center" }}
                  >
                    Open Calendly
                  </button>
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                <iframe
                  title="Calendly booking"
                  src={calendlyUrl}
                  className="h-[640px] w-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                ></iframe>
              </div>
            </section>

            <section className="rounded-3xl bg-black/60 p-6 shadow-xl backdrop-blur">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-black/60 backdrop-blur-lg"></div>
                <div className="relative z-10">
                  <div className="flex flex-col gap-2">
                    <h2
                      className="text-2xl font-semibold"
                      style={{ color: "white", fontSize: "53px" }}
                    >
                      Send a Booking Request
                    </h2>
                    <p
                      className="text-sm text-white/70"
                      style={{ color: "white", fontSize: "33px" }}
                    >
                      After selecting your preferred time, submit the form so we
                      can confirm details.
                    </p>
                  </div>

                  {!isEmailConfigured && (
                    <div
                      className="mt-4 rounded-2xl border border-yellow-400/60 bg-yellow-500/10 p-4 text-sm text-yellow-200"
                      style={{ color: "yellow", fontSize: "83px" }}
                    >
                      EmailJS is not configured.
                    </div>
                  )}

                  <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-6 text-left max-w-3xl mx-auto"
                    style={{ color: "white" }}
                  >
                    {/* Full Name */}
                    <div className="grid w-full grid-cols-[320px_minmax(0,1fr)]">
                      <label
                        htmlFor="name"
                        className="font-medium text-[28px] whitespace-nowrap"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formValues.name}
                        onChange={handleChange}
                        required
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40"
                        style={{ color: "black" }}
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div className="grid w-full grid-cols-[320px_minmax(0,1fr)]">
                      <label
                        htmlFor="email"
                        className="font-medium whitespace-nowrap"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40"
                        style={{ color: "black" }}
                        placeholder="you@email.com"
                      />
                    </div>

                    {/* Phone */}
                    <div className="grid w-full grid-cols-[320px_minmax(0,1fr)]">
                      <label
                        htmlFor="phone"
                        className="font-medium whitespace-nowrap"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formValues.phone}
                        onChange={handleChange}
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40"
                        style={{ color: "black" }}
                        placeholder="(555) 555-5555"
                      />
                    </div>

                    {/* Preferred Date & Time */}
                    <div className="grid w-full grid-cols-[320px_minmax(0,1fr)]">
                      <label
                        htmlFor="eventDate"
                        className="font-medium whitespace-nowrap"
                      >
                        Preferred Date & Time
                      </label>
                      <input
                        id="eventDate"
                        name="eventDate"
                        type="text"
                        value={formValues.eventDate}
                        onChange={handleChange}
                        required
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40"
                        style={{ color: "black" }}
                        placeholder="From Calendly selection"
                      />
                    </div>

                    {/* Event Location */}
                    <div className="grid w-full grid-cols-[320px_minmax(0,1fr)]">
                      <label
                        htmlFor="eventLocation"
                        className="font-medium whitespace-nowrap"
                      >
                        Event Location
                      </label>
                      <input
                        id="eventLocation"
                        name="eventLocation"
                        type="text"
                        value={formValues.eventLocation}
                        onChange={handleChange}
                        required
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40"
                        style={{ color: "black" }}
                        placeholder="City / Venue"
                      />
                    </div>

                    {/* Estimated Attendees */}
                    <div className="grid w-full grid-cols-[320px_minmax(0,1fr)]">
                      <label
                        htmlFor="attendees"
                        className="font-medium whitespace-nowrap"
                      >
                        Estimated Attendees
                      </label>
                      <input
                        id="attendees"
                        name="attendees"
                        type="number"
                        min="1"
                        value={formValues.attendees}
                        onChange={handleChange}
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40"
                        style={{ color: "black" }}
                        placeholder="120"
                      />
                    </div>

                    {/* Additional Details */}
                    <div className="grid w-full grid-cols-[320px_minmax(0,1fr)]">
                      <label
                        htmlFor="notes"
                        className="font-medium whitespace-nowrap pt-2"
                      >
                        Additional Details
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows="4"
                        value={formValues.notes}
                        onChange={handleChange}
                        className="w-full min-w-0 rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white placeholder:text-white/40"
                        style={{ color: "black" }}
                        placeholder="Tell us about the event, timeline, or special requests."
                      />
                    </div>

                    {statusMessage && (
                      <div
                        className={`rounded-2xl border p-3 text-sm ${
                          statusType === "success"
                            ? "border-emerald-400/60 bg-emerald-500/10 text-emerald-100"
                            : "border-red-400/60 bg-red-500/10 text-red-100"
                        }`}
                      >
                        {statusMessage}
                      </div>
                    )}

                    <div style={{ color: "black", textAlign: "center" }}>
                      <button
                        type="submit"
                        disabled={!isEmailConfigured || isSending}
                        className="w-full max-w-md rounded-full bg-[#DFFF00] px-6 py-3 font-semibold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                        style={{ color: "black", textAlign: "center" }}
                      >
                        {isSending ? "Sending..." : "Send Booking Request"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
