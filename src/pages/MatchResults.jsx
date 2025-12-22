// pages/MatchResults.jsx - AI Allocation Results Display
// SIH25033 - PM Internship Allocation Engine

import React, { useState, useEffect } from 'react';
import { runMatching, getResults } from '../services/api';

function MatchResults() {
  // State management
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [runningMatch, setRunningMatch] = useState(false);
  const [error, setError] = useState(null);
  const [hasRun, setHasRun] = useState(false);

  // Fetch existing results on component mount
  useEffect(() => {
    fetchResults();
  }, []);

  // Fetch allocation results from backend
  const fetchResults = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getResults();
      setResults(data);
      if (data.length > 0) {
        setHasRun(true);
      }
    } catch (err) {
      setError('Failed to fetch results. Please try again.');
      console.error('Error fetching results:', err);
    } finally {
      setLoading(false);
    }
  };

  // Run AI allocation algorithm
  const handleRunAllocation = async () => {
    setRunningMatch(true);
    setError(null);
    try {
      // Call API to run matching algorithm
      await runMatching();
      
      // Show success alert
      alert('AI Allocation completed successfully! Fetching results...');
      
      // Fetch the results after matching
      await fetchResults();
      setHasRun(true);
    } catch (err) {
      const errorMsg = err.response?.data?.detail || 'Failed to run allocation. Please try again.';
      setError(errorMsg);
      alert('Allocation failed: ' + errorMsg);
      console.error('Error running allocation:', err);
    } finally {
      setRunningMatch(false);
    }
  };

  // Calculate statistics
  const totalAllocations = results.length;
  const successfulAllocations = results.filter(r => r.status === 'Allocated').length;
  const pendingAllocations = results.filter(r => r.status === 'Pending').length;
  const avgScore = results.length > 0 
    ? (results.reduce((sum, r) => sum + r.match_score, 0) / results.length).toFixed(2)
    : 0;

  return (
    <div style={styles.container}>
      {/* Page Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.pageTitle}>AI Allocation Results</h1>
          <p style={styles.subtitle}>
            Run the AI matching algorithm and view allocation results
          </p>
        </div>
      </div>

      {/* Explanation Section */}
      <div style={styles.explanationBox}>
        <h3 style={styles.explanationTitle}>🤖 How AI Allocation Works</h3>
        <p style={styles.explanationText}>
          Our intelligent allocation engine analyzes student profiles and internship 
          requirements using advanced machine learning algorithms. The system considers 
          multiple factors including skills match, location preferences, educational 
          background, domain interests, diversity requirements, and company needs to 
          generate optimal matches. Each student-internship pair receives a match score 
          (0-100) indicating compatibility, ensuring transparent and fair allocation.
        </p>
      </div>

      {/* Run Allocation Button */}
      <div style={styles.actionSection}>
        <button
          onClick={handleRunAllocation}
          style={runningMatch ? styles.buttonDisabled : styles.runButton}
          disabled={runningMatch}
        >
          {runningMatch ? '⏳ Running AI Allocation...' : '▶️ Run AI Allocation'}
        </button>
        {hasRun && (
          <button onClick={fetchResults} style={styles.refreshButton}>
            🔄 Refresh Results
          </button>
        )}
      </div>

      {/* Error Display */}
      {error && (
        <div style={styles.errorBox}>
          <p style={styles.errorText}>⚠️ {error}</p>
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div style={styles.loadingContainer}>
          <div style={styles.loader}></div>
          <p style={styles.loadingText}>Loading results...</p>
        </div>
      )}

      {/* Statistics Cards */}
      {!loading && results.length > 0 && (
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>📊</div>
            <div style={styles.statValue}>{totalAllocations}</div>
            <div style={styles.statLabel}>Total Matches</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statIconSuccess}>✅</div>
            <div style={styles.statValue}>{successfulAllocations}</div>
            <div style={styles.statLabel}>Allocated</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statIconPending}>⏳</div>
            <div style={styles.statValue}>{pendingAllocations}</div>
            <div style={styles.statLabel}>Pending</div>
          </div>
          <div style={styles.statCard}>
            <div style={styles.statIconScore}>⭐</div>
            <div style={styles.statValue}>{avgScore}</div>
            <div style={styles.statLabel}>Avg Match Score</div>
          </div>
        </div>
      )}

      {/* Results Table */}
      {!loading && results.length > 0 && (
        <div style={styles.tableContainer}>
          <div style={styles.tableHeader}>
            <h3 style={styles.tableTitle}>Allocation Results</h3>
          </div>

          <div style={styles.tableWrapper}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.tableHeaderRow}>
                  <th style={styles.th}>S.No</th>
                  <th style={styles.th}>Student Name</th>
                  <th style={styles.th}>Internship Details</th>
                  <th style={styles.th}>Company</th>
                  <th style={styles.th}>Match Score</th>
                  <th style={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr
                    key={result.id || index}
                    style={index % 2 === 0 ? styles.tableRowEven : styles.tableRowOdd}
                  >
                    <td style={styles.td}>{index + 1}</td>
                    <td style={styles.td}>
                      <strong>{result.student_name}</strong>
                    </td>
                    <td style={styles.td}>
                      <div>
                        <div style={styles.internshipTitle}>
                          {result.internship_title || result.internship_domain || 'N/A'}
                        </div>
                        <div style={styles.internshipDomain}>
                          {result.internship_domain}
                        </div>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <span style={styles.companyName}>
                        {result.company_name || 'N/A'}
                      </span>
                    </td>
                    <td style={styles.td}>
                      <div style={styles.scoreContainer}>
                        <div
                          style={{
                            ...styles.scoreBar,
                            width: `${result.match_score}%`,
                            backgroundColor: getScoreColor(result.match_score),
                          }}
                        ></div>
                        <span style={styles.scoreText}>
                          {result.match_score.toFixed(1)}
                        </span>
                      </div>
                    </td>
                    <td style={styles.td}>
                      <span
                        style={
                          result.status === 'Allocated'
                            ? styles.statusAllocated
                            : styles.statusPending
                        }
                      >
                        {result.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!loading && results.length === 0 && hasRun && (
        <div style={styles.emptyState}>
          <div style={styles.emptyIcon}>📋</div>
          <h3 style={styles.emptyTitle}>No Results Found</h3>
          <p style={styles.emptyText}>
            No allocation results available. Make sure students and internships are 
            registered before running the allocation.
          </p>
        </div>
      )}

      {/* Initial State */}
      {!loading && results.length === 0 && !hasRun && !runningMatch && (
        <div style={styles.initialState}>
          <div style={styles.initialIcon}>🚀</div>
          <h3 style={styles.initialTitle}>Ready to Run AI Allocation</h3>
          <p style={styles.initialText}>
            Click the "Run AI Allocation" button above to start the intelligent matching 
            process. The system will analyze all registered students and available 
            internships to generate optimal allocations.
          </p>
        </div>
      )}

      {/* Info Section */}
      <div style={styles.infoSection}>
        <h3 style={styles.infoTitle}>ℹ️ Understanding Match Scores</h3>
        <div style={styles.scoreGuide}>
          <div style={styles.scoreGuideItem}>
            <span style={{ ...styles.scoreIndicator, backgroundColor: '#10b981' }}></span>
            <span><strong>80-100:</strong> Excellent Match - High compatibility</span>
          </div>
          <div style={styles.scoreGuideItem}>
            <span style={{ ...styles.scoreIndicator, backgroundColor: '#fbbf24' }}></span>
            <span><strong>60-79:</strong> Good Match - Suitable allocation</span>
          </div>
          <div style={styles.scoreGuideItem}>
            <span style={{ ...styles.scoreIndicator, backgroundColor: '#f97316' }}></span>
            <span><strong>40-59:</strong> Fair Match - Acceptable with considerations</span>
          </div>
          <div style={styles.scoreGuideItem}>
            <span style={{ ...styles.scoreIndicator, backgroundColor: '#ef4444' }}></span>
            <span><strong>Below 40:</strong> Low Match - Requires review</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get score color
const getScoreColor = (score) => {
  if (score >= 80) return '#10b981'; // Green
  if (score >= 60) return '#fbbf24'; // Yellow
  if (score >= 40) return '#f97316'; // Orange
  return '#ef4444'; // Red
};

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
  explanationBox: {
    backgroundColor: '#eff6ff',
    border: '2px solid #3b82f6',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
  },
  explanationTitle: {
    fontSize: '18px',
    color: '#1e3a8a',
    marginTop: '0',
    marginBottom: '10px',
  },
  explanationText: {
    fontSize: '14px',
    color: '#374151',
    lineHeight: '1.7',
    margin: '0',
  },
  actionSection: {
    display: 'flex',
    gap: '15px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  runButton: {
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#10b981',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  buttonDisabled: {
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#9ca3af',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'not-allowed',
  },
  refreshButton: {
    padding: '15px 30px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  errorBox: {
    backgroundColor: '#fee2e2',
    border: '2px solid #ef4444',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  errorText: {
    fontSize: '15px',
    color: '#991b1b',
    margin: '0',
  },
  loadingContainer: {
    backgroundColor: 'white',
    padding: '50px',
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
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '15px',
    marginBottom: '20px',
  },
  statCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    border: '2px solid #e5e7eb',
  },
  statIcon: {
    fontSize: '32px',
    marginBottom: '10px',
  },
  statIconSuccess: {
    fontSize: '32px',
    marginBottom: '10px',
  },
  statIconPending: {
    fontSize: '32px',
    marginBottom: '10px',
  },
  statIconScore: {
    fontSize: '32px',
    marginBottom: '10px',
  },
  statValue: {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: '5px',
  },
  statLabel: {
    fontSize: '14px',
    color: '#6b7280',
  },
  tableContainer: {
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    marginBottom: '20px',
  },
  tableHeader: {
    backgroundColor: '#eff6ff',
    padding: '15px 20px',
    borderBottom: '2px solid #3b82f6',
  },
  tableTitle: {
    margin: '0',
    fontSize: '20px',
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
  th: {
    padding: '15px',
    textAlign: 'left',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '14px',
  },
  tableRowEven: {
    backgroundColor: '#ffffff',
  },
  tableRowOdd: {
    backgroundColor: '#f9fafb',
  },
  td: {
    padding: '15px',
    fontSize: '14px',
    color: '#374151',
    borderBottom: '1px solid #e5e7eb',
  },
  internshipTitle: {
    fontWeight: 'bold',
    marginBottom: '3px',
  },
  internshipDomain: {
    fontSize: '12px',
    color: '#6b7280',
  },
  companyName: {
    color: '#2563eb',
    fontWeight: '500',
  },
  scoreContainer: {
    position: 'relative',
    width: '100px',
  },
  scoreBar: {
    height: '20px',
    borderRadius: '10px',
    transition: 'width 0.3s ease',
  },
  scoreText: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    textAlign: 'center',
    lineHeight: '20px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'white',
  },
  statusAllocated: {
    display: 'inline-block',
    backgroundColor: '#d1fae5',
    color: '#065f46',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: 'bold',
  },
  statusPending: {
    display: 'inline-block',
    backgroundColor: '#fef3c7',
    color: '#92400e',
    padding: '6px 12px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: 'bold',
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
    margin: '0',
    lineHeight: '1.6',
  },
  initialState: {
    backgroundColor: '#f0fdf4',
    border: '2px solid #10b981',
    padding: '60px 30px',
    borderRadius: '10px',
    textAlign: 'center',
  },
  initialIcon: {
    fontSize: '64px',
    marginBottom: '20px',
  },
  initialTitle: {
    fontSize: '24px',
    color: '#065f46',
    margin: '0 0 10px 0',
  },
  initialText: {
    fontSize: '15px',
    color: '#374151',
    margin: '0',
    lineHeight: '1.6',
  },
  infoSection: {
    backgroundColor: '#fef3c7',
    border: '2px solid #fbbf24',
    padding: '20px',
    borderRadius: '10px',
  },
  infoTitle: {
    fontSize: '18px',
    color: '#78350f',
    marginTop: '0',
    marginBottom: '15px',
  },
  scoreGuide: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  scoreGuideItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    fontSize: '14px',
    color: '#374151',
  },
  scoreIndicator: {
    width: '30px',
    height: '20px',
    borderRadius: '4px',
  },
};

export default MatchResults;