// components/FeaturesSection.js
import React, { useState, useEffect } from 'react';

const FeatureCard = ({ image, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const colors = [
    { bg: '#3b82f6', secondaryBg: '#60a5fa', textColor: 'white' },
    { bg: '#10b981', secondaryBg: '#34d399', textColor: 'white' },
    { bg: '#f59e0b', secondaryBg: '#fbbf24', textColor: 'white' },
    { bg: '#8b5cf6', secondaryBg: '#a78bfa', textColor: 'white' }
  ];
  
  const color = colors[index % colors.length];
  
  return (
    <div 
      style={{
        position: 'relative',
        borderRadius: '1rem',
        overflow: 'hidden',
        height: '100%',
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        transform: isHovered ? 'translateY(-10px)' : 'none',
        transition: 'all 0.3s ease',
        background: `linear-gradient(to bottom, ${color.bg}22, ${color.secondaryBg}33)`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: `linear-gradient(135deg, ${color.bg}, ${color.secondaryBg})`,
          zIndex: 0,
          transition: 'all 0.3s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '2rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div 
          style={{
            width: '5rem',
            height: '5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
            overflow: 'hidden'
          }}
        >
          <img 
            src={image} 
            alt={`${title} feature illustration`} 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'all 0.3s ease',
              transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />
        </div>
        
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.7)', 
          backdropFilter: 'blur(5px)',
          borderRadius: '1rem', 
          padding: '1.5rem', 
          flex: 1,
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.05)'
        }}>
          <h3 
            style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              marginBottom: '0.75rem',
              color: color.bg
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: '#4b5563'
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const FeaturesSection = () => {
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

  const features = [
    {
      image: '/ai-analysis.png',
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze your building data to provide accurate energy assessments tailored to your specific needs.'
    },
    {
      image: '/reports.png',
      title: 'Detailed Reports',
      description: 'Receive comprehensive reports with visualizations and actionable insights to understand your building energy performance.'
    },
    {
      image: '/uganda.png',
      title: 'Uganda-Specific Data',
      description: 'Our system is tailored for Ugandan buildings with local climate data, building standards, and energy regulations.'
    },
    {
      image: '/cost.png',
      title: 'Cost Savings Calculator',
      description: 'Estimate potential cost savings from implementing energy efficiency improvements with our advanced ROI calculator.'
    }
  ];

  return (
    <section 
      id="features" 
      style={{
        padding: isMobile ? '4rem 0' : '6rem 0',
        background: 'linear-gradient(to bottom, white, #f9fafb)'
      }}
    >
      <div 
        style={{
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem'
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
          <div 
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
            Powerful Features
          </div>
          <h2 
            style={{
              fontSize: isMobile ? '1.875rem' : '2.5rem',
              lineHeight: '1.2',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#111827',
              letterSpacing: '-0.025em'
            }}
          >
            Smart Energy Solutions for Your Building
          </h2>
          <p
            style={{
              fontSize: isMobile ? '1rem' : '1.125rem',
              lineHeight: '1.7',
              color: '#4b5563',
              maxWidth: '42rem',
              margin: '0 auto'
            }}
          >
            Our AI-powered platform offers a comprehensive suite of tools to analyze, optimize, and improve your building's energy efficiency.
          </p>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
          gap: '2rem'
        }}>
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              index={index}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;