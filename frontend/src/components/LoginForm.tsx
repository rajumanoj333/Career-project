import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { login, register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    try {
      if (isRegister) {
        await register(email, password, fullName);
        setMessage('Registration successful! Please log in.');
        setIsRegister(false);
      } else {
        await login(email, password);
      }
    } catch (err: any) {
      setError(err.response?.data?.detail || 'An error occurred.');
    }
  };

  return (
    <div style={{ 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '2rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        {isRegister ? 'Register' : 'Login'}
      </h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {isRegister && (
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
              Full Name
            </label>
            <input 
              type="text" 
              value={fullName} 
              onChange={(e) => setFullName(e.target.value)} 
              required
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #dee2e6',
                borderRadius: '4px',
                fontSize: '1rem'
              }}
            />
          </div>
        )}
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Email
          </label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>
            Password
          </label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              fontSize: '1rem'
            }}
          />
        </div>
        
        <button 
          type="submit"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#535bf2';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#646cff';
          }}
        >
          {isRegister ? 'Register' : 'Login'}
        </button>
      </form>
      
      {error && (
        <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
          {error}
        </p>
      )}
      
      {message && (
        <p style={{ color: 'green', marginTop: '1rem', textAlign: 'center' }}>
          {message}
        </p>
      )}
      
      <button 
        onClick={() => setIsRegister(!isRegister)}
        style={{
          width: '100%',
          marginTop: '1rem',
          padding: '0.5rem',
          backgroundColor: 'transparent',
          color: '#646cff',
          border: '1px solid #646cff',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '0.9rem',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#646cff';
          e.currentTarget.style.color = 'white';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#646cff';
        }}
      >
        {isRegister ? 'Already have an account? Login' : 'Need an account? Register'}
      </button>
    </div>
  );
};

export default LoginForm;