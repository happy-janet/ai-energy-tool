// components/FeaturesSection.js
import React from 'react';

const FeaturesSection = () => {
  const features = [
    { icon: '/icons/ai.svg', title: 'Smart AI Analysis', description: 'Predict your building’s energy performance effortlessly.' },
    { icon: '/icons/data.svg', title: 'Uganda-Specific Data', description: 'Tailored insights based on Uganda’s energy standards.' },
    { icon: '/icons/report.svg', title: 'Detailed Reports', description: 'Receive professional recommendations and energy-saving tips.' },
    { icon: '/icons/user-friendly.svg', title: 'User-Friendly Experience', description: 'Simple, intuitive interface for easy assessments.' },
  ];

  return (
    <section id="features" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src={feature.icon} alt={feature.title} className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;