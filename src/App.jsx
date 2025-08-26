import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap, { Power4 } from "gsap";
import LocomotiveScroll from "locomotive-scroll";

// Components
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import Playreel from "./Components/Playreel";
import Images from "./Components/Images";
import Spread from "./Spread";
import Story from "./Components/Story";
import Contact from "./Components/Contact"; // new contact form

// Overflow Animation function
const Overflow = (elements, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      elements,
      {
        transformOrigin: "left",
        y: "100%",
        rotate: 30,
      },
      {
        y: 0,
        rotate: 0,
        duration: 2,
        delay: delay,
        ease: Power4.easeOut,
        stagger: 0.1,
      }
    );
  }, []);
};

const App = () => {
  // Initialize Locomotive Scroll
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  // Use Overflow animation on logo & links
  Overflow(".logo h1, .links a", 0.5);

  return (
    <Router>
      <div data-scroll-container>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Work />
                <Playreel />
                <Images />
                <Spread />
                <Story />
              </>
            }
          />

          {/* About Route */}
          <Route
            path="/about"
            element={
              <div className="min-h-screen flex justify-center items-center text-3xl text-white">
                About Page
              </div>
            }
          />

          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
