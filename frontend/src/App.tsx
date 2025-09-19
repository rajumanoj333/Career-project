import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LogoutButton from './components/LogoutButton';
import LoginForm from './components/LoginForm';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import type { CSSProperties } from 'react';

const actionButtonStyle: CSSProperties = {
  padding: '0.75rem 1.5rem',
  backgroundColor: '#f1f3f5',
  border: '1px solid #dee2e6',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  fontWeight: '500',
  transition: 'all 0.2s',
};

const actionButtonHoverStyle: CSSProperties = {
  ...actionButtonStyle,
  backgroundColor: '#e9ecef',
  borderColor: '#ced4da'
};

const AppContent: React.FC = () => {
  const [count, setCount] = useState(0);
  const { user } = useAuth();

  if (!user) {
    return <LoginForm />;
  }

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '2rem'
      }}>
        <div>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <LogoutButton />
      </div>
      
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Career Project Dashboard</h1>
      
      <div style={{
        backgroundColor: '#f8f9fa',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{ marginTop: 0 }}>Welcome to your dashboard!</h2>
        <p>You're logged in and ready to explore the Career Project features.</p>
        
        <div style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '6px',
          marginTop: '1.5rem',
          border: '1px solid #e9ecef'
        }}>
          <h3>Quick Actions</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1rem'
          }}>
            <button 
              style={actionButtonStyle}
              onMouseEnter={e => {
                const target = e.target as HTMLElement;
                Object.assign(target.style, actionButtonHoverStyle);
              }}
              onMouseLeave={e => {
                const target = e.target as HTMLElement;
                Object.assign(target.style, actionButtonStyle);
              }}
            >
              View Profile
            </button>
            <button 
              style={actionButtonStyle}
              onMouseEnter={e => {
                const target = e.target as HTMLElement;
                Object.assign(target.style, actionButtonHoverStyle);
              }}
              onMouseLeave={e => {
                const target = e.target as HTMLElement;
                Object.assign(target.style, actionButtonStyle);
              }}
            >
              Explore Jobs
            </button>
            <button 
              style={actionButtonStyle}
              onMouseEnter={e => {
                const target = e.target as HTMLElement;
                Object.assign(target.style, actionButtonHoverStyle);
              }}
              onMouseLeave={e => {
                const target = e.target as HTMLElement;
                Object.assign(target.style, actionButtonStyle);
              }}
            >
              My Applications
            </button>
          </div>
        </div>
        
        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e9ecef'
        }}>
          <p>Counter example (just for demo):</p>
          <button 
            onClick={() => setCount((count) => count + 1)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: '#646cff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              marginTop: '0.5rem',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={e => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = '#535bf2';
            }}
            onMouseLeave={e => {
              const target = e.target as HTMLElement;
              target.style.backgroundColor = '#646cff';
            }}
          >
            Count is {count}
          </button>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
