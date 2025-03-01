// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#111827',
      color: 'white',
      padding: '4rem 0 2rem'
    }}>
      <div style={{
        maxWidth: '1280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              AI Energy Assessment
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1.5rem', maxWidth: '300px' }}>
              Empowering Ugandan buildings with AI-driven energy efficiency solutions.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Social Media Icons */}
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => (
                <a 
                  key={platform}
                  href={`#${platform}`}
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'rgb(22, 163, 74)';
                    e.target.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>
                    {platform === 'facebook' && 'f'}
                    {platform === 'twitter' && 't'}
                    {platform === 'linkedin' && 'in'}
                    {platform === 'instagram' && 'ig'}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              Contact Us
            </h3>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '0.75rem' }}>📍</span>
                <span>Plot 123, Kampala Road, Kampala, Uganda</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '0.75rem' }}>📞</span>
                <span>+256 700 123 456</span>
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: '0.75rem' }}>✉️</span>
                <span>info@aienergy.ug</span>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>
              Quick Links
            </h3>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {['Home', 'About Us', 'Services', 'Case Studies', 'Contact'].map(link => (
                <li key={link} style={{ marginBottom: '0.75rem' }}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    style={{ 
                      transition: 'all 0.3s ease',
                      textDecoration: 'none',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.color = 'rgb(22, 163, 74)';
                      e.target.style.paddingLeft = '0.5rem';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Disclaimer and Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.5)', 
            marginBottom: '1rem',
            maxWidth: '800px'
          }}>
            <strong>Disclaimer:</strong> Powered by AI and real Ugandan energy data for accurate assessments. 
            Our tool uses machine learning algorithms trained on local building data to provide tailored recommendations.
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            © {new Date().getFullYear()} AI Energy Assessment Tool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;