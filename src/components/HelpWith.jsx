import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Database, Zap, ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Architecture Strategy',
    description: 'Crafting resilient, scalable architectures that support rapid business growth and technical longevity.',
    icon: <Database size={32} />
  },
  {
    title: 'Cloud & Deployment',
    description: 'Building and maintaining cloud-ready services with experience in deployment, environment configuration, and production monitoring.',
    icon: <Layout size={32} />
  },
  {
    title: 'Patch & Release Engineering',
    description: 'Contributing to enterprise patch workflows, ensuring secure updates, backward compatibility, and minimal production disruption.',
    icon: <Code2 size={32} />
  },
  {
    title: 'Scalability & Optimization',
    description: 'Improving throughput, reducing bottlenecks, and enhancing runtime performance under production load.',
    icon: <Zap size={32} />
  }
];

const HelpWith = () => {
  return (
    <div>
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>Strategic expertise.</h2>
      <div className="bento-grid">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="card" 
            style={{ 
              gridColumn: index === 0 || index === 3 ? 'span 7' : 'span 5',
              display: 'flex', 
              flexDirection: 'column'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div style={{ color: 'var(--accent)', marginBottom: '2rem' }}>{service.icon}</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: 1.6, flex: 1 }}>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HelpWith;
