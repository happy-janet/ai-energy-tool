// components/TestimonialsSection.js
import React, { useState, useEffect, useRef } from 'react';

const TestimonialCard = ({ image, name, role, quote, isActive, isNext, isPrev }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a unique color for each testimonial based on name
  const getColorFromName = (name) => {
    const colors = [
      { primary: '#3b82f6', secondary: '#60a5fa', accent: '#1d4ed8' }, // Blue
      { primary: '#10b981', secondary: '#34d399', accent: '#047857' }, // Green
      { primary: '#f59e0b', secondary: '#fbbf24', accent: '#b45309' }, // Amber
      { primary: '#8b5cf6', secondary: '#a78bfa', accent: '#6d28d9' }  // Purple
    ];
    
    // Simple hash function to get consistent color for each name
    const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };
  
  const colors = getColorFromName(name);
  
  return (
    <div 
      style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: isActive && isHovered 
          ? `0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px ${colors.primary}30`
          : isActive 
            ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)'
            : '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        transition: 'all 0.6s ease',
        transform: isActive 
          ? isHovered ? 'scale(1.02) translateX(0)' : 'scale(1) translateX(0)' 
          : isNext 
            ? 'scale(0.85) translateX(50%)' 
            : isPrev 
              ? 'scale(0.85) translateX(-50%)' 
              : 'scale(0.7) translateX(0)',
        opacity: isActive ? 1 : 0.5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: isActive ? 3 : isNext || isPrev ? 2 : 1,
        pointerEvents: isActive ? 'auto' : 'none',
        border: isActive 
          ? isHovered 
            ? `1px solid ${colors.primary}40` 
            : '1px solid rgba(229, 231, 235, 0.9)'
          : '1px solid rgba(229, 231, 235, 0.7)',
        display: 'flex',
        flexDirection: 'column',
        background: isActive && isHovered 
          ? `linear-gradient(to bottom right, white, ${colors.secondary}10)` 
          : 'white',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative top accent */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          opacity: isActive ? 1 : 0.3,
          transition: 'opacity 0.3s ease'
        }}
      />
      
      <div style={{ flex: 1 }}>
        <div 
          style={{
            position: 'relative',
            marginBottom: '1.5rem'
          }}
        >
          <span 
            style={{
              position: 'absolute',
              top: '-1.5rem',
              left: '-0.5rem',
              fontSize: '4rem',
              color: isActive ? `${colors.primary}20` : 'rgba(22, 163, 74, 0.1)',
              fontFamily: 'Georgia, serif',
              lineHeight: 1,
              transition: 'color 0.3s ease'
            }}
          >
            "
          </span>
          <p 
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: isActive && isHovered ? '#111827' : 'rgb(55, 65, 81)',
              position: 'relative',
              zIndex: 1,
              fontStyle: 'italic',
              transition: 'color 0.3s ease'
            }}
          >
            {quote}
          </p>
        </div>
      </div>
      
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: 'auto',
          paddingTop: '1rem',
          borderTop: `1px solid ${isActive && isHovered ? `${colors.secondary}30` : 'rgba(229, 231, 235, 0.7)'}`
        }}
      >
        <div
          style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '9999px',
            marginRight: '0.75rem',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: isActive 
              ? `0 0 0 2px ${colors.primary}, 0 0 0 4px ${colors.primary}30`
              : '0 0 0 2px rgb(22, 163, 74), 0 0 0 4px rgba(22, 163, 74, 0.2)',
            transition: 'all 0.3s ease',
            transform: isActive && isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        >
          <img 
            src={image} 
            alt={`${name}, ${role}`} 
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.5s ease',
              transform: isActive && isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
          />
        </div>
        <div>
          <h4 
            style={{
              fontWeight: '700',
              fontSize: '1rem',
              color: isActive && isHovered ? colors.accent : 'rgb(17, 24, 39)',
              transition: 'color 0.3s ease'
            }}
          >
            {name}
          </h4>
          <p 
            style={{
              fontSize: '0.75rem',
              color: isActive ? colors.primary : 'rgb(22, 163, 74)',
              transition: 'color 0.3s ease'
            }}
          >
            {role}
          </p>
        </div>
      </div>
      
      {/* Decorative corner accent */}
      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: '10px',
            right: '10px',
            width: '40px',
            height: '40px',
            opacity: isHovered ? 0.15 : 0.05,
            transition: 'opacity 0.3s ease',
            background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`
          }}
        />
      )}
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(localStorage.getItem('darkMode') === 'true' || prefersDarkMode);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const testimonials = [
    {
      image: "/janet.png",
      name: "Sarah Nakato",
      role: "Facility Manager, Kampala Heights",
      quote: "The AI Energy Assessment Tool has helped us reduce our energy costs by 32% in just six months. The recommendations were practical and tailored specifically to our building in Kampala."
    },
    {
      image: "/julius.png",
      name: "David Okello",
      role: "Principal Architect, Entebbe Design Group",
      quote: "As an architect, I've been using this tool to optimize my designs for energy efficiency. The Uganda-specific data makes it much more accurate than other tools I've tried."
    },
    {
      image: "/scovia.png",
      name: "Grace Auma",
      role: "Sustainability Director, Jinja Eco Resorts",
      quote: "We've implemented the recommendations from this tool across our five properties, resulting in significant energy savings and a reduced carbon footprint. The ROI calculator was spot on!"
    },
    {
      image: "/val.png",
      name: "Robert Kigongo",
      role: "Property Developer, Mbarara Investments",
      quote: "This tool has become essential for all our new developments. It helps us meet Uganda's energy efficiency standards while maximizing returns for our investors."
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="testimonials" 
      style={{
        padding: isMobile ? '3rem 1rem' : '6rem 2rem',
        background: isDarkMode 
          ? 'linear-gradient(to bottom, #1f2937, #111827)'
          : 'linear-gradient(to bottom, white, #f9fafb)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Uganda-inspired background patterns */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url('/uganda-pattern.svg')`,
          backgroundSize: '400px',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      {/* Decorative elements inspired by Ugandan crafts */}
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          right: '5%',
          width: '150px',
          height: '150px',
          opacity: 0.05,
          backgroundImage: `url('/uganda-craft.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      <div 
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '5%',
          width: '120px',
          height: '120px',
          opacity: 0.05,
          backgroundImage: `url('/uganda-symbol.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          zIndex: 1
        }}
      />
      
      <div 
        style={{
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        {/* Dark mode toggle */}
        <button
          onClick={() => {
            const newMode = !isDarkMode;
            setIsDarkMode(newMode);
            localStorage.setItem('darkMode', newMode);
          }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.5rem',
            borderRadius: '9999px',
            color: isDarkMode ? 'white' : '#4b5563',
            zIndex: 20
          }}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          )}
        </button>

        <div style={{ 
          textAlign: 'center', 
          maxWidth: '800px', 
          margin: '0 auto 3rem',
          color: isDarkMode ? 'white' : 'inherit'
        }}>
          <span 
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '2rem',
              backgroundColor: isDarkMode ? 'rgba(22, 163, 74, 0.2)' : 'rgba(22, 163, 74, 0.1)',
              color: isDarkMode ? '#4ade80' : 'rgb(22, 163, 74)',
              fontWeight: '600',
              fontSize: '0.875rem',
              marginBottom: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}
          >
            SUCCESS STORIES
          </span>
          <h2 
            style={{
              fontSize: isMobile ? '1.75rem' : '2.25rem',
              lineHeight: '1.2',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: isDarkMode ? 'white' : '#111827',
              letterSpacing: '-0.025em'
            }}
          >
            What Our Users Say
          </h2>
          <p
            style={{
              fontSize: isMobile ? '0.875rem' : '1rem',
              lineHeight: '1.7',
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              maxWidth: '42rem',
              margin: '0 auto'
            }}
          >
            Hear from building owners, architects, and facility managers who have transformed their energy efficiency with our AI-powered tool.
          </p>
        </div>

        {/* Carousel container */}
        <div 
          style={{ 
            position: 'relative', 
            height: isMobile ? '350px' : '300px', 
            maxWidth: isMobile ? '100%' : '800px', 
            margin: '0 auto 2rem'
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              image={testimonial.image}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              isActive={index === activeIndex}
              isNext={index === (activeIndex + 1) % testimonials.length}
              isPrev={index === (activeIndex - 1 + testimonials.length) % testimonials.length}
            />
          ))}
          
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '-40px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  border: '1px solid rgb(229, 231, 235)',
                  borderRadius: '9999px',
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  zIndex: 10
                }}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '-40px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  border: '1px solid rgb(229, 231, 235)',
                  borderRadius: '9999px',
                  width: '2.5rem',
                  height: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  zIndex: 10
                }}
                aria-label="Next testimonial"
              >
                →
              </button>
            </>
          )}
        </div>
        
        {/* Testimonial indicators */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.5rem',
          marginTop: '1rem' 
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setActiveIndex(index);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              style={{
                width: index === activeIndex ? '1.5rem' : '0.5rem',
                height: '0.5rem',
                borderRadius: '9999px',
                backgroundColor: index === activeIndex ? 'rgb(22, 163, 74)' : 'rgb(209, 213, 219)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;