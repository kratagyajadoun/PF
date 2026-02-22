import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timeline = [
  {
    id: 'intern',
    role: 'Software Engineer II ',
    company: 'Opentext',
    period: 'Jan 2025 — Present',
    color: '#a5b4fc',
    skills: ['System Design', 'Microservices', 'GCP', 'Redis', 'Kubernetes', 'gRPC', 'Mentoring'],
    summary: 'Led team of 5, optimised content upload by 60 to 70 %, and acted as Scrum Master and contributed to the cloud migration of the ZENworks platform and implemented patch management features.',
  },
  {
    id: 'sd1',
    role: 'Software Developer I',
    company: 'Microfocus',
    period: 'Jul 2022 — Dec 2024',
    color: '#818cf8',
    skills: ['C#', 'SpringBoot', 'Java', 'PostgreSQL', 'Docker', 'CI/CD', 'REST APIs'],
    summary: 'Integrated Azure-based authentication, Developed multiple custom Maven plugins to automate staging workflows, and implemented a build-to-build database migration mechanism similar to Flyway.',
  },
  {
    id: 'sd2',
    role: 'Software Engineer - Intern',
    company: 'Josh Software',
    period: 'Jan 2022 — Jun 2022',
    color: '#5a5cef',
    skills: ['React.js','Javascript', 'SQL', 'Git', 'Agile'],
    summary: 'Kick-started my journey by working on Eventible and Lemnisk by building responsive UI components in React.js',
  },
];

/* Random scatter on the opposite side of the card */
const getScatteredPosition = (index, total, side) => {
  // side: 'left' or 'right' (where the card is)
  // bubbles should go to the opposite side
  const scatterRadius = 180;
  const angleSpread = Math.PI * 0.8; // 144 degrees spread
  const baseAngle = side === 'left' ? 0 : Math.PI; // If card is left, bubbles go right (0 rad)
  
  const angle = baseAngle - (angleSpread / 2) + (index / (total - 1)) * angleSpread;
  const distance = 140 + Math.random() * 60;
  
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
  };
};

const SkillBubble = ({ skill, color, index, total, side }) => {
  const { x, y } = getScatteredPosition(index, total, side);
  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0, scale: 0.5 }}
      animate={{ opacity: 1, x, y, scale: 1 }}
      exit={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, delay: index * 0.05 }}
      style={{
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        padding: '0.4rem 1rem',
        borderRadius: '100px',
        background: `${color.slice(0, 7)}1a`,
        border: `1px solid ${color.slice(0, 7)}44`,
        color: color,
        fontSize: '0.75rem',
        fontWeight: 700,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        boxShadow: `0 4px 12px rgba(0,0,0,0.2)`,
        zIndex: 5,
      }}
    >
      {skill}
    </motion.div>
  );
};

const CareerTimeline = () => {
  const [activeId, setActiveId] = useState(null);

  return (
    <div style={{ padding: '4rem 0' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        style={{ marginBottom: '6rem', textAlign: 'center' }}
      >
        <h2 style={{ fontSize: '3.5rem', fontFamily: 'var(--font-display)' }}>Career journey.</h2>
        <p style={{ color: 'var(--text-sub)', marginTop: '1rem', fontSize: '1.1rem', maxWidth: '600px', margin: '1rem auto 0' }}>
          Visualizing the evolution of skills and responsibilities through key career milestones.
        </p>
      </motion.div>

      <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>
        {/* Center Spine */}
        <div style={{
          position: 'absolute', left: '50%', top: 0, bottom: 0,
          width: '2px', background: 'linear-gradient(to bottom, transparent, var(--border-dim) 15%, var(--border-dim) 85%, transparent)',
          transform: 'translateX(-50%)',
        }} />

        {timeline.map((entry, index) => {
          const side = index % 2 === 0 ? 'left' : 'right';
          const isActive = activeId === entry.id;

          return (
            <div 
              key={entry.id}
              style={{ 
                display: 'grid', gridTemplateColumns: '1fr 120px 1fr', 
                alignItems: 'center', marginBottom: '6rem', position: 'relative' 
              }}
            >
              {/* Left Side */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '2rem' }}>
                {side === 'left' && (
                  <motion.div
                    onMouseEnter={() => setActiveId(entry.id)}
                    onMouseLeave={() => setActiveId(null)}
                    animate={{ 
                      x: isActive ? -20 : 0,
                      borderColor: isActive ? entry.color : 'var(--border-dim)',
                      boxShadow: isActive ? `0 10px 30px -10px ${entry.color}44` : 'none'
                    }}
                    className="card"
                    style={{ maxWidth: '380px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                  >
                    <p style={{ fontSize: '0.75rem', fontWeight: 800, color: entry.color, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{entry.period}</p>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>{entry.role}</h3>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>{entry.company}</p>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.6 }}>{entry.summary}</p>
                  </motion.div>
                )}
              </div>

              {/* Center Node */}
              <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'relative', width: '24px', height: '24px' }}>
                  <motion.div
                    animate={{ 
                      scale: isActive ? 1.5 : 1,
                      backgroundColor: isActive ? entry.color : 'var(--bg-card)',
                      borderColor: entry.color
                    }}
                    style={{
                      width: '24px', height: '24px', borderRadius: '50%',
                      border: `3px solid ${entry.color}`,
                      zIndex: 10, position: 'relative'
                    }}
                  />
                  <AnimatePresence>
                    {isActive && entry.skills.map((skill, i) => (
                      <SkillBubble 
                        key={skill} 
                        skill={skill} 
                        color={entry.color} 
                        index={i} 
                        total={entry.skills.length}
                        side={side}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right Side */}
              <div style={{ paddingLeft: '2rem' }}>
                {side === 'right' && (
                  <motion.div
                    onMouseEnter={() => setActiveId(entry.id)}
                    onMouseLeave={() => setActiveId(null)}
                    animate={{ 
                      x: isActive ? 20 : 0,
                      borderColor: isActive ? entry.color : 'var(--border-dim)',
                      boxShadow: isActive ? `0 10px 30px -10px ${entry.color}44` : 'none'
                    }}
                    className="card"
                    style={{ maxWidth: '380px', transition: 'border-color 0.3s ease, box-shadow 0.3s ease' }}
                  >
                    <p style={{ fontSize: '0.75rem', fontWeight: 800, color: entry.color, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{entry.period}</p>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>{entry.role}</h3>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1rem' }}>{entry.company}</p>
                    <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', lineHeight: 1.6 }}>{entry.summary}</p>
                  </motion.div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CareerTimeline;
