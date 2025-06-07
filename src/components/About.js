import React from 'react';
import NeuCard from './NeuCard';
import profilePic from '../assets/images/profile-pic.jpg'; // Import the profile picture
import '../styles/Neuomorphism.css'; // Ensure styles are imported if not already global
import { motion } from 'framer-motion'; // Import motion

// Re-using pageVariants and pageTransition from App.js for consistency, or define new ones
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

function About() {
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
        <img src={profilePic} alt="Profile" className="neu-profile-pic" />
        <h2>About Me</h2>
        <p>
          My journey into Information Technology began with a spark of curiosity and has grown into a deep-seated passion for leveraging technology to create, innovate, and solve real-world challenges. For me, IT is not just a career; it's a canvas for creativity and a tool for empowerment—a modern form of शिल्प (shilp - craftsmanship/art) where logic meets ingenuity. I am driven by the endless possibilities that technology offers to improve our lives and the excitement of being part of a field that is constantly evolving. My goal is to contribute meaningfully, to learn continuously, and to transform complex problems into elegant solutions, making a tangible impact with every project I undertake.
        </p>
        <hr className="neu-hr" />
        <h3>Objectives</h3>
        <p className="objectives-text">
          To obtain a challenging position in the IT industry as a results-driven IT professional, leveraging
          my passion for utilizing technology to enhance business operations and drive organizational
          success. I aim to apply my strong technical expertise, problem-solving skills, and innovative
          mindset to contribute to the development and implementation of cutting-edge solutions. With a
          commitment to delivering high-quality results, effective collaboration with cross-functional
          teams, and continuous self-improvement to stay at the forefront of emerging technologies, I strive
          to make a meaningful impact.
        </p>
      </NeuCard>
    </motion.div>
  );
}

export default About;
