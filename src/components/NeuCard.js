import React from 'react';
import '../styles/Neuomorphism.css';
import { motion } from 'framer-motion'; // Import motion

// Animation for elements appearing on scroll
const scrollFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

function NeuCard({ children }) {
  return (
    <motion.div
      className="neu-card"
      initial="hidden" // Start as hidden
      whileInView="visible" // Animate to visible when in viewport
      viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% of card is visible
      variants={scrollFadeIn} // Apply the fade-in animation
    >
      {children}
    </motion.div>
  );
}

export default NeuCard;
