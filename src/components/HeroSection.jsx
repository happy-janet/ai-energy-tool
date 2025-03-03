import React, { useEffect, useState } from 'react';
import AssessmentModal from './AssessmentModal';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = window.innerHeight;
      const scrollFraction = Math.min(scrollTop / maxScroll, 1);
      setScrolled(scrollFraction);
    };

    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background with parallax effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage:
            "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: `center ${scrolled * 20}%`,
          filter: 'brightness(0.7)',
          transform: `scale(${1 + scrolled * 0.1})`,
          transition: 'transform 0.5s ease-out',
        }}
      ></div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-green-900/70"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8), rgba(4, 120, 87, 0.8))',
          mixBlendMode: 'multiply',
        }}
      ></div>

      {/* Dynamic animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(255,255,255,${Math.random() * 0.3}), rgba(255,255,255,0))`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `translateY(${scrolled * (i % 2 === 0 ? 100 : -100)}px) rotate(${Math.random() * 360}deg) scale(${1 + Math.sin(scrolled * Math.PI)})`,
              transition: 'transform 0.5s ease-out',
              opacity: 0.7,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="z-10 text-center text-white px-6 max-w-5xl mx-auto"
        style={{
          zIndex: 10,
          textAlign: 'center',
          color: 'white',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          maxWidth: '64rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          transform: `translateY(${scrolled * -50}px)`,
          opacity: 1 - scrolled * 0.8,
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
        }}
      >
        <h1
          className="text-4xl md:text-6xl font-bold mb-6"
          style={{
            fontSize: isMobile ? 'clamp(2rem, 5vw, 3rem)' : 'clamp(2.5rem, 5vw, 4rem)',
            lineHeight: 1.1,
            fontWeight: 800,
            marginBottom: '1.5rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            letterSpacing: '-0.02em',
            animation: 'typing 3s steps(40, end), blink-caret 0.75s step-end infinite',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(to right, #ffffff, #a5f3fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI-Powered Building Energy Assessment Tool
          </span>
        </h1>
        <p
          className="text-lg md:text-xl mb-8"
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            maxWidth: '42rem',
            margin: '0 auto 2.5rem',
            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
            color: 'rgba(255, 255, 255, 0.9)',
            animation: 'fadeIn 2s ease-in-out',
          }}
        >
          Assess your building's energy efficiency using advanced AI and Ugandan data.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <button
            className="bg-green-600 text-white px-8 py-4 rounded-md hover:bg-green-700 transition"
            style={{
              background: 'linear-gradient(135deg, rgb(22, 163, 74), rgb(21, 128, 61))',
              color: 'white',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              fontWeight: '600',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease',
              border: 'none',
              fontSize: '1.125rem',
              cursor: 'pointer',
            }}
            onClick={() => setModalOpen(true)}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -4px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)';
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          opacity: 1 - scrolled * 2,
          transition: 'opacity 0.3s ease',
        }}
      >
        <span
          style={{
            color: 'white',
            marginBottom: '0.5rem',
            fontSize: '0.875rem',
            animation: 'fadeInOut 2s infinite',
          }}
        >
          Scroll to explore
        </span>
        <div
          style={{
            width: '30px',
            height: '50px',
            border: '2px solid white',
            borderRadius: '15px',
            display: 'flex',
            justifyContent: 'center',
            padding: '0.5rem 0',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: 'white',
              borderRadius: '2px',
              animation: 'scrollDown 1.5s infinite',
              marginTop: '5px',
            }}
          />
        </div>
      </div>

      {/* Assessment Modal */}
      <AssessmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes scrollDown {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: white;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;