import React, { useState, useEffect } from 'react';
import { ProfessionalButton, FadeInSection, StaggeredAnimation } from './InteractiveElements';
import './InteractiveRegistration.css';

const InteractiveRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    designation: '',
    
    // Conference Details
    participationType: '',
    accommodationNeeded: false,
    dietaryRequirements: '',
    
    // Paper Submission
    paperSubmission: false,
    paperTitle: '',
    abstract: '',
    
    // Payment
    paymentMethod: '',
    transactionId: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    { id: 1, title: 'Personal Information', icon: '👤' },
    { id: 2, title: 'Conference Details', icon: '📋' },
    { id: 3, title: 'Paper Submission', icon: '📄' },
    { id: 4, title: 'Payment & Review', icon: '💳' }
  ];

  useEffect(() => {
    setProgress((currentStep / steps.length) * 100);
  }, [currentStep, steps.length]);

  const validateStep = (step) => {
    const newErrors = {};
    
    switch (step) {
      case 1:
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.institution) newErrors.institution = 'Institution is required';
        break;
      case 2:
        if (!formData.participationType) newErrors.participationType = 'Participation type is required';
        break;
      case 3:
        if (formData.paperSubmission && !formData.paperTitle) {
          newErrors.paperTitle = 'Paper title is required';
        }
        break;
      default:
        break;
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      alert('Registration submitted successfully!');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <StaggeredAnimation className="form-section">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleInputChange('fullName', e.target.value)}
                className={errors.fullName ? 'error' : ''}
                placeholder="Enter your full name"
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>
            
            <div className="form-group">
              <label>Email Address *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email address"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={errors.phone ? 'error' : ''}
                placeholder="Enter your phone number"
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
            
            <div className="form-group">
              <label>Institution/Organization *</label>
              <input
                type="text"
                value={formData.institution}
                onChange={(e) => handleInputChange('institution', e.target.value)}
                className={errors.institution ? 'error' : ''}
                placeholder="Enter your institution"
              />
              {errors.institution && <span className="error-text">{errors.institution}</span>}
            </div>
            
            <div className="form-group">
              <label>Designation</label>
              <input
                type="text"
                value={formData.designation}
                onChange={(e) => handleInputChange('designation', e.target.value)}
                placeholder="Enter your designation"
              />
            </div>
          </StaggeredAnimation>
        );
        
      case 2:
        return (
          <StaggeredAnimation className="form-section">
            <div className="form-group">
              <label>Participation Type *</label>
              <div className="radio-group">
                {['Student', 'Faculty', 'Industry Professional', 'Researcher'].map(type => (
                  <label key={type} className="radio-label">
                    <input
                      type="radio"
                      name="participationType"
                      value={type}
                      checked={formData.participationType === type}
                      onChange={(e) => handleInputChange('participationType', e.target.value)}
                    />
                    <span className="radio-custom"></span>
                    {type}
                  </label>
                ))}
              </div>
              {errors.participationType && <span className="error-text">{errors.participationType}</span>}
            </div>
            
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.accommodationNeeded}
                  onChange={(e) => handleInputChange('accommodationNeeded', e.target.checked)}
                />
                <span className="checkbox-custom"></span>
                I need accommodation
              </label>
            </div>
            
            <div className="form-group">
              <label>Dietary Requirements</label>
              <select
                value={formData.dietaryRequirements}
                onChange={(e) => handleInputChange('dietaryRequirements', e.target.value)}
              >
                <option value="">Select dietary requirements</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="halal">Halal</option>
                <option value="none">No specific requirements</option>
              </select>
            </div>
          </StaggeredAnimation>
        );
        
      case 3:
        return (
          <StaggeredAnimation className="form-section">
            <div className="form-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.paperSubmission}
                  onChange={(e) => handleInputChange('paperSubmission', e.target.checked)}
                />
                <span className="checkbox-custom"></span>
                I want to submit a paper/abstract
              </label>
            </div>
            
            {formData.paperSubmission && (
              <>
                <div className="form-group">
                  <label>Paper Title *</label>
                  <input
                    type="text"
                    value={formData.paperTitle}
                    onChange={(e) => handleInputChange('paperTitle', e.target.value)}
                    className={errors.paperTitle ? 'error' : ''}
                    placeholder="Enter your paper title"
                  />
                  {errors.paperTitle && <span className="error-text">{errors.paperTitle}</span>}
                </div>
                
                <div className="form-group">
                  <label>Abstract</label>
                  <textarea
                    value={formData.abstract}
                    onChange={(e) => handleInputChange('abstract', e.target.value)}
                    placeholder="Enter your abstract (max 300 words)"
                    rows="6"
                  />
                </div>
              </>
            )}
          </StaggeredAnimation>
        );
        
      case 4:
        return (
          <StaggeredAnimation className="form-section">
            <div className="review-section">
              <h3>Review Your Information</h3>
              <div className="review-item">
                <strong>Name:</strong> {formData.fullName}
              </div>
              <div className="review-item">
                <strong>Email:</strong> {formData.email}
              </div>
              <div className="review-item">
                <strong>Institution:</strong> {formData.institution}
              </div>
              <div className="review-item">
                <strong>Participation Type:</strong> {formData.participationType}
              </div>
              {formData.paperSubmission && (
                <div className="review-item">
                  <strong>Paper Title:</strong> {formData.paperTitle}
                </div>
              )}
            </div>
            
            <div className="payment-section">
              <h3>Payment Information</h3>
              <div className="form-group">
                <label>Payment Method</label>
                <select
                  value={formData.paymentMethod}
                  onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                >
                  <option value="">Select payment method</option>
                  <option value="upi">UPI</option>
                  <option value="netbanking">Net Banking</option>
                  <option value="card">Credit/Debit Card</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Transaction ID</label>
                <input
                  type="text"
                  value={formData.transactionId}
                  onChange={(e) => handleInputChange('transactionId', e.target.value)}
                  placeholder="Enter transaction ID"
                />
              </div>
            </div>
          </StaggeredAnimation>
        );
        
      default:
        return null;
    }
  };

  return (
    <FadeInSection className="interactive-registration">
      <div className="registration-container">
        <div className="registration-header">
          <h2>Conference Registration</h2>
          <p>Join UPHARMORA 1.0 - Register now for an amazing experience!</p>
        </div>
        
        {/* Progress Bar */}
        <div className="progress-section">
          <div className="progress-bar-container">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-text">{Math.round(progress)}% Complete</div>
        </div>
        
        {/* Step Indicators */}
        <div className="steps-container">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`step-indicator ${currentStep >= step.id ? 'active' : ''} ${currentStep === step.id ? 'current' : ''}`}
            >
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
            </div>
          ))}
        </div>
        
        {/* Form Content */}
        <div className="form-container">
          {renderStepContent()}
        </div>
        
        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          {currentStep > 1 && (
            <ProfessionalButton 
              variant="secondary" 
              onClick={prevStep}
              className="nav-btn"
            >
              Previous
            </ProfessionalButton>
          )}
          
          {currentStep < steps.length ? (
            <ProfessionalButton 
              variant="primary" 
              onClick={nextStep}
              className="nav-btn"
            >
              Next Step
            </ProfessionalButton>
          ) : (
            <ProfessionalButton 
              variant="primary" 
              onClick={handleSubmit}
              className="nav-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </ProfessionalButton>
          )}
        </div>
      </div>
    </FadeInSection>
  );
};

export default InteractiveRegistration;
