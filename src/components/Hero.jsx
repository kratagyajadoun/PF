import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, ArrowUpRight, Download } from 'lucide-react';
import { useRef } from 'react';
import { config } from '../config';

const LeetCodeIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-4.377 4.517a1.358 1.358 0 0 0-.415.962c0 .355.14.704.415.962L11.39 9.97a1.357 1.357 0 0 0 .961.414 1.357 1.357 0 0 0 .961-.414l4.377-4.517a1.358 1.358 0 0 0 .415-.962 1.358 1.358 0 0 0-.415-.962L14.444.414A1.357 1.357 0 0 0 13.483 0zm-6.103 5.69a1.357 1.357 0 0 0-.961.414l-4.377 4.517a1.358 1.358 0 0 0-.415.962c0 .355.14.704.415.962L5.29 15.66a1.357 1.357 0 0 0 .961.414 1.357 1.357 0 0 0 .961-.414l4.377-4.517a1.358 1.358 0 0 0 .415-.962 1.358 1.358 0 0 0-.415-.962L8.344 6.104a1.357 1.357 0 0 0-.961-.414zM12.13 13.51a1.357 1.357 0 0 0-.961.414l-4.377 4.517a1.358 1.358 0 0 0-.415.962c0 .355.14.704.415.962l3.248 3.116a1.357 1.357 0 0 0 .961.414 1.357 1.357 0 0 0 .961-.414l4.377-4.517a1.358 1.358 0 0 0 .415-.962 1.358 1.358 0 0 0-.415-.962l-3.248-3.116a1.357 1.357 0 0 0-.961-.414z" />
  </svg>
);

/* Text character stagger – re-runs every time section enters view */
const AnimatedWord = ({ text, delay = 0, color }) => {
  const chars = text.split('');
  return (
    <>
      {chars.map((c, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          }}
          transition={{ duration: 0.55, delay: delay + i * 0.025, ease: [0.23, 1, 0.32, 1] }}
          style={{ display: 'inline-block', color }}
        >
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}
    </>
  );
};

const SOCIAL = [
  { icon: <Github size={18} />, href: config.social.github, label: 'GitHub' },
  { icon: <Linkedin size={18} />, href: config.social.linkedin, label: 'LinkedIn' },
  { icon: <LeetCodeIcon size={18} />, href: config.social.leetcode, label: 'Leetcode' },
];

const Hero = () => {
  const ref = useRef(null);
  /* once: false → animation replays every time user scrolls back to hero */
  const inView = useInView(ref, { once: false, margin: '-10% 0px -10% 0px' });

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const slide = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.75, ease: [0.23, 1, 0.32, 1] } },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="bento-grid"
      style={{ gridTemplateRows: 'auto auto' }}
    >
      {/* ── INTRO card (left) ── */}
      <motion.div
        variants={slide}
        whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
        className="card"
        style={{
          gridColumn: 'span 7',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          minHeight: '400px',
          background: 'linear-gradient(140deg, #17171a 0%, #12121f 100%)',
          transition: 'border-color 0.3s ease',
        }}
      >
        {/* Badge */}
        <div style={{ display: 'flex', marginBottom: '1.5rem' }}>
          <motion.div
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.4rem 1rem', borderRadius: '100px',
              background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
              color: '#818cf8', fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.07em',
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#6366f1' }} />
            AVAILABLE FOR PROJECTS
          </motion.div>
        </div>

        {/* Animated headline */}
        <div style={{ fontSize: 'clamp(2.2rem, 6vw, 4.2rem)', lineHeight: 1.05, marginBottom: '1.5rem', overflow: 'hidden', fontFamily: 'var(--font-display)' }}>
          <motion.div variants={{ hidden: {}, visible: {} }}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <AnimatedWord text="Designing" delay={0.1} />
              {' '}
              <AnimatedWord text="systems." delay={0.2} color="var(--text-sub)" />
            </span>
            <br />
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <AnimatedWord text="Writing" delay={0.4} />
              {' '}
              <AnimatedWord text="code" delay={0.5} />
            </span>
            <br />
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              <AnimatedWord text="Delivering" delay={0.65} />
              {' '}
              <AnimatedWord text="impact" delay={0.8} color="var(--accent)" />
            </span>
          </motion.div>
        </div>

        {/* Sub */}
        <motion.p variants={slide} style={{ color: 'var(--text-sub)', fontSize: '1.05rem', maxWidth: '480px', marginBottom: '2.5rem', lineHeight: 1.65 }}>
          Software Engineer with 4+ years of experience building scalable, production-grade systems and driving end-to-end ownership of features from design to deployment.
        </motion.p>

        {/* Actions */}
        <motion.div variants={slide} style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              padding: '0.9rem 2rem', borderRadius: '100px',
              background: 'var(--text-main)', color: 'var(--bg-deep)',
              fontWeight: 800, fontSize: '0.95rem',
            }}
          >
            Start a project
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            href="/kratagyajadoun_sde2.pdf"
            download="Kratagya_Jadoun_Resume.pdf"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.9rem 1.5rem', borderRadius: '100px',
              border: '1px solid var(--border-hover)', color: 'var(--text-main)',
              fontWeight: 700, fontSize: '0.9rem',
            }}
          >
            <Download size={16} /> Résumé
          </motion.a>

          <div style={{ display: 'flex', gap: '0.6rem', marginLeft: '0.5rem' }}>
            {SOCIAL.map(({ icon, href, label }) => (
              <motion.a
                key={label}
                whileHover={{ y: -3, color: 'var(--accent)' }}
                href={href}
                title={label}
                style={{ color: 'var(--text-sub)', display: 'flex' }}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* ── PHOTO card (right) ── */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 1.05 },
          visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.23, 1, 0.32, 1] } },
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="card"
        style={{ gridColumn: 'span 5', padding: 0, overflow: 'hidden', position: 'relative', minHeight: '400px' }}
      >
        <img
          src="/Kratagya.jpeg"
          alt="Profile"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', opacity: 0.9 }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #0a0a0b 0%, rgba(10,10,11,0.4) 40%, transparent 70%)',
        }} />
        <div style={{ position: 'absolute', bottom: '1.75rem', left: '1.75rem' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-sub)', letterSpacing: '0.1em' }}>BASED IN</p>
          <p style={{ fontSize: '1.2rem', fontWeight: 800 }}>BENGALURU</p>
        </div>
      </motion.div>

      {/* ── Experience stat card ── */}
      <motion.div
        variants={slide}
        whileHover={{ y: -5, borderColor: 'var(--accent-border)' }}
        className="card"
        style={{ gridColumn: 'span 4', transition: 'border-color 0.3s ease' }}
      >
        <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>EXPERIENCE</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '3.5rem', fontFamily: 'var(--font-display)', fontWeight: 800 }}>4+</span>
          <span style={{ fontSize: '1rem', color: 'var(--accent)' }}>Years</span>
        </div>
        <div style={{
          padding: '0.6rem 1rem', borderRadius: '100px',
          background: 'var(--accent-glow)', border: '1px solid var(--accent-border)',
          display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
        }}>
          <span style={{ width: 7, height: 7, background: 'var(--accent)', borderRadius: '50%' }} />
          <p style={{ fontSize: '0.8rem', fontWeight: 700 }}>Senior Developer · SDE2</p>
        </div>
      </motion.div>

      {/* ── CTA card ── */}
      <motion.div
        variants={slide}
        className="card"
        style={{ gridColumn: 'span 8', display: 'flex', alignItems: 'center', justifyContent: 'space-between', transition: 'border-color 0.3s ease' }}
        whileHover={{ y: -5, borderColor: 'var(--accent-border)' }}
      >
        <div>
          <h3 style={{ fontSize: '1.9rem', marginBottom: '0.4rem' }}>Open to meaningful engineering conversations.</h3>
          <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem' }}>Always interested in solving challenging problems.</p>
        </div>
        <motion.a
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          style={{
            flexShrink: 0, padding: '1.1rem', borderRadius: '50%',
            background: 'var(--accent-glow)', border: '1px solid var(--accent-border)',
            color: 'var(--accent)', display: 'flex',
          }}
        >
          <ArrowUpRight size={24} />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
