// pages/Home.jsx - Home Page Component
// SIH25033 - PM Internship Scheme Allocation Engine

import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.mainTitle}>
          AI-Based Smart Allocation Engine
        </h1>
        <h2 style={styles.subtitle}>
          Prime Minister's Internship Scheme
        </h2>
        <div style={styles.badge}>
          <strong>SIH Problem ID:</strong> SIH25033
        </div>
      </section>

      {/* Project Description */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>About PM Internship Scheme</h3>
        <p style={styles.description}>
          The Prime Minister's Internship Scheme aims to provide quality internship 
          opportunities to students across India, connecting them with leading companies 
          and organizations. This AI-powered allocation engine ensures fair, transparent, 
          and efficient matching between students and internship opportunities based on 
          skills, preferences, and diversity requirements.
        </p>
      </section>

      {/* Key Features */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Key Features</h3>
        <div style={styles.featureGrid}>
          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🤖</div>
            <h4 style={styles.featureTitle}>AI-Based Allocation</h4>
            <p style={styles.featureText}>
              Advanced machine learning algorithms ensure optimal matching between 
              students and internships based on multiple parameters.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>⚖️</div>
            <h4 style={styles.featureTitle}>Fair & Transparent</h4>
            <p style={styles.featureText}>
              Unbiased allocation process with consideration for diversity, equity, 
              and merit-based selection criteria.
            </p>
          </div>

          <div style={styles.featureCard}>
            <div style={styles.featureIcon}>🎯</div>
            <h4 style={styles.featureTitle}>Skill-Based Matching</h4>
            <p style={styles.featureText}>
              Intelligent matching system that aligns student skills with internship 
              requirements for maximum learning outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Project */}
      <section style={styles.section}>
        <h3 style={styles.sectionTitle}>Why This Project?</h3>
        <div style={styles.whySection}>
          <p style={styles.description}>
            Traditional internship allocation processes often face challenges such as:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <strong>Manual Bias:</strong> Human intervention can lead to unfair selections
            </li>
            <li style={styles.listItem}>
              <strong>Time Consuming:</strong> Processing thousands of applications manually is inefficient
            </li>
            <li style={styles.listItem}>
              <strong>Skill Mismatch:</strong> Students often get placed in roles that don't match their abilities
            </li>
            <li style={styles.listItem}>
              <strong>Lack of Transparency:</strong> Unclear selection criteria creates distrust
            </li>
          </ul>
          <p style={styles.description}>
            Our AI-powered solution addresses these challenges by providing an automated, 
            transparent, and fair allocation system that considers multiple factors including 
            skills, location preferences, diversity requirements, and company needs. This 
            ensures that every student gets the best possible internship opportunity while 
            companies receive qualified candidates.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section style={styles.ctaSection}>
        <h3 style={styles.ctaTitle}>Get Started</h3>
        <p style={styles.ctaText}>
          Students can register their profiles, view available internships, and 
          participate in the AI-powered allocation process.
        </p>
      </section>
    </div>
  );
}

// Inline CSS Styles
const styles = {
  container: {
    padding: '0',
  },
  heroSection: {
    backgroundColor: '#eff6ff',
    padding: '40px 30px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '30px',
    border: '2px solid #3b82f6',
  },
  mainTitle: {
    fontSize: '36px',
    color: '#1e3a8a',
    margin: '0 0 10px 0',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '24px',
    color: '#2563eb',
    margin: '0 0 20px 0',
    fontWeight: 'normal',
  },
  badge: {
    display: 'inline-block',
    backgroundColor: '#fbbf24',
    color: '#78350f',
    padding: '10px 20px',
    borderRadius: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '10px',
    marginBottom: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#1e3a8a',
    marginTop: '0',
    marginBottom: '15px',
    borderBottom: '3px solid #3b82f6',
    paddingBottom: '10px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#374151',
    margin: '10px 0',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  featureCard: {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    textAlign: 'center',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  featureTitle: {
    fontSize: '18px',
    color: '#1e3a8a',
    margin: '10px 0',
  },
  featureText: {
    fontSize: '14px',
    color: '#6b7280',
    lineHeight: '1.5',
  },
  whySection: {
    marginTop: '15px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '15px 0',
  },
  listItem: {
    fontSize: '16px',
    color: '#374151',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f3f4f6',
    borderRadius: '5px',
    borderLeft: '4px solid #3b82f6',
  },
  ctaSection: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  ctaTitle: {
    fontSize: '28px',
    margin: '0 0 15px 0',
  },
  ctaText: {
    fontSize: '16px',
    margin: '0',
    lineHeight: '1.6',
  },
};

export default Home;