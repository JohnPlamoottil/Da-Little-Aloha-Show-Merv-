import React from "react";
import contactUsBackground from "../assets/contactus_background.jpg";

function ContactUs() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${contactUsBackground})`,
      }}
    >
      <div className="page-content">
        <h1 style={{ color: "white" }}>Contact Us</h1>
        <p style={{ color: "white" }}>
          Get in touch with us for bookings and inquiries.
        </p>
      </div>
    </div>
  );
}

export default ContactUs;
