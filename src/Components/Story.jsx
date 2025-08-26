import React from "react";
import { Link } from "react-router-dom";

const Story = () => {
  return (
    <div id="contact" className="overflow-hidden h-[85vh] sm:h-screen">
      <div
        data-scroll
        data-scroll-speed="-0.5"
        className="relative w-full flex items-center overflow-hidden h-[85vh] sm:h-screen bg-[#070707] text-[#e0ccbb]"
      >
        {/* Background Video */}
        <div className="video-container absolute top-0 right-0 h-1/2 w-2/3 sm:w-3/5 flex items-center">
          <video
            className="w-full scale-125"
            autoPlay
            muted
            loop
            src="https://www.exoape.com/video/video-6.mp4"
          ></video>
        </div>

        {/* Content */}
        <div className="absolute w-full max-w-screen-2xl mx-auto px-7 sm:px-28">
          <div className="space-y-7 sm:space-y-10">
            
            {/* Title */}
            <div>
              <h1 className="text-6xl sm:text-[9rem] sm:tracking-tighter">Get</h1>
              <h1 className="text-6xl sm:text-[9rem] sm:tracking-tighter">in Touch</h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg sm:opacity-90 sm:text-2xl sm:w-1/2 leading-[1.5rem]">
              I’m <span className="font-semibold">Pradeep Singh</span>, a MERN Stack Developer.  
              Let’s build something amazing together. 🚀
            </p>

            {/* Mobile CTA */}
            <Link
              to={'/contact'}
              className="border-b-2 inline-block sm:hidden border-[#e0ccbb]"
             
            >
              Contact Me
            </Link>

            <span className="inline-block w-full h-[1px] opacity-50 bg-[#e0ccbb]"></span>

            {/* Footer Links */}
            <div className="flex justify-between items-end">
              <div className="flex gap-28 sm:gap-32">
                
                {/* Contact Info */}
                <ul className="space-y-2 max-sm:hidden">
                  {[
                    "New Delhi, India",
                    "pradeep@example.com",
                    "+91 98765 43210",
                  ].map((item) => (
                    <a
                      key={item}
                      className="block text-sm opacity-85"
                      href="#"
                    >
                      {item}
                    </a>
                  ))}
                </ul>

                {/* Menu Links */}
                <ul className="space-y-2">
                  {["Home", "Skills", "Work", ].map((item) => (
                    <a
                      key={item}
                      className="block text-sm opacity-85 capitalize"
                      href={`#${item.toLowerCase()}`}
                    >
                      {item}
                    </a>
                  ))}
                </ul>

                {/* Social Links */}
                <ul className="space-y-2">
                  {["GitHub", "LinkedIn", "Twitter", "Instagram"].map((item) => (
                    <a
                      key={item}
                      className="block text-sm opacity-85 capitalize"
                      href="#"
                      target="_blank"
                    >
                      {item}
                    </a>
                  ))}
                </ul>
              </div>

              {/* Desktop CTA */}
              <Link
              to={'/contact'}
                className="border-b inline-block max-sm:hidden border-[#e0ccbb]"
                // href="mailto:pradeep@example.com"
              >
                Let’s Talk
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
