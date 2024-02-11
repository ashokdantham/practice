import React from 'react';
import useFetchUsers from './useFetchUsers';

const UserList = () => {
  const { loading, error, users } = useFetchUsers();  // loading: false, error: null, users: [] 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>Name: {user.name} and Email: {user.email} </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
