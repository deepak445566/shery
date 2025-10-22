import React, { useState } from "react";

const Fqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What services does your agency offer?",
      answer:
        "We provide a wide range of digital services including Website Development, Social Media Marketing, Search Engine Optimization (SEO), Branding, and Digital Advertising to help businesses grow online.",
    },
    {
      question: "How long does it take to build a website?",
      answer:
        "The timeline depends on the project. A basic business website may take 7–10 days, while a custom or e-commerce website may take 2–4 weeks. We keep you updated at every step.",
    },
    {
      question: "Do you provide social media management services?",
      answer:
       "Yes, we handle everything from content creation, posting, hashtags, caption writing, audience engagement, and growth strategy on platforms like Instagram, Facebook, LinkedIn, and more.",
    },
    {
      question: "How much do your services cost?",
      answer:
        "Pricing depends on the service and project requirements. We provide customized packages based on your goals and budget. Contact us for a free quote.",
    },
  ];

  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center px-4 md:px-0 mt-25 lg:mt-10">
    
      <h1 className=" text-3xl lg:text-5xl font-semibold text-center big">Frequently Asked Questions</h1>
      <p className="text-md alan text-slate-500 mt-2 pb-8 text-center">
 Answers to common questions about our design, marketing, and development services.


      </p>

      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-slate-200 py-4 cursor-pointer w-[70vw]"
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex items-center justify-between">
            <h3 className=" text-md lg:text-lg mont font-medium">{faq.question}</h3>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                openIndex === index ? "rotate-180" : ""
              } transition-all duration-500 ease-in-out`}
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                stroke="#1D293D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p
            className={`text-md text-slate-500 transition-all duration-500 ease-in-out max-w-xl ${
              openIndex === index
                ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                : "opacity-0 max-h-0 -translate-y-2"
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Fqs;
