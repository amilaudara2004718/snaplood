'use client'

import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I download videos using SnapLood?",
      answer:
        "To download a video, simply paste the video URL in the input field and click the download button. You’ll be presented with various formats and resolutions to choose from.",
    },
    {
      question: "Which platforms are supported?",
      answer:
        "SnapLood supports downloading videos from YouTube, Facebook, Instagram, TikTok, Twitter, Vimeo, and many more. Check out the platform list on our homepage for more details.",
    },
    {
      question: "Can I download TikTok videos without the watermark?",
      answer:
        "Yes, SnapLood allows you to download TikTok videos without the watermark in HD quality.",
    },
    {
      question: "Do I need to create an account or sign up to use SnapLood?",
      answer:
        "No, you don’t need to sign up or create an account. SnapLood is completely free to use without any registration.",
    },
    {
      question: "Is SnapLood free to use?",
      answer:
        "Yes! SnapLood is completely free to use, and there are no hidden charges or fees. Download as many videos as you like!",
    },
    {
      question: "Is SnapLood secure to use?",
      answer:
        "Absolutely. SnapLood operates over a secure connection, ensuring your downloads are safe and your privacy is protected. We do not collect any personal data from our users.",
    },
    {
      question: "What resolutions can I download videos in?",
      answer:
        "SnapLood supports downloading videos in a variety of resolutions, including SD, HD, Full HD, and even 4K, depending on the original video quality.",
    },
    {
      question: "Do I need to install any software?",
      answer:
        "No installation is required. SnapLood is an online service that works directly from your browser, making it easy to download videos on any device.",
    },
    {
      question: "Can I download Instagram posts, reels, and stories?",
      answer:
        "Yes! SnapLood supports downloading Instagram posts, reels, and stories. Simply paste the URL and choose your download option.",
    },
    {
      question: "Are there any limitations on downloads?",
      answer:
        "No, there are no limits on how many videos you can download. Enjoy unlimited downloads with SnapLood.",
    },
    {
      question: "Which browsers are supported?",
      answer:
        "SnapLood is compatible with all major browsers including Chrome, Firefox, Safari, and Opera. You can enjoy seamless downloads without needing to switch browsers.",
    },
  ];

  return (
    <section className="bg-[#161616] text-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button
                className="w-full flex justify-between items-center text-lg font-semibold focus:outline-none hover:text-blue-400 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="ml-2 text-blue-800">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              <div
                className={`mt-2 text-gray-400 transition-max-height duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="pt-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
