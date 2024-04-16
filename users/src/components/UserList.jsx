import React from 'react';
import './UserList.css';

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div className="user-list">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <div className="user-details">
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
              <p>Company: {user.company.name}</p>
            </div>
            <div className="user-actions">
              <button onClick={() => editUser(user)}>Edit</button>
              <button onClick={() => deleteUser(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
