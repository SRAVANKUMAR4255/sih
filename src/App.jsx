// App.jsx - Main Application Component
// SIH25033 - AI-Based Smart Allocation Engine for PM Internship Scheme

import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import About from './pages/About';
import StudentRegister from './pages/StudentRegister';
import InternshipList from './pages/InternshipList';
import MatchResults from './pages/MatchResults';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  // 🔐 Get authentication state
  const { isLoggedIn } = useAuth();
  
  // State for auth page switching (login/signup)
  const [authPage, setAuthPage] = useState('login');
  
  // State for navigation (after login)
  const [currentPage, setCurrentPage] = useState('home');

  // Render the selected page component
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'register':
        return <StudentRegister />;
      case 'internships':
        return <InternshipList />;
      case 'results':
        return <MatchResults />;
      default:
        return <Home />;
    }
  };

  // 🔒 IF NOT LOGGED IN → SHOW LOGIN OR SIGNUP PAGE
  if (!isLoggedIn) {
    return authPage === 'login' ? (
      <Login onSwitchToSignup={() => setAuthPage('signup')} />
    ) : (
      <Signup onSwitchToLogin={() => setAuthPage('login')} />
    );
  }

  // ✅ IF LOGGED IN → SHOW FULL APPLICATION
  return (
    <div style={styles.container}>
      {/* App Header */}
      <header style={styles.header}>
        <h1 style={styles.title}>
          AI-Based Smart Allocation Engine for PM Internship Scheme
        </h1>
        <p style={styles.subtitle}>
          Smart India Hackathon 2025 | Problem ID: SIH25033
        </p>
      </header>

      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <button
          style={currentPage === 'home' ? styles.navButtonActive : styles.navButton}
          onClick={() => setCurrentPage('home')}
        >
          Home
        </button>
        <button
          style={currentPage === 'about' ? styles.navButtonActive : styles.navButton}
          onClick={() => setCurrentPage('about')}
        >
          About
        </button>
        <button
          style={currentPage === 'register' ? styles.navButtonActive : styles.navButton}
          onClick={() => setCurrentPage('register')}
        >
          Student Register
        </button>
        <button
          style={currentPage === 'internships' ? styles.navButtonActive : styles.navButton}
          onClick={() => setCurrentPage('internships')}
        >
          Internships
        </button>
        <button
          style={currentPage === 'results' ? styles.navButtonActive : styles.navButton}
          onClick={() => setCurrentPage('results')}
        >
          Match Results
        </button>
      </nav>

      {/* Page Content */}
      <main style={styles.main}>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 SIH Team | AI-Powered Internship Allocation System</p>
      </footer>
    </div>
  );
}

// Inline CSS Styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    margin: '0',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: '5px 0 0 0',
    fontSize: '14px',
  },
  navbar: {
    backgroundColor: '#2563eb',
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    gap: '10px',
    flexWrap: 'wrap',
  },
  navButton: {
    backgroundColor: '#3b82f6',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
  navButtonActive: {
    backgroundColor: '#1e40af',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  main: {
    flex: 1,
    padding: '20px',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  footer: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    textAlign: 'center',
    padding: '15px',
    marginTop: 'auto',
  },
};

export default App;