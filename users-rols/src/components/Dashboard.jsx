import { useState, useEffect } from 'react';
import axios from 'axios';

export function Dashboard ()  {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/users', {
        headers: { Authorization: token },
      });
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>User Management</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};
