import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const StepCard = ({ number, title, description, isActive, onClick }) => {
  // Generate a unique gradient for each step
  const gradients = [
    'linear-gradient(135deg, #3b82f6, #60a5fa)',
    'linear-gradient(135deg, #10b981, #34d399)',
    'linear-gradient(135deg, #f59e0b, #fbbf24)',
  ];
  
  const gradient = gradients[(number - 1) % gradients.length];
  const icons = [
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.75 6.75 0 1113.5 0v4.661c0 .326.277.585.6.544.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
      <path fillRule="evenodd" d="M9.75 15.75a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V16.5a.75.75 0 01.75-.75zm4.5 0a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
    </svg>,
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5z" clipRule="evenodd" />
    </svg>
  ];
  
  return (
    <motion.div 
      className="relative"
      style={{ flex: 1, minHeight: '240px' }} // Reduced from 320px
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div 
        style={{
          position: 'relative',
          padding: '2rem 1.5rem', // Reduced from 3rem 2rem
          borderRadius: '1rem', // Reduced from 1.25rem
          backgroundColor: 'white',
          boxShadow: isActive 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 0 0 2px rgba(22, 163, 74, 0.2)'
            : '0 10px 15px -3px rgba(0, 0, 0, 0.08)',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          height: '100%',
        }}
        animate={{
          y: isActive ? -10 : 0, // Reduced from -15
          scale: isActive ? 1.02 : 1, // Reduced from 1.03
          opacity: isActive ? 1 : 0.85,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }}
      >
        {/* Decorative background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `radial-gradient(${gradient.split(', ')[1].slice(0, -1)}11 2px, transparent 2px)`,
            backgroundSize: '20px 20px',
            opacity: isActive ? 0.15 : 0,
            transition: 'opacity 0.5s ease',
            zIndex: 0
          }}
        />
        
        {/* Curved decoration at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px', // Reduced from 80px
            background: gradient,
            opacity: isActive ? 0.1 : 0,
            transition: 'opacity 0.3s ease',
            clipPath: 'ellipse(50% 60% at 50% 100%)',
            zIndex: 0
          }}
        />
        
        {/* Decorative top bar with glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px', // Reduced from 8px
            background: gradient,
            opacity: isActive ? 1 : 0.3,
            transition: 'opacity 0.3s ease',
            boxShadow: isActive ? `0 0 15px 0 ${gradient.split(', ')[1].slice(0, -1)}66` : 'none'
          }}
        />
        
        {/* Step number with icon */}
        <motion.div 
          style={{
            width: '3.5rem', // Reduced from 5rem
            height: '3.5rem', // Reduced from 5rem
            borderRadius: '50%',
            background: gradient,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem', // Reduced from 1.75rem
            color: 'white',
            fontWeight: '700',
            fontSize: '1.5rem', // Reduced from 1.75rem
            boxShadow: `0 10px 20px -5px ${gradient.split(', ')[1].slice(0, -1)}40`,
            zIndex: 1,
            position: 'relative'
          }}
          animate={{ 
            scale: isActive ? [1, 1.1, 1] : 1,
            rotate: isActive ? [0, -5, 5, 0] : 0
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1],
            repeat: isActive ? 0 : 0,
            repeatDelay: 5
          }}
        >
          <span style={{ zIndex: 2, fontWeight: 'bold' }}>{number}</span>
          <motion.div 
            style={{ 
              position: 'absolute', 
              opacity: 0.2,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            animate={{ rotate: isActive ? 360 : 0 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {icons[number - 1]}
          </motion.div>
        </motion.div>
        
        {/* Title */}
        <h3 
          style={{
            fontSize: '1.2rem', // Reduced from 1.375rem
            fontWeight: '800',
            marginBottom: '0.6rem', // Reduced from 1rem
            color: '#111827',
            transition: 'color 0.3s ease',
            position: 'relative',
            zIndex: 1
          }}
        >
          {title}
          {isActive && (
            <div 
              style={{ 
                position: 'absolute', 
                bottom: '-3px', // Reduced from -5px
                left: '25%', 
                right: '25%', 
                height: '4px', // Reduced from 6px
                background: gradient,
                opacity: 0.2, 
                borderRadius: '2px',
                zIndex: -1
              }}
            />
          )}
        </h3>
        
        {/* Description - shortened */}
        <p
          style={{
            fontSize: '0.95rem', // Reduced from 1.05rem
            lineHeight: '1.6', // Reduced from 1.8
            color: isActive ? '#4b5563' : '#6b7280',
            transition: 'color 0.3s ease',
            position: 'relative',
            zIndex: 1,
            margin: '0 0 0.8rem' // Added margin bottom
          }}
        >
          {description}
        </p>
        
        {/* Action button */}
        <motion.div
          style={{
            marginTop: 'auto',
            paddingTop: '0.8rem' // Reduced from 1.5rem
          }}
          animate={{ 
            y: isActive ? [5, 0] : 0,
            opacity: isActive ? 1 : 0.6
          }}
          transition={{ 
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          <div
            style={{
              padding: '0.5rem 1.25rem', // Reduced from 0.75rem 1.5rem
              borderRadius: '1.5rem', // Reduced from 2rem
              background: isActive ? gradient : 'rgba(229, 231, 235, 0.5)',
              color: isActive ? 'white' : '#6b7280',
              fontWeight: '600',
              fontSize: '0.85rem', // Reduced from 0.9rem
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              boxShadow: isActive ? `0 8px 12px -3px ${gradient.split(', ')[1].slice(0, -1)}30` : 'none'
            }}
          >
            <span>Learn More</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              style={{
                width: '0.85rem', // Reduced from 1rem
                height: '0.85rem' // Reduced from 1rem
              }}
            >
              <path 
                fillRule="evenodd" 
                d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  
  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => prev < 3 ? prev + 1 : 1);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Observe section for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Shortened descriptions
  const steps = [
    {
      number: 1,
      title: 'Input Building Data',
      description: 'Enter basic information about your building size, location, and current energy usage patterns.'
    },
    {
      number: 2,
      title: 'AI Analysis',
      description: 'Our algorithms analyze your data using Uganda-specific benchmarks and efficiency standards.'
    },
    {
      number: 3,
      title: 'Get Recommendations',
      description: 'Receive a detailed report with actionable recommendations to improve energy efficiency.'
    }
  ];

  return (
    <motion.section 
      id="how-it-works" 
      ref={sectionRef}
      style={{
        padding: '5rem 0', // Reduced from 9rem 0 7rem
        background: 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #e5e7eb 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background elements */}
      <motion.div 
        style={{
          position: 'absolute',
          width: '400px', // Reduced from 600px
          height: '400px', // Reduced from 600px
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22, 163, 74, 0.08) 0%, rgba(22, 163, 74, 0) 70%)',
          top: '-200px',
          left: '-100px',
          zIndex: 0,
        }}
        animate={{
          y: [0, -20, 0], // Reduced movement
          x: [0, 15, 0], // Reduced movement
          rotate: [0, 3, 0] // Reduced rotation
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        style={{
          position: 'absolute',
          width: '300px', // Reduced from 400px
          height: '300px', // Reduced from 400px
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(16, 185, 129, 0) 70%)',
          bottom: '-150px',
          right: '-50px',
          zIndex: 0,
        }}
        animate={{
          y: [0, 20, 0], // Reduced movement
          x: [0, -15, 0], // Reduced movement
          rotate: [0, -3, 0] // Reduced rotation
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Decorative patterns - made smaller */}
      <div 
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '150px', // Reduced from 250px
          height: '150px', // Reduced from 250px
          opacity: 0.3,
          background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2316a34a\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 0,
          transform: 'rotate(15deg)'
        }}
      />
      
      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '8%',
          width: '100px', // Reduced from 150px
          height: '100px', // Reduced from 150px
          opacity: 0.2,
          background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0h4v4H0V0zm8 0h4v4H8V0zm8 0h4v4h-4V0zM0 8h4v4H0V8zm8 0h4v4H8V8zm8 0h4v4h-4V8zM0 16h4v4H0v-4zm8 0h4v4H8v-4zm8 0h4v4h-4v-4z\' fill=\'%233b82f6\' fill-opacity=\'0.25\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          zIndex: 0,
          transform: 'rotate(-10deg)'
        }}
      />
      
      <div 
        style={{
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          position: 'relative',
          zIndex: 10
        }}
      >
        <motion.div 
          style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }} // Reduced from 5rem
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span 
            style={{
              display: 'inline-block',
              padding: '0.4rem 1rem', // Reduced from 0.5rem 1.25rem
              borderRadius: '1.5rem', // Reduced from 2rem
              backgroundColor: 'rgba(22, 163, 74, 0.1)',
              color: 'rgb(22, 163, 74)',
              fontWeight: '600',
              fontSize: '0.8rem', // Reduced from 0.875rem
              marginBottom: '1rem', // Reduced from 1.25rem
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              boxShadow: '0 2px 8px rgba(22, 163, 74, 0.1)'
            }}
          >
            SIMPLE PROCESS
          </span>
          <h2 
            style={{
              fontSize: '2.25rem', // Reduced from 3rem
              lineHeight: '1.2',
              fontWeight: '800',
              marginBottom: '1.25rem', // Reduced from 1.75rem
              color: '#111827',
              letterSpacing: '-0.025em',
              position: 'relative',
              display: 'inline-block'
            }}
          >
            How It Works
            <div 
              style={{
                position: 'absolute',
                bottom: '0px',
                left: '25%',
                right: '25%',
                height: '4px', // Reduced from 6px
                background: 'linear-gradient(90deg, rgba(22, 163, 74, 0), rgba(22, 163, 74, 0.6), rgba(22, 163, 74, 0))',
                borderRadius: '2px'
              }}
            />
          </h2>
          <p
            style={{
              fontSize: '1.1rem', // Reduced from 1.25rem
              lineHeight: '1.6', // Reduced from 1.8
              color: '#4b5563',
              maxWidth: '42rem',
              margin: '0 auto'
            }}
          >
            Our streamlined process makes it easy to get actionable insights about your building's energy efficiency in just three simple steps.
          </p>
        </motion.div>
        
        <div 
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1.5rem', // Reduced from 2.5rem
            maxWidth: '1120px',
            margin: '0 auto'
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }} // Reduced from y: 30
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <StepCard 
                {...step}
                isActive={activeStep === step.number}
                onClick={() => setActiveStep(step.number)}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Step indicators */}
        <motion.div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '0.75rem', // Reduced from 1rem
            marginTop: '2rem' // Reduced from 3.5rem
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {steps.map(step => (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              style={{
                width: activeStep === step.number ? '2.5rem' : '1.5rem', // Reduced from 3.5rem/2.5rem
                height: '0.35rem', // Reduced from 0.5rem
                borderRadius: '0.125rem', // Reduced from 0.25rem
                backgroundColor: activeStep === step.number 
                  ? 'rgb(22, 163, 74)' 
                  : 'rgba(209, 213, 219, 0.8)',
                transition: 'all 0.3s ease',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                boxShadow: activeStep === step.number 
                  ? '0 2px 6px rgba(22, 163, 74, 0.3)' 
                  : 'none'
              }}
              aria-label={`Go to step ${step.number}`}
            />
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '2.5rem' // Reduced from 4rem
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            style={{
              padding: '0.75rem 2rem', // Reduced from 1rem 2.5rem
              borderRadius: '0.375rem', // Reduced from 0.5rem
              backgroundColor: 'rgb(22, 163, 74)',
              color: 'white',
              fontWeight: '600',
              fontSize: '1rem', // Reduced from 1.125rem
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(22, 163, 74, 0.25)', // Reduced shadow
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem' // Reduced from 0.75rem
            }}
            whileHover={{ 
              scale: 1.03, // Reduced from 1.05
              boxShadow: '0 12px 25px rgba(22, 163, 74, 0.35)' // Reduced shadow
            }}
            whileTap={{ scale: 0.97 }} // Reduced from 0.95
          >
            Get Started Now
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18"> {/* Reduced from 20 */}
              <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-15px) rotate(3deg); } /* Reduced movement */
          100% { transform: translateY(0) rotate(0); }
        }
        
        .visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </motion.section>
  );
};

export default HowItWorksSection;