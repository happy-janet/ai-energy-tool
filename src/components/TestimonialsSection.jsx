// components/TestimonialsSection.js
import React from 'react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"This tool has helped me save significant energy costs!"</p>
            <p className="font-semibold mt-2">- John Doe, Business Owner</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600">"Great partnership with Ugandan energy bodies!"</p>
            <p className="font-semibold mt-2">- Jane Smith, Energy Expert</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;