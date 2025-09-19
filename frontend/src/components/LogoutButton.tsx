import { useAuth } from '../contexts/AuthContext';

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    // You can add additional logout logic here, like redirecting to the login page
  };

  return (
    <button 
      onClick={handleLogout}
      className="logout-button"
      style={{
        padding: '8px 16px',
        backgroundColor: '#ff4444',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        margin: '10px',
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
