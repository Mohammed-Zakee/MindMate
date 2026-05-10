import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import api, { authService } from './services/api';

function App() {
  const [showDashboard, setShowDashboard] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      // Login with the seeded test account
      const res = await authService.login({
        email: 'alex@example.com',
        password: 'password123'
      });
      localStorage.setItem('token', res.data.token);
      setShowDashboard(true);
    } catch (err) {
      console.error('Login failed:', err);
      // Fallback: hit seed if login fails (first time setup)
      try {
        const seedRes = await api.get('/seed/seed');
        localStorage.setItem('token', seedRes.data.token);
        setShowDashboard(true);
      } catch (seedErr) {
        console.error('Seed failed:', seedErr);
      }
    }
  };

  return (
    <>
      {!showDashboard ? (
        <LandingPage onGetStarted={handleLogin} />
      ) : (
        <Dashboard />
      )}
    </>
  );
}

export default App;
