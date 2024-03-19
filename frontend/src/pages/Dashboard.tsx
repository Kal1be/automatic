import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard: React.FC = () => {
  const [userData, setUserData] = useState<{ username: string } | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');
        const response = await axios.get('/dashboard', { headers: { Authorization: `Bearer ${token}` } });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Redirect to login if token is invalid or not found
        window.location.href = '/login';
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData.username}</h2>
          {/* Display user information here */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;