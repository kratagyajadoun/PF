import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: '.NET Ecosystem', detail: 'Enterprise backend development, legacy modernization, and high-performance service design.', category: 'Platform' },
  { name: 'Java / Spring Boot', detail: 'Scalable RESTful services, modular architecture, and distributed backend systems.', category: 'Engine' },
  { name: 'Profiling & Runtime Optimization', detail: 'Memory analysis, bottleneck detection, and production stability improvements.', category: 'Reliability' },
  { name: 'PostgreSQL', detail: 'Complex queries & optimization.', category: 'Data' },
  { name: 'System Design', detail: 'Distributed systems & microservices.', category: 'Core' },
  { name: 'Cloud Native', detail: 'GCP, Docker & CI/CD expert.', category: 'Scale' },
];

const Skills = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="card"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '2.5rem' }}>Core stacking.</h2>
        <p style={{ color: 'var(--text-sub)', maxWidth: '300px', fontSize: '0.9rem', textAlign: 'right' }}>
          Continuously evolving my technical toolkit to build the future.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5, background: 'var(--bg-card-hover)', borderColor: 'var(--accent-border)' }}
            style={{ 
              padding: '2rem', 
              borderRadius: 'var(--radius-common)', 
              border: '1px solid var(--border-dim)',
              background: 'rgba(255,255,255,0.02)',
              transition: 'all 0.4s ease'
            }}
          >
            <p style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.1em', marginBottom: '1rem' }}>
              {skill.category.toUpperCase()}
            </p>
            <h4 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{skill.name}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)', lineHeight: 1.5 }}>
              {skill.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
