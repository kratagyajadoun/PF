import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Activity, Server, Layout } from 'lucide-react';

const projectsData = {
  1: { 
    title: 'Enterprise E-Commerce', 
    category: 'FULLSTACK',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1600&q=80',
    description: 'A high-performance trading platform architected for sub-second latency and extreme user concurrency.',
    tech: ['RE-ACT', 'NODE.JS', 'GO', 'POSTGRES'],
    impact: ['40% FASTER CHECKOUT', '10K+ CONCURRENT OPS', '99.99% AVAILABILITY'],
    challenge: 'Architecting a real-time inventory engine that could handle massive spikes during flash sales without data loss.',
    solution: 'Implemented a distributed lock mechanism using Redis and a Kafka-based event stream for reliable asynchronous processing.'
  },
  2: { 
    title: 'AI Insights Hub', 
    category: 'FRONTEND',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f452?auto=format&fit=crop&w=1600&q=80',
    description: 'High-density visualization dashboard translating complex machine learning outputs into actionable business intelligence.',
    tech: ['TYPESCRIPT', 'D3.JS', 'TENSORFLOW', 'REACT'],
    impact: ['60% DATA SPEEDUP', '$50K SAVINGS FOUND', 'GLOBAL ADOPTION'],
    challenge: 'Optimizing the rendering of 100k+ data points in real-time while allowing complex hierarchical drill-downs.',
    solution: 'Leveraged WebGL for high-density rendering and custom Web Workers for non-blocking data transformations.'
  },
  3: { 
    title: 'Cloud Task Orchestrator', 
    category: 'BACKEND',
    image: 'https://images.unsplash.com/photo-1558494949-ef8b5655d939?auto=format&fit=crop&w=1600&q=80',
    description: 'A distributed job scheduler designed for elastic scalability and resilient cross-region task execution.',
    tech: ['GO', 'KUBERNETES', 'REDIS', 'GRPC'],
    impact: ['1M+ DAILY JOBS', 'ZERO DATA LOSS', 'ELASTIC SCALING'],
    challenge: 'Ensuring exactly-once job execution in a highly dynamic distributed environment prone to network partitions.',
    solution: 'Developed a custom consensus protocol for coordinator election and persistent state machines per job sequence.'
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <div className="container" style={{ paddingTop: '10rem' }}>Project not found.</div>;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container" 
      style={{ paddingTop: '10rem', paddingBottom: '6rem' }}
    >
      <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '3rem', fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>
        <ArrowLeft size={18} /> BACK TO ARCHIVES
      </Link>

      <div className="bento-grid">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="card" 
          style={{ gridColumn: 'span 12', padding: 0, height: '500px' }}
        >
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="card" 
          style={{ gridColumn: 'span 8' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div className="glass" style={{ padding: '0.4rem 1rem', borderRadius: 'var(--radius-pill)', color: 'var(--accent)', fontSize: '0.7rem', fontWeight: 800 }}>
              {project.category}
            </div>
          </div>
          <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem', lineHeight: 1 }}>{project.title}</h1>
          <p style={{ fontSize: '1.3rem', color: 'var(--text-sub)', marginBottom: '3rem', lineHeight: 1.5 }}>{project.description}</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '3rem' }}>
            <div>
              <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid var(--border-dim)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>The Challenge</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem' }}>{project.challenge}</p>
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', borderBottom: '1px solid var(--border-dim)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>The Solution</h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem' }}>{project.solution}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="card" 
          style={{ gridColumn: 'span 4' }}
        >
          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>TECHNOLOGIES</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {project.tech.map(t => (
                <span key={t} className="glass" style={{ padding: '0.5rem 1rem', borderRadius: 'var(--radius-common)', fontSize: '0.75rem', fontWeight: 700 }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>KEY IMPACT</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {project.impact.map((imp, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-sub)', fontWeight: 600 }}>
                  <div style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%' }}></div> {imp}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <motion.a whileHover={{ scale: 1.02 }} href="#" style={{ padding: '1.2rem', background: 'var(--text-main)', color: 'var(--bg-deep)', borderRadius: '16px', fontWeight: 800, display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              LIVE PROJECT <ExternalLink size={18} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.02 }} href="#" style={{ padding: '1.2rem', border: '1px solid var(--border-dim)', color: 'var(--text-main)', borderRadius: '16px', fontWeight: 800, display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
              SOURCE CODE <Github size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
