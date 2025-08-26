import gsap, { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import Overflow from "./Overflow";

const Hero = () => {
  Overflow(".para p span");
  Overflow(".headings h1 span", 0.5);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".scroll-down", {
      scrollTrigger: {
        trigger: ".scroll-down",
        scroller: "body",
        start: "top 90%",
        end: "bottom 60%",
        scrub: true,
      },
      opacity: 0,
    });

    gsap.to(".picture img", {
      scrollTrigger: {
        trigger: ".picture img",
        scroller: "body",
        start: "0 0",
        end: "0 -300%",	
        scrub: true,
      },
      opacity: 0.5,
    })
  }, []);

  return (
    <div className="main relative w-full h-[150vh] sm:h-[270vh]">
      {/* Scroll indicator */}
      <span className="absolute scroll-down hidden sm:block z-[2] right-[10vh] top-[87vh] text-white text-sm">
        Scroll to explore
      </span>

      {/* Background Image */}
      <div className="picture w-full h-full overflow-hidden bg-black">
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
          alt="portfolio background"
        />
      </div>

      {/* Content */}
      <div className="absolute w-full top-0 left-0">
        <div className="text text-white max-w-screen-2xl mx-auto h-full px-5 sm:px-32">
          
          {/* Intro */}
          <div className="para mt-72 sm:mt-96">
            {[
              " Hi, I'm Pradeep Singh — a passionate ",
              "Frontend Developer crafting engaging ",
              "digital experiences with modern web ",
              "technologies and creative design. ",
            ].map((item) => (
              <p
                className="font-medium overflow-hidden text-lg sm:text-2xl leading-[1.5rem]"
                key={item}
              >
                <span className="block">{item}</span>
              </p>
            ))}
          </div>

          {/* Hero Heading */}
          <div className="headings mt-5 sm:mt-10">
            {["Creative", "Web", "Developer"].map((item) => (
              <h1
                className="text-5xl overflow-hidden sm:text-[15rem] sm:tracking-tighter tracking-tight leading-none"
                key={item}
              >
                <span className="block">{item}</span>
              </h1>
            ))}
          </div>

          {/* Mobile Scroll Indicator */}
          <div className="scroll-down mt-10 sm:hidden">
            <svg
              className="size-4 rotate-90"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.65612V4.30388L8.41874 4.31842L5.05997 0.95965L5.99054 0L10.9923 4.97273L6.00508 9.96L5.07451 9.00035L8.43328 5.64158L0 5.65612Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 sm:mt-32">
            <p className="font-medium text-lg sm:text-2xl sm:w-1/2 leading-[1.5rem]">
              I design and develop responsive, user-friendly websites that 
              transform ideas into interactive digital experiences.  
              Let's build something amazing together.
            </p>

            <div className="flex justify-between items-center mt-5 sm:mt-20">
              <a className="border-b sm:text-lg border-white inline-block" href="#projects"> View My Work </a>

              {/* Right side quick links */}
              <div className="flex gap-32 max-sm:hidden">
                <div className="space-y-3">
                  {["Work", "About", "Skills", "Contact"].map(item => {
                    return (
                      <a
                        key={item}
                        className="block text-sm opacity-85 capitalize"
                        href={`#${item.toLowerCase()}`}
                      >
                        {item}
                      </a>
                    );
                  })}
                </div>
                <div className="space-y-3">
                  {["pradeepsingh@gmail.com", "+91 98765 43210"].map(item => {
                    return (
                      <a key={item} className="block text-sm opacity-85" href="#" > 
                      {item}
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
