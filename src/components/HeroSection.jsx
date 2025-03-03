import React, { useEffect, useState } from 'react';
import AssessmentModal from './AssessmentModal';
import Particles from 'react-tsparticles'; // Add this for particle effects

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

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

    // Set loaded to true after a short delay to trigger animations
    setTimeout(() => setLoaded(true), 300);

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
        perspective: '1000px', // Add perspective for 3D effects
      }}
    >
      {/* Background with parallax effect - increased brightness */}
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
          filter: 'brightness(0.85) contrast(1.1)', // Brighter and more contrast
          transform: `scale(${1 + scrolled * 0.1})`, 
          transition: 'transform 0.5s ease-out',
        }}
      ></div>

      {/* Overlay gradient - lighter to show more background */}
      <div
        className="absolute inset-0"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0, 24, 82, 0.5), rgba(4, 70, 50, 0.5))',
          mixBlendMode: 'multiply',
        }}
      ></div>
      
      {/* Add light rays effect */}
      <div className="light-rays"></div>

      {/* Particle effects - changed to green theme */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: false,
          particles: {
            number: { value: 80 },
            size: { value: 3 },
            move: {
              speed: 2,
              direction: 'none',
              outModes: 'bounce',
              enable: true,
            },
            color: { value: ['#ffffff', '#a7f3d0', '#34d399', '#10b981'] }, // Green theme
            opacity: {
              value: 0.6,
              animation: { enable: true, speed: 1, minimumValue: 0.3 },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#34d399",
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
          },
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      />

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
        {/* Title with 3D effect and text-stroke for visibility */}
        <div className="title-container">
          <h1 className="animated-title">
            <span className="title-word">AI-Powered</span>
            <span className="title-word">Building</span>
            <span className="title-word">Energy</span>
            <span className="title-word">Assessment</span>
            <span className="title-word">Tool</span>
          </h1>
        </div>
        
        <p
          className="text-lg md:text-xl mb-8 animated-text"
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            lineHeight: 1.6,
            marginBottom: '2.5rem',
            maxWidth: '42rem',
            margin: '0 auto 2.5rem',
          }}
        >
          Assess your building's energy efficiency using advanced AI and Ugandan data.
        </p>
        
        <button
          className="get-started-btn"
          onClick={() => setModalOpen(true)}
        >
          Get Started
        </button>
      </div>

      {/* Assessment Modal */}
      <AssessmentModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <style jsx>{`
        .light-rays {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }
        
        .title-container {
          margin-bottom: 2rem;
          perspective: 1000px;
          transform-style: preserve-3d;
        }
        
        .animated-title {
          font-size: ${isMobile ? 'clamp(2rem, 5vw, 3rem)' : 'clamp(2.5rem, 5vw, 4rem)'};
          font-weight: 900;
          line-height: 1.1;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 1.5rem;
        }
        
        .title-word {
          display: inline-block;
          margin: 0 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(90deg, rgba(22, 163, 74, 0.8), rgba(22, 163, 74, 1), rgba(22, 163, 74, 0.8));
          background-size: 200% auto;
          color: white;
          font-weight: 900;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(22, 163, 74, 0.5), inset 0 0 10px rgba(255, 255, 255, 0.3);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          animation: pulse 2s ease infinite, moveInSpace 3s ease infinite alternate;
          transform-style: preserve-3d;
          transform: translateZ(0);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(50px) rotateX(-10deg);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .title-word:nth-child(1) { animation-delay: 0.1s; }
        .title-word:nth-child(2) { animation-delay: 0.3s; }
        .title-word:nth-child(3) { animation-delay: 0.5s; }
        .title-word:nth-child(4) { animation-delay: 0.7s; }
        .title-word:nth-child(5) { animation-delay: 0.9s; }
        
        .title-word:hover {
          transform: scale(1.1) translateZ(30px) rotateY(5deg);
          box-shadow: 0 0 30px rgba(22, 163, 74, 0.8), inset 0 0 15px rgba(255, 255, 255, 0.5);
          cursor: default;
        }
        
        @keyframes pulse {
          0% {
            background-position: 0% center;
          }
          50% {
            background-position: 100% center;
          }
          100% {
            background-position: 0% center;
          }
        }
        
        @keyframes moveInSpace {
          0% {
            transform: translateZ(0) translateY(0);
          }
          50% {
            transform: translateZ(20px) translateY(-10px);
          }
          100% {
            transform: translateZ(0) translateY(0);
          }
        }
        
        .animated-text {
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
          animation: fadeUp 1.5s ease forwards;
          opacity: 0;
          transform: translateY(20px);
          animation-delay: 1.2s;
          background: rgba(0, 0, 0, 0.2);
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(4px);
        }
        
        .get-started-btn {
          background: linear-gradient(45deg, rgba(22, 163, 74, 0.9), rgba(16, 185, 129, 0.9));
          color: white;
          padding: 1rem 2.5rem;
          border-radius: 30px;
          font-weight: 700;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: none;
          box-shadow: 0 10px 25px rgba(22, 163, 74, 0.5);
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: bounceIn 1s ease forwards;
          opacity: 0;
          transform: scale(0.8);
          animation-delay: 1.5s;
        }
        
        .get-started-btn:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: 0.5s;
        }
        
        .get-started-btn:hover {
          transform: scale(1.05) translateY(-3px);
          box-shadow: 0 15px 30px rgba(22, 163, 74, 0.7);
        }
        
        .get-started-btn:hover:before {
          left: 100%;
        }
        
        .get-started-btn:active {
          transform: scale(0.95) translateY(2px);
        }
        
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          70% {
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        /* Add animations for the loaded state */
        ${loaded ? `
          .title-word {
            animation: wordAppear 0.7s cubic-bezier(0.2, 0.6, 0.35, 1) forwards, moveInSpace 3s ease infinite alternate;
          }
          
          @keyframes wordAppear {
            0% {
              opacity: 0;
              transform: translateY(50px) rotateX(-10deg);
            }
            100% {
              opacity: 1;
              transform: translateY(0) rotateX(0);
            }
          }
        ` : ''}
      `}</style>
    </section>
  );
};

export default HeroSection;