import React from 'react';
import NeuCard from './NeuCard';
import '../styles/Neuomorphism.css';
import { motion } from 'framer-motion'; // Import motion

// Re-using pageVariants and pageTransition from App.js for consistency
const pageVariants = {
  initial: { opacity: 0, x: "-100vw", scale: 0.8 },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0, x: "100vw", scale: 1.2 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function Contact() {
  return (
    <motion.div // Wrap content with motion.div
      className="page-content"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <NeuCard>
        <h2>Contact Me</h2>
        <div className="contact-details">
          <p><strong>Name:</strong> Dela Rosa, James Russell D.</p>
          <p><strong>Address:</strong> B15 L11 Calachuchi St., P1, Alfonso Homes II, Brgy. Sinalhan, City of Santa Rosa Laguna 4026</p>
          <p><strong>Phone:</strong> 0977-762-6835</p>
          <p><strong>Email:</strong> <a href="mailto:jamesdelosrosa@gmail.com">jamesdelosrosa@gmail.com</a></p>
          <hr className="neu-hr" />
          <p><strong>SSS:</strong> 35-1540418-5</p>
          <p><strong>PAGIBIG:</strong> 121341820382</p>
          <p><strong>PHILHEALTH:</strong> 082518027375</p>
        </div>
      </NeuCard>
    </motion.div>
  );
}

export default Contact;
