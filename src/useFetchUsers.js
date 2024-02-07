import { useState, useEffect } from 'react';

const useFetchUsers = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();

    // Cleanup function
    return () => {
      // Any cleanup code goes here
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return { loading, error, users };
};

export default useFetchUsers;
