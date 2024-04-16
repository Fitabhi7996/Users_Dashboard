// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching users. Please try again later.');
      console.error('Error fetching users:', error);
    }
  };

  const addUser = async newUser => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
      setUsers(prevUsers => [...prevUsers, response.data]);
      setError(null);
    } catch (error) {
      setError('Error adding user. Please try again later.');
      console.error('Error adding user:', error);
    }
  };

  const editUser = user => {
    setEditingUser(user);
  };

  const updateUser = updatedUser => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser)
      .then(response => {
        setUsers(prevUsers =>
          prevUsers.map(user => (user.id === updatedUser.id ? response.data : user))
        );
        setEditingUser(null);
      })
      .catch(error => {
        console.error('Error updating user:', error);
      });
  };

  const deleteUser = userId => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
      })
      .catch(error => {
        console.error('Error deleting user:', error);
      });
  };

  return (
    <div className="app">
      <h1>User Management System</h1>
      {error && <p className="error">{error}</p>}
      <div className="container">
        <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
        <UserForm addUser={addUser} updateUser={updateUser} editingUser={editingUser} />
      </div>
    </div>
  );
}

export default App;
