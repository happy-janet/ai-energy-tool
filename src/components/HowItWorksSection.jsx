// components/HowItWorksSection.js
import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    { icon: '/icons/step-1.svg', title: 'Sign Up & Log In', description: 'Create an account to access the tool.' },
    { icon: '/icons/step-2.svg', title: 'Enter Building Details', description: 'Input details about your building.' },
    { icon: '/icons/step-3.svg', title: 'Get Your Energy Report', description: 'Receive actionable insights to improve efficiency.' },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={step.icon} alt={step.title} className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;