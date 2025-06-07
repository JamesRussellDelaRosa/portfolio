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

function EducationEntry({ institution, course, years, type }) {
  return (
    <div className="education-entry">
      <h4>{institution}</h4>
      {course && <p><strong>{type === 'College/Tertiary School' ? 'Course:' : 'Track/Specialization:'}</strong> {course}</p>}
      <p><strong>Years:</strong> {years}</p>
    </div>
  );
}

function Education() {
  const educationData = [
    {
      type: 'College/Tertiary School',
      institution: 'Pamantasan ng Lungsod ng Muntinlupa (PLM)',
      course: 'Bachelor of Science in Information Technology',
      years: '2019-2024',
    },
    {
      type: 'Technical Vocational',
      institution: 'SANTA ROSA MANPOWER TESDA',
      course: 'EPAS NCII - Electronic Product Assembly and Servicing, CSS NCII - Computer System Servicing',
      years: '2018-2019',
    },
    {
      type: 'Senior Highschool',
      institution: 'STI College Santa Rosa',
      course: 'STEM (Science, Technology, Engineering, and Mathematics)',
      years: '2016-2018',
    },
    {
      type: 'Secondary School',
      institution: 'APEX (Applied Academics for Excellence)',
      years: '2012-2016',
    },
    {
      type: 'Primary School',
      institution: 'Jesus the Exalted Name (JTEN)',
      years: '2005-2009',
    },
    {
      type: 'Primary School',
      institution: 'Emmanuel Christian School (ECS)',
      years: '2009-2012',
    },
  ];

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
        <h2>Educational Attainment</h2>
        {educationData.map((edu, index) => (
          <React.Fragment key={index}>
            <h3>{edu.type}</h3>
            <EducationEntry
              institution={edu.institution}
              course={edu.course}
              years={edu.years}
              type={edu.type}
            />
            {index < educationData.length - 1 && <hr className="neu-hr-dashed" />}
          </React.Fragment>
        ))}
      </NeuCard>
    </motion.div>
  );
}

export default Education;
