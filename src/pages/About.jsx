// pages/About.jsx - About Page Component
// SIH25033 - Detailed Problem Statement and Solution

import React from 'react';

function About() {
  return (
    <div style={styles.container}>
      {/* Page Header */}
      <div style={styles.header}>
        <h1 style={styles.pageTitle}>About the Project</h1>
        <p style={styles.headerSubtitle}>
          Understanding the Problem and Our AI-Powered Solution
        </p>
      </div>

      {/* Problem Statement Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>📋 Problem Statement</h2>
        <div style={styles.problemBox}>
          <p style={styles.text}>
            The Prime Minister's Internship Scheme aims to provide meaningful internship 
            opportunities to lakhs of students across India. However, allocating the right 
            internship to the right student at scale presents significant challenges. The 
            traditional manual allocation process is time-consuming, prone to bias, and 
            often results in skill mismatches.
          </p>
          <p style={styles.text}>
            With thousands of students and hundreds of internship positions across diverse 
            domains, locations, and skill requirements, there is an urgent need for an 
            intelligent, automated system that can ensure fair, transparent, and optimal 
            allocation while considering multiple parameters simultaneously.
          </p>
        </div>
      </section>

      {/* Current Challenges Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>⚠️ Current Challenges in Internship Allocation</h2>
        <div style={styles.challengeGrid}>
          <div style={styles.challengeCard}>
            <h3 style={styles.challengeTitle}>Manual Processing Bottleneck</h3>
            <p style={styles.challengeText}>
              Processing thousands of applications manually is extremely time-consuming 
              and resource-intensive, leading to delays and inefficiencies in the 
              allocation process.
            </p>
          </div>

          <div style={styles.challengeCard}>
            <h3 style={styles.challengeTitle}>Unconscious Bias</h3>
            <p style={styles.challengeText}>
              Human decision-making can introduce bias based on personal preferences, 
              potentially disadvantaging qualified candidates and compromising fairness.
            </p>
          </div>

          <div style={styles.challengeCard}>
            <h3 style={styles.challengeTitle}>Skill-Role Mismatch</h3>
            <p style={styles.challengeText}>
              Without intelligent matching, students may be placed in internships that 
              don't align with their skills, interests, or career goals, reducing 
              learning outcomes.
            </p>
          </div>

          <div style={styles.challengeCard}>
            <h3 style={styles.challengeTitle}>Diversity Challenges</h3>
            <p style={styles.challengeText}>
              Ensuring adequate representation of gender, category, and regional diversity 
              while maintaining merit-based selection is difficult to balance manually.
            </p>
          </div>

          <div style={styles.challengeCard}>
            <h3 style={styles.challengeTitle}>Lack of Transparency</h3>
            <p style={styles.challengeText}>
              Unclear selection criteria and opaque processes create distrust among 
              students and stakeholders, undermining the credibility of the scheme.
            </p>
          </div>

          <div style={styles.challengeCard}>
            <h3 style={styles.challengeTitle}>Scalability Issues</h3>
            <p style={styles.challengeText}>
              As the scheme grows to accommodate more students and companies, manual 
              processes become increasingly unsustainable and error-prone.
            </p>
          </div>
        </div>
      </section>

      {/* How AI Solves the Problem */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🤖 How AI Solves the Problem</h2>
        <div style={styles.solutionBox}>
          <p style={styles.text}>
            Our AI-powered allocation engine leverages advanced machine learning algorithms 
            to automate and optimize the internship allocation process. The system analyzes 
            multiple parameters simultaneously and generates optimal matches in minutes, 
            not weeks.
          </p>
          
          <h3 style={styles.subheading}>Core AI Capabilities:</h3>
          
          <div style={styles.capabilityItem}>
            <strong style={styles.capabilityTitle}>Multi-Parameter Optimization:</strong>
            <span style={styles.capabilityText}>
              The AI considers skills, location preferences, domain interests, educational 
              background, diversity requirements, and company needs simultaneously to find 
              the best possible matches.
            </span>
          </div>

          <div style={styles.capabilityItem}>
            <strong style={styles.capabilityTitle}>Bias-Free Decision Making:</strong>
            <span style={styles.capabilityText}>
              Algorithms make objective decisions based purely on defined criteria, 
              eliminating unconscious bias and ensuring fairness in the allocation process.
            </span>
          </div>

          <div style={styles.capabilityItem}>
            <strong style={styles.capabilityTitle}>Intelligent Skill Matching:</strong>
            <span style={styles.capabilityText}>
              Advanced natural language processing and skill mapping ensure students are 
              matched with internships where they can contribute meaningfully and learn effectively.
            </span>
          </div>

          <div style={styles.capabilityItem}>
            <strong style={styles.capabilityTitle}>Diversity-Aware Allocation:</strong>
            <span style={styles.capabilityText}>
              The system actively promotes diversity while maintaining merit-based selection, 
              ensuring representation across gender, category, and geography.
            </span>
          </div>

          <div style={styles.capabilityItem}>
            <strong style={styles.capabilityTitle}>Transparent Scoring:</strong>
            <span style={styles.capabilityText}>
              Every allocation decision comes with a clear match score and explanation, 
              providing full transparency into why specific matches were made.
            </span>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>✨ Key Features</h2>
        <div style={styles.featuresList}>
          <div style={styles.featureItem}>
            <span style={styles.featureBullet}>▶</span>
            <div>
              <strong>Automated Matching Algorithm:</strong> Instantly processes thousands 
              of student profiles and internship requirements
            </div>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.featureBullet}>▶</span>
            <div>
              <strong>Real-Time Results:</strong> Generate allocation results in minutes 
              with detailed match scores
            </div>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.featureBullet}>▶</span>
            <div>
              <strong>Student Registration Portal:</strong> Easy-to-use interface for 
              students to register their profiles and preferences
            </div>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.featureBullet}>▶</span>
            <div>
              <strong>Internship Database:</strong> Comprehensive listing of available 
              internship opportunities with detailed requirements
            </div>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.featureBullet}>▶</span>
            <div>
              <strong>Match Score Visualization:</strong> Clear display of allocation 
              results with transparency into matching criteria
            </div>
          </div>
          <div style={styles.featureItem}>
            <span style={styles.featureBullet}>▶</span>
            <div>
              <strong>Scalable Architecture:</strong> Designed to handle growing numbers 
              of students and companies efficiently
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>🎯 Expected Impact</h2>
        
        <div style={styles.impactGrid}>
          <div style={styles.impactCard}>
            <h3 style={styles.impactTitle}>For Students</h3>
            <ul style={styles.impactList}>
              <li>Fair chance for all applicants regardless of background</li>
              <li>Better skill-internship alignment for meaningful learning</li>
              <li>Transparent process builds trust and confidence</li>
              <li>Faster allocation results reduce waiting time</li>
              <li>Improved career outcomes through better matches</li>
            </ul>
          </div>

          <div style={styles.impactCard}>
            <h3 style={styles.impactTitle}>For Government</h3>
            <ul style={styles.impactList}>
              <li>Efficient use of resources with automated processing</li>
              <li>Scalable solution that grows with the scheme</li>
              <li>Data-driven insights for policy improvements</li>
              <li>Reduced administrative burden and costs</li>
              <li>Enhanced credibility and public trust</li>
            </ul>
          </div>

          <div style={styles.impactCard}>
            <h3 style={styles.impactTitle}>For Companies</h3>
            <ul style={styles.impactList}>
              <li>Receive qualified candidates matching their requirements</li>
              <li>Reduced recruitment time and effort</li>
              <li>Better intern performance due to skill alignment</li>
              <li>Contribute to national skill development goals</li>
              <li>Access to diverse talent pool across India</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technology Stack Note */}
      <section style={styles.techSection}>
        <h3 style={styles.techTitle}>🔧 Technology Approach</h3>
        <p style={styles.techText}>
          This solution uses a modern, scalable architecture with React frontend for 
          intuitive user experience, FastAPI backend for high-performance processing, 
          and machine learning algorithms for intelligent allocation. The system is 
          designed to be easily deployable and maintainable for government infrastructure.
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
  header: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '30px',
    borderRadius: '10px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  pageTitle: {
    margin: '0 0 10px 0',
    fontSize: '32px',
  },
  headerSubtitle: {
    margin: '0',
    fontSize: '16px',
    opacity: '0.9',
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
    marginBottom: '20px',
    borderBottom: '3px solid #3b82f6',
    paddingBottom: '10px',
  },
  problemBox: {
    backgroundColor: '#fef3c7',
    border: '2px solid #fbbf24',
    padding: '20px',
    borderRadius: '8px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.7',
    color: '#374151',
    marginBottom: '15px',
  },
  challengeGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '15px',
  },
  challengeCard: {
    backgroundColor: '#fef2f2',
    border: '1px solid #fca5a5',
    borderLeft: '4px solid #dc2626',
    padding: '20px',
    borderRadius: '8px',
  },
  challengeTitle: {
    fontSize: '18px',
    color: '#991b1b',
    marginTop: '0',
    marginBottom: '10px',
  },
  challengeText: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.5',
    margin: '0',
  },
  solutionBox: {
    backgroundColor: '#ecfdf5',
    border: '2px solid #10b981',
    padding: '20px',
    borderRadius: '8px',
  },
  subheading: {
    fontSize: '18px',
    color: '#065f46',
    marginTop: '20px',
    marginBottom: '15px',
  },
  capabilityItem: {
    display: 'block',
    marginBottom: '15px',
    padding: '12px',
    backgroundColor: 'white',
    borderRadius: '6px',
    borderLeft: '3px solid #10b981',
  },
  capabilityTitle: {
    color: '#065f46',
    fontSize: '15px',
    display: 'block',
    marginBottom: '5px',
  },
  capabilityText: {
    color: '#374151',
    fontSize: '14px',
    lineHeight: '1.6',
  },
  featuresList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  featureItem: {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '12px',
    backgroundColor: '#f9fafb',
    borderRadius: '6px',
    fontSize: '15px',
    color: '#374151',
    lineHeight: '1.6',
  },
  featureBullet: {
    color: '#3b82f6',
    fontSize: '18px',
    marginRight: '12px',
    fontWeight: 'bold',
  },
  impactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  impactCard: {
    backgroundColor: '#eff6ff',
    border: '2px solid #3b82f6',
    padding: '20px',
    borderRadius: '8px',
  },
  impactTitle: {
    fontSize: '20px',
    color: '#1e3a8a',
    marginTop: '0',
    marginBottom: '15px',
  },
  impactList: {
    margin: '0',
    paddingLeft: '20px',
    fontSize: '14px',
    lineHeight: '1.8',
    color: '#374151',
  },
  techSection: {
    backgroundColor: '#f3f4f6',
    padding: '25px',
    borderRadius: '10px',
    border: '1px solid #d1d5db',
  },
  techTitle: {
    fontSize: '20px',
    color: '#1e3a8a',
    marginTop: '0',
    marginBottom: '15px',
  },
  techText: {
    fontSize: '15px',
    lineHeight: '1.7',
    color: '#374151',
    margin: '0',
  },
};

export default About;