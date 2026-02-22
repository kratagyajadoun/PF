import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import CareerTimeline from '../components/CareerTimeline';
import ContactForm from '../components/ContactForm';
import About from '../components/About';
import Articles from '../components/Articles';
import HelpWith from '../components/HelpWith';

/* Reusable section wrapper with smooth fade-in */
const Section = ({ id, children, noTopBorder }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, margin: '-60px' }}
    transition={{ duration: 0.6 }}
    style={{
      marginBottom: '10rem',
      position: 'relative',
      scrollMarginTop: '100px', /* offset for fixed header */
    }}
  >
    {!noTopBorder && (
      <div style={{ width: '100%', height: '1px', background: 'var(--border-dim)', marginBottom: '8rem' }} />
    )}
    {children}
  </motion.section>
);

const Home = () => {
  return (
    <>
      {/* Ambient gradient orbs */}
      <div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none', zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <div style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-10%', right: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.05) 0%, transparent 70%)',
        }} />
      </div>

      <div className="container" style={{ paddingTop: '13rem', paddingBottom: '6rem', position: 'relative', zIndex: 1 }}>
        <Section id="hero" noTopBorder>
          <Hero />
        </Section>

        <Section id="about">
          <About />
        </Section>

        <Section id="help">
          <HelpWith />
        </Section>

        <Section id="projects">
          <Projects />
        </Section>

        <Section id="skills">
          <Skills />
        </Section>

        <Section id="experience">
          <CareerTimeline />
        </Section>

        <Section id="articles">
          <Articles />
        </Section>

        <Section id="contact">
          <ContactForm />
        </Section>
      </div>
    </>
  );
};

export default Home;
