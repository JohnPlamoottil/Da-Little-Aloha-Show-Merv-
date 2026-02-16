import React, { useState } from "react";

const faqBackgroundUrl =
  "https://res.cloudinary.com/ds1fxskme/image/upload/v1771267904/faqpage_background_rrlv9n.jpg";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Da Little Aloha Show?",
      answer:
        "Da Little Aloha Show is a vibrant cultural performance featuring traditional Hawaiian and Filipino dances, music, and entertainment that celebrates the rich heritage of both cultures.",
    },
    {
      question: "How long is the show?",
      answer:
        "Our typical show runs for approximately 60-90 minutes, depending on the event and package selected.",
    },
    {
      question: "Where do you perform?",
      answer:
        "We perform at various venues across the USA and Philippines, including festivals, private events, corporate functions, and cultural celebrations.",
    },
    {
      question: "Can I book the show for a private event?",
      answer:
        "Yes! We are available for private bookings including weddings, birthday parties, corporate events, and other special occasions. Please contact us for availability and pricing.",
    },
    {
      question: "Do you offer dance lessons?",
      answer:
        "Yes, we offer both group and private dance lessons in Hawaiian and Filipino traditional dances. Check our contact page for more information.",
    },
  ];

  return (
    <div
      className="min-h-screen faqs-page bg-cover bg-center bg-fixed bg-no-repeat flex items-center justify-center py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${faqBackgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "120px",
      }}
    >
      <div className="w-full max-w-5xl px-4 mx-auto flex flex-col items-center text-center">
        <div className="w-full flex flex-col items-center text-center">
          <h1
            className="w-full font-bold mb-6 text-center"
            style={{
              color: "white",
              fontSize: "45px",
              padding: "5.5px",
              textAlign: "center",
            }}
          >
            FAQs
          </h1>
          <p
            className="w-full text-xl text-center"
            style={{ color: "white", fontSize: "45px", textAlign: "center" }}
          >
            Frequently Asked Questions <br /> about our show and performances
          </p>
        </div>

        <div className="w-full max-w-3xl mx-auto space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden"
              style={{ maxWidth: "700px", margin: "0 auto", padding: "5.5px" }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-10 py-6 text-center flex justify-center items-center gap-3 transition-all duration-300 hover:opacity-90"
                style={{
                  backgroundColor: "rgba(0, 32, 96, 0.95)",
                }}
              >
                <span
                  className="text-2xl font-bold flex-shrink-0"
                  style={{ color: "white" }}
                >
                  {openIndex === index ? "−" : "+"}
                </span>
                <span
                  className="text-xl font-semibold flex-grow text-center"
                  style={{ color: "white", fontSize: "30px" }}
                >
                  {faq.question}
                </span>
              </button>
              <div
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                  transition: "max-height 0.4s ease-in-out",
                  overflow: "hidden",
                }}
              >
                <div
                  className="px-6 py-4 text-center"
                  style={{
                    backgroundColor: "rgba(0, 32, 96, 0.95)",
                    color: "white",
                    borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                    fontSize: "25px",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
