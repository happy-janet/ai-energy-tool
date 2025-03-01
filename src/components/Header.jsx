// components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
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

  return (
    <header 
      style={{ 
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        flexWrap: 'wrap'
      }}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%' 
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/logo.png" 
            alt="AI Energy Assessment Tool Logo" 
            style={{ 
              width: '6rem', 
              height: 'auto',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }} 
          />
        </div>

        {/* Desktop Navigation - Only visible on desktop */}
        {!isMobile && (
          <nav 
            style={{ 
              display: 'flex',
              gap: '2rem', 
              color: 'rgb(55, 65, 81)',
              fontWeight: '500'
            }}
          >
            {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase()}`} 
                style={{ 
                  color: isHovered === index ? 'rgb(22, 163, 74)' : 'rgb(55, 65, 81)',
                  transition: 'color 0.3s ease, transform 0.3s ease',
                  transform: isHovered === index ? 'translateY(-2px)' : 'none',
                  position: 'relative',
                  padding: '0.5rem 0',
                  fontWeight: 500,
                  textDecoration: 'none'
                }}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {item}
                <span style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: isHovered === index ? '100%' : '0%',
                  height: '2px',
                  backgroundColor: 'rgb(22, 163, 74)',
                  transition: 'width 0.3s ease'
                }}></span>
              </a>
            ))}
          </nav>
        )}

        {/* Sign In Button for Desktop or Mobile (when menu closed) */}
        {(!isMobile || !menuOpen) && (
          <button 
            style={{ 
              background: 'linear-gradient(135deg, rgb(22, 163, 74), rgb(21, 128, 61))',
              color: 'white',
              padding: '0.625rem 1.25rem',
              borderRadius: '0.5rem',
              border: 'none',
              boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.2), 0 2px 4px -2px rgba(22, 163, 74, 0.1)',
              transition: 'all 0.3s ease',
              fontWeight: '500',
              letterSpacing: '0.025em',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 10px -1px rgba(22, 163, 74, 0.3), 0 4px 6px -2px rgba(22, 163, 74, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px -1px rgba(22, 163, 74, 0.2), 0 2px 4px -2px rgba(22, 163, 74, 0.1)';
            }}
          >
            Sign In
          </button>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem'
            }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'rgb(55, 65, 81)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></div>
            <div style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'rgb(55, 65, 81)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></div>
            <div style={{
              width: '24px',
              height: '3px',
              backgroundColor: 'rgb(55, 65, 81)',
              margin: '5px 0',
              transition: 'all 0.3s ease'
            }}></div>
          </button>
        )}
      </div>

      {/* Mobile Navigation - Only visible when menu is open */}
      {isMobile && menuOpen && (
        <nav 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '1.5rem 0',
            gap: '1.5rem',
            borderTop: '1px solid rgba(229, 231, 235, 0.5)',
            marginTop: '1rem'
          }}
        >
          {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase()}`} 
              style={{ 
                color: isHovered === index ? 'rgb(22, 163, 74)' : 'rgb(55, 65, 81)',
                transition: 'color 0.3s ease, transform 0.3s ease',
                transform: isHovered === index ? 'translateY(-2px)' : 'none',
                position: 'relative',
                padding: '0.5rem 0',
                fontWeight: 500,
                textDecoration: 'none',
                fontSize: '1.125rem'
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => setMenuOpen(false)}
            >
              {item}
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: isHovered === index ? '100%' : '0%',
                height: '2px',
                backgroundColor: 'rgb(22, 163, 74)',
                transition: 'width 0.3s ease'
              }}></span>
            </a>
          ))}
          
          {/* Sign In Button in Mobile Menu */}
          <button 
            style={{ 
              background: 'linear-gradient(135deg, rgb(22, 163, 74), rgb(21, 128, 61))',
              color: 'white',
              padding: '0.625rem 1.25rem',
              borderRadius: '0.5rem',
              border: 'none',
              boxShadow: '0 4px 6px -1px rgba(22, 163, 74, 0.2), 0 2px 4px -2px rgba(22, 163, 74, 0.1)',
              transition: 'all 0.3s ease',
              fontWeight: '500',
              letterSpacing: '0.025em',
              cursor: 'pointer',
              marginTop: '0.5rem',
              width: '80%',
              maxWidth: '200px'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 10px -1px rgba(22, 163, 74, 0.3), 0 4px 6px -2px rgba(22, 163, 74, 0.2)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 6px -1px rgba(22, 163, 74, 0.2), 0 2px 4px -2px rgba(22, 163, 74, 0.1)';
            }}
          >
            Sign In
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;