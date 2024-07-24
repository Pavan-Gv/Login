import React from 'react';
import { useNavigate } from 'react-router-dom';

const dashboard = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  if (!user) {
    return <navigate to="/login" />;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <button onClick={handleLogout}>Back</button>
    </div>
  );
};

export default dashboard;
