// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <p className="mb-2">Contact Us:</p>
            <p>Email: info@energytool.com</p>
            <p>Phone: +256 123 456 789</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm">&copy; 2025 AI Energy Tool. All rights reserved.</p>
            <p className="text-sm">Powered by AI and real Ugandan energy data for accurate assessments.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;