import React from "react";

const Spread = () => {
  return (
    <div data-scroll data-scroll-speed="0.2" className="w-full">
      <div className="max-w-screen-2xl flex flex-col items-center">
        {/* Small Badge */}
        <div className="flex items-center gap-3">
          <svg
            className="size-4"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
            ></path>
          </svg>
          <h2 className="text-sm">Portfolio Highlights</h2>
        </div>

        {/* Main Text */}
        <div className="text text-center mt-7 pb-24">
          <h1 className="text-6xl sm:text-[9rem] tracking-tighter">Showcasing</h1>
          <h1 className="text-6xl sm:text-[9rem] tracking-tighter">My Work</h1>
          <p className="text-lg sm:text-2xl sm:mt-10 mt-6 leading-[1.5rem] w-2/3 mx-auto">
            Explore my journey as a <span className="font-semibold">MERN Stack Developer</span>.  
            From full-stack web apps to creative UI animations — here are some highlights of my work.
          </p>

          {/* Call to Action */}
          <a 
            className="border-b border-b-zinc-400 mt-5 sm:mt-10 inline-block hover:text-blue-400 transition-colors" 
            href="#projects"
          >
            View My Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spread;
