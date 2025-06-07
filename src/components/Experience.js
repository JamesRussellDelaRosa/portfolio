import React from 'react';
import NeuCard from './NeuCard';
import '../styles/Neuomorphism.css';
import { motion } from 'framer-motion';

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

function ExperienceEntry({ company, position, year, description }) {
  return (
    <div className="experience-entry">
      <h4>{company}</h4>
      <p><strong>Position:</strong> {position}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Description:</strong> {description}</p>
    </div>
  );
}

function Experience() {
  const experienceData = [
    {
      company: "Jeannie's Touch Manpower Solutions Inc",
      position: "IT Staff/ Payroll Staff",
      year: "October 14, 2024 to Present",
      description: "Work as an IT staff and Payroll staff under the department of payroll at the Agency of Jeannie's Touch Manpower Solutions Inc"
    },
    {
      company: "Highly Succeed Inc",
      position: "Web Backend Developer",
      year: "January 24, 2024 to April 8, 2024",
      description: "Internship as a Web Backend Developer under the program of my course of BS in Information Technology at Pamantasan ng Lungsod ng Muntinlupa"
    },
    {
      company: "RBH Security Solutions",
      position: "IT Technical Support",
      year: "2023",
      description: "Setup of the biometric devices ZKTECO and managing the database"
    },
    {
      company: "City Hall of Santa Rosa",
      position: "Data Encoder",
      year: "2016",
      description: "Work as a Data Encoder at the Department of CENSUS at City Hall of Santa Rosa"
    }
  ];

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
        <h2>Work Experiences</h2>
        {experienceData.map((exp, index) => (
          <React.Fragment key={index}>
            <ExperienceEntry
              company={exp.company}
              position={exp.position}
              year={exp.year}
              description={exp.description}
            />
            {index < experienceData.length - 1 && <hr className="neu-hr-dashed" />}
          </React.Fragment>
        ))}
      </NeuCard>
    </motion.div>
  );
}

export default Experience;
