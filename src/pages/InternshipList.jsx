// pages/InternshipList.jsx - Display Available Internships
// SIH25033 - PM Internship Allocation Engine

import React, { useState, useEffect } from 'react';
import { getInternships } from '../services/api';

function InternshipList() {
  // State management
  const [internships, setInternships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch internships on component mount
  useEffect(() => {
    fetchInternships();
  }, []);

  // Fetch internships from backend
  const fetchInternships = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getInternships();
      setInternships(data);
    } catch (err) {
      setError('Failed to fetch internships. Please try again later.');
      console.error('Error fetching internships:', err);
    } finally {
      setLoading(false);
    }
  };

  // Refresh button handler
  const handleRefresh = () => {
    fetchInternships();
  };

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.pageTitle}>Available Internships</h1>
          <p style={styles.subtitle}>
            Browse internship opportunities from top companies across India
          </p>
        </div>
        <button onClick={handleRefresh} style={styles.refreshButton}>
          🔄 Refresh
        </button>
      </div>

      {/* Loading State */}
      {loading && (
        <div style={styles.loadingContainer}>
          <div style={styles.loader}></div>
          <p style={styles.loadingText}>Loading internships...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div style={styles.errorBox}>
          <p style={styles.errorText}>⚠️ {error}</p>
          <button onClick={handleRefresh} style={styles.retryButton}>
            Try Again
          </button>
        </div>
      )}

      {/* Internships Table */}
      {!loading && !error && internships.length > 0 && (
        <div style={styles.tableContainer}>
          <div style={styles.statsBar}>
            <p style={styles.statsText}>
              <strong>Total Internships:</strong> {internships.length}
            </p>
          </div>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeaderRow}>
                  <th style={styles.tableHeader}>S.No</th>
                  <th style={styles.tableHeader}>Company Name</th>
                  <th style={styles.tableHeader}>Domain</th>
                  <th style={styles.tableHeader}>Required Skills</th>
                  <th style={styles.tableHeader}>Location</th>
                  <th style={styles.tableHeader}>Duration (months)</th>
                </tr>
              </thead>
              <tbody>
                {internships.map((internship, index) => (
                  <tr
                    key={internship.id || index}
                    style={index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}
                  >
                    <td style={styles.tableCell}>{index + 1}</td>
                    <td style={styles.tableCell}>
                      <strong>{internship.company_name}</strong>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={styles.domainBadge}>{internship.domain}</span>
                    </td>
                    <td style={styles.tableCell}>
                      <div style={styles.skillsContainer}>
                        {internship.required_skills && typeof internship.required_skills === 'string'
                          ? internship.required_skills.split(',').map((skill, idx) => (
                              <span key={idx} style={styles.skillBadge}>
                                {skill.trim()}
                              </span>
                            ))
                          : internship.required_skills}
                      </div>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={styles.locationText}>📍 {internship.location}</span>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={styles.durationText}>{internship.duration_months}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && internships.length === 0 && (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📋</div>
          <h3 style={styles.emptyTitle}>No Internships Available</h3>
          <p style={styles.emptyText}>
            There are currently no internship opportunities listed. Please check back later.
          </p>
          <button onClick={handleRefresh} style={styles.refreshButtonLarge}>
            Refresh List
          </button>
        </div>
      )}

      {/* Info Section */}
      <div style={styles.infoSection}>
        <h3 style={styles.infoTitle}>ℹ️ About Internship Listings</h3>
        <p style={styles.infoText}>
          This page displays all available internship opportunities registered under the 
          PM Internship Scheme. Companies from various sectors post their internship 
          requirements here. The AI allocation engine will match registered students 
          with these opportunities based on skills, preferences, and other criteria.
        </p>
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
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '15px',
  },
  pageTitle: {
    margin: '0 0 5px 0',
    fontSize: '28px',
  },
  subtitle: {
    margin: '0',
    fontSize: '15px',
    opacity: '0.9',
  },
  refreshButton: {
    padding: '10px 20px',
    fontSize: '14px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  loadingContainer: {
    backgroundColor: 'white',
    padding: '60px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  loader: {
    border: '4px solid #f3f4f6',
    borderTop: '4px solid #3b82f6',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
    margin: '0 auto 20px',
  },
  loadingText: {
    fontSize: '16px',
    color: '#6b7280',
    margin: '0',
  },
  errorBox: {
    backgroundColor: '#fee2e2',
    border: '2px solid #ef4444',
    padding: '30px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  errorText: {
    fontSize: '16px',
    color: '#991b1b',
    margin: '0 0 15px 0',
  },
  retryButton: {
    padding: '10px 24px',
    fontSize: '14px',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  statsBar: {
    backgroundColor: '#eff6ff',
    padding: '15px 20px',
    borderBottom: '2px solid #3b82f6',
  },
  statsText: {
    margin: '0',
    fontSize: '15px',
    color: '#1e3a8a',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeaderRow: {
    backgroundColor: '#1e3a8a',
  },
  tableHeader: {
    padding: '15px',
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
    borderBottom: '2px solid #3b82f6',
  },
  tableRowEven: {
    backgroundColor: '#ffffff',
  },
  tableRowOdd: {
    backgroundColor: '#f9fafb',
  },
  tableCell: {
    padding: '15px',
    fontSize: '14px',
    color: '#374151',
    borderBottom: '1px solid #e5e7eb',
  },
  domainBadge: {
    display: 'inline-block',
    backgroundColor: '#dbeafe',
    color: '#1e40af',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '13px',
    fontWeight: 'bold',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
  },
  skillBadge: {
    display: 'inline-block',
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '4px 10px',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
  },
  locationText: {
    fontSize: '14px',
    color: '#059669',
    fontWeight: '500',
  },
  durationText: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#7c3aed',
  },
  emptyState: {
    backgroundColor: 'white',
    padding: '60px 30px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  emptyIcon: {
    fontSize: '64px',
    marginBottom: '20px',
  },
  emptyTitle: {
    fontSize: '24px',
    color: '#1e3a8a',
    margin: '0 0 10px 0',
  },
  emptyText: {
    fontSize: '15px',
    color: '#6b7280',
    margin: '0 0 25px 0',
    lineHeight: '1.6',
  },
  refreshButtonLarge: {
    padding: '12px 30px',
    fontSize: '15px',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  infoSection: {
    backgroundColor: '#f0fdf4',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #10b981',
  },
  infoTitle: {
    fontSize: '18px',
    color: '#065f46',
    marginTop: '0',
    marginBottom: '10px',
  },
  infoText: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.7',
    margin: '0',
  },
};

export default InternshipList;