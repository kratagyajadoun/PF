import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const articles = [
  {
    title: 'Reimagining Patch Management Through Dependency-Aware Risk Visibility',
    date: 'FEB 2026',
    tag: 'INNOVATION',
    link: '#'
  },
  {
    title: 'Scaling File Uploads: A Merkle Tree Approach to Parallel, Fault-Tolerant Multi-Gigabyte Transfers',
    date: 'DEC 2025',
    tag: 'ARCHITECTURE',
    link: '#'
  },
  {
    title: 'JMH: Enhancing Performance Testing in Java',    
    date: 'APR 2025',
    tag: 'PROGRAMMING',
    link: '#'
  }
];

const Articles = () => {
  return (
    <div style={{ marginTop: '4rem' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>Tech Journals.</h2>
      <div style={{ display: 'grid', gap: '1rem' }}>
        {articles.map((article, index) => (
          <motion.a
            key={index}
            href={article.link}
            className="card"
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              padding: '2rem'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ x: 10, background: 'var(--bg-card-hover)', borderColor: 'var(--accent-border)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-muted)', minWidth: '80px' }}>{article.date}</p>
              <div>
                <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>{article.tag}</p>
                <h3 style={{ fontSize: '1.4rem' }}>{article.title}</h3>
              </div>
            </div>
            {/* <div className="glass" style={{ padding: '0.8rem', borderRadius: '50%', color: 'var(--accent)' }}>
              <ArrowUpRight size={20} />
            </div> */}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Articles;
