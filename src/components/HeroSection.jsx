// components/HeroSection.js
import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-cover bg-center h-screen flex items-center justify-center relative"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">AI-Powered Building Energy Assessment Tool</h1>
        <p className="text-lg md:text-xl mb-8">Assess your building's energy efficiency using advanced AI and Ugandan data.</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;