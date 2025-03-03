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
        margin: 'auto',
        padding: '0 1.5rem'
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
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Contact Us</h3>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              <li style={{ marginBottom: '1rem' }}>📍 Plot 123, Kampala Road, Uganda</li>
              <li style={{ marginBottom: '1rem' }}>📞 +256 700 123 456</li>
              <li style={{ marginBottom: '1rem' }}>✉️ info@aienergy.ug</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Quick Links</h3>
            <ul style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {['Home', 'About Us', 'Services', 'Case Studies', 'Contact'].map(link => (
                <li key={link} style={{ marginBottom: '0.75rem' }}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Partners, Sponsors, Collaborators */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Our Partners & Sponsors</h3>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            {["Partner 1", "Partner 2", "Sponsor 1", "Collaborator 1"].map((item, index) => (
              <span key={index} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', padding: '0.75rem 1.5rem', borderRadius: '8px' }}>
                {item}
              </span>
            ))}
          </div>
        </div>
        
        {/* Disclaimer and Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', marginBottom: '1rem' }}>
            <strong>Disclaimer:</strong> Powered by AI and real Ugandan energy data for accurate assessments.
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
