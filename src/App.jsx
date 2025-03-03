// src/App.jsx
import React, { useContext } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';

// Dark mode styles
import './darkMode.css';

const AppContent = () => {
  const { isDarkMode } = useContext(ThemeContext);
  
  return (
    <div 
      className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}
      style={{ 
        background: isDarkMode 
          ? 'linear-gradient(to bottom, #111827, #1f2937)' 
          : 'linear-gradient(to bottom, #f9fafb, #f3f4f6)',
        minHeight: '100vh',
        overflowX: 'hidden',
        color: isDarkMode ? '#f9fafb' : 'inherit',
        transition: 'background 0.3s ease, color 0.3s ease'
      }}
    >
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;