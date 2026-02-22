import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'TechFlow Systems',
    period: '2022 - Present',
    description: 'Directed architectural shifts towards microservices, optimizing system reliability and reducing peak latency by 35%.'
  },
  {
    role: 'Full Stack Developer',
    company: 'Creative Waves',
    period: '2020 - 2022',
    description: 'Engineered high-traffic React platforms, implemented automated testing protocols, and mentored cross-functional squads.'
  },
  {
    role: 'Software Engineer II',
    company: 'Opentext',
    period: 'Jan 2025 — Present',
    description: 'Contributed to cloud infrastructure automation and internal tooling for performance benchmarking.'
  }
];

const Experience = () => {
  return (
    <div className="card" style={{ background: 'transparent', border: 'none', padding: 0 }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Professional lineage.</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="card"
            style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div style={{ minWidth: '180px' }}>
              <p style={{ fontWeight: 800, color: 'var(--accent)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>{exp.period}</p>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{exp.role} <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>at</span> {exp.company}</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '1rem', maxWidth: '700px' }}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
