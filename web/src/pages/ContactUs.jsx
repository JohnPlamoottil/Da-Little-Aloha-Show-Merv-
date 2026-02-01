import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import contactUsBackground from "../assets/contactus_background.jpg";
import calendarFeb2026 from "../assets/calendar_feb_2026.svg";

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

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-white/90">
                <img
                  src={calendarFeb2026}
                  alt="February 2026 calendar"
                  className="w-full h-auto"
                />
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                {/* <iframe
                  title="Calendly booking"
                  src={calendlyUrl}
                  className="h-[640px] w-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                ></iframe> */}
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

                  <div className="mt-6 rounded-3xl bg-white/95 p-8 text-gray-700 shadow-lg">
                    <form
                      onSubmit={handleSubmit}
                      className="grid gap-6 text-left"
                    >
                      {/* Full Name */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="font-medium h-6 leading-6"
                          style={{
                            color: "white",
                            fontSize: "20px",
                            textAlign: "left",
                          }}
                        >
                          Name
                          <span
                            className="text-red-500 ml-1"
                            style={{ color: "yellow" }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formValues.name}
                          onChange={handleChange}
                          required
                          className="w-full h-12 border-b border-gray-800 bg-transparent px-0 py-2 text-gray-900 placeholder:text-gray-400 focus:border-gray-800 focus:outline-none"
                          style={{ textAlign: "right", padding: "0 0 0 45px" }}
                          placeholder="First, Middle, Last"
                        />
                      </div>

                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="font-medium text-white text-left text-[20px] h-6 leading-6"
                          style={{
                            color: "white",
                            fontSize: "20px",
                            textAlign: "left",
                          }}
                        >
                          Email Address
                          <span
                            className="text-red-500 ml-1"
                            style={{ color: "yellow" }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formValues.email}
                          onChange={handleChange}
                          required
                          className="w-full h-10 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-700 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                          style={{ textAlign: "right", padding: "0 0 0 45px" }}
                          placeholder="email@gmail.com"
                        />
                      </div>

                      {/* Phone */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="phone"
                          className="font-medium text-white text-left text-[20px] h-6 leading-6"
                          style={{
                            color: "white",
                            fontSize: "20px",
                            textAlign: "left",
                          }}
                        >
                          Phone
                          <span
                            className="text-red-500 ml-1"
                            style={{ color: "yellow" }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formValues.phone}
                          onChange={handleChange}
                          className="w-full h-10 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-700 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                          placeholder="1(area)555-5555"
                        />
                      </div>

                      {/* Preferred Date & Time */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="eventDate"
                          className="font-medium text-white text-left text-[20px] h-6 leading-6"
                          style={{
                            color: "white",
                            fontSize: "20px",
                            textAlign: "left",
                          }}
                        >
                          Preferred Date & Time
                          <span
                            className="text-red-500 ml-1"
                            style={{ color: "yellow" }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          id="eventDate"
                          name="eventDate"
                          type="text"
                          value={formValues.eventDate}
                          onChange={handleChange}
                          required
                          className="w-full h-10 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-700 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                          placeholder="month/day/year @ time (timezone"
                        />
                      </div>

                      {/* Event Location */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="eventLocation"
                          className="font-medium text-white text-left text-[20px] h-6 leading-6"
                          style={{
                            color: "white",
                            fontSize: "20px",
                            textAlign: "left",
                          }}
                        >
                          Event Location
                          <span
                            className="text-red-500 ml-1"
                            style={{ color: "yellow" }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          id="eventLocation"
                          name="eventLocation"
                          type="text"
                          value={formValues.eventLocation}
                          onChange={handleChange}
                          required
                          className="w-full h-10 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-700 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                          placeholder="City, State"
                        />
                      </div>

                      {/* Estimated Attendees */}
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="attendees"
                          className="font-medium text-white text-left text-[20px] h-6 leading-6"
                          style={{
                            color: "white",
                            fontSize: "20px",
                            textAlign: "left",
                          }}
                        >
                          Estimated Attendees
                          <span
                            className="text-red-500 ml-1"
                            style={{ color: "yellow" }}
                          >
                            *
                          </span>
                        </label>
                        <input
                          id="attendees"
                          name="attendees"
                          type="number"
                          min="1"
                          value={formValues.attendees}
                          onChange={handleChange}
                          required
                          className="w-full h-10 border-b border-gray-300 bg-transparent px-0 py-2 text-gray-700 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                          placeholder="# of Guests"
                        />
                      </div>

                      {/* Additional Details */}
                      <div
                        className="flex flex-col gap-2"
                        style={{ flexDirection: "column" }}
                      >
                        <label
                          htmlFor="notes"
                          className="font-medium text-white text-left text-[20px] h-6 leading-6"
                          style={{
                            color: "white",
                            fontSize: "20px",
                            textAlign: "left",
                          }}
                        >
                          Additional Details
                          <span
                            className="text-red-500 ml-1"
                            style={{ color: "yellow" }}
                          >
                            *
                          </span>
                        </label>
                        <textarea
                          id="notes"
                          name="notes"
                          rows="1"
                          value={formValues.notes}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-gray-300 bg-white px-3 py-3 text-gray-700 placeholder:text-gray-400 focus:border-gray-600 focus:outline-none"
                          placeholder="Tell us about the event and/or any special requests"
                          style={{ textAlign: "56pxs" }}
                        />
                      </div>

                      {statusMessage && (
                        <div
                          className={`rounded-2xl border p-3 text-sm ${
                            statusType === "success"
                              ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-700"
                              : "border-red-500/40 bg-red-500/10 text-red-700"
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
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
