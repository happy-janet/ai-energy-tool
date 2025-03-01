// components/HowItWorksSection.js
import React, { useState, useEffect } from 'react';

const StepCard = ({ number, title, description, isActive, onClick }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isActive]);
  
  // Generate a unique gradient for each step
  const gradients = [
    'linear-gradient(135deg, #3b82f6, #60a5fa)',
    'linear-gradient(135deg, #10b981, #34d399)',
    'linear-gradient(135deg, #f59e0b, #fbbf24)',
  ];
  
  const gradient = gradients[(number - 1) % gradients.length];
  
  return (
    <div 
      className="relative"
      style={{
        flex: 1,
        minHeight: '280px'
      }}
      onClick={onClick}
    >
      <div 
        style={{
          position: 'relative',
          padding: '2.5rem 2rem',
          borderRadius: '1rem',
          backgroundColor: isActive ? 'white' : 'rgba(255, 255, 255, 0.7)',
          boxShadow: isActive 
            ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
          transform: isActive ? 'translateY(-10px)' : 'none',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          border: isActive ? '1px solid rgba(22, 163, 74, 0.3)' : '1px solid transparent',
          overflow: 'hidden',
          background: isActive 
            ? `linear-gradient(to bottom, white 60%, ${gradient}22)`
            : 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(5px)'
        }}
      >
        {/* Decorative top bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            background: gradient,
            opacity: isActive ? 1 : 0.5,
            transition: 'opacity 0.3s ease'
          }}
        />
        
        {/* Step number */}
        <div 
          style={{
            width: '3.5rem',
            height: '3.5rem',
            borderRadius: '50%',
            background: isActive ? gradient : 'rgba(229, 231, 235, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            color: 'white',
            fontWeight: '700',
            fontSize: '1.5rem',
            boxShadow: isActive 
              ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)'
              : 'none',
            transition: 'all 0.3s ease',
            transform: isAnimating ? 'scale(1.2)' : 'scale(1)'
          }}
        >
          {number}
        </div>
        
        {/* Title */}
        <h3 
          style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: isActive ? '#111827' : '#374151',
            transition: 'color 0.3s ease'
          }}
        >
          {title}
        </h3>
        
        {/* Description */}
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: isActive ? '#4b5563' : '#6b7280',
            transition: 'color 0.3s ease'
          }}
        >
          {description}
        </p>
        
        {/* Decorative icon */}
        <div
          style={{
            marginTop: '1.5rem',
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            background: isActive ? 'rgba(22, 163, 74, 0.1)' : 'rgba(229, 231, 235, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            style={{
              width: '1.25rem',
              height: '1.25rem',
              color: isActive ? 'rgb(22, 163, 74)' : '#9ca3af',
              transition: 'color 0.3s ease'
            }}
          >
            <path 
              fillRule="evenodd" 
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" 
              clipRule="evenodd" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  
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
  
  const steps = [
    {
      number: 1,
      title: 'Input Building Data',
      description: 'Enter basic information about your building including size, location, and current energy usage patterns.'
    },
    {
      number: 2,
      title: 'AI Analysis',
      description: 'Our advanced algorithms analyze your data using Uganda-specific benchmarks and energy efficiency standards.'
    },
    {
      number: 3,
      title: 'Get Recommendations',
      description: 'Receive a detailed report with actionable recommendations to improve energy efficiency and reduce costs.'
    }
  ];

  return (
    <section 
      id="how-it-works" 
      style={{
        padding: '7rem 0',
        background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Animated background elements */}
      <div 
        style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(22, 163, 74, 0.1) 0%, rgba(22, 163, 74, 0) 70%)',
          top: '-250px',
          left: '-100px',
          zIndex: 0,
          animation: 'float 15s ease-in-out infinite'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0) 70%)',
          bottom: '-150px',
          right: '-50px',
          zIndex: 0,
          animation: 'float 20s ease-in-out infinite reverse'
        }}
      />
      
      {/* Decorative patterns */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          opacity: 0.4,
          background: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%2316a34a\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3C/g%3E%3C/svg%3E")',
          zIndex: 0
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
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <span 
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              backgroundColor: 'rgba(22, 163, 74, 0.1)',
              color: 'rgb(22, 163, 74)',
              fontWeight: '600',
              fontSize: '0.875rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            SIMPLE PROCESS
          </span>
          <h2 
            style={{
              fontSize: '2.5rem',
              lineHeight: '1.2',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#111827',
              letterSpacing: '-0.025em'
            }}
          >
            How It Works
          </h2>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.7',
              color: '#4b5563',
              maxWidth: '42rem',
              margin: '0 auto'
            }}
          >
            Our streamlined process makes it easy to get actionable insights about your building's energy efficiency in just three simple steps.
          </p>
        </div>
        
        <div 
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '2rem',
            maxWidth: '1024px',
            margin: '0 auto'
          }}
        >
          {steps.map(step => (
            <StepCard 
              key={step.number}
              {...step}
              isActive={activeStep === step.number}
              onClick={() => setActiveStep(step.number)}
            />
          ))}
        </div>
        
        {/* Step indicators */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.75rem',
          marginTop: '2.5rem' 
        }}>
          {steps.map(step => (
            <button
              key={step.number}
              onClick={() => setActiveStep(step.number)}
              style={{
                width: '3rem',
                height: '0.25rem',
                borderRadius: '0.125rem',
                backgroundColor: activeStep === step.number ? 'rgb(22, 163, 74)' : 'rgba(209, 213, 219, 0.8)',
                transition: 'background-color 0.3s ease',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}
              aria-label={`Go to step ${step.number}`}
            />
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0); }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;