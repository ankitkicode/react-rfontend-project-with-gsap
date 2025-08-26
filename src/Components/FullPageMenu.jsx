"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const overlayVariants = {
  hidden: { 
    opacity: 0,
    clipPath: 'circle(30px at calc(100% - 48px) 48px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  },
  visible: { 
    opacity: 1,
    clipPath: 'circle(150% at calc(100% - 48px) 48px)',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2
    }
  },
};

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const navItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const navLinks = ["Home", "Skills", "Work", "Contact"];

export default function FullPageMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="menu" // 👈 important for AnimatePresence
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 bg-black text-white z-[999] flex flex-col items-center justify-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-white z-50 focus:outline-none"
          >
            <X size={32} />
          </button>

          {/* Nav links */}
          <motion.nav
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="text-center"
          >
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <motion.li key={link} variants={navItemVariants}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    onClick={onClose} // 👈 close when clicked
                    className="text-5xl md:text-7xl font-medium text-gray-300 tracking-tighter hover:underline"
                  >
                    {link.toUpperCase()}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
