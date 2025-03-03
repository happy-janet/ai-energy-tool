// components/Header.js
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
        transition: 'all 0.3s ease'
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img 
          src="/logo.png" 
          alt="Logo" 
          style={{ 
            width: '10rem', 
            height: '5rem', 
            borderRadius: '50%', 
            objectFit: 'cover',
            boxShadow: '0 6px 12px rgba(0,0,0,0.4)',
            transform: 'scale(1.15)',
            transition: 'all 0.3s ease'
          }} 
        />
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <nav style={{ display: 'flex', gap: '2rem', color: 'rgb(55, 65, 81)', fontWeight: '500' }}>
          {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase()}`} 
              style={{ 
                color: 'rgb(55, 65, 81)',
                transition: 'color 0.3s ease, transform 0.3s ease',
                position: 'relative',
                padding: '0.5rem 1.5rem',
                fontWeight: 500,
                textDecoration: 'none',
                borderRadius: '8px',
                border: '2px solid transparent',
                background: 'rgba(22, 163, 74, 0.05)',
                boxShadow: '0 2px 5px rgba(22, 163, 74, 0.2)',
                display: 'inline-block',
                borderTop: '2px solid rgba(22, 163, 74, 0.8)',
                borderBottom: '2px solid rgba(22, 163, 74, 0.8)',
                borderLeft: '2px solid transparent',
                borderRight: '2px solid transparent'
              }}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}

      {/* Sign In Button */}
      {!isMobile && (
        <button 
          style={{
            backgroundColor: 'rgb(22, 163, 74)',
            color: 'white',
            padding: '0.8rem 1.5rem',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            cursor: 'pointer',
            transition: 'background 0.3s ease, box-shadow 0.3s ease',
            boxShadow: '0 6px 12px rgba(22, 163, 74, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgb(16, 122, 58)';
            e.target.style.boxShadow = '0 8px 16px rgba(16, 122, 58, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgb(22, 163, 74)';
            e.target.style.boxShadow = '0 6px 12px rgba(22, 163, 74, 0.4)';
          }}
        >
          Sign In
        </button>
      )}

      {/* Mobile Menu Toggle */}
      {isMobile && (
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent',
            border: 'none',
            fontSize: '2rem',
            cursor: 'pointer',
            color: 'rgb(55, 65, 81)',
          }}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && menuOpen && (
        <nav 
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            transition: 'all 0.3s ease'
          }}
        >
          {['Home', 'About', 'Features', 'Contact'].map((item, index) => (
            <a 
              key={index}
              href={`#${item.toLowerCase()}`} 
              style={{ 
                color: 'rgb(55, 65, 81)',
                padding: '1rem',
                fontWeight: 500,
                textDecoration: 'none',
                textAlign: 'center',
                borderBottom: '1px solid rgba(0,0,0,0.1)'
              }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;





