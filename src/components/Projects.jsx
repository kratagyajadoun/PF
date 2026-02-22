import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, ArrowUpRight } from 'lucide-react';
import { config } from '../config';

const projects = [
  {
    id: 1,
    title: 'Enterprise E-Commerce',
    category: 'FULLSTACK',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80',
    description: 'High-performance trading platform architected for sub-second latency and 10K+ concurrent users.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 2,
    title: 'AI Insights Hub',
    category: 'FRONTEND',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&w=1200&q=80',
    description: 'Dashboard translating complex ML outputs into actionable business intelligence for global teams.',
    tech: ['TypeScript', 'D3.js', 'TensorFlow.js'],
  },
  {
    id: 3,
    title: 'Cloud Task Orchestrator',
    category: 'BACKEND',
    image: 'https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&w=1200&q=80',
    description: 'Distributed job scheduler built for elastic scalability across 50+ nodes, handling 1M+ jobs/day.',
    tech: ['Go', 'Kubernetes', 'Redis', 'gRPC'],
  },
];

const categories = ['All', 'Frontend', 'Backend', 'Fullstack'];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: [0.23, 1, 0.32, 1],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.9,
    y: -20,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
};

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [hoveredId, setHoveredId] = useState(null);

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase());

  return (
    <div>
      {/* Header row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', gap: '1.5rem' }}
      >
        <div>
          <h2 style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>Projects.</h2>
          <p style={{ color: 'var(--text-sub)', maxWidth: '420px', fontSize: '1rem' }}>
            Architectural integrity meets exceptional user experience.
          </p>
        </div>
        <div
          style={{
            padding: '0.35rem',
            borderRadius: '100px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-dim)',
            display: 'flex',
          }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.7rem 1.4rem',
                borderRadius: '100px',
                background: filter === cat ? 'var(--text-main)' : 'transparent',
                color: filter === cat ? 'var(--bg-deep)' : 'var(--text-sub)',
                fontWeight: 700,
                fontSize: '0.82rem',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Cards grid */}
      <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: '1.5rem' }}>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              style={{ borderRadius: '24px', overflow: 'hidden', background: 'var(--bg-card)', border: '1px solid var(--border-dim)', cursor: 'pointer' }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
            >
              {/* Image area */}
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <motion.img
                  src={project.image}
                  alt={project.title}
                  animate={{ scale: hoveredId === project.id ? 1.08 : 1 }}
                  transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Category badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.2rem',
                    left: '1.2rem',
                    padding: '0.35rem 0.9rem',
                    borderRadius: '100px',
                    background: 'rgba(10,10,11,0.7)',
                    backdropFilter: 'blur(10px)',
                    color: 'var(--accent)',
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    letterSpacing: '0.08em',
                  }}
                >
                  {project.category}
                </div>
                {/* Hover overlay */}
                <motion.div
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,11,0.8) 0%, transparent 60%)',
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{project.description}</p>

                {/* Tech chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {project.tech.map(t => (
                    <span key={t} style={{ padding: '0.3rem 0.75rem', borderRadius: '100px', background: 'var(--accent-glow)', border: '1px solid var(--accent-border)', color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 700 }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link
                    to={`/project/${project.id}`}
                    style={{
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      padding: '1rem',
                      borderRadius: '14px',
                      background: 'var(--text-main)',
                      color: 'var(--bg-deep)',
                      fontWeight: 800,
                      fontSize: '0.88rem',
                    }}
                  >
                    Case Study <ArrowUpRight size={16} />
                  </Link>
                  <a
                    href={config.social.github}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem',
                      borderRadius: '14px',
                      background: 'transparent',
                      border: '1px solid var(--border-dim)',
                      color: 'var(--text-main)',
                    }}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
