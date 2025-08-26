import React, { useEffect, useRef } from "react";
import gsap, { Power4 } from "gsap";

const Contact = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a GSAP context scoped to containerRef
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-title, .contact-item, .contact-form, .social-link",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: Power4.easeOut, stagger: 0.3 }
      );
    }, containerRef);

 // Cleanup safely on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-[#0f0f0f] text-[#e0ccbb] px-6 py-20 flex items-center justify-center"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left: Contact Form */}
        <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-lg contact-form">
          <h2 className="text-3xl font-bold mb-6 contact-title">Contact Me</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded bg-[#0f0f0f] text-[#e0ccbb] border border-[#333]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-[#0f0f0f] text-[#e0ccbb] border border-[#333]"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="p-3 rounded bg-[#0f0f0f] text-[#e0ccbb] border border-[#333]"
            />
            <button
              type="submit"
              className="mt-3 bg-[#e0ccbb] text-[#0f0f0f] px-6 py-2 rounded hover:bg-[#d4bca5] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Info, Navigation, Socials */}
        <div className="space-y-8">
          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold contact-title">Get in Touch</h3>
            <p className="contact-item">New Delhi, India</p>
            <p className="contact-item">pradeep@example.com</p>
            <p className="contact-item">+91 98765 43210</p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col space-y-2 text-lg">
            <p className="opacity-80 hover:underline cursor-pointer contact-item">Home</p>
            <p className="opacity-80 hover:underline cursor-pointer contact-item">Skills</p>
            <p className="opacity-80 hover:underline cursor-pointer contact-item">Work</p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-4">
            <p className="opacity-80 hover:underline cursor-pointer social-link">GitHub</p>
            <p className="opacity-80 hover:underline cursor-pointer social-link">LinkedIn</p>
            <p className="opacity-80 hover:underline cursor-pointer social-link">Twitter</p>
            <p className="opacity-80 hover:underline cursor-pointer social-link">Instagram</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
