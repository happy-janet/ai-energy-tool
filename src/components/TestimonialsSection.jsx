// components/TestimonialsSection.js
import React, { useState, useEffect, useRef } from 'react';

const TestimonialCard = ({ image, name, role, quote, isActive, isNext, isPrev }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '1rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.6s ease',
        transform: isActive 
          ? 'scale(1) translateX(0)' 
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
        border: '1px solid rgba(229, 231, 235, 0.7)',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
              color: 'rgba(22, 163, 74, 0.1)',
              fontFamily: 'Georgia, serif',
              lineHeight: 1
            }}
          >
            "
          </span>
          <p 
            style={{
              fontSize: '1rem',
              lineHeight: '1.6',
              color: 'rgb(55, 65, 81)',
              position: 'relative',
              zIndex: 1,
              fontStyle: 'italic'
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
          borderTop: '1px solid rgba(229, 231, 235, 0.7)'
        }}
      >
        <img 
          src={image} 
          alt={`${name}, ${role}`} 
          loading="lazy"
          style={{
            width: '3rem',
            height: '3rem',
            borderRadius: '9999px',
            marginRight: '0.75rem',
            objectFit: 'cover',
            border: '2px solid rgb(22, 163, 74)',
            boxShadow: '0 0 0 2px rgba(22, 163, 74, 0.2)'
          }}
        />
        <div>
          <h4 
            style={{
              fontWeight: '700',
              fontSize: '1rem',
              color: 'rgb(17, 24, 39)'
            }}
          >
            {name}
          </h4>
          <p 
            style={{
              fontSize: '0.75rem',
              color: 'rgb(22, 163, 74)'
            }}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef(null);
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
        background: 'linear-gradient(to bottom, white, #f9fafb)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div 
        style={{
          maxWidth: '1280px',
          marginLeft: 'auto',
          marginRight: 'auto',
          position: 'relative',
          zIndex: 10
        }}
      >
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
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
            SUCCESS STORIES
          </span>
          <h2 
            style={{
              fontSize: isMobile ? '1.75rem' : '2.25rem',
              lineHeight: '1.2',
              fontWeight: '800',
              marginBottom: '1.5rem',
              color: '#111827',
              letterSpacing: '-0.025em'
            }}
          >
            What Our Users Say
          </h2>
          <p
            style={{
              fontSize: isMobile ? '0.875rem' : '1rem',
              lineHeight: '1.7',
              color: '#4b5563',
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