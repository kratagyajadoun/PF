import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className="bento-grid"
    >
      <div className="card" style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{ fontSize: '2.8rem', marginBottom: '1.5rem' }}>The philosophy.</h2>
        <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem' }}>
          I believe that great software is born out of a perfect balance between technical excellence and human-centric design. My goal is to build tools that feel invisible yet indispensable.
        </p>
      </div>

      <div className="card" style={{ gridColumn: 'span 7', background: 'var(--accent-glow)', border: '1px solid var(--accent-border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {[
            { label: 'PROVEN IMPACT', value: '15+', sub: 'Features Delivered' },
            { label: 'GLOBAL REACH', value: '1170+', sub: 'Project Users' },
            { label: 'PULSE', value: '1M+', sub: 'Requests/Day' },
            { label: 'EFFICIENCY', value: '70%', sub: 'Speed Increase' },
          ].map((stat, idx) => (
            <div key={idx}>
              <p style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--accent)', marginBottom: '0.5rem' }}>{stat.label}</p>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '0.2rem' }}>{stat.value}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>{stat.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
