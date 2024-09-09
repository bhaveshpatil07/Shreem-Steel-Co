// src/components/Company.js
import React from 'react';
import { motion } from 'framer-motion';
import './Company.css'; // Import the CSS file

// Variants for button animation
const buttonVariants = {
  idle: {
    scale: 1,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.50)",
  },
  tap: {
    scale: 0.95,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.10)",
  },
};

// Variants for text animation
const textVariants = {
  hidden: { opacity: 1, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
};

const Company = () => {
  return (
    <div className="container">
      <motion.div
        className="text-container"
        variants={textVariants}
        initial="hidden"
        whileInView="visible" // Triggers animation on scroll
        viewport={{ once: false, amount: 0.3 }} // Runs when 30% of the element is in view
      >
        <h1 className="title">Welcome to our company!</h1>
        <section className="description">
        Shreem Steel Co is a rising name in wholesale and trading market of flat steel products like HR Coils, CR Coils, Galvanized Coils, Color Coated Coils, HR Sheets & Plates, CR Sheets & Plates, High tensile Sheets & Plates as well as finished products like MS ERW tubes/pipes, CR ERW tubes/pipes, Pre-Galvanised tubes/pipes, Color Coated Sheets, Wire Rods, TMT Bars and many more. With the expertise of three generation and more than 30 years of experience in the steel industry we provide best quality.
        </section>
        <br /><br />
        <motion.button
          className="animated-button"
          variants={buttonVariants}
          initial="idle"
          whileHover="hover"
          whileTap="tap"
          whileInView="visible" // Triggers the button's animation on scroll
          viewport={{ once: false, amount: 0.3 }} // Repeats the animation when scrolled into view
          animate={{
            backgroundColor: [
              '#ff4c4c', 
              '#d32f2f', 
              '#c62828',
              '#c62828', 
              '#424242',
              '#d32f2f',
              '#424242',
            ],
            transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    },
  }}
  onClick={() => window.open("https://wa.link/haryls", "_blank")} // Opens WhatsApp link in a new tab
>
          GET IN TOUCH
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Company;
