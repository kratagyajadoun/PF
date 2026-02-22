import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { config } from '../config';

const LeetCodeIcon = ({ size = 18 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.517a1.358 1.358 0 0 0-.415.962c0 .355.14.704.415.962L11.39 9.97a1.357 1.357 0 0 0 .961.414 1.357 1.357 0 0 0 .961-.414l4.377-4.517a1.358 1.358 0 0 0 .415-.962 1.358 1.358 0 0 0-.415-.962L14.444.414A1.357 1.357 0 0 0 13.483 0zm-6.103 5.69a1.357 1.357 0 0 0-.961.414l-4.377 4.517a1.358 1.358 0 0 0-.415.962c0 .355.14.704.415.962L5.29 15.66a1.357 1.357 0 0 0 .961.414 1.357 1.357 0 0 0 .961-.414l4.377-4.517a1.358 1.358 0 0 0 .415-.962 1.358 1.358 0 0 0-.415-.962L8.344 6.104a1.357 1.357 0 0 0-.961-.414zM12.13 13.51a1.357 1.357 0 0 0-.961.414l-4.377 4.517a1.358 1.358 0 0 0-.415.962c0 .355.14.704.415.962l3.248 3.116a1.357 1.357 0 0 0 .961.414 1.357 1.357 0 0 0 .961-.414l4.377-4.517a1.358 1.358 0 0 0 .415-.962 1.358 1.358 0 0 0-.415-.962l-3.248-3.116a1.357 1.357 0 0 0-.961-.414z"/>
  </svg>
);

const socialLinks = [
  { icon: <Github size={18} />, label: 'GitHub', href: config.social.github },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', href: config.social.linkedin },
  { icon: <LeetCodeIcon size={18} />, label: 'Leetcode', href: config.social.leetcode },
  // { icon: <Mail size={18} />, label: 'Email', href: `mailto:${config.email.user}` },
];

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--border-dim)', background: 'var(--bg-deep)', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '3rem' }}>Let's collaborate.</h2>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '1rem 2.5rem', borderRadius: '100px',
              background: 'var(--text-main)', color: 'var(--bg-deep)',
              fontWeight: 800, fontSize: '1rem',
            }}
          >
          Let's Connect <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>© 2026 · All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {socialLinks.map(s => (
              <motion.a
                key={s.label}
                whileHover={{ y: -3, color: 'var(--accent)' }}
                href={s.href}
                title={s.label}
                style={{ color: 'var(--text-muted)', display: 'flex' }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
