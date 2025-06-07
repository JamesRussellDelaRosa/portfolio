import React from 'react';
import NeuCard from './NeuCard';
import { motion } from 'framer-motion'; // Import motion
import '../styles/Neuomorphism.css';

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

function Projects() {
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
        <h2>Projects</h2>
        <p>Here are some of my projects:</p>
        <ul>
          <li>Project 1: A cool web app</li>
          <li>Project 2: Another interesting project</li>
        </ul>
      </NeuCard>
    </motion.div>
  );
}

export default Projects;
