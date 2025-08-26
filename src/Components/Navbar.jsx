import React, { useEffect, useState } from "react";
import Overflow from "./Overflow"; 
import FullPageMenu from "./FullPageMenu";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  Overflow(".logo h1, .links a", 0.5);
  const [showMenuButton, setShowMenuButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowMenuButton(true);
        setIsScrolled(true);
      } else {
        setShowMenuButton(false);
        setIsMenuOpen(false); 
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`w-full fixed z-[998] backdrop-blur-sm transition-colors duration-300 ${
          isScrolled ? "bg-white/90 shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto p-2 sm:p-10 flex justify-between items-center">
          
          <div className="logo overflow-hidden">
            <h1
              className={`text-2xl font-bold tracking-wide transition-colors ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              Pradeep{" "}
              <span
                className={`transition-colors ${
                  isScrolled ? "text-[#E0CCBB]" : "text-[#E0CCBB]"
                }`}
              >
                Singh
              </span>
            </h1>
          </div>

          <div className="links overflow-hidden hidden sm:flex items-center gap-10">
            {["Work", "Skills", "About", ].map((item) => (
              <a
                className={`text-sm relative group cursor-pointer transition-colors duration-300 ${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-green-400`}
                key={item}
                href={`#${item.toLowerCase()}`}
              >
                {item}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {showMenuButton && (
            <button
              className="sm:hidden p-2"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu
                className={`w-7 h-7 transition-colors ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Fullscreen Menu */}
      <FullPageMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
