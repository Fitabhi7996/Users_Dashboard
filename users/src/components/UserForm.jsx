import React, { useState, useEffect } from 'react';
import './UserForm.css'
const UserForm = ({ addUser, updateUser, editingUser }) => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    company: { name: '' }
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    }
  }, [editingUser]);

  const handleChange = e => {
    const value = e.target.name === 'company' ? { name: e.target.value } : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setError('Name and email are required');
      return;
    }
    if (!isValidEmail(formData.email.trim())) {
      setError('Please enter a valid email address');
      return;
    }
    if (editingUser) {
      updateUser(formData);
    } else {
      addUser(formData);
    }
    setFormData({
      id: '',
      name: '',
      username: '',
      email: '',
      company: { name: '' }
    });
    setError('');
  };

  const isValidEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="user-form">
      <h2>{editingUser ? 'Edit User' : 'Add User'}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID:</label>
          <input type="number" id="id" name="id" value={formData.id} onChange={handleChange} readOnly={editingUser} />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="company">Company:</label>
          <input type="text" id="company" name="company" value={formData.company.name} onChange={handleChange} />
        </div>
        <button type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
      </form>
    </div>
  );
};

export default UserForm;
