// pages/StudentRegister.jsx - Student Registration Form
// SIH25033 - PM Internship Allocation Engine

import React, { useState } from 'react';
import { registerStudent } from '../services/api';

function StudentRegister() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    education: '',
    skills: '',
    location: '',
    gender: '',
    category: '',
    preferred_domain: '',
    availability_months: '',
  });

  // Loading and message states
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    if (!formData.name.trim()) {
      alert('Please enter your name');
      return false;
    }
    if (!formData.education.trim()) {
      alert('Please enter your education details');
      return false;
    }
    if (!formData.skills.trim()) {
      alert('Please enter your skills');
      return false;
    }
    if (!formData.location.trim()) {
      alert('Please enter your location');
      return false;
    }
    if (!formData.gender) {
      alert('Please select your gender');
      return false;
    }
    if (!formData.category) {
      alert('Please select your category');
      return false;
    }
    if (!formData.preferred_domain.trim()) {
      alert('Please enter your preferred domain');
      return false;
    }
    if (!formData.availability_months || formData.availability_months <= 0) {
      alert('Please enter valid availability months (greater than 0)');
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      // Convert availability_months to number
      const dataToSubmit = {
        ...formData,
        availability_months: parseInt(formData.availability_months),
      };

      // Call API to register student
      const response = await registerStudent(dataToSubmit);
      
      // Success message
      setMessage({
        text: 'Registration successful! Your profile has been saved.',
        type: 'success',
      });

      // Reset form
      setFormData({
        name: '',
        education: '',
        skills: '',
        location: '',
        gender: '',
        category: '',
        preferred_domain: '',
        availability_months: '',
      });

      // Show success alert
      alert('Registration successful! Your profile has been saved.');
    } catch (error) {
      // Error message
      const errorMsg = error.response?.data?.detail || 'Registration failed. Please try again.';
      setMessage({
        text: errorMsg,
        type: 'error',
      });
      alert('Registration failed: ' + errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>Student Registration</h1>
        <p style={styles.subtitle}>
          Register for PM Internship Scheme - Fill in your details below
        </p>
      </div>

      {/* Registration Form */}
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          {/* Name */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              style={styles.input}
              required
            />
          </div>

          {/* Education */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Education *</label>
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="e.g., B.Tech CSE, MBA, BCA"
              style={styles.input}
              required
            />
          </div>

          {/* Skills */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Skills *</label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="e.g., Python, Java, Data Analysis, Marketing"
              style={styles.input}
              required
            />
            <small style={styles.helpText}>Enter comma-separated skills</small>
          </div>

          {/* Location */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Preferred Location *</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Delhi, Mumbai, Bangalore"
              style={styles.input}
              required
            />
          </div>

          {/* Gender */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Gender *</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Category */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              style={styles.select}
              required
            >
              <option value="">-- Select Category --</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="EWS">EWS</option>
            </select>
          </div>

          {/* Preferred Domain */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Preferred Domain *</label>
            <input
              type="text"
              name="preferred_domain"
              value={formData.preferred_domain}
              onChange={handleChange}
              placeholder="e.g., Software Development, Marketing, Finance"
              style={styles.input}
              required
            />
          </div>

          {/* Availability Months */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Availability (in months) *</label>
            <input
              type="number"
              name="availability_months"
              value={formData.availability_months}
              onChange={handleChange}
              placeholder="e.g., 3, 6, 12"
              min="1"
              max="12"
              style={styles.input}
              required
            />
            <small style={styles.helpText}>Duration you're available for internship</small>
          </div>

          {/* Display Message */}
          {message.text && (
            <div
              style={
                message.type === 'success'
                  ? styles.successMessage
                  : styles.errorMessage
              }
            >
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            style={loading ? styles.buttonDisabled : styles.button}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>

        {/* Info Box */}
        <div style={styles.infoBox}>
          <h3 style={styles.infoTitle}>📝 Registration Guidelines</h3>
          <ul style={styles.infoList}>
            <li>All fields marked with * are mandatory</li>
            <li>Provide accurate information for better matching</li>
            <li>Skills should be comma-separated (e.g., Python, Java, React)</li>
            <li>Your data will be used only for internship allocation</li>
            <li>You can update your profile after registration</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Inline CSS Styles
const styles = {
  container: {
    padding: '0',
  },
  header: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '25px',
    borderRadius: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  pageTitle: {
    margin: '0 0 10px 0',
    fontSize: '28px',
  },
  subtitle: {
    margin: '0',
    fontSize: '15px',
    opacity: '0.9',
  },
  formContainer: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '20px',
  },
  form: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    boxSizing: 'border-box',
    outline: 'none',
  },
  select: {
    width: '100%',
    padding: '12px',
    fontSize: '15px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    boxSizing: 'border-box',
    outline: 'none',
    backgroundColor: 'white',
  },
  helpText: {
    display: 'block',
    fontSize: '13px',
    color: '#6b7280',
    marginTop: '5px',
  },
  button: {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#2563eb',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonDisabled: {
    width: '100%',
    padding: '14px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#9ca3af',
    border: 'none',
    borderRadius: '6px',
    cursor: 'not-allowed',
  },
  successMessage: {
    padding: '12px',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    border: '1px solid #10b981',
    borderRadius: '6px',
    marginBottom: '15px',
    fontSize: '14px',
  },
  errorMessage: {
    padding: '12px',
    backgroundColor: '#fee2e2',
    color: '#991b1b',
    border: '1px solid #ef4444',
    borderRadius: '6px',
    marginBottom: '15px',
    fontSize: '14px',
  },
  infoBox: {
    backgroundColor: '#eff6ff',
    padding: '25px',
    borderRadius: '10px',
    border: '2px solid #3b82f6',
    height: 'fit-content',
  },
  infoTitle: {
    fontSize: '18px',
    color: '#1e3a8a',
    marginTop: '0',
    marginBottom: '15px',
  },
  infoList: {
    margin: '0',
    paddingLeft: '20px',
    fontSize: '14px',
    lineHeight: '1.8',
    color: '#374151',
  },
};

export default StudentRegister;