import React from 'react';
import NeuCard from './NeuCard';
import { motion } from 'framer-motion';
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

const skillsData = {
  "Hardware & OS": [
    "Assembling and Disassembling of desktop computer",
    "Installation of Operating System",
    "Basic knowledge in operating Linux OS",
    "Knowledgeable in using virtual machines applications which are VMware and Virtualbox",
    "Knowledgeable in setting up of Window Server 2008 R2"
  ],
  "Networking": [
    "Basic Networking knowledge which are Crimping and Network Setup"
  ],
  "Software & Tools": [
    "Basic knowledge in video and photo editing in softwares like Sony Vegas, Adobe Premiere and Adobe Photoshop",
    "Knowledgeable in Programming software: Android Studio, Arduino Programming Software, Visual Basic, Visual Studio Code, XAMPP, Hosting web services",
    "Basic knowledge using Postman API Application",
    "Knowledgeable using GIT in web development",
    "Basic knowledge in Power BI",
    "Knowledgeable in Microsoft office Applications such as: Microsoft Office Word, Microsoft Office PowerPoint, Microsoft Office Excel, Microsoft Office Access"
  ],
  "Programming & Development": [
    "Knowledgeable in programming languages such as VB.net, SQL, C++, C#, Java, Python",
    "Knowledgeable in Web development languages such as HTML, CSS, PHP, JavaScript and Laravel"
  ],
  "Microcontrollers & Microcomputers": [
    "Basic knowledge in microcontroller and microcomputer devices: Raspberrypi3b, Rockpi4cplus, Arduino Uno"
  ]
};

function Skills() {
  return (
    <motion.div
      className="page-content"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <NeuCard>
        <h2>Skills</h2>
        {Object.entries(skillsData).map(([category, skillsList]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <ul className="skills-list">
              {skillsList.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <hr className="neu-hr-dashed" />
          </div>
        ))}
      </NeuCard>
    </motion.div>
  );
}

export default Skills;
