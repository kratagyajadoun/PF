import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/* NAV ORDER must match DOM order in Home.jsx for IntersectionObserver to resolve correctly */
const NAV_ITEMS = [
  { name: 'About',      href: '#about',      section: 'about' },
  { name: 'Projects',   href: '#projects',   section: 'projects' },
  { name: 'Skills',     href: '#skills',     section: 'skills' },
  { name: 'Experience', href: '#experience', section: 'experience' },
  { name: 'Contact',    href: '#contact',    section: 'contact' },
];

const Header = () => {
  const [scrolled, setScrolled]         = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observerRef                      = useRef(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── IntersectionObserver scroll-spy ── */
  useEffect(() => {
    // Also observe hero to clear active state when at top
    const sectionIds = ['hero', ...NAV_ITEMS.map(i => i.section)];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    observerRef.current = new IntersectionObserver(
      entries => {
        // Collect all intersecting sections
        const visibleEntries = entries.filter(e => e.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // If we have multiple, pick the one with highest ratio or just the one that recently became prominent
          // Sorting by ratio is usually best for scroll spies
          const mostVisible = visibleEntries.reduce((prev, current) => 
            (prev.intersectionRatio > current.intersectionRatio) ? prev : current
          );
          
          setActiveSection(mostVisible.target.id === 'hero' ? '' : mostVisible.target.id);
        }
      },
      { 
        rootMargin: '-20% 0px -20% 0px', 
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] 
      }
    );

    sections.forEach(s => observerRef.current.observe(s));
    return () => observerRef.current?.disconnect();
  }, []);

  const smoothScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000, display: 'flex', justifyContent: 'center',
        paddingTop: '1.25rem', pointerEvents: 'none',
      }}
    >
      <motion.nav
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{
          pointerEvents: 'all',
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          padding: '0.45rem 0.85rem',
          borderRadius: '100px',
          background: scrolled ? 'rgba(12,12,14,0.9)' : 'rgba(12,12,14,0.65)',
          backdropFilter: 'blur(28px)',
          WebkitBackdropFilter: 'blur(28px)',
          border: `1px solid ${scrolled ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.04)'}`,
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)' : 'none',
          transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem',
            padding: '0.4rem 0.8rem', marginRight: '0.5rem',
            background: 'linear-gradient(135deg, #fff 0%, #777 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}
        >
          KJ.
        </Link>

        {/* Nav Links */}
        {NAV_ITEMS.map(item => {
          const isActive = activeSection === item.section;
          return (
            <button
              key={item.name}
              onClick={() => smoothScroll(item.section)}
              style={{
                position: 'relative', padding: '0.55rem 1rem',
                borderRadius: '100px', border: 'none', background: 'transparent',
                cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  style={{
                    position: 'absolute', inset: 0, borderRadius: '100px',
                    background: 'rgba(99,102,241,0.18)',
                    border: '1px solid rgba(99,102,241,0.35)',
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                />
              )}
              <span style={{
                position: 'relative', fontSize: '0.83rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#818cf8' : 'var(--text-sub)',
                transition: 'color 0.2s ease',
              }}>
                {item.name}
              </span>
            </button>
          );
        })}
      </motion.nav>
    </div>
  );
};

export default Header;
