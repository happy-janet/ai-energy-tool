import React, { useState } from 'react';

const AssessmentModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    buildingName: '',
    buildingType: 'commercial',
    buildingSize: '',
    location: '',
    constructionYear: '',
    energyBill: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Submit the form data
      console.log('Form submitted:', formData);
      // Reset and close
      setStep(1);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '0.75rem',
        width: '100%',
        maxWidth: '500px',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        position: 'relative'
      }}>
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: '#6b7280'
          }}
        >
          ×
        </button>

        {/* Progress indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '1.5rem 1.5rem 0'
        }}>
          {[1, 2, 3].map((i) => (
            <div key={i} style={{
              width: '2.5rem',
              height: '0.25rem',
              backgroundColor: i <= step ? '#16a34a' : '#e5e7eb',
              margin: '0 0.25rem',
              borderRadius: '0.125rem',
              transition: 'background-color 0.3s ease'
            }} />
          ))}
        </div>

        {/* Form content */}
        <div style={{ padding: '1.5rem' }}>
          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#111827',
            textAlign: 'center'
          }}>
            {step === 1 && 'Sign Up or Log In'}
            {step === 2 && 'Enter Building Details'}
            {step === 3 && 'Get Your Energy Report'}
          </h2>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Sign Up / Log In */}
            {step === 1 && (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <label 
                    htmlFor="email"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="your@email.com"
                  />
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="password"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151'
                    }}
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="••••••••"
                  />
                </div>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                  fontSize: '0.875rem'
                }}>
                  <div>
                    <input 
                      type="checkbox" 
                      id="remember" 
                      style={{ marginRight: '0.5rem' }}
                    />
                    <label htmlFor="remember">Remember me</label>
                  </div>
                  <a 
                    href="#" 
                    style={{ 
                      color: '#16a34a',
                      textDecoration: 'none'
                    }}
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            )}

            {/* Step 2: Building Details */}
            {step === 2 && (
              <div>
                <div style={{ marginBottom: '1rem' }}>
                  <label 
                    htmlFor="buildingName"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151'
                    }}
                  >
                    Building Name
                  </label>
                  <input
                    type="text"
                    id="buildingName"
                    name="buildingName"
                    value={formData.buildingName}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="e.g., Kampala Office Tower"
                  />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label 
                    htmlFor="buildingType"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151'
                    }}
                  >
                    Building Type
                  </label>
                  <select
                    id="buildingType"
                    name="buildingType"
                    value={formData.buildingType}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem',
                      backgroundColor: 'white'
                    }}
                  >
                    <option value="commercial">Commercial</option>
                    <option value="residential">Residential</option>
                    <option value="industrial">Industrial</option>
                    <option value="institutional">Institutional</option>
                  </select>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label 
                    htmlFor="buildingSize"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151'
                    }}
                  >
                    Building Size (sq meters)
                  </label>
                  <input
                    type="number"
                    id="buildingSize"
                    name="buildingSize"
                    value={formData.buildingSize}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="e.g., 1000"
                  />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label 
                    htmlFor="location"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151'
                    }}
                  >
                    Location in Uganda
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="e.g., Kampala, Entebbe, Jinja"
                  />
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <label 
                    htmlFor="constructionYear"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151'
                    }}
                  >
                    Year of Construction
                  </label>
                  <input
                    type="number"
                    id="constructionYear"
                    name="constructionYear"
                    value={formData.constructionYear}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="e.g., 2010"
                  />
                </div>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <label 
                    htmlFor="energyBill"
                    style={{
                      display: 'block',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: '#374151'
                    }}
                  >
                    Average Monthly Energy Bill (UGX)
                  </label>
                  <input
                    type="number"
                    id="energyBill"
                    name="energyBill"
                    value={formData.energyBill}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      border: '1px solid #d1d5db',
                      fontSize: '1rem'
                    }}
                    placeholder="e.g., 500000"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Energy Report */}
            {step === 3 && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  width: '5rem',
                  height: '5rem',
                  margin: '0 auto 1.5rem',
                  backgroundColor: 'rgba(22, 163, 74, 0.1)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                </div>
                <p style={{ 
                  fontSize: '1.125rem',
                  marginBottom: '1.5rem',
                  color: '#4b5563'
                }}>
                  We're analyzing your building data using our AI algorithms...
                </p>
                <div style={{
                  width: '100%',
                  height: '0.5rem',
                  backgroundColor: '#e5e7eb',
                  borderRadius: '0.25rem',
                  overflow: 'hidden',
                  marginBottom: '2rem'
                }}>
                  <div style={{
                    height: '100%',
                    width: '75%',
                    backgroundColor: '#16a34a',
                    borderRadius: '0.25rem',
                    animation: 'progress 2s ease-in-out infinite'
                  }}></div>
                </div>
                <p style={{ 
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  marginBottom: '1rem'
                }}>
                  Your comprehensive energy assessment report will include:
                </p>
                <ul style={{ 
                  textAlign: 'left',
                  marginBottom: '1.5rem',
                  paddingLeft: '1.5rem'
                }}>
                  <li style={{ marginBottom: '0.5rem' }}>Energy efficiency score</li>
                  <li style={{ marginBottom: '0.5rem' }}>Potential annual savings</li>
                  <li style={{ marginBottom: '0.5rem' }}>Recommended improvements</li>
                  <li style={{ marginBottom: '0.5rem' }}>ROI calculations</li>
                  <li>Comparison with similar buildings</li>
                </ul>
                <style jsx>{`
                  @keyframes progress {
                    0% { width: 10%; }
                    50% { width: 75%; }
                    100% { width: 95%; }
                  }
                `}</style>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{ 
              display: 'flex',
              justifyContent: step === 1 ? 'space-between' : 'flex-end',
              marginTop: '2rem'
            }}>
              {step === 1 && (
                <button
                  type="button"
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.375rem',
                    backgroundColor: 'white',
                    color: '#374151',
                    border: '1px solid #d1d5db',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Create Account
                </button>
              )}
              <button
                type="submit"
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  backgroundColor: '#16a34a',
                  color: 'white',
                  border: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
              >
                {step === 1 && 'Log In'}
                {step === 2 && 'Generate Report'}
                {step === 3 && 'View Full Report'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssessmentModal; 