import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { emailService } from '../services/EmailService';

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      await emailService.sendEnquiry(data);
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        reset();
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong.');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const inputStyle = {
    padding: '1.2rem',
    borderRadius: '16px',
    border: '1px solid var(--border-dim)',
    background: 'rgba(255,255,255,0.03)',
    color: 'var(--text-main)',
    width: '100%',
    fontFamily: 'inherit',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition-smooth)'
  };

  return (
    <div className="bento-grid" style={{ alignItems: 'stretch' }}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="card" 
        style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', background: 'var(--bg-card)' }}
      >
        <h2 style={{ fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '2rem', fontFamily: 'var(--font-display)' }}>Let's build <br />the future.</h2>
        <p style={{ color: 'var(--text-sub)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Currently seeking opportunities to lead high-impact technical initiatives. If you have a challenging project, I'd love to hear from you.
        </p>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.1em' }}>DIRECT CONTACT</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>kratagyasingh1997@gmail.com</p>
          </div>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '0.1em' }}>LOCATION</p>
            <p style={{ fontSize: '1.2rem', fontWeight: 600 }}>Bengaluru, India</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="card" 
        style={{ gridColumn: 'span 7' }}
      >
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
              <CheckCircle size={60} color="var(--accent)" />
              <h3 style={{ fontSize: '2rem', marginTop: '1.5rem', fontFamily: 'var(--font-display)' }}>Message received.</h3>
              <p style={{ color: 'var(--text-sub)', marginTop: '0.5rem' }}>A confirmation email has been simulated in the console.</p>
            </motion.div>
          ) : status === 'error' ? (
            <motion.div 
              key="error"
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
              <AlertCircle size={60} color="#f87171" />
              <h3 style={{ fontSize: '2rem', marginTop: '1.5rem', fontFamily: 'var(--font-display)' }}>Oops!</h3>
              <p style={{ color: 'var(--text-sub)', marginTop: '0.5rem' }}>{errorMessage}</p>
            </motion.div>
          ) : (
            <form key="form" onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>NAME</label>
                  <input 
                    {...register('name', { required: true })} 
                    style={inputStyle}
                    placeholder="Erich Fenner"
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-dim)'}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>EMAIL</label>
                  <input 
                    {...register('email', { required: true, pattern: /^\S+@\S+$/i })} 
                    style={inputStyle}
                    placeholder="erich@work.com"
                    onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--border-dim)'}
                  />
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>SERVICE</label>
                <select 
                  {...register('subject')} 
                  style={inputStyle}
                >
                  <option value="System Architecture">System Architecture</option>
                  <option value="Frontend Strategy">Frontend Strategy</option>
                  <option value="Fullstack Development">Fullstack Development</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>MESSAGE</label>
                <textarea 
                  {...register('message', { required: true })} 
                  rows={4} 
                  style={{ ...inputStyle, resize: 'none' }}
                  placeholder="Tell me about your project scale and goals..."
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-dim)'}
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'loading'}
                type="submit" 
                style={{ 
                  padding: '1.2rem', 
                  background: 'var(--text-main)', 
                  color: 'var(--bg-deep)', 
                  borderRadius: '16px', 
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                }}
              >
                {status === 'loading' ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Send Enquiry <Send size={18} /></>
                )}
              </motion.button>
            </form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ContactForm;
